<script setup>
import JobListing from "./JobListing.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
const jobs = ref([]);
defineProps({
  show_btn: {
    type: Boolean,
    default: false,
  },
  limit: Number,
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/jobs");
    jobs.value = response.data;
  } catch {
    console.log("error fetching jobs");
  }
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id">
          <JobListing :job="job" />
        </div>
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6" v-if="show_btn">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>

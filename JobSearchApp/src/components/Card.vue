<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
  p: {
    type: String,
    default: "p-6",
  },
  round: {
    type: String,
    default: "round-lg",
  },
  shadow: {
    type: String,
    default: "shasow-md",
  },
});
</script>

<template>
  <div :class="`${bg} ${p} ${round} ${shadow}`">
    <slot></slot>
  </div>
</template>

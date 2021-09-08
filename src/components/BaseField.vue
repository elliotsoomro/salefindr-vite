<template>
  <div class="mb-3 last:mb-0">
    <label
      v-if="label"
      class="block mb-3 text-xs uppercase"
    >
      {{ label }}
    </label>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
    label: {
      type: String,
      default: null
    }
  })
</script>

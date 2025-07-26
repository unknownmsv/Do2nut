<template>
  <button 
    @click="toggleTheme"
    class="theme-toggle p-2 rounded-full bg-gray-200 dark:bg-gray-700"
  >
    <span v-if="isDark">🌞</span>
    <span v-else>🌙</span>
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const isDark = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (process.client) {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}

onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    isDark.value = savedTheme === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  }
})
</script>

<style scoped>
.theme-toggle {
  transition: all 0.3s ease;
}
</style>
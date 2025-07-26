<template>
  <div class="glass-card p-6 rounded-xl backdrop-blur-md">
    <h2 class="text-2xl font-bold mb-2">{{ article.subject }}</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ truncate(article.prompt, 100) }}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span v-for="tag in article.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
    <NuxtLink 
      :to="`/${article.id}`"
      class="read-more-btn"
    >
      مطالعه مقاله
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

const truncate = (text, length) => {
  return text.length > length ? text.substring(0, length) + '...' : text
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.tag {
  @apply px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100;
}

.read-more-btn {
  @apply inline-block px-4 py-2 bg-blue-500 text-white rounded-lg 
         hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700;
}
</style>
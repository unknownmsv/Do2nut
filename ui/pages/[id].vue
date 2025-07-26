<template>
  <div>
    <StarBackground v-if="isDark" />
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <div class="flex justify-between items-center mb-8">
        <NuxtLink to="/" class="text-blue-500 hover:underline">
          ← بازگشت به لیست مقالات
        </NuxtLink>
        <ThemeToggle v-model="isDark" />
      </div>
      
      <div class="glass-card p-8 rounded-xl">
        <h1 class="text-3xl font-bold mb-4">{{ article.subject }}</h1>
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tag in article.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <div class="prose dark:prose-invert max-w-none">
          {{ article.prompt }}
        </div>
        <div class="mt-8 text-sm text-gray-500">
          آخرین ویرایش: {{ formatDate(article.updated_at) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: article } = await useFetch(`/articles/${route.params.id}`, {
  baseURL: useRuntimeConfig().public.apiBase
})

const isDark = ref(false)

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('fa-IR')
}
</script>
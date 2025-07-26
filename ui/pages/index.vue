<template>
  <div>
    <StarBackground v-if="isDark" />
    <div class="container mx-auto px-4 py-12">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">دانشنامه DonutMSV</h1>
        <ThemeToggle v-model="isDark" />
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticleCard 
          v-for="article in articles" 
          :key="article.id" 
          :article="article" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: articles } = await useFetch('/articles', {
  baseURL: useRuntimeConfig().public.apiBase
})

const isDark = ref(false)
</script>
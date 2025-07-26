<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <div 
      v-for="(star, index) in stars" 
      :key="index"
      class="absolute bg-white rounded-full"
      :style="{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: star.opacity,
        animation: `twinkle ${star.duration}s infinite alternate`
      }"
    ></div>
    
    <div 
      v-for="(meteor, index) in meteors" 
      :key="'meteor-'+index"
      class="absolute bg-gradient-to-r from-blue-400 to-transparent"
      :style="{
        left: `${meteor.x}px`,
        top: `${meteor.y}px`,
        width: `${meteor.length}px`,
        height: '1px',
        transform: `rotate(${meteor.angle}deg)`,
        animation: `shooting ${meteor.duration}s linear infinite`,
        'animation-delay': `${meteor.delay}s`
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stars = ref([])
const meteors = ref([])

const generateStars = () => {
  const count = 100
  stars.value = Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    duration: Math.random() * 5 + 3
  }))
}

const generateMeteors = () => {
  const count = 5
  meteors.value = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    length: Math.random() * 100 + 50,
    angle: Math.random() * 45 - 22.5,
    duration: Math.random() * 3 + 1,
    delay: Math.random() * 5
  }))
}

onMounted(() => {
  generateStars()
  generateMeteors()
})
</script>

<style scoped>
@keyframes twinkle {
  0% { opacity: 0.2; }
  100% { opacity: 1; }
}

@keyframes shooting {
  0% { 
    transform: translateX(0) translateY(0) rotate(var(--angle));
    opacity: 1;
  }
  100% { 
    transform: translateX(1000px) translateY(500px) rotate(var(--angle));
    opacity: 0;
  }
}
</style>
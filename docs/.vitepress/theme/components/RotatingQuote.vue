<script lang="ts" setup>
import { ref } from 'vue'
import { getQuotesArrayRand } from '../../data'

const text = ref(getQuotesArrayRand())
let startTime: number
function toggleText(timestamp: DOMHighResTimeStamp) {
  if (!startTime)
    startTime = timestamp
  if (timestamp - startTime >= 2000) {
    startTime = timestamp
    text.value = getQuotesArrayRand()
  }
  requestAnimationFrame(toggleText)
}

requestAnimationFrame(toggleText)
</script>

<template>
  <div style="color: var(--vp-c-text-2)" text-center text-18px leading-28px sm:text-20px sm:leading-32px md:text-24px md:leading-36px>
    {{ text }}
  </div>
</template>

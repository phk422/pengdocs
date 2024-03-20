<script lang="ts" setup>
import { onMounted } from 'vue'
import { sampleSize } from 'lodash-es'
import { QuotesArray } from '../../data'

onMounted(() => {
  import('txtanime.js').then(({ TxtAnime }) => {
    void new TxtAnime('.txt', {
      effect: 'txt-an-9',
      text: sampleSize(QuotesArray, Math.floor(QuotesArray.length / 4)),
      duration: 0.8,
    })
  })
})
</script>

<template>
  <div class="txt" style="color: var(--vp-c-text-2)" h-25 text-center text-18px leading-28px sm:text-20px sm:leading-32px md:text-24px md:leading-36px />
</template>

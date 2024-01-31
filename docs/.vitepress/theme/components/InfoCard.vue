<template>
  <div flex items-center flex-col pt10>
    <div grid="~ sm:cols-2 md:cols-3 lg:cols-4 gap-x-3 gap-y-10 items-center">
      <div
        v-for="i in 10" :key="i"
        bg-hex-fff w80 h40 rounded-2 flex items-center justify-center shadow
        hover:cursor-pointer hover:transform hover:scale-104
        ease-linear duration-120
      >
        <i-mdi-account-box text-2 bg-red />
        <iSvgSpinnersPulse />
        <iTwemojiBabyBottle text-60px />
      </div>
    </div>
  </div>
</template>

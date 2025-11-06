<script setup>
defineProps({
  text: {
    type: String,
    default: 'Click Me'
  },
  bgColor: {
    type: String,
    default: 'bg-neutral-600'
  },
  hoverColor: {
    type: String,
    default: 'hover:bg-neutral-400'
  }
})
</script>

<template>
  <button
    :class="[
      'relative flex items-center gap-1 px-9 py-4 border-4 border-white text-base rounded-xl font-semibold text-white cursor-pointer overflow-hidden transition-all duration-600 ease-custom hover:rounded-3xl group',
      bgColor,
      hoverColor
    ]"
  >
    <svg
      viewBox="0 0 24 24"
      class="absolute w-6 fill-white z-9 transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-[#212121]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
      />
    </svg>
    <span
      class="relative z-1 transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3"
    >{{ text }}</span>
    <span
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"
    />
    <svg
      viewBox="0 0 24 24"
      class="absolute w-6 fill-white z-9 transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-[#212121]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
      />
    </svg>
  </button>
</template>

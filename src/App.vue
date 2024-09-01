<script setup>
import mainHeader from "./components/mainHeader.vue";
</script>

<template>
  <main>
    <mainHeader></mainHeader>
    <RouterView />
  </main>
</template>

<style lang="scss">
:root {
  --body-background: #e9e8e8;
  --color-background: white;
  --color-text: #111517;
  --shadow-color: #c7c6c6;
}
:root.dark-theme {
  --body-background: #202c37;
  --color-background: #2b3945;
  --color-text: white;
  --shadow-color: #2c3b49;
}
body {
  background-color: var(--body-background);
}
.container {
  $maxMobile: 767px;
  $minSmall: 768px;
  $minMedium: 992px;
  $minLarge: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: $maxMobile) {
    min-width: 300px;
  }
  @media (min-width: $minSmall) {
    width: 720px;
  }
  @media (min-width: $minMedium) {
    width: 960px;
  }
  @media (min-width: $minLarge) {
    width: 1140px;
  }
}
</style>

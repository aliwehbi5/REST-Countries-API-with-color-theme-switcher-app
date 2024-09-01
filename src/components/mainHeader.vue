<template>
  <header>
    <div class="container">
      <h1>Where in the world?</h1>
      <span @click="changeTheme"
        ><i class="fa-solid fa-moon"></i>dark mode</span
      >
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 20px 0;
  background-color: var(--color-background);
}
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h1 {
  color: var(--color-text);
  font-weight: bold;
}
header span {
  display: flex;
  gap: 15px;
  align-items: center;
  color: var(--color-text);
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  transition: 0.3s;
  border-radius: 8px;
  cursor: pointer;
}
@media (max-width: 768px) {
  header h1 {
    font-size: 18px;
  }
  header span {
    font-size: 14px;
  }
}
header span:hover {
  background-color: var(--body-background);
}
header span i {
  font-size: 22px;
}
</style>

<script>
export default {
  methods: {
    changeTheme() {
      document.documentElement.classList.toggle("dark-theme");
      const isDarkTheme =
        document.documentElement.classList.contains("dark-theme");
      localStorage.setItem("themePreference", isDarkTheme ? "dark" : "light");
    },
  },
  mounted() {
    const themePreference = localStorage.getItem("themePreference");

    if (themePreference === "dark") {
      document.documentElement.classList.add("dark-theme");
    }
  },
};
</script>

<script setup>
import countryPreview from "@/components/countryPreview.vue";
</script>
<template>
  <main>
    <form class="container">
      <div class="inputField">
        <input
          type="search"
          placeholder="Search for a country..."
          value=""
          @input="searchThroughCountries($event.target.value)"
        /><i class="fas fa-search search-toggler"></i>
      </div>
      <select
        id="region"
        name="region"
        @change="changeRegion($event.target.value)"
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
    <section class="container">
      <div class="countries">
        <countryPreview
          v-for="item in apiData"
          :key="item.id"
          :name="item.name.official"
          :sign="item.cca2"
          :population="item.population"
          :region="item.region"
          :capital="item.capital"
          :data-name="item.name.common.toLowerCase()"
          :data-region="item.region.toLowerCase()"
          @click="navigateToOtherPage(item.name.official.toLowerCase())"
        ></countryPreview>
      </div>
    </section>
  </main>
</template>

<style scoped>
section .countries {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
  padding: 50px 0;
}
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  flex-wrap: wrap;
  gap: 20px;
}
form select {
  font-size: 20px;
  padding: 7px;
  background-color: var(--color-background);
  border: none;
  color: var(--color-text);
  border-radius: 8px;
  min-width: 160px;
}
form .inputField {
  position: relative;
}
form .inputField input {
  padding: 10px;
  padding-left: 40px;
  min-width: 260px;
  border-radius: 8px;
  border: none;
  background-color: var(--color-background);
  color: var(--color-text);
  outline: none;
  box-shadow: 2px -2px 4px var(--shadow-color), -2px 2px 4px var(--shadow-color);
}
form .inputField .search-toggler {
  position: absolute;
  color: var(--color-text);
  font-size: 18px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
@media (max-width: 499px) {
  form .inputField,
  .inputField input,
  form select {
    width: 100%;
  }
}
.d-none {
  display: none;
}
</style>

<style lang="scss">
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

<script>
export default {
  data() {
    return {
      apiData: [],
    };
  },
  mounted() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((country) => {
          if (Array.isArray(country.capital)) {
            country.capital = country.capital.join(", ");
          }
        });
        this.apiData = data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    navigateToOtherPage(name) {
      this.$router.push({ name: "countryView", params: { countryName: name } });
    },
    searchThroughCountries(text) {
      const countries = document.querySelectorAll(".country");
      countries.forEach((country) => {
        if (text !== "") {
          if (!country.dataset.name.startsWith(text)) {
            country.classList.add("d-none");
          } else {
            if (country.classList.contains("d-none")) {
              country.classList.remove("d-none");
            }
          }
        } else {
          if (
            document.querySelector("select").value.toLocaleLowerCase() !== "all"
          ) {
            this.changeRegion(
              document.querySelector("select").value.toLocaleLowerCase()
            );
          } else {
            country.classList.remove("d-none");
          }
        }
      });
    },
    changeRegion(region) {
      const countries = document.querySelectorAll(".country");
      countries.forEach((country) => {
        if (
          region.toLowerCase() === "all" ||
          country.dataset.region === region.toLowerCase()
        ) {
          country.classList.remove("d-none");
        } else {
          country.classList.add("d-none");
        }
      });
    },
  },
};
</script>

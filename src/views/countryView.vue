<template>
  <main class="container">
    <div class="back-btn">
      <router-link to="/"
        ><i class="fa-solid fa-arrow-left"></i><span>Back</span></router-link
      >
    </div>
    <div class="row">
      <div class="flag">
        <img :src="flag" alt="" />
      </div>
      <div class="content">
        <h1>{{ $route.params.countryName }}</h1>
        <div class="lists">
          <ul class="first-list">
            <li>Native Name: {{ nativeName }}</li>
            <li>Population: {{ formatNumber(population) }}</li>
            <li>Region: {{ region }}</li>
            <li>Sub Region: {{ subregion }}</li>
            <li>Capital: {{ capital }}</li>
          </ul>
          <ul class="second-list">
            <li>Top Level Domain: {{ domain }}</li>
            <li>Currencies: {{ currencies }}</li>
            <li>Languages: {{ languages }}</li>
            <li>Continents: {{ continents }}</li>
            <li>Status: {{ status }}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-top: 50px;
  padding-bottom: 50px;
}
main .back-btn {
  padding: 6px 24px;
  background-color: var(--color-background);
  box-shadow: 2px -2px 4px var(--shadow-color), -2px 2px 4px var(--shadow-color);
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: bold;
  transition: 0.5s;
}
main .back-btn:hover {
  transform: scale(1.1);
}
main .back-btn a {
  color: var(--color-text);
}
main .back-btn span {
  margin-left: 10px;
}
main .row {
  display: flex;
  align-items: center;
  gap: 70px;
}
main .row .flag {
  width: 75%;
}
main .row .content {
  width: 100%;
}
main h1 {
  margin-bottom: 15px;
  color: var(--color-text);
  text-transform: capitalize;
}
ul {
  color: var(--color-text);
  font-size: 17px;
}
.lists {
  display: flex;
  gap: 50px;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .row .flag {
    width: 100%;
    text-align: center;
  }
  main .row .content {
    width: auto;
  }
  .row .lists {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>

<script>
export default {
  name: "countryView",
  data() {
    return {
      flag: String,
      capital: [String, Array],
      region: String,
      subregion: String,
      nativeName: String,
      domain: String,
      currencies: String,
      languages: String,
      continents: String,
      status: String,
      population: Number,
    };
  },
  mounted() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((country) => {
          if (
            country.name.official.toLowerCase() ==
            this.$route.params.countryName
          ) {
            this.region = country.region;
            if (Array.isArray(country.capital)) {
              country.capital = country.capital.join(", ");
            }
            this.capital = country.capital;
            this.subregion = country.subregion;
            this.population = country.population;
            this.flag = country.flags.png;
            this.nativeName = Object.values(country.name.nativeName)[0].common;
            this.domain = country.flag;
            this.currencies =
              Object.values(country.currencies)[0].name +
              " (" +
              Object.values(country.currencies)[0].symbol +
              ")";
            this.languages = Object.values(country.languages).join(", ");
            this.continents = country.continents[0];
            this.status = country.status;
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

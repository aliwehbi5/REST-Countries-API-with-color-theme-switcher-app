<template>
  <div class="country">
    <div class="img">
      <img
        :src="'https://flagcdn.com/w320/' + sign.toLowerCase() + '.png'"
        alt="Country Flag"
      />
    </div>
    <div class="content">
      <h2 class="country-name">{{ name }}</h2>
      <p class="population">
        <span>Population: </span>{{ formatNumber(population) }}
      </p>
      <p class="region"><span>Region: </span> {{ region }}</p>
      <p class="capital"><span>Capital: </span> {{ displayCapital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    sign: String,
    capital: [String, Array],
    region: String,
    population: Number,
  },
  methods: {
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  computed: {
    displayCapital() {
      if (Array.isArray(this.capital)) {
        return this.capital.join(", ");
      }
      return this.capital;
    },
  },
};
</script>

<style scoped>
.country {
  background-color: var(--color-background);
  border-radius: 8px;
  overflow: hidden;
  transition: 0.8s;
  cursor: pointer;
}
@media (min-width: 769px) {
  .country:hover {
    transform: scale(1.1);
  }
}
.content {
  padding: 15px;
  color: var(--color-text);
}
.content h2 {
  font-weight: bold;
  margin-bottom: 15px;
}
.content p span {
  font-weight: 700;
}
@media (max-width: 768px) {
  .country img {
    width: 100%;
    object-fit: cover;
  }
}
</style>

<template>
  <div class="container">
    <span>{{ balance }}</span>
    <div>
      <span>Current Location (from)</span>
      <select>
        <option v-for="option in this.stations" :key="option.name"
          >{{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },

    data() {
      return {
        balance: 'Fetching',
        stations: []
      };
    },
    beforeCreate() {
      fetch('/api/v1/station')
        .then(res => res.json())
        .then(res => {
          this.stations = res.data;
        });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    border: 1px black solid;
    margin: auto;
    width: 33%;
    height: 30em;
  }
</style>

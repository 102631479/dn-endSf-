<template>
  <div>
    <h1>welcome!!!</h1>
  </div>
</template>

<script>

export default {
  created() {
    console.log(this.$store.state.name, "sss");
  },
  methods: {
 
  },
};
</script>

<style scoped>
h1 {
  margin: 0 auto;
  line-height: 600px;
  text-align: center;
}
</style>

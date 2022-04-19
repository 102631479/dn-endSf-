<template>
  <div>
    <el-page-header @back="goBack" :content="headerName"> </el-page-header>
  </div>
</template>

<script>
export default {
  name: "headerName",
  props: {
    headerName: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>
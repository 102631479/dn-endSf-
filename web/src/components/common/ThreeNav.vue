<template>
    <ul class="ThreeNav">
      <el-menu-item v-for="(threeItem,i) in TwoSubs" :key="i" :index="threeItem.index">
        {{ threeItem.title }}</el-menu-item>
    </ul>
</template>

<script>
  export default {
    props: ['TwoSubs'],
    data() {
      return {

      };
    },

  };
</script>

<style scoped>
  .ThreeNav {
    position: fixed;
    width: 210px;
    height: 100vh;
    left: 250px;
    top: 70px;
    z-index: 1000;
    background-color: #e5e9f2;
  }
  .el-menu-item{
    background-color: #e5e9f2!important;
    color: #5f5f5f!important;
  }
  .el-menu-item:hover{
    background-color: #eff2f7!important;
  }
  .el-menu-item.is-active{
    background-color: #d3dce6!important;
    color: #202020!important;
  }

</style>
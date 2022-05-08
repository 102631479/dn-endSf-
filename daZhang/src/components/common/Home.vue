<template>
  <div>
    <v-head :showAll="collapse" ref="headChild"></v-head>
    <v-sidebar
      @ThreeNavShow="ThreeNavShow"
      :ThreeNavIsShow="ThreeNavIsShow"
      @showAll="showAll"
    ></v-sidebar>
    <div
      class="content-box"
      :class="{ 'content-collapse': collapse }"
      id="content-box"
    >
      <!-- 侧边导航栏目 -->
      <!-- <v-tags></v-tags> -->


      <div class="content">
        <div
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <keep-alive :include="tagsList">
            <transition name="fade-transform" mode="out-in">
              <router-view />
            </transition>
          </keep-alive>
        </div>

        <!-- <transition name="fade-transform" mode="out-in">
          <keep-alive :include="tagsList">
            <div class="routerTable">
              <router-view></router-view>
            </div>
          </keep-alive>
        </transition> -->

        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";
import bus from "./bus";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false,
      ThreeNavIsShow: false,
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags,
  },
  created() {
    // console.log(this);
    bus.$on("collapse-content", (msg) => {
      console.log(msg, "msg");
      this.collapse = msg;
    });
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", (msg) => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  },
  methods: {
    ThreeNavShow() {
      var contentObj = document.getElementById("content-box");
      this.ThreeNavIsShow = !this.ThreeNavIsShow;
      if (this.ThreeNavIsShow) {
        contentObj.style.left = "460px";
      } else {
        contentObj.style.left = "250px";
      }
      console.log("ThreeNavIsShow:" + this.ThreeNavIsShow);
    },
    showAll(msg) {
      //   return;
      // --------------------------bug----------------------
      var contentObj = document.getElementById("content-box");
      this.$refs.headChild.collapseChage();
      contentObj.style.left = "460px";
      this.ThreeNavIsShow = true;
      this.collapse = msg;
      console.log(this.ThreeNavIsShow);
      //----------------------------bug---------------------
    },
  },
};
</script>
<style scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.4s;
}

.fade-transform-enter {
  opacity: 0;
  /* transform: translateX(-10px); */
  transform: translateY(-20px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}
.content-box.content-collapse {
  left: 65px !important;
}

.el-menu--vertical > .el-menu.el-menu--popup {
  background-color: rgba(0, 0, 0, 0) !important;
  margin: 0;
  box-shadow: none !important;
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
.routerTable {
  margin: 10px;
}
</style>

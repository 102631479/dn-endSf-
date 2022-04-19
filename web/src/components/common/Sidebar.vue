<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="rgba(63, 63, 63, 1)"
      text-color="#ffffff"
      active-text-color="#FF0000"
      unique-opened
      router
    >
      <template v-for="item in items">
        <!-- {{ $powersReturn(item.powerShow) }} -->
        <template v-if="item.subs && $powersReturn(item.powerShow)">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title" v-if="$powersReturn(item.powerShow)">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>

            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <div slot="title" @click="dosome()">{{ subItem.title }}</div>
                <transition name="left">
                  <ThreeNav
                    :TwoSubs="subItem.subs"
                    v-show="ThreeNavIsShow"
                  ></ThreeNav>
                </transition>
              </el-submenu>
              <el-menu-item
                v-if="!subItem.subs && $powersReturn(subItem.powerShow)"
                :index="subItem.index"
                :key="subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>

        <template v-else>
          <el-menu-item
            v-if="$powersReturn(item.powerShow)"
            :index="item.index"
            :key="item.index"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
import routerData from "../common/routerData";

// 三级导航
import ThreeNav from "./ThreeNav.vue";
export default {
  components: {
    ThreeNav,
  },
  props: ["ThreeNavIsShow"],
  data() {
    return {
      collapse: false,
      items: routerData(),
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
  methods: {
    goPage(data) {
      this.$router.push("/" + data);
    },
    dosome() {
      console.log(this.collapse);
      if (this.collapse) {
        this.collapse = false;
        this.$emit("showAll", this.collapse);
      } else {
        this.$emit("ThreeNavShow");
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 230px;
}

.sidebar > ul {
  height: 100%;
}

.left-enter,
.left-leave-to {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
.left-leave,
.left-enter-to {
  transform: translate3d(0, 0, 0);
}
.left-enter-active,
.left-leave-active {
  transition: opacity 0.5s;
}
</style>

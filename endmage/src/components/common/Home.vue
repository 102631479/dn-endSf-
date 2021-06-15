<template>
    <div class="wrapper">
        <v-head :showAll="collapse" ref="headChild"></v-head>
        <v-sidebar @ThreeNavShow="ThreeNavShow" :ThreeNavIsShow="ThreeNavIsShow" @showAll="showAll"></v-sidebar>
        <div class="content-box" :class="{ 'content-collapse': collapse }" id="content-box">
            <!-- <v-tags></v-tags> -->
            <div class="content">

                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
 
                
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
        <Rightview></Rightview>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
import Rightview from './Rightview';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
            ThreeNavIsShow: false
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags,
        Rightview
    },
    created() {
        // console.log(this);
        bus.$on('collapse-content', msg => {
            console.log(msg,'msg');
            this.collapse = msg;
        });
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    },
    methods: {
        ThreeNavShow() {
            var contentObj = document.getElementById('content-box');
            this.ThreeNavIsShow = !this.ThreeNavIsShow;
            if (this.ThreeNavIsShow) {
                contentObj.style.left = '460px';
            } else {
                contentObj.style.left = '250px';
            }
            console.log('ThreeNavIsShow:' + this.ThreeNavIsShow);
        },
        showAll(msg) {
            // --------------------------bug----------------------
            var contentObj = document.getElementById('content-box');
            this.$refs.headChild.collapseChage();
            contentObj.style.left = '460px';
            this.ThreeNavIsShow = true;
            this.collapse = msg;
            console.log(this.ThreeNavIsShow);
            //----------------------------bug---------------------
        }
    }
};
</script>
<style>
.content-box.content-collapse {
    left: 65px !important;
}

.el-menu--vertical > .el-menu.el-menu--popup {
    background-color: rgba(0, 0, 0, 0) !important;
    margin: 0;
    box-shadow: none !important;
}
</style>

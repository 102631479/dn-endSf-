(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"31f4":function(t,e,s){},"4b1c":function(t,e,s){},6346:function(t,e,s){},"6b11":function(t,e,s){"use strict";s("6346")},"7ed4":function(t,e,s){"use strict";var n=s("430a"),a=new n["default"];e["a"]=a},"81d8":function(t,e,s){"use strict";s("9583")},"8b23":function(t,e,s){"use strict";s("d821")},9583:function(t,e,s){},bc50:function(t,e,s){"use strict";s("4b1c")},bfe9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-head",{ref:"headChild",attrs:{showAll:t.collapse}}),s("v-sidebar",{attrs:{ThreeNavIsShow:t.ThreeNavIsShow},on:{ThreeNavShow:t.ThreeNavShow,showAll:t.showAll}}),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse},attrs:{id:"content-box"}},[s("div",{staticClass:"content"},[s("div",{attrs:{"data-aos-anchor":"#example-anchor","data-aos-offset":"500","data-aos-duration":"500"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[s("router-view")],1)],1)],1),s("el-backtop",{attrs:{target:".content"}})],1)])],1)},a=[],o=(s("a450"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[t._m(0),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),t._e(),s("div",{staticClass:"user-avator"},[s("el-avatar",{attrs:{icon:"el-icon-user-solid"}})],1),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n          "+t._s(t.username)+"\n          "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])}),l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("div",{staticClass:"box_one"},[t._v("物流")])])}],i=s("7ed4"),c={props:["showAll"],data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:0}},computed:{username:function(){var t=this.$store.state.name;return t}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},r=c,u=(s("6b11"),s("cba8")),h=Object(u["a"])(r,o,l,!1,null,"02ebd306",null),d=h.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._e()},f=[],p=(s("8dee"),[{powerShow:!0,icon:"el-icon-user-solid",index:"main_port",title:"物流管理"}]),v=function(){return p},g=v,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"ThreeNav"},t._l(t.TwoSubs,(function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n    "+t._s(e.title))])})),1)},b=[],_={props:["TwoSubs"],data:function(){return{}}},C=_,$=(s("bc50"),Object(u["a"])(C,w,b,!1,null,"56560cb5",null)),S=$.exports,T={components:{ThreeNav:S},props:["ThreeNavIsShow"],data:function(){return{collapse:!1,items:g()}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;i["a"].$on("collapse",(function(e){t.collapse=e,i["a"].$emit("collapse-content",e)}))},methods:{goPage:function(t){this.$router.push("/"+t)},dosome:function(){console.log(this.collapse),this.collapse?(this.collapse=!1,this.$emit("showAll",this.collapse)):this.$emit("ThreeNavShow")}}},x=T,L=(s("81d8"),Object(u["a"])(x,m,f,!1,null,"665586ac",null)),k=L.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,(function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n        "+t._s(e.title)+"\n      ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n        标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},N=[],I=(s("e7a7"),s("4890"),{data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),i["a"].$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),i["a"].$on("close_current_tags",(function(){for(var e=0,s=t.tagsList.length;e<s;e++){var n=t.tagsList[e];if(n.path===t.$route.fullPath){e<s-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}}))}}),E=I,y=(s("c5f3"),Object(u["a"])(E,F,N,!1,null,null,null)),A=y.exports,q={data:function(){return{tagsList:[],collapse:!1,ThreeNavIsShow:!1}},components:{vHead:d,vSidebar:k,vTags:A},created:function(){var t=this;i["a"].$on("collapse-content",(function(e){console.log(e,"msg"),t.collapse=e})),i["a"].$on("tags",(function(e){for(var s=[],n=0,a=e.length;n<a;n++)e[n].name&&s.push(e[n].name);t.tagsList=s}))},methods:{ThreeNavShow:function(){var t=document.getElementById("content-box");this.ThreeNavIsShow=!this.ThreeNavIsShow,this.ThreeNavIsShow?t.style.left="460px":t.style.left="250px",console.log("ThreeNavIsShow:"+this.ThreeNavIsShow)},showAll:function(t){var e=document.getElementById("content-box");this.$refs.headChild.collapseChage(),e.style.left="460px",this.ThreeNavIsShow=!0,this.collapse=t,console.log(this.ThreeNavIsShow)}}},O=q,P=(s("8b23"),Object(u["a"])(O,n,a,!1,null,"32115efb",null));e["default"]=P.exports},c5f3:function(t,e,s){"use strict";s("31f4")},d821:function(t,e,s){}}]);
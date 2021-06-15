<template>
  <div class="mix">
    <div v-if="ruleForm.name == ''">
      <el-input style="width: 200px" v-model="textname"></el-input>
      <el-button type="primary" @click="submitName">设置名称</el-button>
    </div>

    <div v-if="!ruleForm.name == ''">
      <el-button type="primary" @click="submitnamenull">重置名字</el-button>

      <!-- <div class="imgs">
        <img src="../../../../img/cts-loginbg（1）.jpeg" alt="" />
      </div> -->

      <div class="xinxi" ref="chatbox">
        <div v-for="item in data" :key="item.id" style="height: 50px">
          <div>----------{{ item.name }}-----------</div>
          <span>{{ item.time }}</span
          ><span>-------</span><span>{{ item.text }}</span>
          <div style="width: 500px; height: 80px"></div>
        </div>
      </div>

      <div class="xinxian">
        <el-input v-model="ruleForm.text"></el-input>
        <el-button type="primary" @click="submitFormsss">刷新消息</el-button>
        <el-button type="primary" @click="submitForm">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { text, data } from "../../api/login";

export default {
  data() {
    return {
      textname: "",
      data: [],
      ruleForm: {
        name: "",
        text: "",
        time: "",
      },
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    submitnamenull() {
      this.ruleForm.name = "";
      this.textname = "";
    },

    submitName() {
      this.ruleForm.name = JSON.parse(JSON.stringify(this.textname));
    },

    submitFormsss() {
      this.getdata();
    },

    async getdata() {
      await data()
        .then((res) => {
            console.log(res);
          this.data = res.data;
          setTimeout((this.$refs.chatbox.scrollTop = 99999), 20);
          //   console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    time() {
      var myDate = new Date();
      var date = myDate.toLocaleTimeString();
      this.ruleForm.time = date;
    },
    async submitForm() {
      if (this.ruleForm.text == "") return;
      await this.time();
      await text(this.ruleForm)
        .then((res) => {
          this.ruleForm.text = "";
          console.log(res, "请求已经发送");
          this.getdata();
        })
        .catch((err) => {
          this.ruleForm.text = "";
          console.log("请求失败");
        });
    },
  },
};
</script>

<style scoped>
.mix {
  overflow: hidden;
}
.xinxi {
  overflow: auto;
  overflow-x: hidden;
  width: 500px;
  height: 500px;
  border: salmon 1px solid;
  overflow-y: scroll;
  /* margin: 0 auto; */
  /* margin-top: 110px; */
}
.xinxian {
  height: 100px;
  width: 500px;
  border: salmon 1px solid;
  /* margin: 0 auto; */
}
.imgs {
  /* margin: 0 auto; */
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
<template>
  <div class="login-wrap">
    <!-- <div class="ms-login" style="width: 400px"> -->
    <div class="ms-login" data-aos="zoom-in">
      <div class="ms-title">物流监控</div>
      <el-form
        :model="formdata"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="formdata.username" placeholder="用户名">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="formdata.password"
            @keyup.enter.native="submitForm()"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { log } from "console";
// import { log } from "console";
// import { log } from "console";
import { login } from "../../api/login";
import Bus from "../common/bus";
export default {
  components: {},
  mounted() {
    Bus.$on("code-add", (data) => {
      this.code = data.code;
    });
  },
  created() {
    // this.captchaData();
    localStorage.clear();
  },
  data() {
    return {
      Captchaimg: "",
      httpDATA: "",
      verify: false,
      code: 1,
      msg: "",
      text: "向右滑",
      formdata: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    getCaptcha() {},
    onSuccess() {
      this.submitForm();
    },

    submitFormTable() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.verify = true;
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    },

    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          // this.$router.push("/");
          // localStorage.setItem("ms_username", this.formdata.username);
          // return;
          //  let formData=new FormData
          //  formData.append('username',this.formdata.username)
          //  formData.append('password',this.formdata.password)
          //  formData.append('code',this.formdata.code)
          login(this.formdata)
            .then((res) => {
              this.$store.commit("GetToken", res.data.token);
              localStorage.setItem("ms_username", res.data.username);
              this.$router.push("/");
              this.$message({
                message: "登录成功！",
                type: "success",
              });
            })
            .catch((err) => {
              this.$message.error(err.message);
            });
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.captcha {
  width: 100px;
  height: 32px;
  display: block;
  margin-left: 50px;
}
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 400%;
  background-image: linear-gradient(
    125deg,
    #27ae60,
    #2980b9,
    #e74c3c,
    #8e44ad,
    #27ae60,
    #2980b9,
    #e74c3c,
    #8e44ad
  );
  animation: bganimation 15s infinite;
  background-image: url("../../assets/img/bphone.jpeg");
  background-size: 100%;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  /* height: 400px; */
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  /* width: 500px; */
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.verify {
  /* position:fixed; */
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  left: 39%;
}
</style>

<template>
  <div class="crumbs">
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名:">
            <span>{{name}}</span>
            <!-- <el-input v-model="ruleForm.userName"></el-input> -->
          </el-form-item>
          <el-form-item label="旧密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="inputPassword">
            <el-input
              type="password"
              v-model="ruleForm.inputPassword"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input
              type="password"
              v-model="ruleForm.checkPassword"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Bus from "../../components/common/bus";
import { putPassword } from "../../api/manager-management";

export default {
  data() {
    return {
      name:"",
      id: "",
      roleIdList: [],
      dialogVisible: false,
      ruleForm: {
        id: "",
        // userName: "",
        password: "",
        inputPassword: "",
        checkPassword: "",
      },
      rules: {
        // userName: [
        //   { required: true, message: "请输入用户名", trigger: "change" },
        // ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "change" },
        ],
        inputPassword: [
          { required: true, message: "请输入新的登录密码", trigger: "change" },
        ],
        checkPassword: [
          { required: true, message: "确认新的登录密码", trigger: "change" },
        ],
      },
    };
  },
  created() {},
  methods: {
    handleClose(done) {
      done();
    },
    submitForm(formName) {
      this.ruleForm.id = this.id;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm,'this.ruleForm');
          // return;
          this.ruleForm.id = this.id;
          putPassword(this.ruleForm)
            .then((res) => {
              // console.log(res);
              this.$message({
                message: res.data,
                type: "warning",
              });
              this.$refs[formName].resetFields();
              this.dialogVisible = false;
              Bus.$emit("manager-management-add", "data");
            })
            .catch((err) => {
              this.$message.error(err.message);
            });
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.ls {
  /* display: none; */
  margin-left: 10px;
  margin-right: 10px;
}
</style>
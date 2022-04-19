<template>
  <div class="crumbs">
    <el-dialog
      title="添加管理员"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
          :modal-append-to-body="false"
    >
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="mobile">
            <el-input v-model.number="ruleForm.mobile"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="roleId">
            <el-select  v-model="ruleForm.roleId" multiple>
              <!-- <el-option label="选择角色" value=""></el-option> -->
              <div v-for="item in roleIdList" :key="item.id">
                <el-option :label="item.name" :value="item.id"  :key="item.id"></el-option>
              </div>
            </el-select>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button   type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Bus from "../../components/common/bus";
import { addUsetRole } from "../../api/manager-management";

export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      roleIdList: [],
      dialogVisible: false,
      ruleForm: {
        userName: "",
        name: "",
        mobile: "",
        email: "",
        roleId: [],
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "change" }],
        mobile: [{ required: true, validator: checkPhone, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱",
            trigger: ["blur", "change"],
          },
        ],
        roleId: [{ required: true, message: "请选择角色", trigger: "change" }],
      },
    };
  },
  created() {},
  methods: {
    handleClose(done) {
      done();
    },
    async submitForm(formName) {
      // console.log(this.ruleForm,'this.ruleForm');
      // return
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addUsetRole(this.ruleForm)
            .then((res) => {
              this.$message({
                message: res.data,
                type: "warning",
              });
              this.$refs[formName].resetFields();
              this.dialogVisible = false;
              Bus.$emit("manager-management-add", "data");
            })
            .catch((err) => {
              console.log(err, "sss");
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
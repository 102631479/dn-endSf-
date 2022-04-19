<template>
  <div >
    <div class="crumbs" v-if="$powersReturn('m:user:page:query')">
      <pageHeaders headerName="用户管理"></pageHeaders>
      <el-form
        :inline="true"
        :model="formData"
        :rules="rules"
        class="formStyle"
        ref="ruleForm"
      >
        <div class="dj">
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="formData.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="mobile">
            <el-input
              v-model="formData.mobile"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <div>
            <el-button type="primary" @click="init()">搜索</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button  v-if="$powersReturn('m:user:add')" class="ls" type="primary" @click="addMammage"
              >添加管理员</el-button
            >
          </div>
        </div>
        <div class="dj">
          <div></div>

          <div></div>
        </div>
      </el-form>
    </div>
    <tableData></tableData>
    <addForm ref="addForm"></addForm>
  </div>
</template>

<script>
import Bus from "../../components/common/bus";
import pageHeaders from "../../components/common/pageHeader.vue";
import tableData from "./table-form.vue";
import addForm from "./add-company.vue";
import { getUsetRole } from "../../api/manager-management";
export default {
  components: {
    pageHeaders,
    tableData,
    addForm,
  },
  created() {},
  data() {
    return {
      TableDataList: {},
      RegionData: [],
      cityIdData: [],
      formData: {
        name: "",
        username: "",
        mobile: "",
      },
      rules: {
        name: [{ trigger: "blur" }],
        username: [{ trigger: "blur" }],
        mobile: [{ trigger: "blur" }],
      },
    };
  },

  methods: {
    init() {
      Bus.$emit("manager-management-index", this.formData);
    },

    addMammage() {
      //  return
      // getUsetRole()
      //   .then((res) => {
       this.$refs.addForm.dialogVisible = true;
        //   this.$refs.addForm.roleIdList = res.data;
        // })
        // .catch((err) => {
        //   this.$message.error("获取角色列表失败");
        // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      Bus.$emit("manager-management-index", this.formData);
    },
  },
};
</script>

<style scoped>
.ls {
  margin-left: 80px;
}
.formStyle {
  border-radius: 10px;
  background: white;
  margin-bottom: 10px;
  padding: 20px 10px 0px 10px;
  min-width: 1230px;
  margin-top: 20px;
  /* display: flex;
  justify-content: space-around; */
}
.dj {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>

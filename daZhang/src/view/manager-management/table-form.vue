<template>
  <div class="table-view">
    <el-table
      v-if="$powersReturn('m:user:page:query')"
      v-loading="loading"
      :data="TableDataList"
      border
      style="width: 100%"
      class="table-ridues"
    >
      <el-table-column label="序列" align="center" type="index" width="50">
      </el-table-column>
      <el-table-column prop="name" align="center" label="姓名">
      </el-table-column>
      <el-table-column prop="userName" align="center" label="用户名">
      </el-table-column>
      <el-table-column prop="createTime" align="center" label="创建时间">
      </el-table-column>
      <el-table-column prop="lastLoginTime" align="center" label="最近登录时间">
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.status == 1">正常</div>
          <div v-if="scope.row.status == 0">停用</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            v-if="$powersReturn('m:user:detail:query')"
            @click="handleClick(scope.row)"
            type="text"
            size="small"
            >编辑</el-button
          >
          <el-button
            v-if="$powersReturn('m:user:delete')"
            @click="DeleClick(scope.row.id)"
            type="text"
            size="small"
            >删除</el-button
          >
          <el-button
            v-if="$powersReturn('m:user:password')"
            type="text"
            size="small"
            @click="handlePutPassword(scope.row.id, scope.row.userName)"
            >修改密码</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-page">
      <el-pagination
        v-if="$powersReturn('m:user:page:query')"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <putForm ref="putForm"></putForm>
    <PutPassword ref="PutPassword"></PutPassword>
    <div></div>
  </div>
</template>

<script>
import Bus from "../../components/common/bus";
import putForm from "./put-company.vue";
import PutPassword from "./put-Password.vue";
import {
  getData,
  getUsetRole,
  getAdiminData,
  deleteData,
} from "../../api/manager-management";

export default {
  components: {
    putForm,
    PutPassword,
  },

  computed: {},
  data() {
    return {
      formData: {
        name: "",
        userName: "",
        mobile: "",
      },
      PageSize: {
        size: 10,
        current: 1,
      },
      loading: false,
      total: 0,
      currentPage: 1,
      TableDataList: [],
    };
  },
  created() {
    this.init(this.formData);
  },
  mounted() {
    Bus.$on("manager-management-index", (data) => {
      this.formData = data;
      this.init(this.formData);
    });
    Bus.$on("manager-management-add", () => {
      this.init(this.formData);
    });
  },
  methods: {
    async init(d) {
      this.loading = true;
      let dataList = Object.assign(d, this.PageSize);
      getData(dataList)
        .then((res) => {
          this.TableDataList = res.data.records;
          this.total = Number(res.data.total);
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.$message({
            showClose: true,
            message: "页面数据加载失败",
            type: "error",
          });
        });
    },
    DeleClick(row) {
      this.$confirm("确认删除？")
        .then((_) => {
          deleteData(row).then((res) => {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.init(this.formData);
          });
          done();
        })
        .catch((_) => {});
    },
    // 编辑
    handleClick(row) {
      getUsetRole()
        .then((ress) => {
          console.log(ress, "ress");
          this.$refs.putForm.roleIdList = ress.data;
          getAdiminData(row.id).then((res) => {
            console.log(res, "res");
            this.$refs.putForm.ruleForm = res.data;
            this.$refs.putForm.dialogVisible = true;
          });
        })
        .catch((err) => {
          this.$message({
            message: "删除失败",
            type: "error",
          });
        });
    },

    async handlePutPassword(id, name) {
      // debugger
      console.log(name, "mnam");
      this.$refs.PutPassword.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs.PutPassword.$refs.ruleForm.resetFields();
      });
      this.$refs.PutPassword.id = id;
      this.$refs.PutPassword.name = name;
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.PageSize.size = val;
      this.init(this.formData);
    },
    handleCurrentChange(val) {
      this.PageSize.current = val;
      this.init(this.formData);
      // console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.table-view {
  background: white;
  border-radius: 10px;
}
.pagination-page {
  width: 500px;
  margin: 30px auto;
  padding: 30px;
}
.table-ridues {
  border-radius: 10px;
}
</style>

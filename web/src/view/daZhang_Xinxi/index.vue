<template>
  <div>
    <h3>信息统计</h3>
    <div class="formStyle">
      <form-create
        :option="option"
        :rule="search"
        v-model="formData"
        ref="ruleForm"
      ></form-create>
      <div class="fd">
        <div>
          <!-- 添加号码：
          <el-input
            class="inputadd"
            v-model="memberMobile"
            placeholder="请输入要添加的手机号码"
          ></el-input>
          <el-button type="primary" style="margin-left: 20px" @click="add()"
            >添加</el-button
          > -->
        </div>
        <div>
          <el-button type="primary" style="margin-left: 20px" @click="add()"
            >添加</el-button
          >
          <el-button type="primary" @click="init()">搜索</el-button>
          <el-button @click="resetFor()">重置</el-button>
        </div>
      </div>
      <div></div>
    </div>

    <DnTable
      ref="DnTable"
      EditUrl="/access-code/info"
      :columns="OptionsData"
      DataUrl="/daZhangXinxi/getData"
      :formcreatJS="edit"
      @Deleinit="init"
      @createDnForm="createDnForm"
      @handleCurrentChange="init"
    ></DnTable>

    <!-- 编辑或者提示弹窗 -->
    <el-dialog
      :title="titleText"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      width="30%"
    >
      <el-dialog
        title="物流记录"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        :modal-append-to-body="false"
        width="50%"
        center
      >
        <div class="block">
          <div class="block-img">
            <img
              :src="
                logisticsDatatext.result.logo
                  ? logisticsDatatext.result.logo
                  : ''
              "
              alt=""
              class="logoimg"
            />
            {{ logisticsDatatext.result.typename }}
          </div>
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in logisticsDatatext.result.list"
              :key="index"
              :timestamp="activity.status"
            >
              {{ activity.time }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addData, getData, putData } from "../../api/Table";
import { daZhangAdd } from "../../api/daZhang";
import option from "../../components/DnTable/opt";
import search from "./search";
import edit from "./edit";
import DnTable from "../../components/DnTable/index.vue";
export default {
  components: {
    DnTable,
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    add() {
      this.$refs.DnTable.addTable();
    },
    getLogisticsDatas(d, buler) {
      if (!d.logistics) {
        this.$message.error("没有物流单号");
        return;
      }
      if (d.logistics)
        getLogisticsData({
          mobile: d.phone,
          number: d.logistics,
          type: "auto",
        })
          .then((res) => {})
          .catch((err) => {
            this.$message.error("物流更新失败");
            console.log(err, "物流更新失败");
          });
    },
    createDnForm(row) {
      if (row.id) {
        putData("/daZhangXinxi/putData", row)
          .then((res) => {
            this.$refs.DnTable.closeForm();
            this.$message({
              message: "操作成功",
              type: "success",
            });
            this.init();
          })
          .catch((err) => {
            console.log(err);
            this.$message.error(err.meta.msg);
          });
        return;
      } else {
        // console.log(row);
        // return
        addData("/daZhangXinxi/addData", row)
          .then((res) => {
            this.$message({
              message: "操作成功",
              type: "success",
            });
            this.$refs.DnTable.createDnForm.resetFields();

            this.init();
          })
          .catch((err) => {
            this.$message.error(err.meta.msg);
          });
      }
    },
    addData() {
      this.$refs.DnTable.addTable();
    },
    init() {
      this.$refs.DnTable.init(this.formData.form);
    },
    resetFor() {
      this.formData.resetFields();
      this.$refs.DnTable.init(this.formData.form);
    },
  },
  data() {
    return {
      memberMobile: "",
      reverse: false,
      logisticsDatatext: {
        result: {
          logo: "",
        },
      },
      idAdmin: this.$store.state.idAdmin,
      downlod: {},
      ruleForm: {},
      dialogVisible: false,
      createForm: {},
      formData: {},
      option,
      search,
      edit: edit,
      titleText: "",
      OptionsData: [
        {
          props: "username",
          name: "账户归属",
          Show: (row) => {
            if (this.$store.state.name == "admin") {
              return true;
            }
            return false;
          },
        },
        {
          props: "memberName",
          name: "名字",
        },
        {
          props: "wxid",
          name: "微信号",
        },
        {
          type: "text",
          props: "tokenData",
          name: "token",
          formatter: (row, column, index) => {
            return row.tokenData;
          },
        },
        // {
        //   props: "storeName",
        //   name: "门店名字",
        //   widthSize: "150",
        // },
        {
          props: "openidData",
          name: "openId",
          widthSize: "240",
        },
        {
          props: "mobile",
          name: "手机号码",
        },
        {
          props: "updatedAt",
          name: "更新时间",
          widthSize: "200",
        },
        {
          type: "operate",
          name: "操作",
          widthSize: "200",
          props: "operate",
          operate: [
        
            {
              text: "编辑",
              type: "edit",
              Show: (row) => {
                return true;
              },
            },
            {
              text: "删除",
              type: "delete",
              url: "/daZhangXinxi/deleteData",
              Show: (row) => {
                return true;
              },
            },
          ],
        },
        {
          type: "text",
          props: "remark",
          name: "备注",
          formatter: (row, column, index) => {
            try {
              return row.remark;
            } catch {
              return "";
            }
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.block-img {
  height: 35px;
  margin: 0 auto;
}
.logoimg {
  width: 20px;
  height: 20px;
}
.tr {
  display: inline-block;
  width: 220px;
  height: 20px;
  text-align: right;
}
.ruleCss {
  width: 1000px;
  height: 200px;
  margin-left: 85px;
  font-size: 16px;
  cursor: pointer;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
}
.add {
  margin-left: 20px;
}
._fc-upload {
  /* display: flex; */
}
.fd {
  min-width: 1400px;
  display: flex;
  /* justify-content: flex-end; */
  justify-content: space-between;
  margin: 10px;
  /* margin-top: -40px; */
  /* position: relative; */
  /* z-index: 9999999999; */
}
.inputadd {
  width: 300px;
}
.formStyle {
  border-radius: 10px;
  background: white;
  margin-bottom: 10px;
  padding: 20px 10px 0px 10px;
  /* min-width: 1400px; */
  margin-top: 20px;
  overflow: hidden;
}
</style>

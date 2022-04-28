<template>
  <div>
    <h3>物流管理</h3>
    <div class="formStyle">
      <form-create
        :option="option"
        :rule="search"
        v-model="formData"
        ref="ruleForm"
      ></form-create>
      <div class="fd">
        <el-button type="primary" @click="init()">搜索</el-button>
        <el-button @click="resetFor()">重置</el-button>
        <el-button class="add" v-if="!idAdmin" @click="addData()"
          >新增信息</el-button
        >
      </div>
    </div>
    <DnTable
      ref="DnTable"
      EditUrl="/access-code/info"
      :columns="OptionsData"
      DataUrl="/order/getData"
      :formcreatJS="edit"
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
        putData("/order/addData", row)
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
        this.$store.commit("SetAgent", row.agent);
        addData("/order/addData", row)
          .then((res) => {
            this.$message({
              message: "操作成功",
              type: "success",
            });
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
          props: "agent",
          name: "代理人",
          Show: () => {
            return  false;
          },
        },
        {
          props: "phone",
          name: "手机号",
        },

        {
          props: "shopname",
          name: "收货人姓名",
        },
        {
          props: "logistics",
          name: "物流单号",
          widthSize: "150",
        },
        {
          props: "goPrice",
          name: "下单价格",
        },
        {
          type: "text",
          props: "logisticsData",
          name: "物流信息",
          formatter: (row, column, index) => {
            try {
              let data = JSON.parse(row.logisticsData);
              return data.result.list[0].status;
            } catch {
              return "";
            }
          },
        },
        // {
        //   props: "updatedAt",
        //   name: "录入时间",
        // },
        {
          props: "remark",
          name: "备注",
          widthSize: "150",
        },
        {
          type: "operate",
          name: "操作",
          widthSize: "200",
          props: "operate",
          operate: [
            {
              text: "物流查看",
              type: "other",
              Show: (row) => {
                if (row.logistics) {
                  return true;
                }
                return false;
              },
              click: (row, index) => {
                // console.log(row,'sssss');
                // return
                if (!row.logistics) {
                  return;
                }
                let data = {
                  phone: row.phone,
                  logistics: row.logistics,
                  id: row.id,
                };

                if (row.logisticsData) {
                  this.logisticsDatatext = JSON.parse(row.logisticsData);
                  this.dialogVisible = true;
                } else {
                  let data = {
                    logisticsDatatext: {
                      result: {
                        logo: "",
                      },
                    },
                  };
                  this.logisticsDatatext = data;
                }
                return;
                getData("/order/getDelivery", data)
                  .then((res) => {
                    console.log(res);
                    this.logisticsDatatext = JSON.parse(res.body);
                    this.dialogVisible = true;
                    this.init();
                  })
                  .catch((err) => {});
              },
            },
            {
              text: "编辑",
              type: "edit",
              Show: (row) => {
                return true;
              },
            },
            {
              text: "更新物流",
              type: "other",
              Show: (row) => {
                if (row.logistics) {
                  return true;
                }
                return false;
              },
              click: (row, index) => {
                if (!row.logistics) {
                  return;
                }
                let data = {
                  phone: row.phone,
                  logistics: row.logistics,
                  id: row.id,
                };
                getData("/order/getDelivery", data)
                  .then((res) => {
                    this.logisticsDatatext = JSON.parse(res.body);
                    this.init();
                    this.$message({
                      message: "更新成功",
                      type: "success",
                    });
                  })
                  .catch((err) => {
                    this.$message({
                      message: "更新失败",
                      type: "error",
                    });
                  });
              },
            },
            {
              text: "删除",
              type: "other",
              Show: (row) => {
                return true;
              },
              click: (row, index) => {
                let data = {
                  id: row.id,
                };
                getData("/order/putDelete", data)
                  .then((res) => {
                    this.init();
                  })
                  .catch((err) => {});
              },
            },
            // {
            //   text: "删除",
            //   type: "delete",
            //   url:'url',
            //   Show: (row) => {
            //     return true;
            //   },
            // },
          ],
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
  justify-content: flex-end;
  margin: 10px;
  /* margin-top: -40px; */
  /* position: relative; */
  /* z-index: 9999999999; */
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

<template>
  <div class="table">
    <el-table
      v-loading="loading"
      :data="dataList"
      border
      style="width: 100%"
      class="table-ridues"
      show-overflow-tooltip
      @cell-dblclick="copyItem"
    >
      <el-table-column label="序列" align="center" type="index" width="50">
      </el-table-column>

      <template v-for="item in columns">
        <!-- 自定义状态显示  -->
        <el-table-column
          v-if="item.type"
          :label="item.name"
          align="center"
          :key="item.id"
          :prop="item.props"
          :width="item.widthSize ? item.widthSize : ''"
        >
          <!-- 自定义显示汉字 -->
          <template slot-scope="scope">
            <span
              v-if="item.type == 'text'"
              v-html="item.formatter(scope.row, item, scope.$index)"
              @click="item.click && item.click(scope.row, scope.$index)"
              :class="scope.row.status == '0' ? 'pickedUpBtn' : 'pickBtn'"
            ></span>

            <div v-if="item.type == 'button'">
              <el-button
                @click="item.click && item.click(scope.row, scope.$index)"
                :type="
                  renderButton('type', item.operate, scope.row[item.props])
                "
                :size="
                  renderButton('size', item.operate, scope.row[item.props])
                "
                >{{
                  renderButton("name", item.operate, scope.row[item.props])
                }}</el-button
              >
            </div>
            <div v-if="item.type == 'operate'">
              <div class="ds">
                <div
                  class="btnoperate"
                  v-for="operateData in item.operate"
                  :key="operateData.id"
                >
                  <el-button
                    v-if="isShowOperate(operateData, scope.row)"
                    type="text"
                    size="small"
                    @click="operate(operateData, scope.row, scope.$index)"
                    >{{ operateDataText(operateData, scope.row) }}</el-button
                  >
                </div>
              </div>
              <!-- {{scope.row}} -->
            </div>
          </template>

          <!-- 自定义显示按钮 -->
        </el-table-column>

        <!-- 原始表格数据显示 -->

        <el-table-column
          v-if="isShow(item)"
          :label="item.name"
          align="center"
          :key="item.props"
          :prop="item.props"
          :width="item.widthSize ? item.widthSize : '100'"
        >
        </el-table-column>
      </template>
    </el-table>

    <!-- 编辑或者提示弹窗 -->
    <el-dialog
      :title="titleText"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      width="50%"
    >
      <form-create
        v-if="dialogVisible"
        :option="option"
        :rule="formcreatJS"
        v-model="createDnForm"
      ></form-create>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="GETcreateDnForm">提 交</el-button>
      </span>
    </el-dialog>
    <!-- 页码控制显示 -->
    <div class="pagination-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 30, 40]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 单击复制需要改输入框，隐藏了 -->
    <textarea
      id="input"
      style="position: absolute; top: 0; left: 0; opacity: 0; z-index: -10"
    ></textarea>
  </div>
</template>

<script>
import Bus from "../common/bus";
import option from "./opt";
import { getData, getEditData, deleteData } from "./api";
export default {
  /**
   * 表格属性 *
   * @param { Arrey }      dataList 表格显示数据,接口返回
   * @param {Boolean}      loading  表格loading动画
   * @param { Array }      columns  表格结构数据(表头设置)
   * @param { Array }      EditUrl  编辑表格接口
   * @param { @createDnForm }       传输表格数据触发事件
   *
   * 分页属性 *
   */

  props: {
    DataUrl: {
      type: String,
      default: () => {
        return "";
      },
    },
    EditUrl: {
      type: String,
      default: () => {
        return "";
      },
    },
    formcreatJS: {
      type: Array,
      default: () => {
        return [];
      },
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      idEdit: "",
      createDnForm: {},
      dataList: [],
      option,
      dialogVisible: false,
      titleText: "",
      loading: false,
      PageSize: {
        pageSize: 20,
        pageIndex: 1,
      },
      total: 0,
      currentPage: 10,
    };
  },
  created() {},
  mounted() {
    Bus.$on("port", (d) => {
      this.createDnForm.form[d] = "";
    });
  },
  methods: {
    isShowOperate(d, b) {
      return d.Show(b);
    },
    isShow(d) {
      if (d.type) {
        return false;
      }
      if (d.Show) {
        return d.Show(d);
      }
      return true;
    },
    closeForm() {
      this.dialogVisible = false;
    },

    async GETcreateDnForm() {
      // 新增  直接传递表单   编辑 加id  $emit 事件
      this.createDnForm.submit(async (data) => {
        switch (this.titleText) {
          case "新增数据":
            return this.$emit("createDnForm", this.createDnForm.form);
          case "编辑":
            let data = JSON.parse(JSON.stringify(this.createDnForm.form));
            return this.$emit(
              "createDnForm",
              Object.assign(data, { id: this.idEdit })
            );
          default:
        }
      });
    },

    setEditData(data) {
      // console.log(data,'sssss');
      this.titleText = "编辑";
      this.dialogVisible = true;
      this.idEdit = data.id;
      this.$nextTick(() => {
        this.createDnForm.resetFields();
        this.createDnForm.setValue(data);
      });
    },

    operateDataText(d, data) {
      if (d.Show) {
        return d.Show(data) ? d.text : null;
      }
      return d.text;
    },
    operate(a, b, c, e) {
      if (!a.Show(b)) return;
      if (a.type == "delete") {
        this.$confirm("确认删除？")
          .then((_) => {
            let urlD = a.url + "?id=" + b.id;
            console.log(a.url + "?id=" + b.id, "删除接口对接");
            deleteData(urlD)
              .then((res) => {
                this.$emit("Deleinit");
                this.$message({
                  message: "删除成功",
                  type: "success",
                });
              })
              .catch((err) => {
                this.$message({
                  message: "删除失败",
                  type: "error",
                });
              });
          })
          .catch((_) => {
            this.$message({
              message: "取消删除",
              type: "error",
            });
          });
        return;
      }

      if (a.type == "edit") {
        // console.log(a, b, c, e);
        // this.$nextTick(() => {
        // this.setEditData({ id: b.id });
        this.setEditData(b);
        // });
      }

      if (a.type == "other") {
        a.click(b, c);
      }
    },
    // 返回按钮自定义
    renderButton(type, Array, data) {
      let dataObj;
      Array.map((item) => {
        if (data == item.status) {
          dataObj = item;
        }
      });
      return dataObj[type];
    },

    addTable() {
      this.titleText = "新增数据";
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.createDnForm.resetFields();
      });
      console.log(this.createDnForm, "添加数据");
    },
    // 获取表格数据
    async init(d) {
      console.log(d);
      this.loading = true;
      let data = Object.assign(d, this.PageSize);
      getData(this.DataUrl, data)
        .then((res) => {
          this.total = res.data.total;
          this.dataList = res.data.list;
        })
        .catch((err) => {
          console.log(err, "失败");
        })
        .finally(() => {
          // setTimeout(() => {
          this.loading = false;
          // }, 200);
        });
    },

    handleSizeChange(val) {
      this.PageSize.pageSize = val;
      this.$emit("handleCurrentChange");
    },
    handleCurrentChange(val) {
      this.PageSize.pageIndex = val;
      this.$emit("handleCurrentChange");
    },
    //双击直接复制当前单元格内内容
    copyItem(row, column, cell, event) {
      let save = function (e) {
        e.clipboardData.setData("text/plain", event.target.innerText);
        e.preventDefault(); //阻止默认行为
      };
      document.addEventListener("copy", save); //添加一个copy事件
      document.execCommand("copy"); //执行copy方法
      this.$message({
        message: "复制成功",
        type: "success",
      }); //提示
    },
  },
};
</script>

<style scoped>
.btnoperate {
  margin-left: 10px;
}
/* >>> .el-upload--text {
  border: none;
  width: 86px;
  height: 25px;
  margin-top: 5px;
} */
/* >>> ._fc-upload .fc-upload-btn,
._fc-upload .fc-files {
  width: 127px;
  line-height: 33px;
  height: 100px;
  margin-top: -5px;
  margin-left: -20px;
} */
.table {
  height: 100vh;
  /* min-width: 1400px; */
}
.ds {
  display: flex;
  justify-content: center;
}
.pagination-page {
  width: 500px;
  margin: 30px auto;
  padding: 30px;
}
.pickedUpBtn {
  color: red;
}
.pickBtn {
  color: rgb(30, 223, 30);
}
</style>

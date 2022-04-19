<template>
  <div>
    <DnTable
      ref="DnTable"
      :columns="OptionsData"
      DataUrl="/DataUrl"
      :formcreatJS="edit"
    ></DnTable>
  </div>
</template>

<script>
import edit from "./edit";
import DnTable from "../../components/DnTable/index.vue";
export default {
  components: {
    DnTable,
  },
  created() {
  },
  data() {
    return {
      edit: edit,
      titleText: "编辑",
      dialogVisible: false,
      OptionsData: [
        {
          props: "id",
          name: "ID",
        },
        {
          props: "name",
          name: "姓名",
        },

        {
          type: "text",
          props: "status",
          name: "状态",
          formatter: (row, column, index) => {
            return row.status == 0 ? "停止" : "开始";
          },
        },

        {
          type: "button",
          props: "status",
          name: "状态",
          operate: [
            { name: "成功", type: "success", size: "mini", status: "0" },
            { name: "失败", type: "danger", size: "mini", status: "1" },
            { name: "警告", type: "warning", size: "mini", status: "2" },
          ],
          click: (row, index) => {
            console.log(row, index);
          },
        },

        {
          type: "operate",
          name: "操作",
          props: "operate",
          operate: [
            {
              text: "其他操作1",
              type: "other",
              click: (row, index) => {
                this.dialogVisible = true;
                console.log("其他操作1");
                console.log(row, index);
              },
            },

            {
              text: "其他操作3",
              type: "other",
              Show: (row) => {
                if (row.status == 0) {
                  return true;
                }
                return false;
              },
              click: (row, index) => {
                console.log("其他操作3");
                console.log(row, index);
              },
            },

            {
              text: "编辑",
              type: "edit",
              dataArrey: [
                {
                  key: "id",
                  lable: "Id",
                },
              ],
            },

            { text: "删除", type: "delete", url: "/delete" },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>

<template>
    <div>
        <el-table :data="tableData" style="width: 100%" size="mini" v-loading="loading">
            <el-table-column type="index" width="50" label="序列"> </el-table-column>
            <el-table-column align="center" width="110" prop="datatime" label="时间"> </el-table-column>
            <el-table-column align="center" width="60" prop="name" label="姓名"> </el-table-column>
            <el-table-column align="center" width="120" prop="phone" label="电话"> </el-table-column>
            <el-table-column align="center" width="120" prop="shopname" label="订单编号"> </el-table-column>
            <el-table-column align="center" width="150" prop="logistics" label="物流单号"> </el-table-column>
            <el-table-column align="center" prop="logisticsdata" label="物流简述"> </el-table-column>
            <el-table-column align="center" prop="remark" label="备注"> </el-table-column>
            <el-table-column align="center" width="60" prop="goPrice" label="价格"> </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small">数据下拉</el-button>
                    <el-button type="text" size="small">永久删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { clouddata } from '../../api/cloud';

export default {
    data() {
        return {
            loading: false,
            reverse: false,
            showLogistics: false,         
            phoneCode: '',
            centerDialogVisible: false,
            tableData: []
        };
    },
    mounted() {},
    methods: {
        getdataTexe() {
            this.getData();
        },
        getDataset() {
            if (this.form.name == '') {
                this.centerDialogVisible = false;
                return;
            }
            this.loading = true;
            this.nowTime();
            dataadd(this.form)
                .then((res) => {
                    this.getData();
                    this.$refs.form.resetFields();
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            this.loading = false;
        },
        handleClick(d) {
            console.log(d);
        },

       
        async getData(d) {
            this.loading = true;
            await clouddata(d)
                .then((res) => {
                    this.tableData = res.data;
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            this.loading = false;
        }
    },
    created() {
        this.getData({
            usercode: localStorage.getItem('ms_username'),
            phone: this.phoneCode
        });
    }
};
</script>

<style scoped>
.text-herar {
    position: fixed;
    top: 300px;
    left: 40%;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    font-size: 50px;
}
.text-herar1 {
    position: fixed;
    top: 500px;
    left: 50%;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    font-size: 20px;
}
.input-with-select {
    width: 300px;
}
.heard {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    /* height: 50px; */
}
.block-img {
    height: 35px;
    margin: 0 auto;
}
.logoimg {
    width: 10px;
    height: 10px;
}
#main {
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>
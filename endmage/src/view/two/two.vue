<template>
    <div>
        <div class="heard">
            <div></div>
            <!-- <el-button type="primary" mini @click="centerDialogVisible = true">新增</el-button> -->
            <el-input placeholder="请输入内容" v-model="phoneCode" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

        <el-table :data="tableData" style="width: 100%" size="mini" v-loading="loading">
            <el-table-column type="index" width="50" label="序列"> </el-table-column>
            <el-table-column align="center" width="110" prop="datatime" label="时间"> </el-table-column>
            <el-table-column align="center" width="60" prop="name" label="姓名"> </el-table-column>
            <el-table-column align="center" width="120" prop="phone" label="电话"> </el-table-column>
            <el-table-column align="center" width="120" prop="shopname" label="订单编号"> </el-table-column>
            <el-table-column align="center" width="150" prop="logistics" label="物流单号"> </el-table-column>
            <!-- <el-table-column align="center" prop="logisticsdata" label="物流简述"> </el-table-column> -->
            <el-table-column align="center" prop="remark" label="备注"> </el-table-column>
            <el-table-column align="center" width="60" prop="goPrice" label="价格"> </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="retuerDa(scope.row)">恢复记录</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getdataRecyled, RETretureData } from '../../api/login';
export default {
    data() {
        return {
            phoneCode: '',
            loading: false,
            input3: '',
            reverse: false,
            showLogistics: false,
            form: {
                name: '',
                phone: '',
                shopname: '',
                logistics: '',
                remark: '',
                goPrice: '',
                datatime: '',
                logisticsdata: '',
                datatime: ''
            },
            centerDialogVisible: false,
            tableData: []
        };
    },
    watch: {
        phoneCode(val, vul) {
            console.log(val, vul);
            this.getData({
                usercode: localStorage.getItem('ms_username'),
                phone: val
            });
        }
    },
    mounted() {},
    methods: {
        retuerDa(d) {
            console.log(d, 'sss');
            RETretureData(d)
                .then((res) => {
                    this.getData({
                        usercode: localStorage.getItem('ms_username'),
                        phone: this.phoneCode
                    });
                    this.$message({
                        message: d.name + '恢复成功',
                        type: 'success'
                    });
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            // RETretureData(d){
            // }
        },
        nowTime() {
            //获取当前时间
            let now = new Date();
            let _month = 10 > now.getMonth() + 1 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
            let _day = 10 > now.getDate() ? '0' + now.getDate() : now.getDate();
            let _hour = 10 > now.getHours() ? '0' + now.getHours() : now.getHours();
            let _minute = 10 > now.getMinutes() ? '0' + now.getMinutes() : now.getMinutes();
            let _second = 10 > now.getSeconds() ? '0' + now.getSeconds() : now.getSeconds();
            this.form.datatime = _month + '-' + _day + ' ' + _hour + ':' + _minute;
        },

        handleClick(d) {
            console.log(d);
        },

        async getData(d) {
            this.loading = true;
            await getdataRecyled(d)
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
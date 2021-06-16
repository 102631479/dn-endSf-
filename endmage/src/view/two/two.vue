<template>
    <div>
        <div class="heard">
          <div></div>
            <!-- <el-button type="primary" mini @click="centerDialogVisible = true">新增</el-button> -->
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" @click="getdataTexe()" icon="el-icon-search"></el-button>
            </el-input>
        </div>

        <el-dialog title="物流记录" :visible.sync="showLogistics" width="30%" center>
            <div class="block">
                <div class="block-img">
                    <img :src="logisticsDatatext.result.logo ? logisticsDatatext.result.logo : ''" alt="" class="logoimg" />
                    {{ logisticsDatatext.result.typename }}
                </div>
                <el-timeline :reverse="reverse">
                    <el-timeline-item v-for="(activity, index) in logisticsDatatext.result.list" :key="index" :timestamp="activity.status">
                        {{ activity.time }}
                    </el-timeline-item>
                </el-timeline>
            </div>
        </el-dialog>

        <el-dialog title="新增记录" :visible.sync="centerDialogVisible" width="30%" center>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="商品" prop="shopname">
                    <el-input v-model="form.shopname"></el-input>
                </el-form-item>
                <el-form-item label="物流单号" prop="logistics">
                    <el-input v-model="form.logistics"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item label="下单价格" prop="goPrice">
                    <el-input v-model="form.goPrice"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="getDataset(form)">确 定</el-button>
            </span>
        </el-dialog>

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
                 
                    <el-button type="text" size="small">永久删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { data, dataadd, getLogisticsData } from '../../api/login';
export default {
    data() {
        return {
            loading: false,
            input3: '',
            reverse: false,
            showLogistics: false,
            logisticsDatatext: {
                status: 0,
                msg: 'ok',
                result: {
                    number: '75476195407404',
                    type: 'zto',
                    typename: '中通速递',
                    logo: '',
                    list: [],
                    deliverystatus: 1,
                    issign: 0
                }
            },
            rules: {
                name: [{ message: '请输入邮箱地址', required: false, trigger: 'blur' }],
                phone: [{ message: '请输入邮箱地址', required: false, trigger: 'blur' }],
                shopname: [{ message: '请输入邮箱地址', required: false, trigger: 'blur' }],
                name: [{ message: '请输入邮箱地址', required: false, trigger: 'blur' }],
                logistics: [{ message: '请输入邮箱地址', required: false, trigger: 'blur' }],
                remark: [{ message: '请输入邮箱地址', required: false, trigger: 'blur' }],
                goPrice: [{ message: '请输入邮箱地址', required: false, trigger: 'blur' }]
            },
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
    mounted() {},
    methods: {
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

        getLogisticsDatas(d) {
            console.log(d);
            getLogisticsData({
                mobile: d.phone,
                number: d.logistics,
                type: 'auto'
            })
                .then((res) => {
                    // console.log(res.result);
                    (this.logisticsDatatext = {}), (this.logisticsDatatext = res);
                    this.showLogistics = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async getData() {
            this.loading = true;
            await data()
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
        this.getData();
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
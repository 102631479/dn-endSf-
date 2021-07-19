<template>
    <div>
        <div class="heard">
            <el-button type="primary" mini @click="addData">新增</el-button>
            <el-input placeholder="请输入内容" v-model="phoneCode" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
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

        <el-dialog :title="setdata ? '新增数据' : '编辑数据'" :visible.sync="centerDialogVisible" width="30%" center>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" @keyup.enter.native="getDataset(form)"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="form.phone" @keyup.enter.native="getDataset(form)"></el-input>
                </el-form-item>
                <el-form-item label="订单编号" prop="shopname">
                    <el-input v-model="form.shopname" @keyup.enter.native="getDataset(form)"></el-input>
                </el-form-item>
                <el-form-item label="物流单号" prop="logistics">
                    <el-input v-model="form.logistics" @keyup.enter.native="getDataset(form)"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="form.remark" @keyup.enter.native="getDataset(form)"></el-input>
                </el-form-item>
                <el-form-item label="下单价格" prop="goPrice">
                    <el-input v-model="form.goPrice" @keyup.enter.native="getDataset(form)"></el-input>
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
            <el-table-column align="center" prop="remark" width="100" label="备注"> </el-table-column>
            <el-table-column align="center" width="60" prop="goPrice" label="价格"> </el-table-column>
            <el-table-column align="center" label="操作" width="300">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="eilitData(scope.row)">编辑</el-button>
                    <el-button type="text" size="small" @click="getLogisticsDatas(scope.row, true)">查看物流</el-button>
                    <el-button type="text" size="small" @click="getLogisticsDatas(scope.row, false)">物流更新</el-button>
                    <el-button type="text" size="small" @click="getrecyledData(scope.row)">移入垃圾站</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { data, dataadd, getLogisticsData, getLogistics, getoneupdata, getrecyled } from '../../api/login';
export default {
    data() {
        return {
            setdata: true,
            loading: false,
            input3: '',
            reverse: false,
            showLogistics: false,
            logisticsDatatext: {
                status: 0,
                msg: 'ok',
                result: {
                    number: '',
                    type: '',
                    typename: '',
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
                id: '',
                usercode: localStorage.getItem('ms_username'),
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
            phoneCode: '',
            centerDialogVisible: false,
            tableData: []
        };
    },
    mounted() {},
    watch: {
        phoneCode(val, vul) {
            console.log(val, vul);
            this.getData({
                usercode: localStorage.getItem('ms_username'),
                phone: this.phoneCode
            });
        }
    },
    methods: {
        isHasObj(arr, val) {
            var flag = false;
            for (var i = 0; i < arr.length; i++) {
                if (JSON.stringify(arr[i]).indexOf(JSON.stringify(val)) != -1) {
                    console.log(JSON.stringify(arr[i]).indexOf(val));
                    flag = JSON.stringify(arr[i]).indexOf(JSON.stringify(val));
                }
            }
            return flag;
        },
        getrecyledData(d) {
            getrecyled(d)
                .then((res) => {
                    this.getData({
                        usercode: localStorage.getItem('ms_username'),
                        phone: this.phoneCode
                    });
                    this.$message({
                        message: d.name + '加入回收站成功',
                        type: 'success'
                    });
                    // let isFlase;
                    // this.tableData.some((item, index) => {
                    //     isFlase = index;
                    //     if (d.id == item.id) return index;
                    // });
                    // this.tableData.splice(isFlase, 1);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clearData() {
            this.form.name = '';
            this.form.phone = '';
            this.form.shopname = '';
            this.form.remark = '';
            this.form.goPrice = '';
            this.form.logistics = '';
        },
        addData() {
            this.clearData();
            this.setdata = true;
            this.centerDialogVisible = true;
        },
        eilitData(d) {
            console.log(d);
            this.clearData();
            this.setdata = false;
            this.centerDialogVisible = true;
            this.form.name = d.name;
            this.form.phone = d.phone;
            this.form.shopname = d.shopname;
            this.form.remark = d.remark;
            this.form.goPrice = d.goPrice;
            this.form.logistics = d.logistics;
            this.form.id = d.id;
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
        getdataTexe() {
            console.log(localStorage.getItem('ms_username'), '缓存');
            // this.getData({
            //     phone: this.phoneCode
            // });
        },
        getDataset() {
            if (this.form.name == '') {
                this.centerDialogVisible = false;
                return;
            }
            this.loading = true;
            this.nowTime();
            console.log(this.form);
            if (this.setdata) {
                dataadd(this.form)
                    .then((res) => {
                        this.getData({
                            usercode: localStorage.getItem('ms_username'),
                            phone: this.phoneCode
                        });
                        this.clearData();
                        console.log(res);
                    })
                    .catch((err) => {
                        console.l401og(err);
                    });
            } else {
                getoneupdata(this.form)
                    .then((res) => {
                        this.getData({
                            usercode: localStorage.getItem('ms_username'),
                            phone: this.phoneCode
                        });
                        this.centerDialogVisible = false;
                        this.clearData();
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            this.loading = false;
        },
        handleClick(d) {
            console.log(d);
        },
        setGetLogistics(data, id, buler) {
            console.log(data, id, buler, '记录');
            let _this = this;
            getLogistics({
                ['logisticsdata']: data,
                ['id']: id
            })
                .then((res) => {
                    if (!buler) {
                        this.$message({
                            message: '物流更新完成',
                            type: 'success'
                        });
                    }
                    this.getData({
                        usercode: localStorage.getItem('ms_username'),
                        phone: _this.phoneCode
                    });
                    // console.log(res);
                })
                .catch((err) => {
                    this.$message.error('物流更新失败');
                    // console.log(err);
                });
        },
        getLogisticsDatas(d, buler) {
            if (!d.logistics) {
                this.$message.error('没有物流单号');
                return;
            }
            if (d.logistics)
                getLogisticsData({
                    mobile: d.phone,
                    number: d.logistics,
                    type: 'auto'
                })
                    .then((res) => {
                        console.log(res, '物流更新成功');
                        (this.logisticsDatatext = {}), (this.logisticsDatatext = res);
                        if (buler) this.showLogistics = true;
                        let text = `${res.result.list[0].time}-${res.result.list[0].status}`;
                        this.setGetLogistics(text, d.id, buler);
                    })
                    .catch((err) => {
                        this.$message.error('物流更新失败');
                        console.log(err, '物流更新失败');
                    });
        },
        async getData(d) {
            this.loading = true;
            await data(d)
                .then((res) => {
                    this.tableData = res.data;
                    // console.log(res.data);
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
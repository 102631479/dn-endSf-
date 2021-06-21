<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="账号">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="param.password" @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">Tips : 物流监控</p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    created() {},
    mounted() {},
    data: function () {
        return {
            usercode: [
                {
                    username: '18300692207',
                    password: '000000'
                },
                {
                    username: '18838107384',
                    password: '000000'
                },
                {
                    username: '15539738215',
                    password: '000000'
                },
                {
                    username: '18749282812',
                    password: '000000'
                }
            ],
            param: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    methods: {
        async submitForm() {
            var result = this.usercode.some((item) => {
                if (item.username == this.param.username) {
                    return true;
                }
            });
            if (!result) {
                this.$message.error('没有该用户');
                return;
            }
            await this.usercode.map((item, index) => {
                if (item.username == this.param.username) {
                    if (this.param.password == item.password) {
                        this.$refs.login.validate((valid) => {
                            if (valid) {
                                this.$message.success('登录成功');
                                localStorage.setItem('ms_username', this.param.username);
                                this.$router.push('/');
                            } else {
                                this.$message.error('请输入账号和密码');
                                console.log('error submit!!');
                                return false;
                            }
                        });
                    } else {
                        this.$message.error('密码错误');
                    }
                }
            });
            dd;
        }
    }
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 400%;
    background-image: linear-gradient(125deg, #27ae60, #2980b9, #e74c3c, #8e44ad, #27ae60, #2980b9, #e74c3c, #8e44ad);
    animation: bganimation 15s infinite;
    /* background-image: url(../../assets/img/login-bg.jpg);
        background-size: 100%; */
}
@keyframes bganimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}

.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}

.ms-content {
    padding: 30px 30px;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}

.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
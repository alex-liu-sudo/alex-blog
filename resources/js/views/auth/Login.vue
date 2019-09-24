<template>
    <div class="login-container">
            <el-row>
                <el-col :span="6" offset="9" class="login-box">
                    <el-card class="box-card">
                        <el-tabs v-model="activeName" stretch="true" @tab-click="handleClick">
                            <el-tab-pane class="tar-bar" label="微信扫码登录" name="first" >
                                <p class="first-p">微信扫码后点击“登录”</p>
                                <p class="second-p">即可完成账号绑定及登录。</p>
                                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569330304168&di=bf973fd7041c23faedaa0600c9dd1782&imgtype=0&src=http%3A%2F%2Fimg.zhichiwangluo.com%2Fzcimgdir%2Falbum%2Ffile_5afb9188d16d4.jpg" alt="">
                            </el-tab-pane>
                            <el-tab-pane class="tar-bar" label="账户密码登录" name="second" >
                                <el-form ref="form" :model="form">
                                    <el-row>
                                        <el-col :span="24">
                                                <el-input v-model="form.name" placeholder="请输入账号"></el-input>
                                        </el-col>
                                    </el-row>
                                    <el-row class="pwd-row">
                                        <el-col :span="24">
                                                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                                        </el-col>
                                    </el-row>
                                    <el-row class="tool-row">
                                        <el-col :span="6">
                                            自动登录
                                        </el-col>
                                        <el-col :span="18" class="forget-pwd">
                                            忘记密码
                                        </el-col>
                                    </el-row>
                                    <el-row class="submit-row">
                                        <el-col :span="24">
                                            <el-button type="primary" >提交</el-button>
                                        </el-col>
                                    </el-row>
                                </el-form>
                            </el-tab-pane>
                        </el-tabs>
                    </el-card>
                </el-col>
            </el-row>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                activeName: 'first',
                form: {
                    name: '',
                    password: '',
                }
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped lang="scss">

    .login-container {
        background: url('../../images/bg.jpg') no-repeat;
        background-size: 100%;
        min-height: 800px;
        text-align: center;

        .login-box {
            margin-top: 5rem;
        }
        .box-card {

        }

        .tar-bar {
            font-size: 0.8rem;
            color: rgba(0,0,0,.45);

            img {
                height: 15rem;
                width: 15rem;
            }
        }

        .second-p {
            margin-top: 0;
        }
        .first-p {
            margin-bottom: 0;
        }


        .pwd-row,
        .tool-row,
        .submit-row {
            margin-top: 1rem
        }

        .submit-row {
            button {
                width: 100%;
            }
        }
        .forget-pwd {
            text-align: right
        }
    }

</style>

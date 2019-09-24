<template>
    <el-card class="box-card">
        <el-row>
            <el-col :span="17">
                <el-col :span="24" class="card-title">
                    <div class="grid-content">
                        <span>微信扫小程序码实现网页端登录</span>
                    </div>
                </el-col>
                <el-col :span="24" class="card-title-tag">
                    <el-tag size="small" effect="plain" type="info" >
                        laravel
                    </el-tag>
                    <el-tag size="small" effect="plain" type="info" >
                        php
                    </el-tag>
                </el-col>

                <el-col :span="24" class="card-content">
                    <div class="grid-content">
                        常见的微信扫码登录有两种 1、[微信开放平台](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=&lang=zh_CN) 2、[微信服务号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)
                        这两种方式都需要提交企业资料认证和300元年费，有些想要学习或者自己的网站没有盈
                        这两种方式都需要提交企业资料认证和300元年费，有些想要学习或者自己的网站没有盈

                    </div>
                </el-col>

                <el-col :span="24" class="card-bottom">
                    <div class="grid-content">
                                <span>
                                    <i class="el-icon-user"></i> Alex
                                </span>
                        <span>
                                    <i class="el-icon-time"></i> 09-23 12:00
                                </span>
                        <span>
                                    <i class="el-icon-view"></i> 50
                                </span>
                        <span>
                                     <i class="el-icon-chat-dot-round"></i> 50
                                </span>
                    </div>
                </el-col>
            </el-col>
            <el-col :span="6" :offset=1>
                <div class="grid-content">
                    <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                </div>
            </el-col>

        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "home-card-content"
    }
</script>

<style scoped lang="scss">
    .card-title {
        font-weight: bold
    }

    .card-title-tag {
        margin-top: 0.25rem
    }

    .card-content {
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #666;
        height: 5.20rem;
    }

    .card-bottom {
        margin-top: 1rem;
        color: rgba(0,0,0,.45);
        font-size: 0.8rem;

        span {
            margin-right: 0.8rem;
        }
    }
</style>

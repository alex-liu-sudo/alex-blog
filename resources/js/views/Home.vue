<template>
    <div class="home-container">
        <head-top></head-top>
        <!--<el-card class="box-card">-->
            <!--<div slot="header" class="clearfix">-->
                <!--<span>卡片名称</span>-->
                <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
            <!--</div>-->
            <!--<div v-for="o in 4" :key="o" class="text item">-->
                <!--{{'列表内容 ' + o }}-->
            <!--</div>-->
        <!--</el-card>-->
        <!--<div class="el-page-header">-->
            <el-row class="el-page-header">
                    <el-col :span="24">
                        <el-col :span="24">
                            <div class="grid-content">
                                <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>文章列表</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </el-col>
                        <el-col :span="24" class="page-title">
                            <div class="grid-content bg-purple">
                                    文章列表
                            </div>
                        </el-col>
                    </el-col>
            </el-row>
       <!-- <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div>3</el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">4</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">4</div></el-col>
        </el-row>-->
        <!--</div>-->
        <main class="main">

        </main>


    </div>
</template>

<script>
    import HeadTop from '../views/layout/Header'
    import Breadcrumb from "../views/layout/Breadcrumb"

    export default {
        name: "Home",
        components: {
            HeadTop,
            Breadcrumb
        }
    }
</script>

<style scoped lang="scss">
        .el-page-header {
            padding: 0 10% 1rem;
            .breadcrumb {
                margin: 1rem 0;
            }

            .page-title {
                font-size: 1.5rem;
            }

        }

</style>

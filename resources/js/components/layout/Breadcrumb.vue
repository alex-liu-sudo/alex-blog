<template>
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
</template>

<script>
    export default {
        name: "Breadcrumb"
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

<template>
    <div class="home-container">
        <head-top></head-top>
        <breadcrumb></breadcrumb>
        <main class="main">
            <el-card class="box-card">
                <div class="tag-group">
                    <span class="tag-title">  所属标签:</span>
                    <el-tag
                            size="small"
                            v-for="item in items"
                            :key="item.label"
                            :type="item.type"
                            effect="plain"
                            class="tag-item"
                    >
                        {{ item.label }}
                    </el-tag>
                </div>
            </el-card>

            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
            <content-card></content-card>
        </main>

        <el-row id="footer" :gutter="20">

                <el-col :span="6" class="footer-item about-author">
                    <h4>关于作者</h4>
                    <img src="../images/logo.jpg" alt="logo" />

                </el-col>
                <el-col :span="6" class="footer-item">
                    <h4>书籍推荐</h4>

                    <div class="footer-item-row">
                        《 Learning PHP 》
                    </div>
                </el-col>
                <el-col :span="6" class="footer-item">
                    <h4>资源推荐</h4>
                    <div class="footer-item-row">
                        更多作品
                    </div>
                </el-col>
                <el-col :span="6" class="footer-item">
                    <h4>其他信息</h4>
                    <div class="footer-item-row">
                        GitHub
                    </div>
                    <div class="footer-item-row">
                        联系站长
                    </div>
                </el-col>

                <el-col :span="24" class="divider">
                </el-col>

                <el-col :span="24" class="copyright">
                    <el-col :span="24">
                        Ant Design ProAnt Design
                    </el-col>
                    <el-col :span="24">
                        <p>浙ICP备18099781号-6 | 浙公网安备 123123123123123 | 违法和不良信息举报</p>
                    </el-col>
                </el-col>

        </el-row>
    </div>
</template>

<script>
    import HeadTop from '../components/layout/Header'
    import Breadcrumb from "../components/layout/Breadcrumb"
    import ContentCard from "../components/ContentCard"

    export default {
        name: "Home",
        data() {
            return {
                items: [
                    { type: '', label: 'php' },
                    { type: '', label: 'laravel' },
                    { type: '', label: 'vue' },
                    { type: '', label: 'react' },
                    { type: '', label: 'linux' },
                    { type: '', label: 'golang' },
                ]
            }
        },
        components: {
            HeadTop,
            Breadcrumb,
            ContentCard
        }
    }
</script>

<style scoped lang="scss">

    .tag-group {
        .tag-title {
            font-size: 0.9rem;
        }
        .tag-item {
            margin: 0 0.5rem;
            cursor: pointer;
            font-size: 0.9rem;
            line-height: 1.3rem;
        }
        .tag-item:hover {
            background: #409eff;
            color: #fff;
        }
    }

    .main .box-card {
        margin-bottom: 1rem;
    }

    #footer {
        background: #1b1c1d;
        height: 20rem;
        color: white;
        padding: 1rem 10%;
        text-align: center;
        font-size: 0.8rem;

        .about-author {
            img {
                width: 5rem;
            }

        }

        .footer-item {
           border-right: 1px solid #555;
            height: 10rem;
        }
        .footer-item:nth-child(4) {
            border-right: 0
        }

        .divider {
            height: 1px;
            margin:1.5rem 0;
            background: #555
        }
        .copyright {
            font-weight: bold;
            font-size: 0.8rem;
            color: rgb(137, 137, 140);
        }

        .footer-item-row {
            color: #999;
        }
    }

</style>

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
        </main>
        <foot-bot></foot-bot>

    </div>

</template>

<script>
    import HeadTop from '../components/layout/Header'
    import FootBot from '../components/layout/Footer'
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
            FootBot,
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

</style>

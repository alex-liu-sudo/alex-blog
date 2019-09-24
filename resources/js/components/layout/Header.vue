<template>
    <header id="header">
        <el-row>
            <el-col :span=24>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item class="left">
                    </el-menu-item>

                    <el-menu-item>
                        <div class="logo">
                            <img src="../../images/logo.jpg" alt="logo">
                        </div>
                    </el-menu-item>

                    <el-menu-item index="1">文章列表</el-menu-item>

                    <el-menu-item class="right"  style="float: right">
                    </el-menu-item>

                    <el-submenu index="2"  style="float: right">
                        <template slot="title">
                            <el-avatar :size="40" @error="errorHandler">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569301114477&di=9defcf090e7bbcc0f02d3a0b0d93a44d&imgtype=0&src=http%3A%2F%2Fpic35.nipic.com%2F20131112%2F12114594_161351489112_2.jpg"/>
                            </el-avatar>
                             张三
                        </template>

                        <el-menu-item index="2-1">个人中心</el-menu-item>
                        <el-menu-item index="2-2">退出</el-menu-item>
                    </el-submenu>
                    <el-menu-item style="float: right">
                        <el-input v-model="input" prefix-icon="el-icon-search" placeholder="站内搜索"></el-input>
                    </el-menu-item>



                </el-menu>
            </el-col>
        </el-row>
    </header>

</template>

<script>
    import Breadcrumb from "./Breadcrumb"

    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        components: {
            Breadcrumb
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        onLoad() {
            console.log('test')
        }
    }
</script>

<style scoped lang="scss">
    .logo {
        img {
            height: 2.7rem;
            width: 5rem;
        }
        span {
            font-size: 1.5rem;
        }
    }

    .left,.right {
        width: 10%;
    }

</style>

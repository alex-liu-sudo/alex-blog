<template>
        <div class="home-container">
            <van-tabs animated swipeable sticky >
                <van-tab v-for="name in tabName" :title="name">
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                            <van-list class="content" v-model="loading" :finished="finished"  finished-text="-- 我也是有底线的 --" @load="onLoad">
                                <van-row class="activity-card" v-for="activity in activities">
                                    <van-col span="24" class="activity-header">
                                        <van-col span="4" class="activity-left">
                                            <img v-bind:src="activity.brandLogoUrl" alt="">
                                        </van-col>
                                        <van-col span="19" class="activity-right" >
                                            <van-col span="24" class="activity-right-title">
                                                <span  @click="skipDetail(activity)">{{ activity.brandName }}</span>
                                            </van-col>
                                            <van-col span="24" class="activity-right-desc">
                                                <span>
                                                    {{ activity.brandName }}{{ activity.classificationName == '其他' ? '':  activity.classificationName}}精选专卖店
                                                </span>
                                            </van-col>
                                        </van-col>
                                    </van-col>
                                    <van-col span="4"></van-col>
                                    <van-col  span="19" class="activity-content">
                                        <van-col  span="24" class="activity-tag" >
                                            <van-tag plain color="#f2826a">七天无理由退货</van-tag>
                                            <van-tag plain color="#f2826a">闪电发货</van-tag>
                                        </van-col>
                                        <van-col span="24" class="activity-detail" >
                                            <span @click="showDetail(activity.content)">
                                                   {{ activity.content }}...
                                            </span>
                                        </van-col>
                                        <van-col span="24">
                                            <van-grid :border="false" :column-num="3">
                                                <van-grid-item v-for="imageSrc in activity.activityPreviewImages">
                                                    <van-image @click="getImg(imageSrc)" v-bind:src="imageSrc" />
                                                </van-grid-item>
                                            </van-grid>
                                        </van-col>
                                        <!--<van-col span="6">-->
                                        <!--&lt;!&ndash;<span style="font-size: 9px">距开抢仅剩: 10:11:12</span>&ndash;&gt;-->

                                        <!--</van-col>-->
                                        <van-col span="19" offset="5" style="text-align: right">
                                            <van-button type="warning" plain size="small" @click="skipDetail(activity)">转发</van-button>
                                            <van-button type="warning" size="small"  @click="skipDetail(activity)">提醒</van-button>
                                            <van-button type="warning" size="small" @click="skipDetail(activity)">预览</van-button>
                                        </van-col>
                                    </van-col>

                                </van-row>
                            </van-list>
                    </van-pull-refresh>

                </van-tab>
            </van-tabs>
        </div>
</template>

<script>
    import { getActivityList } from '../api/home'
    import { ImagePreview, Dialog } from 'vant'

    export default {
        name: "Home",
        data() {
            return {
                show: true,
                tabName: [
                    '推荐','男装','女装','鞋类', '母婴儿童', '内衣配件'
                ],
                active: 0,
                count: 0,
                loading: false,//控制上拉加载的加载动画
                finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
                isLoading: false,//控制下拉刷新的加载动画
                activities: [],
            }
        },
        mounted() {
            // this.assign();
        },
        methods: {
            assign() {
                let activity = getActivityList();
                activity.then(resp => {
                    this.activities = resp.data.data;
                    console.log(this.activities)
                });

            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },
            getImg(imageSrc) {
                ImagePreview([
                    imageSrc
                ])
            },
            onLoad() {
                let activity = getActivityList();
                activity.then(resp => {
                    this.activities = resp.data.data;
                    setTimeout(() => {
                        this.loading = false;
                        this.finished = true
                    }, 500);
                }).catch(reason => {
                    this.$toast('获取数据失败: '+ reason);
                });
            },
            skipDetail(activity) {
                sessionStorage.activity = JSON.stringify(activity);
               this.$router.push('/detail')
            },
            showDetail(content) {
                Dialog.alert({
                    title: '消息详情',
                    message: content
                }).then(() => {
                    // on close
                });
            }
        }
    }
</script>

<style scoped>
    .content {
        background-color: #f3f3f3;
        padding: 6px 15px;
        min-height: 1000px;
        padding-bottom: 20px;
    }
    .activity-card {
        /*height: 350px;*/
        border-radius: 10px;
        margin-top: 5px;
        margin-bottom: 10px;
        background: #fff;
        padding: 10px
    }
    .activity-header {
        height:70px;
        background: #fff;
        /*padding: 10px*/
    }
    .activity-header .activity-left {
        width: 50px;
        height: 50px
    }
    .activity-header .activity-left img {
        height: 100%;
        width: 100%;
        border-radius: 3px;
        border: 1px solid #eee
    }
    .activity-right {
        margin-left: 10px
    }
    .activity-right-title {
        line-height: 30px;
        font-size: 15px;
        /*background: yellow;*/
        color: #1b4b72;
    }
    .activity-right-desc {
        color: #333;
        font-size: 12px
    }
    .activity-content {
        /*background: blue;*/
        /*height:200px;*/
        margin-left: 10px;
        margin-top: -20px
    }
    .activity-tag {
        /*background: orange;*/
        height: 20px;
        margin-bottom: 5px;
    }
    .activity-detail {
        font-size: 12px;
        height: 35px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:normal;
        /*white-space: warp;*/
    }
    .van-grid-item .van-image {
        height: 65px;
        /*width: 60px*/
    }
    .van-grid-item .van-image img {
        height: 65px;
        /*width: 60px*/
    }
    .van-grid-item__content {
        padding: 8px;
    }

</style>

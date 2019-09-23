<template>
        <div class="detail-container">
            <!--<van-nav-bar left-text="返回" style="background-color: rgba(0,0,0,0);" left-arrow >-->
            <!--</van-nav-bar>-->
            <van-row>
                <van-col span="24" class="nav-bar">
                    <van-col span="4" class="back-btn">
                        <van-icon name="arrow-left" @click="back"/>
                    </van-col>
                </van-col>

                <van-col span="24" >
                    <van-list class="content" v-model="loading" :finished="finished"  finished-text="-- 我也是有底线的 --" @load="onLoad">
                       <van-row class="shop-card">
                            <van-col span="7" class="shop-card-icon">
                                <img :src="activity.brandLogoUrl" height="100%" width="100%" alt="">
                            </van-col>
                           <van-col span="17">
                               <van-col span="14">{{ activity.brandName }}</van-col>
                               <van-col span="10" style="text-align: right">
                                   <van-button type="warning" size="small" icon="like-o">
                                       关注品牌
                                   </van-button>
                               </van-col>
                           </van-col>
                           <van-col span="24" class="shop-card-desc">
                               <span>品牌活动 | {{ activity.content }}</span>
                               <a href="">详情 ></a>
                           </van-col>
                           <van-col span="24" class="shop-card-tool-btn" style="text-align: right">
                               <van-button  plain size="small">提醒我</van-button>
                               <van-button  plain size="small">转发活动</van-button>
                               <van-button  plain size="small">批量转发</van-button>
                           </van-col>
                           <van-col span="24" class="shop-card-detail">
                               <van-col span="24" class="shop-card-detail-item">
                                   <van-col span="3">发货</van-col>
                                   <van-col span="21" class="shop-card-detail-content">{{ activity.deliveryDesc }}</van-col>
                               </van-col>
                               <van-col span="24" class="shop-card-detail-item" style="margin-bottom: 0px">
                                   <van-col span="3">邮费</van-col>
                                   <van-col span="21" class="shop-card-detail-content">全场包邮</van-col>
                               </van-col>
                           </van-col>
                       </van-row>

                        <van-row class="goods-card" v-for="goods in goodsList.items">
                            <van-col span="24" class="goods-card-header">
                                {{ goods.activityItemNo }}.{{ goods.shortName }}
                            </van-col>
                            <van-col span="24" class="goods-card-price">
                                <van-col span="6">¥{{ goods.itemSkus[0].settlementPrice }}</van-col>
                                <van-col span="18" style="text-align:right">建议售价：¥{{ goods.itemSkus[0].settlementPrice }}</van-col>
                            </van-col>
                            <van-col span="24" class="goods-card-image">
                                <van-grid :border="false" :column-num="goods.itemImgs.count < 5 ? 2 : 3">
                                    <van-grid-item v-for="image in goods.itemImgs">
                                        <van-image @click="getImg(image.url)" :src="image.url" />
                                    </van-grid-item>

                                </van-grid>
                            </van-col>
                            <van-col span="24" class="goods-card-detail">
                                <van-col span="24" class="goods-card-detail-content">宝贝编号：{{ goods.activityItemNo }}</van-col>
                                <van-col span="24" class="goods-card-detail-content">{{ goods.fullName }}({{ goods.makeup }} 市场价：{{ goods.listPrice }})</van-col>
                                <van-col span="24" class="goods-card-detail-content">{{ goods.description }}</van-col>
                                <van-col span="24" class="goods-card-detail-content">宝贝款号：{{ goods.globalCode }}</van-col>
                                <van-col span="24" class="goods-card-detail-content">宝贝规格：
                                    <span v-for="sku in goods.itemSkus">{{ sku.specifications }} </span>
                                </van-col>

                            </van-col>
                            <van-col span="24" class="goods-card-model">
                                <van-tag plain type="danger" class="sku" v-for="sku in goods.itemSkus">{{ sku.specifications }}</van-tag>
                            </van-col>
                            <van-col span="24" style="text-align:right; margin-top: 10px">
                                <van-button type="warning" plain size="small">客服</van-button>
                                <van-button type="warning" plain size="small">转发</van-button>
                            </van-col>
                        </van-row>

                    </van-list>
                </van-col>
            </van-row>

        </div>
</template>

<script>
    import { getGoodsList } from '../api/home'
    import { ImagePreview } from 'vant'

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
                activity: {},
                goodsList: {},
            }
        },
        mounted() {

        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },
            getImg(imageUrl) {
                ImagePreview([
                    imageUrl
                ])
            },
            onLoad() {
                this.activity = JSON.parse(sessionStorage.activity);

                let param = {
                  'activityID': this.activity.activityUuid
                };

                getGoodsList(param).then(resp => {
                   this.goodsList = resp.data.data[0];
                    setTimeout(() => {
                        this.loading = false;
                        this.finished = true
                    }, 500);
                });


            },
            back() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .content {
        padding: 3px 15px;
    }
    .detail-container {
        background: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517945160,456794165&fm=26&gp=0.jpg') no-repeat top;
        background-color: #f3f3f3;

        min-height: 1000px;
        background-size:100% 200px;
    }
    .nav-bar {
        height: 50px;
        margin-bottom: 30px;
    }
    .back-btn {
        height: 50px;
        padding: 15px
    }
    .shop-card {
        background: #fff;
        border-radius: 10px;
        padding: 15px;
        box-shadow: #0a0302;
    }
    .shop-card-icon img {
        width: 80px;
        height: 80px;
        margin-top:-40px;
        border:1px solid #eee;
        border-radius: 5px;

    }
    .shop-card-desc {
        font-size:12px;
        height: 35px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:normal;
        color: #444
    }
    .shop-card-tool-btn {
        padding: 8px 0;
    }
    .shop-card-detail {
        padding-top: 10px;
        border-top: 1px dashed #eee;
        font-size: 12px
    }
    .shop-card-detail-content {
        color: #666
    }
    .shop-card-detail-item {
        margin-bottom: 8px;
    }

    .goods-card {
        background: #fff;
        border-radius: 10px;
        padding: 15px;
        box-shadow: #0a0302;
        margin-top:10px
    }
    .goods-card-header {
        line-height: 30px;
        font-size: 13px;
        color: #333;
        font-weight: bold;
        /*background: green;*/
        border-bottom: 1px solid #eee;
    }
    .goods-card-price {
        line-height: 30px;
        color: red;
        font-size: 13px;
    }
    .goods-card-detail-content {
        padding-top: 5px;
        font-size: 12px;
        color: #666
    }
    .goods-card-model {
        background: #efefef;
        padding: 10px;
        margin-top: 8px;
    }
    .van-grid-item__content {
        padding: 3px
    }
    .van-image__img {
        border: 1px solid #eee;
        height: 120px;
        border-radius: 3px
    }
    .sku {
        margin-right:10px
    }
</style>

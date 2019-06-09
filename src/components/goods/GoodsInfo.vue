<template>
    <div class="goodsinfo-container">
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span style="color:red;font-size:16px">￥{{ goodsinfo.sell_price }}</span>
                    </p>
                    <p>购买数量：<numbox></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity}}</p>
                    <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbotu: [],
            goodsinfo: {}
        }
    },
    created() {
        this.getLunbotu();
        this.getGoodsInfo();
    },
    methods: {
        getLunbotu() {
            this.$jsonp('' + this.id, {}).then(result => {
                if(result.status === 0) {
                    //先循环轮播图数组的每一项，为item添加img属性，因为轮播图组件中，只认识item.img，不认识item.src
                    result.message.forEach(item => {
                        item.img = item.src;
                    });
                    this.lunbotu = result.message;
                }
            })
        },
        getGoodsInfo() {
            this.$jsonp('' + this.id).then(result => {
                if(result.status === 0) {
                    this.goodsinfo = result.message[0];
                }
            })
        }
    },
    components: {
        swiper,
        numbox
    }
}
</script>
<style scoped>
.goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
}
.mui-card-footer {
    display: block;
}
.mui-card-footer button {
    margin: 15px 0;
}
</style>

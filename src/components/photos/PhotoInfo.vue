<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>
        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id: this.$router.params.id,
            photoinfo: {},
            list: []
        }
    },
    created() {
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods: {
        getPhotoInfo() {
            this.$jsonp(''+ this.id, {}).then(result => {
                if(result.status === 0) {
                    this.photoinfo = result.message[0]
                }
            }).catch(err => {
                Toast("加载失败")
            })
        },
        getThumbs() {
            this.$jsonp(''+ this.id, {}).then(result => {
                if(result.status === 0) {
                    result.message.forEach(item => {
                        item.w = 600
                        item.h = 400
                    });
                    this.list = result.message
                }
            }).catch(err => {
                Toast("加载失败")
            })
        }
    },
    components: {
        'cmt-box': comment
    }
}
</script>
<style scoped>
.photoinfo-container {
    padding: 3px;
}
.photoinfo-container h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
}
.photoinfo-container .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
.photoinfo-container .content {
    font-size: 13px;
    line-height: 30px;
}
.photoinfo-container .thumbs img {
    margin: 10px;
    box-shadow: 0 0 9px #999;
}
</style>

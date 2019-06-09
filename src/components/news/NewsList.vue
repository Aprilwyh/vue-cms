<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dateFormat }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            newsList: []
        };
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            this.$jsonp("http://192.168.1.113:8888/vue-cms/getJsonp/getnewslist", {}).then((result) => {
                //alert(result.message);
                this.newsList = result.message;
                console.log(result.message);		                          
            }).catch(err=>{
                console.log(err);
            })

            // this.$http.get('http://192.168.1.113:8888/vue-cms/getAll').then(result => {
            //     if(result.body.status === 0) {
            //         this.newsList = result.body.message;
            //     }else {
            //         Toast("获取新闻列表失败");
            //     }
            // })
        }
    }
}
</script>
<style scoped>
.mui-table-view li h1{
    font-size: 14px;
}
.mui-table-view .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>

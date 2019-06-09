<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
            <img :src="item.img" alt="" :class="{ full: isfull }">
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    props: ["lunbotuList", "isfull"]
}
</script>
<style scoped>
.mint-swipe {
    height: 200px;
}
.mint-swipe-item {
    text-align: center;
}
.mint-swipe-item img {
    width: 100%;
    height: 200px;
}
/* .mint-swipe-item:nth-child(1) {
    background-color: pink;
}
.mint-swipe-item:nth-child(2) {
    background-color: lightgreen;
}
.mint-swipe-item:nth-child(3) {
    background-color: blueviolet;
} */
.full {
    width: 100%;
}
</style>

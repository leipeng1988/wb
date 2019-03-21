<template>
  <div class="box">
    <!-- 轮播图, -->
    <index-section :lunbo="recommend.lunboPic"></index-section>
    <!-- 品牌 -->
    <index-brand></index-brand>
    <!-- 本月爆款 -->
    <index-faddish></index-faddish>
    <!-- 闪购 男士 女士 潮人 -->
    <index-sale :sales="recommend.sale"></index-sale>
    <!-- 尊享服务 -->
    <index-server></index-server>
    <!-- 为您推荐 -->
    <index-recommend :recos="recommend.recommendPro"></index-recommend>

  </div>

</template>

<script>
    import indexSection from "./indexSection"
    import indexBrand from "./indexBrand"
    import indexFaddish from "./indexFaddish"
    import indexSale from "./indexSale"
    import indexServer from "./indexServer"
    import indexRecommend from "./indexRecommend"
    export default {
        name: "indexContent",
        props:["recommend"],
        components:{
          indexSection,
          indexBrand,
          indexFaddish,
          indexSale,
          indexServer,
          indexRecommend
        }
    }
</script>

<style scoped>

  .box{
    -webkit-flex:1;
    overflow-y: auto;
  }
</style>

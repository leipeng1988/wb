<template>
  <section>
    <div class="pic">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) of lunbo"><img :src="i"></div>
          <!--<div class="swiper-slide"><img src="../../assets/img/pic01.jpg"></div>-->
          <!--&lt;!&ndash;<div class="swiper-slide"><img src="../../assets/img/pic01.jpg"></div>&#45;&#45;-->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="section">
      <div class="sectionA">
        <img src="../../assets/img/section01.jpg" alt="">
        <span>男表</span>
      </div>
      <div class="sectionA">
        <img src="../../assets/img/section01.jpg" alt="">
        <span>男表</span>
      </div>
      <div class="sectionA">
        <img src="../../assets/img/section01.jpg" alt="">
        <span>男表</span>
      </div>
      <div class="sectionA">
        <img src="../../assets/img/section01.jpg" alt="">
        <span>男表</span>
      </div>
    </div>
    <div class="sectionB">
      <img src="../../assets/img/section02.jpg" alt="">
    </div>
  </section>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "indexSection",
      props:["lunbo"],
        methods:{
           _initSwiper(){
             new Swiper('.swiper-container', {
               direction: 'horizontal',
               loop: true,
               autoplay: {
                 delay: 3000,
                 stopOnLastSlide: false,
                 disableOnInteraction:false,
               }
             })
           }
        },
      updated(){
        this._initSwiper()
      }
    }
</script>

<style scoped>
  @import "../../../node_modules/swiper/dist/css/swiper.css";
  .pic{
    width:100%;
    height:2.5rem;
    background: #d9d9e1;
    position: relative;
  }
  .sectionA{
    width:.53rem;
  }
  .section{
    background: #f8f8f8;
    height:.76rem;
    padding-top:.2rem;
    display: flex;
    justify-content:space-around;
  }
  .swiper-container img{
    height:2.5rem;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    height:2.5rem;
  }
  .swiper-pagination{
    position: absolute;
    top:1.33rem;;
  }
  .sectionA img{
    display: block;
    width:.4rem;
    height:.4rem;
    margin:0 auto;
  }

  .sectionA span{
    font-size:.1rem;
    display: block;
    text-align: center;
    margin-top:5px;
  }
  .sectionB img{
    width:3.51rem;
    height:1rem;
    display: block;
    margin:0 auto;
    margin-top: .16rem;
    margin-bottom: .3rem;
  }

</style>

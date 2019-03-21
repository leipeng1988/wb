<template>
  <!-- 租赁列表 -->
  <div class="sharedlist">
    <div class="sharedlistA">
      <div class="sharedlistLeft">
        <span>综合</span>
        <span></span>
      </div>
      <div class="sharedlistCenter">
        <span>|</span>
      </div>
      <div class="sharedlistRight">
        <span>筛选</span>
        <img src="../../assets/img/shared.01.jpg" alt="">
      </div>
    </div>
    <div class="sharedlistB">
      <div class="sharedlistBA" v-for="(item,index) in data">
        <img :src="item.imgs">
        <div class="sharedlistBb">
          <div class="sharedlistBc">
            <span>0租金</span>
            <span>价值￥{{item.pri}}</span>
          </div>
          <span class="sharedlistBd">￥{{item.pri}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sharedList",
        props:["data"]
    }
</script>

<style scoped>
  /* 租赁列表 */
  .sharedlistA{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: .36rem;
    box-shadow: 0px 3px 6px 3px #f4f4f4;
  }
  .sharedlistB{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .sharedlistLeft{
    display: flex;
    align-items: center;
  }
  .sharedlistRight{
    display: flex;
    align-items: center;
  }
  .sharedlistLeft span:nth-of-type(1){
    font-size:.12rem;
    display: block;
    margin-right:5px;
  }
  .sharedlistLeft span:nth-of-type(2){
    display: block;
    width:0;
    height:0;
    border:.05rem solid  transparent;
    border-top-color: #e9a06b;
  }
  .sharedlistCenter span{
    display:block;
    font-size:.13rem;
    background:#c4c4c4;
    width:2px;
  }
  .sharedlistRight span{
    font-size:.13rem;
    color:#505050;
    display: block;
    margin-right:5px;
  }
  .sharedlistRight img{
    display: block;
    width:.12rem;
    height:.12rem;
  }
  .sharedlistBA{
    width:1.66rem;
    border-radius: 7px;
    margin-top:10px;
  }
  .sharedlistBb{
    background: #f7f7f7;
    padding-top:.13rem;
  }
  .sharedlistBc{
    display: flex;
    margin-left: .14rem;
  }
  .sharedlistBc span:nth-of-type(1){
    font-size:.12rem;
    color:#fff;
    display: block;
    width:.36rem;
    height:.17rem;
    background: #d6ad7d;
  }
  .sharedlistBc span:nth-of-type(2){
    font-size:.1rem;
    color:#9e9e9e;
    display: block;
  }
  .sharedlistBd{
    font-size:.13rem;
    display: block;
    margin-left: .14rem;
    line-height: .34rem;
  }
  .sharedlistBA img{
    width:1.66rem;
    height:1.7rem;
    display: block;
  }
</style>

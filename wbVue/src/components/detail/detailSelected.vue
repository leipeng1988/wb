<template>
  <!-- 已选 -->
  <div class="selected">
    <div class="spec">
      <div class="specB">
        <span class="specC">已选</span>
        <div class="specA">
          <span>钢&nbsp银色&nbsp精钢&nbsp1个</span>
          <span>型号T006</span>
        </div>
      </div>
      <img class="specD" src="../../assets/img/detail05.jpg" alt="">
    </div>
    <div class="spec">
      <div class="specB">
        <span class="specC">领券</span>
        <div class="specA">
          <span>一张券:<i class="money">爱宝石现金券</i></span>
        </div>
      </div>
      <img class="specD" src="../../assets/img/detail05.jpg" alt="">
    </div>
    <div class="spec">
      <div class="specB">
        <span class="specC">分期</span>
        <div class="specA">
          <span>月供480.8元X12期<i class="payment">免息免手续费</i></span>
        </div>
      </div>
      <img class="specD" src="../../assets/img/detail05.jpg" alt="">
    </div>
    <div class="spec">
      <div class="specB">
        <span class="specC">配送</span>
        <div class="specA">
          <span>现有货&nbsp免运费</span>
          <span>三天内发货，支持货到付款</span>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="specB">
        <span class="specC" id="serverA">服务</span>
        <div class="specA server" id="server">
          <span>正品保障</span><span>正规发票</span><span>假一赔三</span>
          <span>7天退换</span><span>全球联保</span><span>免息分期</span>
        </div>
      </div>
      <img class="specD" src="../../assets/img/detail05.jpg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "detailSelected"
    }
</script>

<style scoped>
  /* 已选 */
  .selected{
    background: #f1f1f1;
    padding-top:.1rem;
    padding-bottom: .11rem;
  }
  .specC{
    font-size:.13rem;
    color:#8b8b8b;
    display: block;
    margin-right:.17rem;
  }

  .specA span:nth-of-type(1){
    font-size:.12rem;
    font-weight:700;
    display: block;
  }

  .specA span:nth-of-type(2){
    font-size:.1rem;
    display: block;
  }

  .specD{
    display: block;
    width:.19rem;
    height:7px;
    margin-right:.16rem;
  }
  .spec{
    display:flex;
    width:3.57rem;
    height:.65rem;
    align-items: center;
    margin:0 auto;
    border-radius: 4px;
    background: #fff;
    justify-content: space-between;
    margin-bottom:.11rem;
  }
  .specB{
    display: flex;
    margin-left:.18rem;
  }
  .money{
    font-size:.11rem;
    color:#c33636;
  }
  .payment{
    font-size:.11rem;
    color:#c33636;
    font-weight:100 ;
    border:1px solid #c33636;
    padding:3px;
    margin-left:7px;
  }
  #server span{
    font-size:.11rem;
    color:#8c8c8c;
    display: block;
  }
  #server{
    width:2.22rem;
    display: flex;
    flex-wrap: wrap;
  }
  #server span{
    line-height: .25rem;
  }
  #server span:nth-of-type(2){
    margin-left: .39rem;
    margin-right:.36rem;
  }
  #server span:nth-of-type(5){
    margin-left: .39rem;
    margin-right:.36rem;
  }
  #serverA{
    margin-top:2px;
    width:.35rem;
    height:.18rem;
    background: #f7f7f7;
    text-align: center;
    line-height: .16rem;
  }

</style>

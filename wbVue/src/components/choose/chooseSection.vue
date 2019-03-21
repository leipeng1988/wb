<template>
  <section>
    <ul class="chooseLeft">
      <li>
        <span class="chooseSp" @click="show">推荐</span>
        <div class="chooseRight">
          <img src="../../assets/img/choose01.jpg">
          <div class="chooseRightA">
            <span></span>
            <span>猜你喜欢</span>
            <span></span>
          </div>
          <div class="chooseRightB">
            <div class="chooseRightC">
              <img src="../../assets/img/choose02.jpg" alt="">
              <span>机械表</span>
            </div>
            <div class="chooseRightC">
              <img src="../../assets/img/choose02.jpg" alt="">
              <span>机械表</span>
            </div>
            <div class="chooseRightC">
              <img src="../../assets/img/choose02.jpg" alt="">
              <span>机械表</span>
            </div>
            <div class="chooseRightC">
              <img src="../../assets/img/choose02.jpg" alt="">
              <span>机械表</span>
            </div>
            <div class="chooseRightC">
              <img src="../../assets/img/choose02.jpg" alt="">
              <span>机械表</span>
            </div>
            <div class="chooseRightC">
              <img src="../../assets/img/choose02.jpg" alt="">
              <span>机械表</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <span class="chooseSp" @click="Show">顶级品牌</span>
        <div class="chooseRight">222</div>
      </li>
      <li>
        <span class="chooseSp" @click="Show">奢华品牌</span>
        <div class="chooseRight">333</div>
      </li>
      <li>
        <span class="chooseSp" @click="Show">高级品牌</span>
        <div class="chooseRight">444</div>
      </li>
      <li>
        <span class="chooseSp">轻奢时尚</span>
        <div class="chooseRight">555</div>
      </li>
      <li>
        <span class="chooseSp">年轻潮牌</span>
        <div class="chooseRight">666</div>
      </li>
      <li>
        <span class="chooseSp">国产智能</span>
        <div class="chooseRight">777</div>
      </li>
      <li>
        <span class="chooseSp">表带</span>
        <div class="chooseRight">888</div>
      </li>
      <li>
        <span class="chooseSp">维修保养</span>
        <div class="chooseRight">999</div>
      </li>
      <li>
        <span class="chooseSp">二手商城</span>
        <div class="chooseRight">aaa</div>
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "chooseSection",
        methods:{
          Show() {
            function t(str) {
              if (str.charAt(0) == "#") {
                return document.getElementById(str.substring(1));
              } else if (str.charAt(0) == ".") {
                return document.getElementsByClassName(str.substring(1));
              } else {
                return document.getElementsByTagName(str);
              }
            }

            var chs = t(".chooseSp");
            var divs = t(".chooseRight");
            for (var i = 0; i < chs.length; i++) {
              chs[i].index = i;
              chs[i].onclick = function () {
                for (var j = 0; j < divs.length; j++) {
                  divs[j].style.display = "none";
                }
                divs[this.index].style.display = "block";
              }
            }
          }
        }
    }
</script>

<style scoped>
  section{
    flex:1;
    overflow-y: auto;
  }
  /* 品牌 */
  .chooseLeft{
    position: relative;
    height:6rem;
  }
  .chooseSp{
    display: block;
    width:.79rem;
    height:.44rem;
    border-bottom:1px solid #eeeeee;
    font-size:.1rem;
    line-height: .44rem;
    text-align: center;
    border-right:2px solid #eee;
  }
  .chooseRight{
    position: absolute;
    left:.8rem;
    top:0px;
    display: none;
  }

  .chooseRight img{
    display: block;
    width:2.68rem;
    height:.95rem;
    margin-left:.13rem;
    margin-top:.2rem;
    margin-bottom: .3rem;
  }
  .chooseRightA{
    display: flex;
    align-items: center;
    margin-left: .97rem;
  }
  .chooseRightA span:nth-of-type(1){
    display: block;
    width: .15rem;
    height:2px;
    background: #eeeeee;
  }
  .chooseRightA span:nth-of-type(2){
    display: block;
    font-size:.11rem;
    color:#eee;
    width:.62rem;
    text-align: center;
  }
  .chooseRightA span:nth-of-type(3){
    display: block;
    width: .15rem;
    height:2px;
    background: #eeeeee;
  }
  .chooseRight .chooseRightB{
    display: flex;
    flex-wrap: wrap;
  }
  .chooseRightB .chooseRightC{
    margin-left:.31rem;
    margin-right:.04rem;
  }
  .chooseRightB .chooseRightC img{
    width:.52rem;
    height:.52rem;
    display: block;
    margin:0 auto;
    margin-top:.13rem;
  }
  .chooseRightB .chooseRightC span{
    font-size:.11rem;
    display: block;
    margin:0 auto;
    margin-top:.13rem;
    text-align: center;
  }
  .chooseLeft li:nth-of-type(1) .chooseRight{
    display: block;
  }




</style>

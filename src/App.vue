<template>
<!-- <body  background-color="#E3F2FD;"> -->
<div id="app">
  <div class="header">
    header
  </div>
  <div class="left">
                  <nav class="panel">
               <p class="panel-heading">
                 Repositories
               </p>

               <router-link to="/Bangkok"><a class="panel-block ">
                 <span class="panel-icon">
                   <i class="fa fa-book"></i>
                 </span>
                 กรุงเทพ
               </a>
              </router-link>
               <router-link to="/kungthai"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-book"></i>
                 </span>
                กรุงไทย
               </a>
               </router-link>
                <router-link to="/kungsri"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-book"></i>
                 </span>
                 กรุงศรี
               </a>
             </router-link>
                 <router-link to="/kasikornthai"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                  กสิกรไทย
               </a>
                </router-link>
               <router-link to="/kiatnakin"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-book"></i>
                 </span>
                 เกียรตนาคินิ
               </a>
               </router-link>
                <router-link to="/tmb"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                 ทหารไทย
               </a>
               </router-link>
              <router-link to="/cimb"> <a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                 ซีไอเอ็มบี
               </a>
                </router-link>
               <router-link to="/thanachart"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                 ธนชาติ
               </a>
               </router-link>
               <router-link to="/uob"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                 ยูโอบี
               </a>
               </router-link>
               <router-link to="/standard"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                 สแตนดาร์ดชาร์เตอร์ด
               </a>
             </router-link>
                <router-link to="/gsb"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                  ออมสิน
                </a>
               </router-link>
               <router-link to="/ghb"><a class="panel-block">
                 <span class="panel-icon">
                   <i class="fa fa-code-fork"></i>
                 </span>
                 อาคารสงเคราะห์
               </a>
             </router-link>


               <div class="panel-block">
                 <button class="button is-primary is-outlined is-fullwidth">
                   Reset all filters
                 </button>
               </div>
              </nav>
    </div>
  <div class="center">
    <router-view></router-view>
  </div>

  <div class="right">
    right555555
  </div>

</div>
</template>

<script>
import Bangkok from './components/Bangkok'
import Kungthai from './components/Kungthai'
import Kungsri from './components/Kungsri'
import Kasikornthai from './components/Kasikornthai'
import Kiatnakin from './components/Kiatnakin'
import Tmb from './components/Tmb'
import Cimb from './components/Cimb'
import Thanachart from './components/Thanachart'
import Uob from './components/Uob'
import Standard from './components/Standard'
import Gsb from './components/Gsb'
import Ghb from './components/Ghb'
export default {
  name: 'app',
  components: {
    Bangkok,
    Kungthai,
    Kungsri,
    Kasikornthai,
    Kiatnakin,
    Tmb,
    Cimb,
    Thanachart,
    Uob,
    Standard,
    Gsb,
    Ghb
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:  #0C0D0D;
}

.header {
  width: 100%;
  height: 10vh;
  background-color: #2196F3;
}

.left {
  width: 20%;
  float: left;
background-color:#E1F5FE;
}
.center {
  float: left;
  width: 60%;
    background-color: white;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    height: 100%;
    text-align: left;
}
.right {
  float: right;
  width: 20%;
  background-color: #47E6EC;
  height: 100%;

}

.panel-heading{
    background-color: yellow;
}
</style>

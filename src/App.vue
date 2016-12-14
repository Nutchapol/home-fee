<template>
<div id="app">
  <div class="header">
    header
  </div>
  <div class="left">
    <aside class="menu">
      <ul class="menu-list" >
        <li>
          <a class="active" href="#">Manage Your </a>
          <ul>
            <li><a href="#">Members</a></li>
            <li><a href="#">Plugins</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
            <li><a href="#">Addmember</a></li>
          </ul>

      </ul>
    </aside>  </div>
  <div class="center">
    wwwww
  </div>
  <div class="right">
    right
  </div>
</div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  height: 10vh;
  background-color: blue;
}

.left {
  width: 20%;

  float: left;
/*background-color: green;*/
}
.center {
  float: left;
  background-color: yellow;
  width: 60%;
}
.right {
  float: right;
  width: 20%;
}
.menu-list {
    background-color:#FF8A80;
}
.active {
    background-color:#eeeeee;
}

</style>

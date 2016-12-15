<template>
  <div class="standard">


<table border = "1">
<tr>
  <td rowspan="3"> วงกู้อัตโนมัติ</td>
  <td rowspan="3">ทางเลือก</td>
    <td colspan="6">อัตราดอกเบี้ย(ต่อปี)</td>
</tr>
<tr>
  <td colspan="2"> ปีที่ 1 </td>
    <td colspan="2"> ปีที่ 2 </td>
        <td rowspan="2"> ปีที่ 3 </td>
        <td rowspan="2"> หลังจากนั้น </td>
</tr>
<tr>
  <td>เดือนที่1-6</td>
  <td>เดือนที่7-12</td>
  <td>เดือนที่3-18</td>
  <td>เดือนที่3-18</td>
</tr>

<tr>
  <td>ต่ำกว่า 5 แสน บาท</td>
  <td>แบบที่ 1 </td>
  <td colspan="2">3% </td>
  <td colspan="3"> MLR -0.25% </td>
  <td > MLR -0.25% </td>
</tr>
</table>
<br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'Standard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

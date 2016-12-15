<template>
  <div class="kasikornthai">


<table  border = "1" >
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
  <td rowspan="7">วงเงินให้กู้สูงสุด<br>กู้ได้ไม่เกิน 80% <br>ของราคาซื้อขาย <br>และไม่เกิน 80% <br>ของราคาประเมิน</td>
  <td>แบบที่ 1 </td>
  <td colspan="2">2.95% </td>
  <td colspan="4">MRR-0.75%</td>
</tr>

<tr>
  <td>แบบที่ 2 </td>
  <td colspan="4">4.85% </td>
  <td colspan="2">MRR-0.75%</td>
</tr>
<tr>
  <td>แบบที่ 3 </td>
  <td colspan="5">5.50%</td>
  <td colspan="1">MRR-0.75%</td>
</tr>
<tr>
  <td>แบบที่ 4 </td>
  <td colspan="2">MRR-4.95%</td>
  <td colspan="5">MRR-0.75%</td>
</tr>
<tr>
  <td>แบบที่ 5 </td>
  <td colspan="4">MRR-2.90%</td>
  <td colspan="2">MRR-0.75%</td>
</tr>
<tr>
  <td>แบบที่ 6 </td>
  <td colspan="5">MRR-2.20%</td>
  <td colspan="1">MRR-0.75%</td>
</tr>
<tr>
  <td>แบบที่ 7 </td>
  <td colspan="7">MRR-1.60%</td>

</tr>
</table>
<br><br><br><br><br>

  </div>
</template>

<script>
export default {
  name: 'Kasikornthai',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#kasikornthai {
}
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

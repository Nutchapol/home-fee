<template>
  <div class="standard">
    <h1 text-align ="right" >
      ให้ส่วนลดเงินต้นได้ทันทีและประหยัดดอกเบี้ยเมื่อชำระเงินเกินค่างวดที่ธนาคารฯ กำหนด
      เบิกถอนเงินส่วนที่ชำระเกินได้ตามต้องการ ตลอด 24 ชม ผ่าน ATM<br><br><br>

    </h1>

<table border = "1">
<tr>
  <td rowspan="3">ประเภท</td>
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
  <td>อัตราดอกเบี้ยคงที่3ปี</td>
  <td>แบบที่ 1 </td>
  <td colspan="5">5.04%</td>
  <td > 6.54% </td>
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

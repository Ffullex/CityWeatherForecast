<template>
  <div class="WeatherApp">
    <div class="header"> {{msg}}</div>
    <div>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="date"
            label="Date"
            width="180">
        </el-table-column>
        <el-table-column
            prop="weather"
            label="Name"
            width="180">
        </el-table-column>
      </el-table>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
  },
  data() {
    return {
      msg: 'Weather',
      tableData: [{
        date: 'Monday',
        weather: 'Cold',
      }, {
        date: 'Tuesday',
        weather: 'Dry',
      }, {
        date: 'Wednesday',
        weather: 'Hot',
      }, {
        date: 'Thursday',
        weather: 'Winter storm',
      }, {
          date: 'Friday',
          weather: 'Hail',
      }, {
          date: 'Saturday',
          weather: 'Thunderstorm',
      }, {
          date: 'Sunday',
          weather: 'Blizzard',
    }]
    }

}
}
</script>

<style lang="scss" scoped>
.header {
  color: palevioletred;
}
</style>

<template>
  <div class="WeatherApp">
    <div class="header"> {{msg}}</div>
    <el-select v-model="value" placeholder="Select">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
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
    }],
      options: [{
        value: 'Option1',
        label: 'Москва'
      }, {
        value: 'Option2',
        label: 'Санкт-Петербург'
      }, {
        value: 'Option3',
        label: 'Вашингтон'
      }, {
        value: 'Option4',
        label: 'Пекин'
      }, {
        value: 'Option5',
        label: 'Токио'
      }],
      value: 'Выберите ваш город'
    }

}
}
</script>

<style lang="scss" scoped>
.header {
  color: palevioletred;
}
</style>

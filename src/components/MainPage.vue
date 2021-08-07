<template>
  <div class="weather-page">
    <div class="weather-page__header">
      <h1 class="weather-page__header-text">{{msg}}</h1>
    </div>
    <div>
      <el-select class="weather-page__selector" v-model="value" placeholder="Select">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
      <el-button class="weather-page__button" type="primary" plain>Искать</el-button>
    </div>
    <div>
     <el-table
        class="weather-page__table"
        :data="tableData">
      <el-table-column
          prop="date"
          label="Date"
          width="180px">
      </el-table-column>
      <el-table-column
          prop="weather"
          label="Name"
          width="540px">
      </el-table-column>
    </el-table>
     </div>
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
.weather-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  &__header {
    background-color: palevioletred;
  }
  &__header-text {
    background-color: #4995e2;
  }
  &__selector {
    background-color: #d27fff;
  }
  &__table {
    background-color: aquamarine;
    width: 720px
  }
}
</style>

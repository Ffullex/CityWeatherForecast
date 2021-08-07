<template>
  <div class="weather-page">
    <div>
    <div class="weather-page__header">
      <h1 class="weather-page__header-text">{{msg}}</h1>
    </div>
    <div class="weather-page__search">
      <el-select
          class="weather-page__selector"
          v-model="value"
          placeholder="Select">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
      <el-button class="weather-page__button" type="primary" plain>Искать</el-button>
    </div>
    <div class="weather-page__table">
     <el-table
        :data="tableData">
      <el-table-column
          prop="date"
          label="Дни недели"
          width="180px">
      </el-table-column>
      <el-table-column
          prop="weather"
          label="Температура"
          width="540px">
      </el-table-column>
    </el-table>
     </div>
    </div>
    <div class="weather-page__map">
      <iframe height="250px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2297.267837347828!2d83.05014391544931!3d54.845545669061586!2m3!1f0!2f0!3f0!3m!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfc49ea6083ab9%3A0x4cd4ef286908078d!2z0KDRg9GB0YHQutCw0Y8g0YPQuy4sIDM1LCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDQndC-0LLQvtGB0LjQsdC40YDRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDYzMDA1OA!5e0!3m2!1sru!2sus!4v1611852565792!5m2!1sru!2sus"
              style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
      </iframe>
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
  align-items: stretch;
  height: 100vh;
  width: 100vw;
  margin-top: -80px;
  &__header {
    color: black;
    margin: 20px;
  }
  &__header-text {
    box-shadow: 0 0 5px  #000000;
    padding: 20px;
  }
  &__search {
    margin: 20px;
  }
  &__selector {
    box-shadow: 0 0 5px  #000000;
  }
  &__button {
    box-shadow: 0 0 5px  #000000;
    margin-left: 5px;
  }
  &__table {
    background-color: aquamarine;
    box-shadow: 0 0 5px  #000000;
    margin: 20px;
    width: 720px
  }
}
</style>

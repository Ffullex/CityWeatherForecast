<template>
  <div class="page">
    <div class="weather">
    <div class="weather__header">
      <h1 class="weather__header-text">{{msg}}</h1>
    </div>
    <div class="weather__search">
      <el-select
          class="weather__selector"
          v-model="value"
          placeholder="Select">
      <el-option
          v-for="item in getDataTable"
          :key="item.id"
          :label="item.dt"
          :value="item.dt">
      </el-option>
    </el-select>
      <el-button class="weather__button" type="primary" plain>Искать</el-button>
    </div>
    <div class="weather__table">
      <el-table
        :data="getDataTable"
        height="400px">
      <el-table-column
        prop="dt"
        label="Дата"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="main.temp"
        label="Температура"
        width="180px">
      </el-table-column>
       <el-table-column
         prop="clouds.all"
         label="Облачность"
         width="180px">
       </el-table-column>
      <el-table-column
       prop="wind.speed"
       label="Скорость ветра"
       width="180px">
      </el-table-column>
      </el-table>
    </div>
    <div style="color:white"> ({{ getDataTable }}</div>
    <div style="color:white">......................</div>
    <div style="color:white">......................</div>
    <div style="color:white"> {{ getCities }} </div>
    </div>
    <div class="weather__map">
      <iframe height="500px" width="500px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2297.267837347828!2d83.05014391544931!3d54.845545669061586!2m3!1f0!2f0!3f0!3m!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfc49ea6083ab9%3A0x4cd4ef286908078d!2z0KDRg9GB0YHQutCw0Y8g0YPQuy4sIDM1LCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDQndC-0LLQvtGB0LjQsdC40YDRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDYzMDA1OA!5e0!3m2!1sru!2sus!4v1611852565792!5m2!1sru!2sus"
              style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      msg: 'Weather',
      value: 'Выберите ваш город',
      loading: true,
      options: [{
        value: 'Option3',
        label: 'Санкт-Петербург'
      }, {
        value: 'Option4',
        label: 'Вильнюс'
      }, {
        value: 'Option5',
        label: 'Токио'
      }],
    }
  },
  computed: {
    getDataTable() {
      console.log(this.$store.getters['tableData/list'])
      return this.$store.getters['tableData/list']
    },
    getCities() {
      console.log(this.$store.getters['tableData/cities'])
      return this.$store.getters['tableData/cities']
    }
  },
  mounted() {
    this.$store.dispatch('tableData/getData').then(() => {
      this.loading = false
    })
    this.$store.dispatch('tableData/getCities').then(() => {
      this.loading = false
    })
  },

}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
.weather {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__header {
    color: black;
    margin-left: 20px;
  }
  &__header-text {
    box-shadow: 0 0 5px #1dfae0;
    padding: 20px;
    color: #ffffff ;
  }
  &__search {
    margin: 20px;
  }
  &__selector {
    box-shadow: 0 0 5px  #1dfae0;
  }
  &__button {
    box-shadow: 0 0 5px  #1dfae0;
    background-color: #2c1147;
    color: white;
    margin-left: 5px;
  }
  &__table {
    box-shadow: 0 0 5px  #1dfae0;
    margin: 20px;
    width: 720px;
  }
  &__map {
    height: 500px;
    width: 500px;
    box-shadow: 0 0 5px  #1dfae0;
    align-items: flex-end;
    margin-top: 120px;
    margin-right: 20px;
  }
}
</style>

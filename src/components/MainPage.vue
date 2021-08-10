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
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
      <el-button class="weather__button" type="primary" plain>Искать</el-button>
    </div>
    <div class="weather__table">
      <el-table
        :data="weather"
        height="400px">
      <el-table-column
        prop="dt"
        label="Дата"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="temp"
        label="Температура"
        width="180px">
      </el-table-column>
       <el-table-column
         prop="clouds"
         label="Облачность"
         width="180px">
       </el-table-column>
      <el-table-column
       prop="speed"
       label="Скорость ветра"
       width="180px">
      </el-table-column>
      </el-table>
    </div>
    <div style="color:white"> ({{ getTemp }}</div>
    <div v-if="false">
    { "data":
      { "message": "accurate", "cod": "200", "count": 4,
        "list": [
          {
            "id": 524901,
            "name": "Moscow",
            "coord": { "lat": 55.7522, "lon": 37.6156 },
            "main": {
              "temp": 26.52,
              "feels_like": 26.52,
              "temp_min": 24.1,
              "temp_max": 28.24,
              "pressure": 1015,
              "humidity": 45,
              "sea_level": 1015,
              "grnd_level": 998
            },
            "dt": 1628597107,
            "wind": { "speed": 3.75, "deg": 143 },
            "sys": { "country": "RU" },
            "rain": { "1h": 3.16 },
            "snow": null,
            "clouds": { "all": 99 },
            "weather": [ { "id": 501, "main": "Rain", "description": "дождь", "icon": "10d" } ]
            },

          {
            "id": 5601538,
            "name": "Moscow",
            "coord": { "lat": 46.7324, "lon": -117.0002 },
            "main": {
              "temp": 11.77,
              "feels_like": 10.62,
              "temp_min": 10.9,
              "temp_max": 16.96,
              "pressure": 1018,
              "humidity": 62
            },
            "dt": 1628597363,
            "wind": { "speed": 0, "deg": 0 },
            "sys": { "country": "US" },
            "rain": null,
            "snow": null,
            "clouds": { "all": 1 },
            "weather": [ { "id": 800, "main": "Clear",
            "description": "ясно", "icon": "01n" } ]
          },

          {
            "id": 5202009,
            "name": "Moscow",
            "coord": { "lat": 41.3368, "lon": -75.5185 },
            "main": {
              "temp": 20.59,
              "feels_like": 21.08,
              "temp_min": 18.7,
              "temp_max": 22.16,
              "pressure": 1015,
              "humidity": 91
            },
            "dt": 1628597376,
            "wind": { "speed": 0.89, "deg": 235 },
            "sys": { "country": "US" },
            "rain": null, "snow": null,
            "clouds": { "all": 74 },
            "weather": [ { "id": 803, "main": "Clouds", "description": "облачно с прояснениями", "icon": "04d" } ]
          },

          {
            "id": 524894,
            "name": "Moscow",
            "coord": { "lat": 55.7617, "lon": 37.6067 },
            "main": {
              "temp": 26.6,
              "feels_like": 26.6,
              "temp_min": 24.01,
              "temp_max": 28.14,
              "pressure": 1015,
              "humidity": 45,
              "sea_level": 1015,
              "grnd_level": 996
            },
            "dt": 1628597107,
            "wind": { "speed": 3.75, "deg": 142 },
            "sys": { "country": "RU" },
            "rain": { "1h": 4.86 },
            "snow": null,
            "clouds": { "all": 98 },
            "weather": [ { "id": 502, "main": "Rain", "description": "сильный дождь", "icon": "10d" } ]
          }

    ] },

    "status": 200,
    "statusText": "OK",
    "headers": { "content-length": "1637", "content-type": "application/json; charset=utf-8" },

    "config": { "url": "http://api.openweathermap.org/data/2.5/find?q=Moscow&units=metric&cnt=10&appid=7ddbbac4414598a0582efd0c12096e75&lang=ru",
    "method": "get",
    "headers": { "Accept": "application/json, text/plain, */*" },
    "transformRequest": [ null ],
    "transformResponse": [ null ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1 }, "request": {} }
    </div>
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
  props: {
  },
  data() {
    return {
      msg: 'Weather',
      value: 'Выберите ваш город',
      loading: true,
      weather: [{
        dt: 'Дата',
        temp: '19С',
        clouds: 'ясно',
        speed: '3 м/c',
      }, {
        dt: 'дд-мм-гггг',
        temp: '19С',
        clouds: 'ясно',
        speed: '3 м/c',
      },{
        dt: 'дд-мм-гггг',
        temp: '19С',
        clouds: 'ясно',
        speed: '3 м/c',
      },],
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
    getTemp() {
      console.log(this.$store.getters['tableData/speed'])
      return this.$store.getters['tableData/speed']
    }
  },
  mounted() {
    this.$store.dispatch('tableData/getSpeed').then(() => {
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

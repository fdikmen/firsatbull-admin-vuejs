<template>
  <!--begin::Mixed Widget 1-->
  <div class="card card-custom bg-gray-100 card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 bg-danger py-5">
      <h3 class="card-title font-weight-bolder text-white">
        Üye sayısı
      </h3>
<!--      <div class="card-toolbar">-->
<!--        <Dropdown4></Dropdown4>-->
<!--      </div>-->
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body p-0 position-relative overflow-hidden">
      <!--begin::Chart-->
      <apexchart
        class="card-rounded-bottom bg-danger"
        :options="chartOptions"
        :series="series"
        type="area"
      ></apexchart>
      <!--end::Chart-->
      <!--begin::Stats-->
      <div class="card-spacer mt-n25">
        <!--begin::Row-->
        <div class="row m-0 ">
          <div class="col-12 col-md bg-light-danger px-6 py-8 rounded-xl mr-7 mb-7 d-flex justify-content-between align-center">
            <div class="mt-4 d-flex flex-column">
              <span class="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
              <inline-svg src="media/svg/icons/Communication/Add-user.svg" />
              </span>
              <a href="#" class="text-danger font-weight-bold font-size-h6 mt-1">
                Toplam Üye
              </a>
            </div>
            <div class="d-flex align-center display3 display2-lg">{{allUsers}}</div>
          </div>
          <div class="col-12 col-md bg-light-success px-6 py-8 rounded-xl mr-7 mb-7 d-flex justify-content-between align-center">
            <div class="mt-4 d-flex flex-column">
              <span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
              <inline-svg src="media/svg/icons/Design/Sketch.svg" />
              </span>
              <a href="#" class="text-success font-weight-bold font-size-h6 mt-1">
                Toplam Fırsat
              </a>
            </div>
            <div class="d-flex align-center display3 display2-lg">{{allItems}}</div>
          </div>
          <div class="col-12 col-md bg-light-primary px-6 py-8 rounded-xl mr-7 mb-7 d-flex justify-content-between align-center">
            <div class="mt-4 d-flex flex-column">
              <span class="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
              <inline-svg src="media/svg/icons/Communication/Write.svg" />
              </span>
              <a href="#" class="text-primary font-weight-bold font-size-h6 mt-1">
                Toplam Yorum
              </a>
            </div>
            <div class="d-flex align-center display3 display2-lg">{{allVotes}}</div>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col-12 col-sm bg-light-danger px-6 py-8 rounded-xl mr-7 mb-7 d-flex justify-content-between align-center">
            <div class="mt-4 d-flex flex-column">
              <span class="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
              <inline-svg src="media/svg/icons/Communication/Add-user.svg" />
              </span>
              <a href="#" class="text-danger font-weight-bold font-size-h6 mt-1">
                Son gün
              </a>
            </div>
            <div class="d-flex align-center display3 display2-lg">{{lastDayUsers}}</div>
          </div>
          <div class="col-12 col-sm bg-light-success px-6 py-8 rounded-xl mr-7 mb-7 d-flex justify-content-between align-center">
            <div class="mt-4 d-flex flex-column">
              <span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
              <inline-svg src="media/svg/icons/Design/Sketch.svg" />
              </span>
              <a href="#" class="text-success font-weight-bold font-size-h6 mt-1">
                Son gün
              </a>
            </div>
            <div class="d-flex align-center display3 display2-lg">{{lastDayItems}}</div>
          </div>
          <div class="col-12 col-sm bg-light-primary px-6 py-8 rounded-xl mr-7 mb-7 d-flex justify-content-between align-center">
            <div class="mt-4 d-flex flex-column">
              <span class="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
              <inline-svg src="media/svg/icons/Communication/Write.svg" />
              </span>
              <a href="#" class="text-primary font-weight-bold font-size-h6 mt-1">
                Son gün
              </a>
            </div>
            <div class="d-flex align-center display3 display2-lg">{{lastDayVotes}}</div>
          </div>
        </div>
      <!--end::Stats-->
      <!--end::Body-->
    </div>
    <!--end::Mixed Widget 1-->
  </div>
  </div>
</template>

<script>
// import Dropdown4 from "@/view/content/dropdown/Dropdown1.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-1",
  props: ['allUsers', 'allItems', 'allVotes', 'lastDayUsers', 'lastDayItems', 'lastDayVotes'],
  components: {
    // Dropdown4
  },
  data() {
    return {
      strokeColor: "#D13647",
      chartOptions: {},
      series: [
        {
          name: "Üye sayısı",
          data: []
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    this.$store.dispatch('getAllUsers')
      .then(() => {
        this.setData()
      })
      .catch(err => console.log(err))
    // reference; kt_mixed_widget_1_chart
    this.setupChart()
  },
  methods: {
    setData() {
      let users = this.$store.getters.takeAllUsers
      users.map(user => {
        console.log(user.createdDate)
      })
    },
    setupChart() {
      this.chartOptions = {
        chart: {
          type: "area",
          height: 200,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: this.strokeColor,
            opacity: 0.5
          }
        },
        plotOptions: {},
        legend: {
          show: false // Aşada veya yanlarda gösterilen açıklama
        },
        dataLabels: {
          enabled: false // noktaların üzerine değerlerini yazar
        },
        fill: {
          type: "solid", // grafiğin altının şekli
          opacity: 0
        },
        stroke: {
          curve: "straight",
          show: true,
          width: 3,
          colors: [this.strokeColor]
        },
        xaxis: {
          categories: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
          axisBorder: {
            show: false
          },
          tooltip: {
            enabled: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              colors: this.layoutConfig("colors.gray.gray-500"),
              fontSize: "12px",
              fontFamily: this.layoutConfig("font-family")
            }
          },
          crosshairs: {
            show: false,
            position: "front",
            stroke: {
              color: this.layoutConfig("colors.gray.gray-300"),
              width: 1,
              dashArray: 3
            }
          }
        },
        yaxis: {
          show: true,
          min: 10,
          max: 180,
          labels: {
            show: false,
            style: {
              colors: this.layoutConfig("colors.gray.gray-500"),
              fontSize: "12px",
              fontFamily: this.layoutConfig("font-family")
            }
          }
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0
            }
          },
          hover: {
            filter: {
              type: "none",
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0
            }
          }
        },
        tooltip: {
          style: {
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          },
          y: {
            formatter: function(val) {
              return val + " kişi";
            }
          },
          marker: {
            show: false
          }
        },
        colors: ["transparent"],
        markers: {
          colors: [this.layoutConfig("colors.theme.light.danger")],
          strokeColor: [this.strokeColor],
          strokeWidth: 3
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        }
      }
    }
  }
}
</script>

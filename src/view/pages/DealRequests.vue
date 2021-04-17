<template>
  <div class="Deals">
    <div class="card card-custom">
      <div class="card-header flex-wrap py-5">
        <div class="card-title">
          <h3 class="card-label">
            Fırsatlar
            <!--<div class="text-muted pt-2 font-size-sm">fırsatlar</div>-->
          </h3>
        </div>
        <div class="card-toolbar">
          <!--begin::Dropdown-->
          <b-dropdown id="dropdown-right" text="Dışa Aktar" variant="primary" class="m-2">
            <template #button-content>
              <span class="svg-icon svg-icon-sm">
                <i class="flaticon2-download-2"></i>
              </span>
              Dışa Aktar
            </template>
            <b-dropdown-item href="#" @click="downloadWith">EXEL</b-dropdown-item>
            <b-dropdown-item href="#" @click="downloadWith">PDF</b-dropdown-item>
            <b-dropdown-item href="#" @click="downloadWith">KOPYALA</b-dropdown-item>
          </b-dropdown>
          <!--end::Dropdown-->
        </div>
      </div>
      <div class="card-body">
        <!-- begin: myhead-->
        <div class="mb-7">
          <div class="row align-items-center">
            <div class="col-lg-9 col-xl-8">
              <div class="row align-items-center">
                <div class="col-md-4 my-2 my-md-0">
                  <div class="input-icon">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Ara..."
                        v-model="searchInput"
                    />
                    <span>
                      <i class="flaticon2-search-1 text-muted"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end: myhead-->
          <!--begin: Datatable-->
          <div class="table-responsive-lg">
            <table
                class="table table-separate table-head-custom table-checkable table-vertical-center"
                id="kt_datatable">
              <thead>
              <tr>
                <th>ID</th>
                <th>Fırsat</th>
                <th>Kullanıcı</th>
                <th>Kayıt Tarihi</th>
                <th>Kullanıcı Rolü</th>
                <th>İşlemler</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in getAllItems" :key="item.id">
                <td>
                  <span>{{ item.id }}</span>
                </td>
                <td>
                  <span>
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-40 flex-shrink-0">
                        <div
                            class="symbol-label"
                            :style="{ backgroundImage: `url(${getImageById(item.imageId)})` }"
                        ></div>
                      </div>
                      <div class="ml-2">
                        <div class="text-dark-75 font-weight-bold line-height-sm">
                          {{ item.title }}
                        </div>
                      </div>
                    </div>
                  </span>
                </td>
                <td data-field="OrderID" aria-label="64125-127" class="datatable-cell">
                  <span>
                    <div class="d-flex align-items-center">
                      <div class="ml-2">
                        <div class="text-dark-75 font-weight-bold line-height-sm">
                          Chloette Zamorano
                        </div>
                        <a href="javascript:;" class="font-size-sm text-dark-50 text-hover-primary"
                        >czamorano5b@house.gov</a
                        >
                      </div>
                    </div>
                  </span>
                </td>
                <td>{{ item.createdDate | dateFilter }}</td>
                <td>
                  <span class="label label-lg label-inline label-light-danger"
                  >kullanıcı</span
                  >
                </td>
                <td>
                  <span style="overflow: visible; position: relative; width: 125px">
                    <!-- <div class="dropdown dropdown-inline"> -->
                    <!--                    <a-->
                    <!--                      href="javascript:;"-->
                    <!--                      class="btn btn-sm btn-clean btn-icon mr-2"-->
                    <!--                      data-toggle="dropdown"-->
                    <!--                    >-->
                    <!--                      <span class="svg-icon svg-icon-md">-->
                    <!--                        <i class="fas fa-award"></i>-->
                    <!--                      </span>-->
                    <!--                    </a>-->
                    <!-- <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    <ul class="navi flex-column navi-hover py-2">
                      <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2"> Choose an action: </li>
                      <li class="navi-item"> <a href="#" class="navi-link"> <span class="navi-icon"><i class="la la-print"></i></span> <span class="navi-text">Print</span> </a> </li>
                      <li class="navi-item"> <a href="#" class="navi-link"> <span class="navi-icon"><i class="la la-copy"></i></span> <span class="navi-text">Copy</span> </a> </li>
                      <li class="navi-item"> <a href="#" class="navi-link"> <span class="navi-icon"><i class="la la-file-excel-o"></i></span> <span class="navi-text">Excel</span> </a> </li>
                      <li class="navi-item"> <a href="#" class="navi-link"> <span class="navi-icon"><i class="la la-file-text-o"></i></span> <span class="navi-text">CSV</span> </a> </li>
                      <li class="navi-item"> <a href="#" class="navi-link"> <span class="navi-icon"><i class="la la-file-pdf-o"></i></span> <span class="navi-text">PDF</span> </a> </li>
                    </ul>
                  </div> -->
                    <!-- </div> -->
                    <a
                      href="javascript:;"
                      class="btn btn-sm btn-clean btn-icon"
                      title="Edit details"
                      v-b-tooltip.hover.top="'Reddet'"
                    >
                      <span class="svg-icon svg-icon-md">
                        <i class="far fa-times-circle"></i>
                      </span>
                    </a>
                    <a
                        href="javascript:;"
                        class="btn btn-sm btn-clean btn-icon"
                        title="Delete"
                        v-b-tooltip.hover.top="'Onayla'"
                        @click.stop.prevent="deleteItem(item)"
                    >
                      <span class="svg-icon svg-icon-md">
                        <i class="far fa-check-circle"></i>
                      </span>
                    </a>
                  </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!--end: Datatable-->
        </div>
      </div>
    </div>
    <div class="d-flex align-center justify-content-between">
      <div class="d-flex align-center justify-content-between">
        <b-dropdown
            id="dropdownPerPage"
            class="pa-2"
            size="sm"
            variant="white"
            :text="String(perPage)"
        >
          <b-dropdown-item-button @click="changePerPage">5</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">10</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">15</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">20</b-dropdown-item-button>
        </b-dropdown>
        <p class="align-self-center mb-0 ml-4">Toplam <strong>{{ currentItems }}</strong> istek</p>
      </div>

      <div class="mt-3">
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-number
            last-number
            align="right"
        >
        </b-pagination>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

#dropdownPerPage {
  display: flex;
  align-items: center;
  .dropdown-toggle:active {
    background-color: #1086ff;
    color: white;
    &::after {
      color: white;
    }
  }
  .dropdown-toggle:focus {
    background-color: white;
  }
}

</style>

<script>
import searchMixin from "@/mixins/search.mixin.js";
import paginationMixin from "@/mixins/pagination.mixin.js";
import Download from "@/mixins/download.mixin.js";
import uploadImgMixin from "@/mixins/uploadImg.mixin";

export default {
  data() {
    return {
      file: null,
      title: '',
      shortDescription: '',
      currentItems: 0,
      startDate: "01.01.2021",
      endDate: "01.02.2021",
      default_photo: "media/stock-600x400/img-23.jpg",
      current_photo: null,
      fullDescription: "",
      searchInput: "",
      rows: 0,
      perPage: 5,
      currentPage: 1,
      downloadDeals: [],
      editor: window.ClassicEditor,
      editorConfig: {
        language: 'tr',
      },
    };
  },
  methods: {
    downloadWith(e) {
      const json = this.downloadDeals.map((deal) => {
        let {
          title,
          shortDescription,
          fullDescription,
          startDate,
          endDate,
          oldPrice,
          newPrice,
        } = deal;
        return {
          Başlık: title,
          "Kısa Açıklama": shortDescription,
          "Tam Açıklama": fullDescription,
          "Başlangıç Tarihi": startDate,
          "Bitiş Tarihi": endDate,
          "Eski Fiyat": oldPrice,
          "Yeni Fiyat": newPrice,
        };
      });
      const head = [
        "Baslik",
        "Açiklama",
        "Tam Açiklama",
        "Baslangiç Tarihi",
        "Bitis Tarihi",
        "Eski Fiyat",
        "Yeni Fiyat",
      ];
      const download = new Download(json, "fırsatlar", head);
      switch (e.target.textContent) {
        case "EXEL":
          download.downloadAsExel();
          break;
        case "PDF":
          download.downloadAsPdf();
          break;
        case "KOPYALA":
          download.copyToClipboard();
          break;
      }
    },
    async addNewItem() {
      const submitButton = this.$refs.itemAddBtn;
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      const item = {
        title: this.title,
        fullDescription: this.fullDescription,
        shortDescription: this.shortDescription,
        createdDate: new Date(),
        imageId: 0,
        startDate: new Date(this.startDate),
        endDate: new Date(this.endDate),
        isActive: true,
        isDelete: false,
        oldPrice: parseInt(this.$refs.oldPrice.value.replace(/\D+/g, "")),
        newPrice: parseInt(this.$refs.newPrice.value.replace(/\D+/g, "")),
      }

      if (this.file !== null) {
        const image = await uploadImgMixin(this.file)
        let saveImg = await this.$store.dispatch('addImage', image)
        saveImg = JSON.parse(saveImg.config.data)
        const allImg = await this.$store.dispatch('getAllImage')
        const currentImg = allImg.data.find(img => img.titleAttribute === saveImg.titleAttribute)
        item.imageId = +currentImg.id
      }

      console.log(item)

      this.$store
      .dispatch("addNewItem", item)
      .then(() => {
        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
        document.querySelector(".close").click();
        this.$store.dispatch("getAllItems").then().catch();
      })
      .catch((err) => {
        console.log(err)
        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
        document.querySelector(".close").click();
      });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = file

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = (event) => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    downItemSet(allItems) {
      this.downloadDeals = allItems;
    },
    changePerPage(e) {
      this.perPage = parseInt(e.target.textContent);
    },
    deleteItem(item) {
      item.isDelete = true
      this.$store.dispatch('itemUpdate', item)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    },
    setRow(items) {
      this.rows = items.length
      this.currentItems = items.length
    },
    getImages() {
      this.$store.dispatch('getAllImage')
      .then()
      .catch()
    },
    getItems() {
      this.$store.dispatch("getAllItems")
      .then()
      .catch()
    },
    getImageById(id) {
      const images = this.$store.getters.takeAllImage
      const currentImg = images.find(img => img.id === id)
      return currentImg.url
    }
  },
  computed: {
    getAllItems() {
      const allItems = this.$store.getters.takeAllItems
      const items = allItems.filter(item => item.isDelete === false)
      this.downItemSet(items);
      this.setRow(items)
      return this.searchInput === ""
          ? paginationMixin(this.currentPage, this.perPage, items)
          : searchMixin(this.searchInput, items, "title");
    },
    photo() {
      return this.current_photo == null ? this.default_photo : this.current_photo;
    },
  },
  mounted() {
    this.getImages()
    this.getItems()

  },
};
</script>

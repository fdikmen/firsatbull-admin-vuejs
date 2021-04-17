<template>
  <div class="Votes">
    <div class="card card-custom">
      <div class="card-header flex-wrap py-5">
        <div class="card-title">
          <h3 class="card-label">Yorumlar
            <!--<div class="text-muted pt-2 font-size-sm">üyeler</div>-->
          </h3>
        </div>
        <div class="card-toolbar">
          <b-dropdown id="dropdown-right" text="Dışa Aktar" variant="primary" class="m-2">
            <template #button-content>
          <span class="svg-icon svg-icon-sm">
            <i class="flaticon2-download-2"></i>
          </span>
              Dışa Aktar
            </template>
            <b-dropdown-item @click="downloadWith($event)" href="javascript:;">PDF</b-dropdown-item>
            <b-dropdown-item @click="downloadWith($event)" href="javascript:;">EXEL</b-dropdown-item>
            <b-dropdown-item @click="downloadWith($event)" href="javascript:;">Yazdır</b-dropdown-item>
          </b-dropdown>
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
                    <input type="text" class="form-control" placeholder="Search..." id="kt_datatable_search_query" v-model="searchInput">
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
          <div class="table-responsive">
            <table
                class="table table-separate table-head-custom table-checkable table-vertical-center"
                id="kt_datatable">
              <thead>
              <tr>
                <th>Fırsat</th>
                <th>Kullanıcı</th>
                <th>Yorum</th>
                <th>Kayıt Tarihi</th>
                <th>İşlemler</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="advertise in getAllAdvertise" :key="advertise.id">
                <td aria-label="64125-127" class="datatable-cell">
                  <span>
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-40 flex-shrink-0">
                        <div class="symbol-label" :style="{backgroundImage: `url(${getImageById(advertise.imageId)})` }"></div>
                      </div>
                      <div class="ml-2">
                        <div class="text-dark-75 font-weight-bold line-height-sm">{{ advertise.title }}</div>
                      </div>
                    </div>
                  </span>
                </td>
                <td data-field="OrderID" aria-label="64125-127" class="datatable-cell">
                  <span>
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-40 flex-shrink-0">
                        <div class="symbol-label" :style="{backgroundImage: `url(${getImageById(getCurrentUser(advertise.createdUserId).imageId)})` }"></div>
                      </div>
                      <div class="ml-2">
                        <div class="text-dark-75 font-weight-bold line-height-sm">{{ getCurrentUser(advertise.createdUserId).name }}</div>
                        <a href="javascript:;" class="font-size-sm text-dark-50 text-hover-primary">{{ getCurrentUser(advertise.createdUserId).email }}</a>
                      </div>
                    </div>
                  </span>
                </td>
                <td>{{ advertise.description }}</td>
                <td>{{ advertise.createdDate | dateFilter }}</td>
                <td>
                    <span style="overflow: visible; position: relative; width: 125px;">
                      <!-- <div class="dropdown dropdown-inline"> -->
                      <!--                      <a href="javascript:;" v-b-tooltip.hover.top="'Yerini değiştir'" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">-->
                      <!--                        <span class="svg-icon svg-icon-md">-->
                      <!--                          <i class="fas fa-exchange-alt"></i>-->
                      <!--                        </span>-->
                      <!--                      </a>-->
                      <b-dropdown id="dropdown-form" size="md" ref="dropdown" dropleft variant="link" toggle-class="text-decoration-none" no-caret>
                        <template v-slot:button-content>
                          <a href="javascript:;" v-b-tooltip.hover.top="'Yerini değiştir'" class="btn btn-sm btn-clean btn-icon">
                            <span class="svg-icon svg-icon-md">
                              <i class="fas fa-exchange-alt"></i>
                            </span>
                          </a>
                        </template>
                        <b-dropdown-form @submit.stop.prevent>
                            <div class="checkbox-list my-3">
                              <label class="checkbox">
                                <input type="checkbox" ref="rightOne"/>
                                <span></span> Sağ Kısmında 1 adet
                              </label>
                            </div>
                            <div class="checkbox-list mb-3">
                              <label class="checkbox">
                                <input type="checkbox" ref="rightTwo"/>
                                <span></span> Sağ Kısmında 2 adet
                              </label>
                            </div>
                            <div class="checkbox-list mb-3">
                              <label class="checkbox">
                                <input type="checkbox" ref="rightThree"/>
                                <span></span> Sağ Kısmında 3 adet
                              </label>
                            </div>
                            <div class="checkbox-list mb-3">
                              <label class="checkbox">
                                <input type="checkbox" ref="onStartPopup"/>
                                <span></span> Sayfa Açıldığında Açılır Pencerede
                              </label>
                            </div>
                          <button
                              @click="updateAdvertise(advertise.id)"
                              class="btn btn-primary btn-sm">
                            Değiştir
                          </button>
                          <!--                        </b-dropdown-item>-->
                        </b-dropdown-form>
                      </b-dropdown>
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
                      <!-- </div>
                      <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">
                        <span class="svg-icon svg-icon-md">
                          <i class="far fa-edit"></i>
                        </span>
                      </a>-->
                      <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" v-b-tooltip.hover.top="'Reklamı Sil'">
                        <span class="svg-icon svg-icon-md">
                          <i class="fas fa-trash-alt"></i>
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
    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p>
    <b-table
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table> -->
    <div class="d-flex align-center justify-content-between">
      <div class="d-flex align-center justify-content-between">
        <b-dropdown id="dropdownPerPage" class="pa-2" size="sm" variant="white" :text="String(perPage)">
          <b-dropdown-item-button @click="changePerPage">5</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">10</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">15</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">20</b-dropdown-item-button>
        </b-dropdown>
        <p class="align-self-center mb-0 ml-4">Toplam <strong>{{ currentAdvertise }}</strong> reklam</p>
      </div>

      <div class="mt-3">
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-number last-number align="right"> </b-pagination>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
.b-dropdown-form {
  padding: 0.5rem 1rem;
  width: 15rem;
}

</style>

<script>
import downloadMixin from "@/mixins/download.mixin.js";
import uploadImgMixin from '@/mixins/uploadImg.mixin'
import paginationMixin from "@/mixins/pagination.mixin";
import searchMixin from "@/mixins/search.mixin";

export default {
  data() {
    return {
      downloadAdvertise: null,
      file: null,
      currentImgId: null,
      user: {},
      searchInput: '',
      perPage: 5,
      currentPage: 1,
      rows: 0,
      currentAdvertise: null,
      description: '',
      default_photo: 'media/img/advertise.png',
      current_photo: null,
      editor: window.ClassicEditor,
      editorConfig: {
        language: 'tr',
      },
      downloadUsers: [],
    }
  },
  components: {
  },
  mounted() {
    this.getAdvertise()
    this.getImages()
    this.getAllUsers()
    this.user = Object.assign({}, JSON.parse(localStorage.getItem('currentUser')))
  },
  computed: {
    photo() {
      return this.current_photo === null ?
          this.default_photo :
          this.current_photo;
    },
    getAllAdvertise() {
      const allAdvertise = this.$store.getters.takeAllAdvertise
      this.setRow(allAdvertise)
      this.downloadAdvertiseSet(allAdvertise)
      return this.searchInput === ""
          ? paginationMixin(this.currentPage, this.perPage, allAdvertise)
          : searchMixin(this.searchInput, allAdvertise, "title");
    },

  },
  methods: {
    updateAdvertise(id) {
      this.$store.dispatch('advertiseGetById', id)
      .then(() => {
        // this.$store.dispatch('updateAdvertise', id)
      })
      .catch()
    },
    getCurrentUser(userId) {
      const allUsers = this.$store.getters.takeAllUsers
      const currentUser = allUsers.find(user => user.id === userId)
      return currentUser === undefined ? { name: 'bega', email: 'email@gmail.com', imageId: 94} : currentUser
    },
    getAllUsers() {
      this.$store.dispatch('getAllUsers')
      .then()
      .catch()
    },
    downloadAdvertiseSet(allAdvertise) {
      const downAdvertise = allAdvertise.map(adv => {
        const user = this.getCurrentUser(adv.id).name
        adv.username = user
        return adv
      })
      this.downloadAdvertise = downAdvertise;
    },
    downloadWith(e) {
      const json = this.downloadAdvertise.map((advertise) => {
        let { title, description, username } = advertise;
        return {
          "Başlık": title,
          "Açıklama": description,
          "Kulanıcı": username
        };
      });
      const head = ["Baslik", "Açiklama", "Kullanici"];
      const download = new downloadMixin(json, "reklamlar", head);
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
    changePerPage(e) {
      this.perPage = parseInt(e.target.textContent);
    },
    async advertiseRegister() {
      // const userId = await this.$store.dispatch('getUserId')
      const submitButton = this.$refs.advRegBtn;
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      const advertise = {
        "createdDate": new Date(),
        "createdUserId": JSON.parse(localStorage.getItem('currentUser')).id,
        "title": this.$refs.itemTitle.value,
        "description":this.description,
        "imageId": this.currentImgId,
        "isActive": true,
        "isDelete": false,
        "isLocationUnderHead": this.$refs.onTop.checked,
        "isLocationRightOne": this.$refs.rightOne.checked,
        "isLocationRightTwo": this.$refs.rightTwo.checked,
        "isLocationRightThree": this.$refs.rightThree.checked,
        "isStartPopupHome": this.$refs.onStartPopup.checked
      }

      if (this.file !== null) {
        const image = await uploadImgMixin(this.file)
        let saveImg = await this.$store.dispatch('addImage', image)
        saveImg = JSON.parse(saveImg.config.data)
        const allImg = await this.$store.dispatch('getAllImage')
        const currentImg = allImg.data.find(img => img.titleAttribute === saveImg.titleAttribute)
        advertise.imageId = +currentImg.id
      }

      this.$store.dispatch('addNewAdvertise', advertise)
      .then(() => {
        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
        document.querySelector(".close").click();
        this.getAdvertise()
      })
      .catch(() => {
        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
      })
    },
    onFileChange(e) {
      this.file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader()

        reader.onload = event => {
          this.current_photo = event.target.result
        }

        reader.readAsDataURL(this.file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    setRow(advertise) {
      this.rows = advertise.length
      this.currentAdvertise = advertise.length
    },
    getImages() {
      this.$store.dispatch('getAllImage')
      .then()
      .catch()
    },
    getAdvertise() {
      this.$store.dispatch("getAllAdvertise")
      .then()
      .catch()
    },
    getImageById(id) {
      const images = this.$store.getters.takeAllImage
      const currentImg = images.find(img => img.id === id)
      if (currentImg == undefined || currentImg.url === 'string') {
        return 'media/img/advertise.png'
      } else {
        return currentImg.url
      }
    }
  },

}
</script>

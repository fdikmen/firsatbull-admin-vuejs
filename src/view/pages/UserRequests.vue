<template>
  <div class="Deals">
    <div class="card card-custom">
      <div class="card-header flex-wrap py-5">
        <div class="card-title">
          <h3 class="card-label">
            Üye İstekleri
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
                    <input type="text" class="form-control" placeholder="Ara..." id="kt_datatable_search_query" v-model="searchInput" />
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
            <table class="table table-separate table-head-custom table-checkable table-vertical-center" id="kt_datatable">
              <thead>
                <tr>
                  <th>Kullanıcı</th>
                  <th>İstek Tarihi</th>
                  <th>Durumu</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in getUsers" :key="user.id">
                  <td data-field="OrderID" aria-label="64125-127" class="datatable-cell">
                    <span>
                      <div class="d-flex align-items-center">
                        <div class="symbol symbol-40 flex-shrink-0">
                          <div class="symbol-label" style="background-image: url('./media/users/300_12.jpg')"></div>
                        </div>
                        <div class="ml-2">
                          <div class="text-dark-75 font-weight-bold line-height-sm">{{ user.name }}</div>
                          <a href="#" class="font-size-sm text-dark-50 text-hover-primary">{{ user.email }}</a>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td>{{ user.createdDate | dateFilter }}</td>
                  <td>
                    <span class="label label-lg label-inline label-light-danger">kullanıcı</span>
                  </td>
                  <td>
                    <span style="overflow: visible; position: relative; width: 125px">
                      <!-- <div class="dropdown dropdown-inline"> -->
                      <a
                        @click="notConfirm(user.id)"
                        href="javascript:;"
                        class="btn btn-sm btn-clean btn-icon"
                        v-b-tooltip.hover.top="'Reddet'">
                        <span class="svg-icon svg-icon-sm">
                          <i class="far fa-times-circle"></i>
                        </span>
                      </a>
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
                        @click="confirm(user.id)"
                        href="javascript:;"
                        class="btn btn-sm mr-2 btn-clean btn-icon"
                        v-b-tooltip.hover.top="'Onayla'">
                        <span class="svg-icon svg-icon-sm">
                          <i class="far fa-check-circle"></i>
                        </span>
                      </a>
                      <!--<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">
          <span class="svg-icon svg-icon-md">
              <i class="flaticon-circle"></i>
            </span>
          </a>-->
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
        <b-dropdown id="dropdownPerPage" class="pa-2" size="sm" variant="white" :text="String(perPage)">
          <b-dropdown-item-button @click="changePerPage">5</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">10</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">15</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">20</b-dropdown-item-button>
        </b-dropdown>
        <p class="align-self-center mb-0 ml-4">Toplam {{ getRequestsUser.length }} istek</p>
      </div>

      <div class="mt-3">
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-number last-number align="right"> </b-pagination>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@media (min-width: 568px) {
  .table-responsive {
    overflow: visible;
  }
}

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

export default {
  data() {
    return {
      searchInput: "",
      perPage: 5,
      currentPage: 1,
      rows: 0,
      downloadUsers: [],
      users: [],
    };
  },
  mounted() {
    this.getUsersMethod();
  },
  computed: {
    getUsers() {
      this.downUserSet(this.getRequestsUser);
      // const verifyUsers = allUsers.filter(user => user.isVerify === false)
      return this.searchInput === "" ? paginationMixin(this.currentPage, this.perPage, this.getRequestsUser) : searchMixin(this.searchInput, this.getRequestsUser, "userName");
    },
    getUserTypes() {
      return this.$store.getters.takeAllUserTypes;
    },
    getRequestsUser() {
      const allUsers = this.$store.getters.takeAllUsers;
      const seeDeleteUser = allUsers.filter(user => user.isDelete === false)
      const requestsUser = seeDeleteUser.filter(user => user.isVerify === false)
      this.setRows(requestsUser)
      return requestsUser
    }
  },
  methods: {
    confirm(id) {
      const currentUser = this.getRequestsUser.find(user => user.id === id)
      currentUser.isVerify = true
      this.$store.dispatch('userUpdate', currentUser)
        .then()
        .catch()
    },
    notConfirm(id) {
      const currentUser = this.getRequestsUser.find(user => user.id === id)
      currentUser.isDelete = true
      this.$store.dispatch('userUpdate', currentUser)
      .then()
      .catch()
    },
    changePerPage(e) {
      this.perPage = parseInt(e.target.textContent);
    },
    downUserSet(allUsers) {
      this.downloadUsers = allUsers;
    },
    downloadWith(e) {
      const json = this.downloadUsers.map((user) => {
        let { name, surname, userName, email, description, isActive } = user;
        return {
          Ad: name,
          Soyad: surname,
          "Kullanıcı Adı": userName,
          "E-posta": email,
          Açıklama: description,
          Durum: isActive ? "aktif" : "pasif",
        };
      });
      const head = ["Ad", "Soyad", "Kullanici Adi", "E-posta", "Açiklama", "Durum"];
      const download = new Download(json, "kullanıcı istek", head);
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
    getUsersMethod() {
      this.$store
        .dispatch("getAllUsers")
        .then(() => {
          this.setRows(this.getRequestsUser)
        })
        .catch();
    },
    setRows(users) {
      this.rows = users.length;
    },
    changeStatus() {

    },
  },
};
</script>

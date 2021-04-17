<template>
  <div class="Deals">
    <div class="card card-custom">
      <div class="card-header flex-wrap py-5">
        <div class="card-title">
          <h3 class="card-label">
            Üyeler
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
          <!--begin::Button-->
          <a href="#" v-b-modal.modal-1 class="btn btn-primary">
            <span class="svg-icon svg-icon-sm">
              <i class="flaticon2-add-1"></i>
            </span>
            Üye Ekle
          </a>
          <div>
            <b-modal id="modal-1" hide-footer>
              <div class="login-form login-signup">
                <form class="form" novalidate="novalidate" id="kt_login_signup_form" @submit.stop.prevent="onSubmitRegister()">
                  <div class="pb-13 pt-lg-0 pt-5">
                    <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Yeni üye Kayıt</h3>
                  </div>
                  <div class="form-group">
                    <input class="form-control form-control-solid h-auto py-4 px-4 rounded-lg font-size-h6" type="text" placeholder="İsim" name="fullname" ref="fullname" autocomplete="off" />
                  </div>
                  <!-- <div class="fv-plugins-message-container"></div> -->
                  <div class="form-group">
                    <input class="form-control form-control-solid h-auto py-4 px-4 rounded-lg font-size-h6" type="email" placeholder="E-posta" name="email" ref="remail" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <input class="form-control form-control-solid h-auto py-4 px-4 rounded-lg font-size-h6" type="password" placeholder="Şifre" name="password" ref="rpassword" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <input class="form-control form-control-solid h-auto py-4 px-4 rounded-lg font-size-h6" type="password" placeholder="Şifre tekrar" name="cpassword" ref="cpassword" autocomplete="off" />
                  </div>
                  <div class="form-group">
                    <select v-model="userTypeChecked" class="custom-select">
                      <option v-for="types in getUserTypes" :key="types.id">{{ types.name }}</option>
                    </select>
                  </div>

                  <div class="form-group d-flex flex-wrap pb-lg-0 mb-0">
                    <button
                        ref="kt_login_signup_submit"
                        class="btn btn-primary font-weight-bolder font-size-h6 px-6 py-3 my-3 mr-4"
                        style="width: 150px">Kayıt</button>
                  </div>
                </form>
              </div>
            </b-modal>
          </div>
          <!--end::Button-->
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
                  <th>ID</th>
                  <th>Kullanıcı</th>
                  <th>Kayıt Tarihi</th>
                  <th>Durumu</th>
                  <th>Rolü</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in getUsers" :key="user.id">
                  <td>
                    <span>{{ user.id }}</span>
                  </td>
                  <td data-field="OrderID" aria-label="64125-127" class="datatable-cell">
                    <span>
                      <div class="d-flex align-items-center">
                        <div class="symbol symbol-40 flex-shrink-0">
                          <div class="symbol-label" style="background-image: url('./media/users/300_12.jpg')"></div>
                        </div>
                        <div class="ml-2">
                          <div class="text-dark-75 font-weight-bold line-height-sm">{{ user.userName }}</div>
                          <a href="#" class="font-size-sm text-dark-50 text-hover-primary">{{ user.email }}</a>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td>{{ user.createdDate | dateFilter }}</td>
                  <td>
                    <span class="switch switch-sm">
                      <label>
                        <input type="checkbox" :checked="user.isActive" name="email_notification_1" @change="changeStatus(user)" />
                        <span class="mr-2"></span>
                      </label>
                    </span>
                    <span v-if="user.isActive">Aktif</span>
                    <span v-else>Pasif</span>
                  </td>
                  <td>
                    <span
                        class="label label-lg label-inline"
                        :class="'label-light-' + getUserTypeColor(user.userTypeId)">
                        {{getUserTypeName(user.userTypeId)}}
                    </span>
                  </td>
                  <td>
                    <span style="overflow: visible; position: relative; width: 125px">
                      <!-- <div class="dropdown dropdown-inline">-->
                      <role-dropdown :user="user"></role-dropdown>
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
                      <a href="javascript:;"
                         class="btn btn-sm btn-clean btn-icon delete-btn pl-7"
                         v-b-tooltip.hover.top="'Kullanıcıyı Sil'"
                         @click.stop.prevent="deleteUser(user)">
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
    <div class="d-flex align-center justify-content-between">
      <div class="d-flex align-center justify-content-between">
        <b-dropdown id="dropdownPerPage" class="pa-2" size="sm" variant="white" :text="String(perPage)">
          <b-dropdown-item-button @click="changePerPage">5</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">10</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">15</b-dropdown-item-button>
          <b-dropdown-item-button @click="changePerPage">20</b-dropdown-item-button>
        </b-dropdown>
        <p class="align-self-center mb-0 ml-4">Toplam <strong>{{ downloadUsers.length }}</strong> kullanıcı</p>
      </div>

      <div class="mt-3">
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-number last-number align="right"> </b-pagination>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .label {
    line-height: 1rem;
  }
  @media (min-width: 568px) {
    .table-responsive {
      overflow: visible;
    }
  @media (min-width: 652px) {
    .delete-btn {
      padding-left: 0 !important;
    }
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
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import KTUtil from "@/assets/js/components/util";
// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import { REGISTER } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";
import searchMixin from "@/mixins/search.mixin.js";
import paginationMixin from "@/mixins/pagination.mixin.js";
import roleDropdown from "@/view/pages/components/roleDropdown";
import Download from "@/mixins/download.mixin.js";


export default {
  data() {
    return {
      bir: null,
      status: true,
      searchInput: "",
      perPage: 15,
      currentPage: 1,
      rows: 0,
      userTypeChecked: "admin",
      downloadUsers: [],
    };
  },
  components: {
    roleDropdown,
  },
  mounted() {
    this.$store
      .dispatch("getAllUserTypes")
      .then()
      .catch();
    this.getUsersMethod();
  },
  computed: {
    getUsers() {
      const allUsers = this.$store.getters.takeAllUsers;
      const currentAllUsers = allUsers.filter(user => user.isDelete === false)
      this.downUserSet(currentAllUsers);
      return this.searchInput === "" ? paginationMixin(this.currentPage, this.perPage, currentAllUsers) : searchMixin(this.searchInput, currentAllUsers, "userName");
    },
    getUserTypes() {
      return this.$store.getters.takeAllUserTypes;
    }
  },
  methods: {
    getUserTypeName(id) {
      const userType = this.getUserTypeById(id)
      return userType.name
    },
    getUserTypeColor(id) {
      const userType = this.getUserTypeById(id)
      if (userType.iconClassName === undefined) {
        return ''
      } else {
        const parsType = JSON.parse(userType.iconClassName)
        return parsType.color
      }
    },
    getUserTypeById(id) {
      const userType = this.getUserTypes.find(userType => userType.id === id)
      return userType === undefined ? 'yok' : userType
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
          Durum: isActive ? "aktif" : "pasif"
        };
      });
      const head = ["Ad", "Soyad", "Kullanici Adi", "E-posta", "Açiklama", "Durum"];
      const download = new Download(json, "kullanıcılar", head);
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
          let users = this.$store.getters.takeAllUsers;
          this.rows = users.length;
        })
        .catch();
    },
    onSubmitRegister() {
      const userTypeId = this.getUserTypes.find((type) => type.name === this.userTypeChecked).id;
      // clear existing errors
      document.querySelectorAll(".fv-plugins-message-container").forEach(item => {item.remove();});

      const signup_form = KTUtil.getById("kt_login_signup_form");
      this.fv1 = formValidation(signup_form, {
        fields: {
          fullname: {
            validators: {
              notEmpty: {
                message: "Bu alan zorunludur"
              }
            }
          },
          email: {
            validators: {
              notEmpty: {
                message: "Bu alan zorunludur"
              },
              emailAddress: {
                message: "E-postanız doğru değil"
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: "Bu alan zorunludur"
              }
            }
          },
          cpassword: {
            validators: {
              notEmpty: {
                message: "Bu alan zorunludur"
              },
              identical: {
                compare: function() {
                  return signup_form.querySelector('[name="password"]').value;
                },
                message: "Şifreler eşleşmiyor"
              }
            }
          }
        },
        plugins: {
          trigger: new Trigger(),
          submitButton: new SubmitButton(),
          bootstrap: new Bootstrap()
        }
      });

      const validation = this.fv1.validate();
      let userName = this.$refs.fullname.value;
      let email = this.$refs.remail.value;
      let password = this.$refs.rpassword.value;
      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      validation.then((res) => {
        submitButton.classList.remove("spinner", "spinner-light", "spinner-right");
        if (res === "Valid") {
          this.$store
            .dispatch(REGISTER, { email, userName, password })
            .then(() => {
              document.querySelector(".close").click();
              this.$store
                .dispatch("getAllUsers")
                .then((res) => {
                  let users = this.$store.getters.takeAllUsers;
                  this.rows = users.length;
                  const currentUser = res.find((user) => user.email === email);
                  currentUser.userTypeId = userTypeId;
                  currentUser.isVerify = true;
                  currentUser.isVerifyDate = new Date().toLocaleString();

                  this.$store
                    .dispatch("userUpdate", currentUser)
                    .then()
                    .catch();
                })
                .catch();
              this.$router.push({ name: "users" });
            })
            .catch(() => {
              // if(error.response.status === 400) {
              //   Swal.fire({
              //     title: "",
              //     text: "Böyle bir kullanıcı zaten mevcut",
              //     icon: "error",
              //     confirmButtonClass: "btn btn-secondary",
              //     heightAuto: false
              //   })
              // } else {
              //   Swal.fire({
              //     title: "",
              //     text: "Belirlenmeyen Hata Oluştu",
              //     icon: "error",
              //     confirmButtonClass: "btn btn-secondary",
              //     heightAuto: false
              //   })
              // }
              alert('hata')
            });
        } else if (res == "Invalid") {
          Swal.fire({
            title: "",
            text: "Girdiğiniz bilgiler hatalı",
            icon: "error",
            confirmButtonClass: "btn btn-secondary",
            heightAuto: false,
          });
        }
      });
    },
    deleteUser(user) {
      user.isDelete = true
      this.$store.dispatch('userUpdate', user)
        .then()
        .catch()
      // this.$store.dispatch("getAllUsers");
    },
    changeStatus(user) {
      user.isActive = !user.isActive
      this.$store.dispatch('userUpdate', user)
        .then()
        .catch()
    }
  }
};
</script>

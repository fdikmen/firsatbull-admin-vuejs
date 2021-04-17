<template>
<div class="d-flex flex-row">
  <div class="menuBtnCover d-none" @click="toggleProfileAside">
  </div>
    <ul class="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 d-block d-lg-none">
      <li class="nav-item" aria-describedby="__bv_tooltip_350__">
        <a href="#" @click="toggleProfileAside" class="btn btn-sm btn-icon btn-bg-light btn-text-primary btn-hover-primary">
          <i class="flaticon2-indent-dots"></i>
        </a>
      </li>
    </ul>

  <div class="flex-row-auto offcanvas-mobile w-300px w-xl-350px" id="_profile_aside" ref="profileAside">
    <div class="card card-custom card-stretch">
      <div class="card-body pt-4">
<!--        <div class="d-flex justify-content-end">-->
<!--          <Dropdown2></Dropdown2>-->
<!--        </div>-->
        <div class="d-flex align-items-center">
          <div class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
            <div class="symbol-label" :style="{backgroundImage: `url(${currentPhoto})`}"></div>
            <i class="symbol-badge bg-success"></i>
          </div>
          <div>
            <a class="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary">{{ currentUser.name + ' ' + currentUser.surname }}</a>
            <div class="text-muted">Exper Lead</div>
            <!-- <div class="mt-2">
              <a class="btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Chat</a>
              <a class="btn btn-sm btn-success font-weight-bold py-2 px-3 px-xxl-5 my-1">Follow</a>
            </div> -->
          </div>
        </div>
        <!--end::User-->
        <!--begin::Contact-->
        <div class="py-9">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="font-weight-bold mr-2">E-posta:</span>
            <a class="text-muted text-hover-primary">{{ currentUser.email }}</a>
          </div>
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="font-weight-bold mr-2">Telefon:</span>
            <span class="text-muted">506 251 58 22</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <span class="font-weight-bold mr-2">Kurumun Adı:</span>
            <span class="text-muted">Company</span>
          </div>
        </div>
        <!--end::Contact-->
        <!--begin::Nav-->
        <div class="navi navi-bold navi-hover navi-active navi-link-rounded" role="tablist">
          <div class="navi-item mb-2">
            <a class="navi-link py-4 active" @click="setActiveTab" data-tab="0" data-toggle="tab" role="tab" aria-selected="false">
              <span class="navi-icon mr-2">
                <span class="svg-icon">
                  <inline-svg src="media/svg/icons/General/User.svg" />
                </span>
              </span>
              <span class="navi-text font-size-lg">Kişisel Bilgiler</span>
            </a>
          </div>
          <div class="navi-item mb-2">
            <a class="navi-link py-4" @click="setActiveTab" data-tab="1" data-toggle="tab" role="tab" aria-selected="false">
              <span class="navi-icon mr-2">
                <span class="svg-icon">
                  <inline-svg src="media/svg/icons/Code/Compiling.svg" />
                </span>
              </span>
              <span class="navi-text font-size-lg">Kullanıcı Bilgileri</span>
            </a>
          </div>
          <div class="navi-item mb-2">
            <a class="navi-link py-4" @click="setActiveTab" data-tab="2" data-toggle="tab" role="tab" aria-selected="false">
              <span class="navi-icon mr-2">
                <span class="svg-icon">
                  <inline-svg src="media/svg/icons/Communication/Shield-user.svg" />
                </span>
              </span>
              <span class="navi-text font-size-lg">Şifre Değiştir</span>
<!--              <span class="navi-label">-->
<!--                <span class="label label-light-danger label-rounded font-weight-bold">5</span>-->
<!--              </span>-->
            </a>
          </div>
          <div class="navi-item mb-2">
            <a class="navi-link py-4" @click="setActiveTab" data-tab="3" data-toggle="tab" role="tab" aria-selected="false">
              <span class="navi-icon mr-2">
                <span class="svg-icon">
                  <inline-svg src="media/svg/icons/Communication/Mail-opened.svg" />
                </span>
              </span>
              <span class="navi-text font-size-lg">E-posta Ayarları</span>
            </a>
          </div>
          <div class="navi-item mb-2">
            <a class="navi-link py-4" @click="setActiveTab" data-tab="4" data-toggle="tab" role="tab" aria-selected="false">
              <span class="navi-icon mr-2">
                <span class="svg-icon">
                  <inline-svg src="media/svg/icons/Communication/Group.svg" />
                </span>
              </span>
              <span class="navi-text font-size-lg">Kullanıcı</span>
            </a>
          </div>
<!--          <div class="navi-item mb-2">-->
<!--            <a class="navi-link py-4" @click="setActiveTab" data-tab="5" data-toggle="tab" role="tab" aria-selected="false">-->
<!--              <span class="navi-icon mr-2">-->
<!--                <span class="svg-icon">-->
<!--                  <inline-svg src="media/svg/icons/Shopping/Sale1.svg" />-->
<!--                </span>-->
<!--              </span>-->
<!--              <span class="navi-text font-size-lg">Fırsat</span>-->
<!--            </a>-->
<!--          </div>-->
<!--          <div class="navi-item mb-2">-->
<!--            <a class="navi-link py-4" @click="setActiveTab" data-tab="6" data-toggle="tab" role="tab" aria-selected="false">-->
<!--              <span class="navi-icon mr-2">-->
<!--                <span class="svg-icon">-->
<!--                  <inline-svg src="media/svg/icons/Communication/Chat4.svg" />-->
<!--                </span>-->
<!--              </span>-->
<!--              <span class="navi-text font-size-lg">Yorum</span>-->
<!--            </a>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>

  <!--begin::Content-->
  <div class="flex-row-fluid ml-lg-8">
    <b-tabs class="hide-tabs" v-model="tabIndex">
      <b-tab active>
        <PersonalInformation></PersonalInformation>
      </b-tab>

      <b-tab>
        <AccountInformation></AccountInformation>
      </b-tab>

      <b-tab>
        <ChangePassword></ChangePassword>
      </b-tab>

      <b-tab>
        <EmailSettings></EmailSettings>
      </b-tab>

      <b-tab>
        <UserSettings></UserSettings>
      </b-tab>

<!--      <b-tab>-->
<!--        <UserSettings></UserSettings>-->
<!--      </b-tab>-->
<!--      -->
<!--      <b-tab>-->
<!--        <UserSettings></UserSettings>-->
<!--      </b-tab>-->
      
    </b-tabs>
  </div>
  <!--end::Content-->
</div>
</template>

<style lang="scss" scoped>

  .navi .navi-item {
    cursor: context-menu;
  }

  .menuBtnCover {
    position: fixed;
    width: 100vw;
    height: 100vh;
    color: rgba(0,0,0,0.5);
    z-index: 99;
  }

  .asideToggle {
    left: 0
  }
  
</style>

<script>
import {
  SET_BREADCRUMB
} from "@/core/services/store/breadcrumbs.module";
// import Dropdown2 from "@/view/pages/custom_pages/profile-comp/Dropdown2"
// import ProfileOverview from "@/view/pages/custom_pages/profile-comp/ProfileOverview"
import PersonalInformation from "@/view/pages/custom_pages/profile-comp/PersonalInformation"
import AccountInformation from "@/view/pages/custom_pages/profile-comp/AccountInformation"
import ChangePassword from "@/view/pages/custom_pages/profile-comp/ChangePassword"
import EmailSettings from "@/view/pages/custom_pages/profile-comp/EmailSettings"
import UserSettings from '@/view/pages/custom_pages/profile-comp/UserSettings'

export default {
  name: "custom-page",
  components: {
    // Dropdown2,
    // ProfileOverview,
    PersonalInformation,
    AccountInformation,
    ChangePassword,
    EmailSettings,
    UserSettings
  },
  data() {
    return {
      tabIndex: 0,
      imageId: null,
      default_photo: "media/users/blank.png",
      currentPhoto: null,
      currentUser: {
        name: '',
        surname: '',
        email: '',
        description: '',
        imageId: null,
        imgUrl: '',
        default_photo: "media/users/blank.png",
      },
    };
  },
  mounted() {
    this.imageId = JSON.parse(localStorage.getItem('currentUser')).imageId

    if (this.imageId === null) {
      this.currentPhoto = this.default_photo
    } else {
      this.$store.dispatch('getImgById', this.imageId)
      .then(res => {
        this.currentPhoto = res.data.url
      })
      .catch(err => {
        console.log(err)
      })
    }

    this.currentUser = Object.assign({}, JSON.parse(localStorage.getItem('currentUser')))
    if (this.currentUser.imageId === null) {
      this.currentUser.imgUrl = this.default_photo
    } else {
      this.$store.dispatch('getImgById', this.currentUser.imageId)
      .then(res => {
        this.currentUser.imgUrl = res.data.url
      })
      .catch(err => {
        console.log(err)
      })
    }
    this.$store.dispatch(SET_BREADCRUMB, [{
      title: "Profile"
    }]);
    this.hideTab()
  },
  methods: {
    toggleProfileAside() {
      this.$refs.profileAside.classList.toggle('asideToggle')
      document.querySelector('.menuBtnCover').classList.toggle('d-block')
    },
    hideTab() {
      document.querySelector('.nav.nav-tabs').style.display = "none"
    },
    setActiveTab(event) {
      let target = event.target;
      if (!event.target.classList.contains("navi-link")) {
        target = event.target.closest(".navi-link");
      }

      const tab = target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".navi-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(target.getAttribute("data-tab"));

      // set current active tab
      target.classList.add("active");
    }
  },
  computed: {
  }
};
</script>

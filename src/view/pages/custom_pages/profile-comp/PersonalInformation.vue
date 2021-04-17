<template>
<!--begin::Card-->
<div class="card card-custom">
  <!--begin::Header-->
  <div class="card-header py-3">
    <div class="card-title align-items-start flex-column">
      <h3 class="card-label font-weight-bolder text-dark">
        Kişisel Ayarlar
      </h3>
      <span class="text-muted font-weight-bold font-size-sm mt-1">Burada Kişisel ayarlarınızı değiştirebilirsiniz</span>
    </div>
    <div class="card-toolbar">
      <button type="reset" class="btn btn-success mr-2" @click="save()" ref="kt_save_changes">
        Kaydet
      </button>
      <button type="reset" class="btn btn-secondary" @click="cancel()">
        Çık
      </button>
    </div>
  </div>
  <!--end::Header-->
  <!--begin::Form-->
<!--  <form class="form">-->
    <!--begin::Body-->
    <div class="card-body">
      <div class="row">
        <label class="col-xl-3"></label>
        <!--<div class="col-lg-9 col-xl-6">
          <h5 class="font-weight-bold mb-6">Admin Bilgileri</h5>
        </div>-->
      </div>
      <div class="form-group row">
        <!-- <label class="col-xl-3 col-lg-3 col-form-label text-right">Avatar</label> -->
        <div class="col-12 text-center">
          <div class="image-input image-input-outline" id="kt_profile_avatar">
            <div class="image-input-wrapper" :style="{ backgroundImage: `url(${currentPhoto ? currentPhoto : default_photo})` }"></div>
            <label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
              <i class="fa fa-pen icon-sm text-muted"></i>
              <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" @change="onFileChange($event)" />
              <input type="hidden" name="profile_avatar_remove" />
            </label>
<!--            <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">-->
<!--              <i class="ki ki-bold-close icon-xs text-muted"></i>-->
<!--            </span>-->
            <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar" @click="current_photo = null">
              <i class="ki ki-bold-close icon-xs text-muted"></i>
            </span>
          </div>
          <span class="form-text text-muted">Yüklenebilecek resim türleri: png, jpg, jpeg.</span>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xl-3 col-lg-3 col-form-label text-right">Ad</label>
        <div class="col-lg-9 col-xl-6">
          <input ref="name" class="form-control form-control-lg form-control-solid" type="text" v-model="name" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xl-3 col-lg-3 col-form-label text-right">Soyad</label>
        <div class="col-lg-9 col-xl-6">
          <input ref="surname" class="form-control form-control-lg form-control-solid" type="text" v-model="surname" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xl-3 col-lg-3 col-form-label text-right">Açıklama</label>
        <div class="col-lg-9 col-xl-6">
          <ckeditor :editor="editor" v-model="description" :config="editorConfig" tag-name="textarea"></ckeditor>
<!--          <textarea class="form-control form-control-lg form-control-solid" type="text" v-model="description" />-->
        </div>
      </div>
      <div class="row">
        <label class="col-xl-3"></label>
        <div class="col-lg-9 col-xl-6">
          <h5 class="font-weight-bold mt-10 mb-6">İletişim Bilgileri</h5>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xl-3 col-lg-3 col-form-label text-right">Telefon</label>
        <div class="col-lg-9 col-xl-6">
          <div class="input-group input-group-lg input-group-solid">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="la la-phone"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg form-control-solid" placeholder="Phone" value="0505 187 23 65" />
          </div>
          <!-- <span class="form-text text-muted">We'll never share your email with anyone else.</span> -->
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xl-3 col-lg-3 col-form-label text-right">E-posta</label>
        <div class="col-lg-9 col-xl-6">
          <div class="input-group input-group-lg input-group-solid">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="la la-at"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg form-control-solid" placeholder="Email" v-model="email" />
          </div>
        </div>
      </div>
    </div>
    <!--end::Body-->
<!--  </form>-->
  <!--end::Form-->
</div>
</template>

<script>
import uploadImgMixin from '@/mixins/uploadImg.mixin'

export default {
  name: "PersonalInformation",
  data() {
    return {
      file: null,
      currentPhoto: null,
      currentImgId: null,
      email: '',
      name: '',
      surname: '',
      description: '<p></p>',
      imgUrl: '',
      default_photo: './media/users/default.jpg',
      editor: window.ClassicEditor,
      editorConfig: {
        language: 'tr',
      },
    };
  },
  components: {
    ckeditor: window.CKEditor.component
  },
  mounted() {
    this.email = JSON.parse(localStorage.getItem('currentUser')).email
    this.name = JSON.parse(localStorage.getItem('currentUser')).name
    this.surname = JSON.parse(localStorage.getItem('currentUser')).surname
    this.email = JSON.parse(localStorage.getItem('currentUser')).email
    this.imageId = JSON.parse(localStorage.getItem('currentUser')).imageId

    setTimeout(() => {
      this.description = JSON.parse(localStorage.getItem('currentUser')).description
    }, 100)
    // this.description = JSON.parse(localStorage.getItem('currentUser')).description

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
  },
  methods: {
    async save() {
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      let user = Object.assign({}, JSON.parse(localStorage.getItem('currentUser')))

      if (this.file !== null) {
        const image = await uploadImgMixin(this.file)
        let saveImg = await this.$store.dispatch('addImage', image)
        saveImg = JSON.parse(saveImg.config.data)
        const allImg = await this.$store.dispatch('getAllImage')
        const currentImg = allImg.data.find(img => img.titleAttribute === saveImg.titleAttribute)
        user.imageId = +currentImg.id
      }
      user.name = this.name
      user.surname = this.surname
      user.description = this.description
      user.email = this.email

      this.$store.dispatch('userUpdate', user)
        .then(() => {
          submitButton.classList.remove("spinner", "spinner-light", "spinner-right")
          localStorage.setItem('currentUser', JSON.stringify(user))
        })
        .catch((err) => {
          console.log(err)
          submitButton.classList.remove("spinner", "spinner-light", "spinner-right")
        })

    },
    cancel() {
      this.$router.push({name: 'dashboard'})
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = file
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.currentPhoto = event.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }

      this.$bvToast.toast(`Mesaj`, {
        autoHideDelay: 1000,
      })
    },

  },
  computed: {
    // photo() {
    //   return this.currentPhoto ? this.currentPhoto : this.default_photo
    // }
  }
};
</script>

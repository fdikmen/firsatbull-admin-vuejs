<template>
<div class="SiteSettings">
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">Site Ayarları</h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1">Burada Site ayarlarını değiştirebilirsiniz</span>
      </div>
      <div class="card-toolbar">
        <button type="reset" class="btn btn-success mr-2">Kaydet</button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Form-->
    <form class="form">
      <div class="card-body">

        <div class="row">
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Linkler</h5>
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-lg-4 col-xl-3 col-sm-5 col-12 mb-2 mb-sm-0">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="col-lg-4 col-xl-3 col-sm-5 col-12 mb-2 mb-sm-0">
            <b-form-input v-model="text" placeholder="www.youtube.com"></b-form-input>
          </div>
          <div class="col-lg-2 col-xl-2 col-sm-2 col-12">
            <button class="btn btn-primary">Ekle</button>
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-lg-4 col-xl-3 col-sm-5 col-12 mb-2 mb-sm-0">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="col-lg-4 col-xl-3 col-sm-5 col-12 mb-2 mb-sm-0">
            <b-form-input v-model="text" :value="selected"></b-form-input>
          </div>
          <div class="col-lg-2 col-xl-2 col-sm-2 col-12">
            <button class="btn btn-danger">Kaldır</button>
          </div>
        </div>

        <div class="separator separator-dashed my-10"></div>

        <div class="row">
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Kategoriler</h5>
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-lg-4 col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
            <b-form-input v-model="text" placeholder="Elektronik eşya"></b-form-input>
          </div>
          <div class="col-lg-2 col-xl-2 col-sm-2 col-12">
            <button class="btn btn-primary">Ekle</button>
          </div>
          <div class="col-lg-4 col-xl-3">
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-lg-4 col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="col-lg-2 col-xl-2 col-sm-2 col-12 mb-2">
            <button class="btn btn-danger">Kaldır</button>
          </div>
          <div class="col-lg-4 col-xl-3">
          </div>
        </div>

        <div class="separator separator-dashed my-10"></div>

        <div class="row">
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Kod</h5>
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-lg-6 col-xl-6 col-sm-8 col-12 mb-2 mb-sm-0">
            <b-form-textarea id="textarea-large" size="lg" placeholder="Kodu buraya yazınız"></b-form-textarea>
            <b-form-select value="footer" :options="['footer', 'header']" class="mt-3"></b-form-select>
          </div>
          <div class="col-lg-2 col-xl-2 col-sm-2 col-12">
            <button class="btn btn-primary">Ekle</button>
          </div>
        </div>

        <div class="separator separator-dashed my-10"></div>

        <div class="row">
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Diğer</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-4 col-lg-5 col-md-4 col-8 col-form-label text-lg-right text-left">Müşterlere gösterilecek açılır pencere</label>
          <div class="col-lg-1 col-xl-1 col-md-1 col-2 d-flex align-items-center mr-lg-1">
            <div class="checkbox-list">
              <label class="checkbox">
                <input type="checkbox" />
                <span></span> Aktif
              </label>
            </div>
          </div>
          <div class="col-lg-5 col-xl-5 col-md-5 col-12">
            <b-form-textarea id="textarea-small" size="sm" placeholder="Açılır pencere mesajı"></b-form-textarea>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-4 col-lg-5 col-md-4 col-8 col-form-label text-lg-right text-left">Sitenin üst kısmındaki mesaj alanı</label>
          <div class="col-lg-1 col-xl-1 col-md-1 col-2 d-flex align-items-center mr-lg-1">
            <div class="checkbox-list">
              <label class="checkbox">
                <input type="checkbox" />
                <span></span> Aktif
              </label>
            </div>
          </div>
          <div class="col-lg-5 col-xl-5 col-md-5 col-12">
            <b-form-textarea id="textarea-small" size="sm" placeholder="Mesaj"></b-form-textarea>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-4 col-lg-5 col-md-4 col-8 col-form-label text-lg-right text-left">Siteyi bakım için kapatma</label>
          <div class="col-lg-2 col-xl-2 col-4 d-flex align-items-center">
            <span class="switch switch-sm">
              <label>
                <input type="checkbox" checked="checked" name="email_notification_1" />
                <span class="mr-2"></span>
              </label>
            </span>
            <span>Site Açık</span>
          </div>
        </div>
      </div>
    </form>
    <!--end::Form-->

  </div>
</div>
</template>

<script>
 export default {
  data() {
    return {
      selected: 'A',
      options: [{
          item: 'A',
          name: 'Option A'
        },
        {
          item: 'B',
          name: 'Option B'
        },
        {
          item: 'D',
          name: 'Option C',
          notEnabled: true
        },
        {
          item: {
            d: 1
          },
          name: 'Option D'
        },
      ]
    }
  },
}
</script>

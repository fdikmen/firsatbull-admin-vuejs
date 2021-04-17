<template>
<!--begin::Card-->
<div class="card card-custom">
  <!--begin::Header-->
  <div class="card-header py-3">
    <div class="card-title align-items-start flex-column">
      <h3 class="card-label font-weight-bolder text-dark">
        Kullanıcı Ayarları
      </h3>
<!--      <span class="text-muted font-weight-bold font-size-sm mt-1">Kullanıcılar ile ilgili ayarları buradan değiştirebilirsiniz</span>-->
    </div>
    <div class="card-toolbar">
      <button type="reset" class="btn btn-success mr-2" ref="kt_save_changes">
        Kaydet
      </button>
      <button type="reset" class="btn btn-secondary">
        Çıkış
      </button>
    </div>
  </div>

	<div class="card-body">
		<div class="row">
			<div class="col-lg-9 col-xl-6">
				<h5 class="font-weight-bold mb-6">Roller</h5>
			</div>
		</div>
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-10 col-xl-6">
        <div class="form-group row justify-content-start">
          <div class="col-md-8 col-10 mb-2 mb-sm-0">
            <b-form-input
                aria-describedby="input-live-feedback"
                id="input-live"
                :state="requiredInput"
                placeholder="kullanıcı rolü"
                v-model="userTypeName">
            </b-form-input>
            <b-form-invalid-feedback id="input-live-feedback">
              Bu alan boş bırakılmaz
            </b-form-invalid-feedback>
          </div>
        </div>
        <div class="form-group row justify-content-start">
          <div class="col-md-8 col-10 mb-2 mb-sm-0">
            <b-form-select
                v-model="iconClassName"
                :options="iconClasses">
            </b-form-select>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
            <i class="fas" :class="iconClassName"></i>
          </div>
        </div>
        <div class="form-group row justify-content-start">
          <div class="col-md-8 col-10 mb-2 mb-sm-0"
          >
            <b-form-select
                v-model="colorName"
                :options="userTypeColors">
            </b-form-select>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
            <span class="badge" :class="`badge-${colorName}`">kullanıcı</span>
          </div>
        </div>
        <div class="form-group row d-flex justify-content-start">
          <div class="col-md-8 col-10 d-flex justify-content-start">
            <button class="btn btn-primary btn-block" @click.stop.prevent="addNewUserType">Ekle</button>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-10 col-xl-6">
        <div class="form-group row justify-content-start">
          <div class="col-md-8 col-10 mb-2 mb-sm-0">
            <b-form-select @change="changeDeleteType" v-model="selectedName" :options="getUserTypes"></b-form-select>
          </div>
        </div>
        <div class="form-group row justify-content-start">
          <div class="col-md-8 col-10 mb-2 mb-sm-0 text-center">
            <i class="fas" :class="currentIconClass"></i>
          </div>
        </div>
        <div class="form-group row justify-content-start">
          <div class="col-md-8 col-10 mb-2 mb-sm-0 text-center">
            <span class="label label-lg label-inline" :class="`label-light-${currentTypeColor}`">{{selectedName}}</span>
          </div>
        </div>
        <div class="form-group row justify-content-start">
          <div class="col-md-8 col-10 d-flex justify-content-start">
            <button class="btn btn-danger btn-block" @click.stop.prevent="deleteUserType">Kaldır</button>
          </div>
        </div>
      </div>
    </div>
	</div>
</div>
</template>

<script>

export default {
	data() {
		return {
			options: [],
			userTypeName: 'kullanıcı',
			selectedName: '',
      colorName: '',
      iconClassName: '',
      iconClasses: ['fa-chess-bishop', 'fa-chess-rook', 'fa-chess-pawn'],
      userTypeColors: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      currentIconClass: 'fa-chess-bishop',
      currentTypeColor: 'success',
		}
	},
	methods: {
		addNewUserType() {
		  if (this.userTypeName === '') {
        console.log(this.userTypeName)
      } else {
        const userType = {
        	"name": this.userTypeName,
        	"isActive": true,
        	"isDelete": false,
        	"iconClassName": JSON.stringify({iconClassName: this.iconClassName, color: this.colorName})
        }
        this.$store.dispatch('addNewUserType', userType)
        	.then()
        	.catch(err => console.log(err))
        this.userTypeName = ''
      }

		},
		deleteUserType() {
			const userType = this.getCurrentUserType
			this.$store.dispatch('deleteUserType', userType)
				.then(res => console.log(res))
				.catch(err => console.log(err))
		},
    changeDeleteType() {
      let currentType = JSON.parse(this.getCurrentUserType.iconClassName)
      this.currentIconClass = currentType.iconClassName
      this.currentTypeColor = currentType.color
    }
	},
	mounted() {
		this.$store.dispatch('getAllUserTypes')
			.then(res => {
				this.selectedName = res.data[0].name
        let classNames = res.data[0].iconClassName
        this.currentIconClass = JSON.parse(classNames).iconClassName
        this.currentTypeColor = JSON.parse(classNames).color
        this.iconClassName = this.iconClasses[0]
        this.colorName = this.userTypeColors[0]
			})
			.catch(err => console.log(err))
	},
	computed: {
    requiredInput() {
      return this.userTypeName === '' ? false : true
    },
		getUserTypes() {
			return this.$store.getters.takeAllUserTypes.map(type => type.name)
		},
		getCurrentUserType() {
			return this.$store.getters.takeAllUserTypes.find(type => type.name === this.selectedName)
		},
	}
}

</script>

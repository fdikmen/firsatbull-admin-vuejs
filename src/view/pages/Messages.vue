<template>
<div class="Messages">
  <div class="card-body ">
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Entry-->
      <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div class="container">
          <!--begin::Chat-->
          <div class="d-flex flex-row">
            <!--begin::Aside-->
            <div class="flex-row-auto offcanvas-mobile w-350px w-xl-400px" id="kt_chat_aside" :class="{chatAside: chatToggle}">
              <!--begin::Card-->
              <div class="card card-custom">
                <!--begin::Body-->
                <div class="card-body pa-0">
                  <!--begin:Search-->
                  <div class="input-group input-group-solid">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <span class="svg-icon svg-icon-lg">
                          <!--begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg-->
                          <i class="flaticon-search"></i>
                          <!--end::Svg Icon-->
                        </span>
                      </span>
                    </div>
                    <input type="text" class="form-control py-4 h-auto" placeholder="Email" />
                  </div>
                  <!--end:Search-->
                  <!--begin:Users-->
                  <div class="mt-7 scroll scroll-pull bj-chat">
                    <!--begin:User-->
                    <div v-for="user in myUsers" :key="user.id" class="d-flex align-items-center justify-content-between mb-5">
                      <div class="d-flex align-items-center">
                        <div class="symbol symbol-circle symbol-50 mr-3">
                          <img alt="Pic" src="@/assets/img/300_12.jpg" />
                        </div>
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Charlie Stone</a>
                          <span class="text-muted font-weight-bold font-size-sm">Art Director</span>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-end">
                        <span class="text-muted font-weight-bold font-size-sm">7 hrs</span>
                        <span class="label label-sm label-success">4</span>
                      </div>
                    </div>
                    <!--end:User-->
                    <!--begin:User-->
                    <div class="d-flex align-items-center justify-content-between mb-5">
                      <div class="d-flex align-items-center">
                        <div class="symbol symbol-circle symbol-50 mr-3">
                          <img alt="Pic" src="@/assets/img/300_12.jpg" />
                        </div>
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Teresa Fox</a>
                          <span class="text-muted font-weight-bold font-size-sm">Web Designer</span>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-end">
                        <span class="text-muted font-weight-bold font-size-sm">3 hrs</span>
                        <span class="label label-sm label-danger">5</span>
                      </div>
                    </div>
                    <!--end:User-->
                    <!--begin:User-->
                    <div class="d-flex align-items-center justify-content-between mb-5">
                      <div class="d-flex align-items-center">
                        <div class="symbol symbol-circle symbol-50 mr-3">
                          <img alt="Pic" src="@/assets/img/300_12.jpg" />
                        </div>
                        <div class="d-flex flex-column">
                          <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Matt Pears</a>
                          <span class="text-muted font-weight-bold font-size-sm">Head of Development</span>
                        </div>
                      </div>
                      <div class="d-flex flex-column align-items-end">
                        <span class="text-muted font-weight-bold font-size-sm">35 mins</span>
                      </div>
                    </div>
                    <!--end:User-->
                    <!--end:User-->
                  </div>
                  <!--end:Users-->
                </div>
                <!--end::Body-->
              </div>
              <!--end::Card-->
              <div class="offcanvas-mobile-overlay" :class="{'d-none': !chatToggle}" @click="chatToggle = false"></div>
            </div>
            <!--end::Aside-->
            <!--begin::Content-->
            <div class="flex-row-fluid ml-lg-8" id="kt_chat_content">
              <!--begin::Card-->
              <div class="card card-custom">
                <!--begin::Header-->
                <div class="card-header align-items-center px-4 py-3">
                  <div class="text-left flex-grow-1">
                    <!--begin::Aside Mobile Toggle-->
                    <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md d-lg-none" id="kt_app_chat_toggle" @click="chatToggle = true">
                      <span class="svg-icon svg-icon-lg">
                        <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Adress-book2.svg-->
                        <i class="flaticon-users-1"></i>
                        <!--end::Svg Icon-->
                      </span>
                    </button>
                    <!--end::Aside Mobile Toggle-->
                    <!--begin::Dropdown Menu-->
                    <div class="dropdown dropdown-inline">
                      <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="ki ki-bold-more-hor icon-md"></i>
                      </button>
                      <div class="dropdown-menu p-0 m-0 dropdown-menu-left dropdown-menu-md">
                        <!--begin::Navigation-->
                        <ul class="navi navi-hover py-5">
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-drop"></i>
                              </span>
                              <span class="navi-text">New Group</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-list-3"></i>
                              </span>
                              <span class="navi-text">Contacts</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-rocket-1"></i>
                              </span>
                              <span class="navi-text">Groups</span>
                              <span class="navi-link-badge">
                                <span class="label label-light-primary label-inline font-weight-bold">new</span>
                              </span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-bell-2"></i>
                              </span>
                              <span class="navi-text">Calls</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-gear"></i>
                              </span>
                              <span class="navi-text">Settings</span>
                            </a>
                          </li>
                          <li class="navi-separator my-3"></li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-magnifier-tool"></i>
                              </span>
                              <span class="navi-text">Help</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-bell-2"></i>
                              </span>
                              <span class="navi-text">Privacy</span>
                              <span class="navi-link-badge">
                                <span class="label label-light-danger label-rounded font-weight-bold">5</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                        <!--end::Navigation-->
                      </div>
                    </div>
                    <!--end::Dropdown Menu-->
                  </div>
                  <div class="text-center flex-grow-1">
                    <div class="text-dark-75 font-weight-bold font-size-h5">Matt Pears</div>
                    <div>
                      <span class="label label-sm label-dot label-success"></span>
                      <span class="font-weight-bold text-muted font-size-sm">Active</span>
                    </div>
                  </div>
                  <div class="text-right flex-grow-1">
                    <!--begin::Dropdown Menu-->
                    <div class="dropdown dropdown-inline">
                      <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="svg-icon svg-icon-lg">
                          <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg-->
                          <i class="flaticon2-add-1"></i>
                          <!--end::Svg Icon-->
                        </span>
                      </button>
                      <div class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
                        <!--begin::Navigation-->
                        <ul class="navi navi-hover py-5">
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-drop"></i>
                              </span>
                              <span class="navi-text">New Group</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-list-3"></i>
                              </span>
                              <span class="navi-text">Contacts</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-rocket-1"></i>
                              </span>
                              <span class="navi-text">Groups</span>
                              <span class="navi-link-badge">
                                <span class="label label-light-primary label-inline font-weight-bold">new</span>
                              </span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-bell-2"></i>
                              </span>
                              <span class="navi-text">Calls</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-gear"></i>
                              </span>
                              <span class="navi-text">Settings</span>
                            </a>
                          </li>
                          <li class="navi-separator my-3"></li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-magnifier-tool"></i>
                              </span>
                              <span class="navi-text">Help</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-bell-2"></i>
                              </span>
                              <span class="navi-text">Privacy</span>
                              <span class="navi-link-badge">
                                <span class="label label-light-danger label-rounded font-weight-bold">5</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                        <!--end::Navigation-->
                      </div>
                    </div>
                    <!--end::Dropdown Menu-->
                  </div>
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="card-body">
                  <!--begin::Scroll-->
                  <div class="scroll scroll-pull chat-scroll bj-chat">
                    <!--begin::Messages-->
                    <div class="messages">
                      <!--begin::Message In-->
                      <div class="d-flex flex-column mb-5 align-items-start">
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-circle symbol-40 mr-3">
                            <img alt="Pic" src="@/assets/img/300_12.jpg" />
                          </div>
                          <div>
                            <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                            <span class="text-muted font-size-sm">2 Hours</span>
                          </div>
                        </div>
                        <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">How likely are you to recommend our company to your friends and family?</div>
                      </div>
                      <!--end::Message In-->
                      <!--begin::Message Out-->
                      <div class="d-flex flex-column mb-5 align-items-end">
                        <div class="d-flex align-items-center">
                          <div>
                            <span class="text-muted font-size-sm">3 minutes</span>
                            <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                          </div>
                          <div class="symbol symbol-circle symbol-40 ml-3">
                            <img alt="Pic" src="@/assets/img/300_12.jpg" />
                          </div>
                        </div>
                        <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                      </div>
                      <!--end::Message Out-->
                    </div>
                    <!--end::Messages-->
                  </div>
                  <!--end::Scroll-->
                </div>
                <!--end::Body-->
                <!--begin::Footer-->
                <div class="card-footer align-items-center">
                  <!--begin::Compose-->
                  <textarea class="form-control border-0 p-0" rows="2" placeholder="Type a message"></textarea>
                  <div class="d-flex align-items-center justify-content-between mt-5">
                    <div class="mr-3">
                      <a href="#" class="btn btn-clean btn-icon btn-md mr-1">
                        <i class="flaticon2-photograph icon-lg"></i>
                      </a>
                      <a href="#" class="btn btn-clean btn-icon btn-md">
                        <i class="flaticon2-photo-camera icon-lg"></i>
                      </a>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6">Send</button>
                    </div>
                  </div>
                  <!--end::Compose-->
                </div>
                <!--end::Footer-->
              </div>
              <!--end::Card-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Chat-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Entry-->
    </div>
  </div>
</div>
</template>

<style lang="scss">
.chatAside {
  left: 0px !important;

  .card {
    z-index: 1001 !important;
  }
}

.bj-chat {
  overflow-y: auto;
  height: auto;
  // height: 80vh;
  // min-height: 150px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #F3F6F9;
}
</style>

<script>
export default {
  data() {
    return {
      chatToggle: false,
      height: 150,
      myUsers: [{
          id: 1,
          name: 'Name'
        },
        {
          id: 2,
          name: 'Name'
        },
        {
          id: 3,
          name: 'Name'
        },
        {
          id: 4,
          name: 'Name'
        },
        {
          id: 5,
          name: 'Name'
        },
        {
          id: 6,
          name: 'Name'
        }
      ]
    }
  },
  computed: {
    // changeHeight() {
    //   return window.innerHeight - 150
    // }
  },
  methods: {
    // changeHeight() {
    //   console.log((window.innerHeight - 200))
    //   // return (window.innerHeight - 200) + 'px'
    // }
  },
  mounted() {
    window.addEventListener("resize", function () {
      this.height = window.innerHeight - 150
    })
  }
}
</script>

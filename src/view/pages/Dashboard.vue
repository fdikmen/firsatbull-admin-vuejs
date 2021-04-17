<template>
<div>
  <!--begin::Dashboard-->
  <div class="row">
    <div class="col-12">
      <MixedWidget1
        :allUsers="allUsers.length"
        :allItems="allItems.length"
        :allVotes="allVotes.length"
        :lastDayUsers="lastDayUsers.length"
        :lastDayItems="lastDayItems.length"
        :lastDayVotes="lastDayVotes.length"
        >
        </MixedWidget1>
    </div>
    <div class="col-12">
      <StatsWidget7></StatsWidget7>
      <StatsWidget8></StatsWidget8>
      <StatsWidget12></StatsWidget12>
    </div>
  </div>
  <!--end::Dashboard-->
</div>
</template>

<script>
// import {
//   SET_BREADCRUMB
// } from "@/core/services/store/breadcrumbs.module"
import MixedWidget1 from "@/view/pages/components/dashboard/MixedWidget1.vue"
import StatsWidget7 from "@/view/pages/components/dashboard/Widget7.vue"
import StatsWidget8 from '@/view/pages/components/dashboard/Widget8.vue'
import StatsWidget12 from "@/view/pages/components/dashboard/Widget12.vue"
// import StatsWidget13 from "@/view/content/widgets/stats/Widget13.vue"

export default {
  name: "dashboard",
  components: {
    MixedWidget1,
    StatsWidget7,
    StatsWidget12,
    StatsWidget8
    // StatsWidget13
  },
  mounted() {
    this.$store.dispatch('getAllUsers')
    this.$store.dispatch('getAllItems')
    this.$store.dispatch('getAllVotes')
    // this.$store.dispatch(SET_BREADCRUMB, [{
    //   title: "Dashboard"
    // }]);
  },
  // destroyed() {
  //   const allUsers = this.allUsers
  //   const currentUser = this.$store.getters.currentUser

  //   console.log(allUsers)
  //   console.log(currentUser)
  // },
  methods: {  
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    },
    
  },
  computed: {
    allUsers() {
      return this.$store.getters.takeAllUsers
    },
    allItems() {
      return this.$store.getters.takeAllItems
    },
    allVotes() {
      return this.$store.getters.takeAllVotes
    },
    lastDayUsers() {
      const days = this.allUsers.map(d => {
        return Date.parse(new Date().toLocaleString()) - Date.parse(d.createdDate)
      })
      return days
    },
    lastDayItems() {
      // 86400 (24 saat)
      const yesterday = Date.parse(new Date().toLocaleString()) - 86400
      // console.log(yesterday)
      const lastItems = this.allItems.filter(d => Date.parse(d.createdDate) < yesterday)
      return lastItems
    },
    lastDayVotes() {
      const yesterday = Date.parse(new Date().toLocaleString()) - 86400000
      const lastVotes = this.allVotes.filter(d => Date.parse(d.createdDate) > yesterday)
      return lastVotes
    }
  }
};
</script>

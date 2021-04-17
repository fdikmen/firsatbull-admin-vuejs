<template>
  <b-dropdown size="sm" dropleft variant="link" toggle-class="text-decoration-none" v-b-tooltip.hover.top="'Rolü Değiştir'" no-caret>
    <template v-slot:button-content>
      <a href="javascript:;" class="btn btn-sm btn-clean btn-icon">
        <span class="svg-icon svg-icon-md">
          <i class="fas fa-award"></i>
        </span>
      </a>
    </template>
      <b-dropdown-item href="#" class="my-dropdown-item" @click="changeRole(type.id)" v-for="(type, index) in allUserTypes" :key="type.id">
        <span class="label label-md label-inline" :class="typeClass[index]">{{ type.name }}</span>
      </b-dropdown-item>
  </b-dropdown>
</template>

<style lang="scss" scoped>
.my-dropdown-item {
  .dropdown-item {
    border-radius: 1rem;
    padding: 0.1rem;
  }
}
</style>

<script>
export default {
  name: "dropdown-2",
  data: () => ({
    typeClass: ['warning']
  }),
  props: ['user'],
  computed: {
    allUserTypes() {
      return this.$store.getters.takeAllUserTypes
    }
  },
  methods: {
    changeRole(userTypeId) {
      this.$store.dispatch('changeUserType', {user: this.user, userTypeId})
        .then()
        .catch()
    }
  }
};
</script>

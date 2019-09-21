<template>
  <div class="header-container">
    <div class="header">
      <div class="logo">
        <a href="/">
          <img src="~@/assets/logo.svg" />
        </a>
      </div>
    </div>
    <div class="header-menu">
      <div
        class="menu-item"
        v-for="m in menu"
        :key="m"
      >{{m}}</div>
    </div>
  </div>
</template>

<script>
import { getMapper } from "vuex";

export default {
  components: {},
  data() {
    return {
      isMobile: !!navigator.userAgent.match(/iPad|iPhone|Android/),
      menu: ["Technology", "Community", "About", "Blog", "Build on Polkadot"]
    };
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1000px;
  margin: 16px auto;

  .header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        width: 140px;
      }
    }
  }

  .header-menu {
    display: flex;
    font-size: 20px;
    font-weight: 200;
    color: #666;
    .menu-item {
      padding: 16px 16px;
    }
  }
}

@include responsive($sm) {
  .header-container {
    padding: 0px 24px;
  }
}
</style>

<template>
  <div class="home-container">
    <div class="home-top">
      <div class="title">Polkadot empowers blockchain networks to work together under the protection of shared security</div>
      <span class="btn">Learn More About Polkadot</span>
    </div>
    <div class="ad-container">
      <InfoBoard
        class="ad0"
        :ad="boardMap['ad0']"
        boardOwner="Alice"
      />
      <div class="ads">
        <InfoBoard
          class="ad"
          v-for="k in ['ad1','ad2','ad3']"
          :key="k"
          :ad="boardMap[k]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { get } from "lodash";
import InfoBoard from "@/components/InfoBoard";

export default {
  name: "Home",
  components: { InfoBoard },
  data: () => {
    return {
      animState: false
    };
  },
  computed: {
    ...mapState("basic", ["boardMap"])
  },
  methods: {
    get,
    fetchData: function() {
      // this.$store.dispatch("blocks/fetchList");
    }
  },
  mounted: async function() {
    await this.$store.dispatch("basic/fetch", "ad0");
    await this.$store.dispatch("basic/fetch", "ad1");
    await this.$store.dispatch("basic/fetch", "ad2");
    await this.$store.dispatch("basic/fetch", "ad3");
  }
};
</script>

<style lang="scss" scoped>
.home-top {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  .title {
    padding: 80px 24px 60px;
    font-size: 44px;
    line-height: 1.2em;
  }
  .btn {
    background-color: #e6007a;
    color: white;
    font-size: 20px;
    font-weight: 200;
    padding: 16px 40px;
    border-radius: 40px;
    cursor: pointer;
  }
}
.ad-container {
  width: 100%;
  margin-top: 100px;
  padding: 24px;
  background: #670d35;
  text-align: center;
  .ad0 {
    padding: 24px 0 0;
    margin: 0 auto;
    overflow: hidden;
    height: 184px;
    width: 400px;
  }
  .ads {
    display: flex;
    justify-content: center;
    .ad {
      padding: 40px 12px 24px;
      height: 160px;
      width: 220px;
      overflow: hidden;
    }
  }
}

@include responsive($sm) {
  .home-container {
  }
}
</style>


<template>
  <div
    @mouseenter="animate"
    @mouseleave="animate"
    class="board"
  >
    <img
      :src="get(ad, 'content')"
      :alt="'ad0'"
    />
    <div
      v-if="animState"
      class="animated bounceInDown info-container"
    >
      <div class="info">
        <div class="left">
          <div class="label">price: </div>
          <span class="num">{{ get(ad, 'price') }}</span>
          <!-- <div class="label">taxes ratio: </div>
          <span class="num">{{ get(ad, 'ratio') }}</span> / day -->
        </div>
        <div class="right">
          <div
            class="btn"
            @click="buy"
          >Buy It !</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { get } from "lodash";

export default {
  data: () => {
    return {
      animState: false
    };
  },
  props: {
    ad: Object,
    title: String,
    sub: String
  },
  methods: {
    get,
    animate: function() {
      this.animState = !this.animState;
    },
    buy: function() {
      console.log("buy");
    }
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  position: relative;
  top: -110%;
  width: 100%;
  height: 110%;
  line-height: 2em;
  background: white;
  box-shadow: $shadow;
  width: 100%;
  overflow: hidden;
  box-sizing: content-box;
  padding: 0 $basic-padding;
  margin: 0 -24px;
  text-align: left;
  .info {
    display: flex;
    padding: 5%;
    .label {
      color: #666;
    }
    .num {
      font-size: 28px;
      font-weight: bold;
    }
  }
}
.board {
  img {
    height: 100%;
  }
}
.sub-title {
  margin-left: 16px;
  color: #606266;
  font-weight: normal;
}

.btn {
  position: absolute;
  right: 10%;
  bottom: 10%;
  background-color: #e6007a;
  color: white;
  font-size: 16px;
  font-weight: 200;
  padding: 8px 24px;
  border-radius: 40px;
  cursor: pointer;
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
.bounceInDown {
  animation-name: bounceInDown;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@include responsive($sm) {
  .info-container {
    padding: 0 16px;
    margin: 0 -16px;
  }
}
</style>



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
            @click="onClick"
          >Buy It !</div>
        </div>
      </div>
    </div>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="showDialogBuy"
      append-to-body
      width="600px"
      :close-on-click-modal="false"
      @closed="onClose"
    >
      <el-form
        ref="form"
        label-position="top"
        :model="form"
        @submit="onSubmit"
      >
        <div class="row-label">Price</div>
        <div class="row-data">
          <span>{{ get(ad, 'price') }}</span>
        </div>
        <div class="row-label">Taxes Ratio</div>
        <div class="row-data">
          <span>{{ get(ad, 'ratio') }}</span> / day
        </div>
        <el-form-item label="Pre payed taxes">
          <el-input
            v-model="form.prePay"
            placeholder="Pre payed taxes"
            type="number"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="Content image url">
          <el-input
            v-model="form.content"
            placeholder="Content image url"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          round
          @click="showDialogBuy = false"
        >Cancel</el-button>
        <el-button
          round
          @click="onSubmit"
          class="btn-ok"
        >Ok</el-button>
      </span>
    </el-dialog>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="showDialogPut"
      append-to-body
      width="600px"
      :close-on-click-modal="false"
    >
      <el-form
        ref="form"
        label-position="top"
        :model="form"
        @submit="onSubmit"
      >
        <div class="row-label">Taxes Ratio</div>
        <div class="row-data">
          <span>{{ get(ad, 'ratio') }}</span> / day
        </div>
        <el-form-item label="Price">
          <el-input
            v-model="form.price"
            placeholder="Price"
            type="number"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="Pre payed taxes">
          <el-input
            v-model="form.prePay"
            placeholder="Pre payed taxes"
            type="number"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="Content image url">
          <el-input
            v-model="form.content"
            defaultValue="hhhhhh"
            placeholder="Content image url"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          round
          @click="showDialogPut = false"
        >Cancel</el-button>
        <el-button
          round
          @click="onSubmit"
          class="btn-ok"
        >Ok</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { get } from "lodash";
import api from "@/utils/api";

export default {
  props: {
    ad: Object,
    sub: String
  },
  data: () => {
    return {
      animState: false,
      showDialogBuy: false,
      showDialogPut: false,
      form: {}
    };
  },
  computed: {
    dialogTitle: function() {
      return this.showDialogBuy ? "Buy the BillBorad" : "Update My Billboard";
    }
  },
  methods: {
    get,
    animate: function() {
      this.animState = !this.animState;
    },
    onClick: function() {
      const boardOwner = false;
      if (boardOwner) {
        this.buy();
      } else {
        this.update();
      }
    },
    buy: function() {
      this.showDialogBuy = true;
    },
    update: function() {
      this.showDialogPut = true;
      this.form = { ...this.ad };
    },
    onClose: function() {
      this.form = {};
    },
    onSubmit: function() {
      console.log("ok");
      api.getApi().rpc.chain.subscribeNewHeads(header => {
        console.log(`Chain is at #${header.number}`);
      });
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

.row-label {
  margin-bottom: 22px;
}
.row-data {
  margin-bottom: 22px;
  span {
    font-size: 20px;
  }
}

.btn-ok {
  background-color: #e6007a;
  border-color: #e6007a;
  color: white;
  &:hover {
    color: white;
  }
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.115, 0.31, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
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



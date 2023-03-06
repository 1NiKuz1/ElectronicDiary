<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <button class="dialog__btn-close" @click="hideDialog"></button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-dialog",
  emits: ["update:show"],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.dialog__content {
  position: relative;
  margin: auto;
  color: var(--color-white);
  min-width: 100px;
  min-height: 100px;
  padding: 20px;
  background: var(--color-darkblack);
}

.dialog__btn-close {
  position: absolute;
  top: 5px;
  right: 5px;
  background-image: url("../assets/close.svg");
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  height: 12px;
  width: 12px;
  cursor: pointer;
  z-index: 1;
}
</style>

<template>
  <div class="side-menu">
    <div class="side-menu__content">
      <nav class="side-menu__nav">
        <ul class="side-menu__elements">
          <li class="side-menu__el">
            <button class="side-menu__button" @click="goByRoute('/')">
              расп
            </button>
          </li>
          <li class="side-menu__el">
            <button
              class="side-menu__button"
              @click="goByRoute('/edit-schedule')"
            >
              арасп
            </button>
          </li>
          <li class="side-menu__el">
            <button
              class="side-menu__button"
              @click="goByRoute('/edit-schedule')"
            >
              урасп
            </button>
          </li>
          <li class="side-menu__el">
            <button
              class="side-menu__button"
              @click="goByRoute('/edit-schedule')"
            >
              сднев
            </button>
          </li>
          <li class="side-menu__el">
            <button
              class="side-menu__button"
              @click="goByRoute('/edit-schedule')"
            >
              уднев
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-menu",
  methods: {
    goByRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.side-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 98px;
  background: var(--color-blue);
  z-index: 100;
}

.side-menu__elements {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.side-menu__button {
  line-height: 1;
  font-size: 18px;
  padding: 20px 0;
  color: var(--color-text);
  transition: color 0.15s ease-out;
}

.side-menu__button:hover {
  color: var(--color-accent);
}

.side-menu__button:focus {
  color: var(--color-dark-green);
}

@media (max-width: 480px) {
  .side-menu {
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: 98px;
  }

  .side-menu__elements {
    flex-direction: row;
    margin-top: 0px;
  }

  .side-menu__button {
    padding: 0px 20px;
  }
}
</style>

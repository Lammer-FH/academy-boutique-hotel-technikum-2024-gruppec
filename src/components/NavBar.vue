<script>
import {BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem} from 'bootstrap-vue-3';
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "NavBar",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    LoginForm
  },
  data() {
    return {
      isLoggedIn: false,
      userEmail: null,
    };
  },
  methods: {
    onLoginSuccess(email) {
      this.isLoggedIn = true,
          this.userEmail = email;
    },
    onLogout() {
      this.isLoggedIn = false;
      this.userEmail = null;
      localStorage.removeItem("jwt");
    },
  },
};
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="fixed-top">

      <b-navbar-brand class="nerd-logo-container">
        <img src="@/assets/nerd-logo.png" alt="Logo" class="nerd-logo"/>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav="true">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/roomsView">Rooms</b-nav-item>
          <b-nav-item to="/impressum">Impressum</b-nav-item>
          <b-nav-item to="/ueber-uns">Über uns</b-nav-item>
          <b-nav-item to="/BookRoomView">Booking</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-nav-item-dropdown class="nav-icon" right>
        <template #button-content>
          <img src="@/assets/login.png" alt="Login" class="login-icon" />
        </template>
        <template v-if="isLoggedIn">
          <b-dropdown-item>
            <p>Willkommen, {{ userEmail }}</p>
          </b-dropdown-item>
          <b-dropdown-item @click="onLogout">
            <b-button variant="danger">Abmelden</b-button>
          </b-dropdown-item>
        </template>
        <template v-else>
          <b-dropdown-item>
            <LoginForm @login-success="onLoginSuccess" />
          </b-dropdown-item>
          <b-dropdown-item>
            <p>Noch kein Konto? <b-link href="/register">Hier registrieren</b-link></p>
          </b-dropdown-item>
        </template>
      </b-nav-item-dropdown>

      <b-navbar-toggle target="nav-collapse" class="navbar-toggle-right"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<style scoped>


.fixed-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #557878;
  color: white;
}

.nerd-logo-container {
  margin-left: 10px;
}

.nerd-logo {
  height: 40px;
  width: auto;
}

.nav-icon {
  display: flex;
  align-items: center;
}

.login-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
}

/* für Handys */
@media (max-width: 992px) {

  .nav-icon {
    margin-left: 0;
  }

  .navbar-toggle-right {
    margin-left: 10px;
  }

  .nerd-logo-container {
    margin-right: auto;
  }
}

</style>
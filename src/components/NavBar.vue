<script>
import {BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem} from 'bootstrap-vue-3';

export default {
  name: "NavBar",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
  }
}
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="fixed-top">

      <b-navbar-brand class="nerd-logo-container">
        <img src="@/assets/nerd-logo.png" alt="Logo" class="nerd-logo"/>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/roomsView">Rooms</b-nav-item>
          <b-nav-item to="/impressum">Impressum</b-nav-item>
          <b-nav-item to="/ueber-uns">Über uns</b-nav-item>
          <b-nav-item to="/BookRoomView">Booking</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-nav-item class="nav-icon">
        <img src="@/assets/login.png" alt="Login" class="login-icon"/>
      </b-nav-item>

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

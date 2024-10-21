<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BNavItemDropdown } from 'bootstrap-vue-3';

export default {
  name: "NavBar",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavItemDropdown,
}
}

</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-top">
      <b-navbar-brand>
        <img src="@/assets/nerd-logo.png" alt="Logo" class="navbar-logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item> <!-- Link anpassen für Home -->
          <b-nav-item to="/impressum">Impressum</b-nav-item>
          <b-nav-item to="/ueber-uns">Über uns</b-nav-item>
          <!--für später: Vorbereitung -->
          <!--<b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign In</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>

.fixed-top {
  width:100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #282c34;
  color: white;
}

.navbar-logo {
  height: 40px; /* von 30px auf 40px vergrößert */
  width: auto;
}

</style>
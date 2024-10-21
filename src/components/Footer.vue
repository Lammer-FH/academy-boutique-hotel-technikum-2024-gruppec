<script>

export default {
  name: 'Footer',
};
</script>


<template>
  <footer class="footer">
    <div class="footer-content">
      <img src="@/assets/nerd-logo.png" alt="Nerd Hotel Logo" class="footer-logo" />
      <div class="footer-info">
        <p><strong>Bits and Bytes ****</strong></p>
        <p>Höchstädtplatz 6, 1200 Wien</p>
        <p>Telefon: +43 1 3141592</p>
        <p>E-Mail: <a href="mailto:nerds@bitsandbytes.at">nerds@bitsandbytes.at</a></p>
      </div>
    </div>
    <div class="footer-links">
      <a href="/Impressum">Datenschutz</a> |
      <a href="/UeberUnsView">Team</a> |
      <a href="https://www.facebook.com/NerdHotel" target="_blank">Facebook</a> |
      <a href="https://www.instagram.com/NerdHotel" target="_blank">Instagram</a>
    </div>
    <!-- Dahin soll die Map
    <map>
      Hotelstandort
    </map>-->
  </footer>
</template>


<style scoped>
.footer {
  width: 100vw; /* Volle Breite des Viewports */
  background-color: rgba(88, 88, 101, 0.84); /*Footer Farbe kann hier geändert werden*/
  color: white;
  /*padding: 2px;*/
  text-align: center;
  position: absolute; /*absolute, damit footer am unteren Ende bleibt*/
  left: 50%; /* Positioniere den Footer in der Mitte */
  right: 50%;
  margin-left: -50vw; /* Verschiebe den Footer nach links */
  margin-right: -50vw; /* Verschiebe den Footer nach rechts */
  margin-top: 30px; /* Abstand oben hinzufügen */
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Abstand zwischen Logo und Text */
}

.footer-logo {
  height: 45px;
  width: auto;
}

.footer-info p {
  margin: 2px 0;
}

.footer-info a {
  color: #ffcc00; /* Farbe für den Email-Link */
  text-decoration: none;
}

.footer-info a:hover {
  text-decoration: underline;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: #ffcc00; /* Gleiche Farbe wie der Email-Link */
  text-decoration: none;
  margin: 0 8px;
}

.footer-links a:hover {
  text-decoration: underline;
}

</style>
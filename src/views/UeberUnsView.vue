<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "UeberUnsView",
  components: {Footer}
}
</script>

<template>
  <b-container fluid class="p-0">
  <!-- Teamfoto eingefügt-->
  <img src="@/assets/nerds_teamfoto.png" alt="Unser nerdiges Team" class="teamfoto">
  </b-container>
  <b-container class="ueber-uns text-start mt-5 mx-auto px-5">

    <h2>Über Uns</h2><br>

    <section>
      <h3>Unsere Philosophie</h3>
      <p>Wir wissen, dass der echte Entspannungscode nur dann funktioniert, wenn du in einem gemütlichen Raum voller
        Pixel und Bits bist. Genieße eine Tasse Kaffee aus unserer eigenen „Java“-Kaffeemaschine und plane deine
        nächsten großen Ideen beim Ausblick aus dem „Steve Jobs“-Zimmer. Hier gibt es keine Bugs, nur gute
        Zeiten! Außerdem gibt es
        im Nerd-Hotel "Bits & Bytes" nicht nur WiFi, sondern auch ein spezielles „NerdFi“ für alle Geeks, Gamer und
        Programmierer. Von unseren nerdigen Zimmern bis hin zu unseren Gaming-Lounges ist alles darauf ausgelegt, deine
        geekige Seele zu verwöhnen. Komm vorbei und lass dich überraschen, wie viel Spaß es macht, einfach mal die
        „Escape-Taste“ zu drücken! </p>
    </section>

    <section>
      <h3>Unser Team</h3>
      <p>Unser engagiertes Team besteht aus erfahrenen Fachleuten, die mit Leidenschaft arbeiten und bereit sind, dein
        Aufenthaltserlebnis auf das nächste Level zu bringen!</p>

      <ul>
        <li>
          <strong>Marina Lanxinger</strong>: Unsere Chief Happiness Officer! Sie hat das magische Talent, jede Suite so
          zu gestalten, dass sie wie das geheime Versteck eines Superhelden wirkt. Mit ihren Superkräften verwandelt sie
          langweilige Räume in epische Rückzugsorte!
        </li>
        <li>
          <strong>Ricarda Pfaffenbichler</strong>: Die Empfangs-Druide! Ihre charmante Art und ihre Fähigkeiten im
          Kundenservice sind so mächtig, dass sie selbst den grimmigsten Reisenden in einen fröhlichen Hobbit
          verwandelt. Jeder, der das Hotel betritt, fühlt sich sofort wie der Held seiner eigenen Geschichte!
        </li>
        <li>
          <strong>Tamara Trajkovski</strong>: Die Gourmet-Guru und Küchenzauberin! Sie mixt Zutaten mit einer Präzision,
          die selbst den besten Koch aus einem kulinarischen Spiel neidisch machen würde. Ihre Gerichte sind nicht nur
          lecker, sondern auch so kreativ, dass sie direkt aus einem Feinschmecker-RPG stammen könnten!
        </li>
      </ul>
    </section>


    <section>
      <h3>Unsere Geschichte</h3>
      <p>Die Geschichte des Bits & Bytes beginnt mit drei Freunden, die sich während eines Lehrgangs in Web
        Development an der Fachhochschule Technikum Wien kennengelernt haben. Der Spaß kam dabei nie zu kurz, und der
        Kreativität waren
        keine Grenzen gesetzt. Inspiriert von ihrer gemeinsamen Leidenschaft für Technologie, Videospiele und alles
        Nerdige, beschlossen sie, ihren Traum zu verwirklichen und ein Hotel zu eröffnen, das Gleichgesinnte aus aller
        Welt willkommen heißt. Mit einem kreativen Konzept und einem Fokus auf Gemeinschaftsgefühl und Spaß verwandeln
        sie jeden Aufenthalt in ein unvergessliches Erlebnis. Heute ist das Nerd-Hotel nicht nur ein Ort zum
        Übernachten, sondern ein Rückzugsort für alle, die die Welt der Pixel und Programmierung lieben.</p>

    </section>
    <Footer>

    </Footer>
  </b-container>
</template>


<!-- Styling für das Teamfoto-->
<style scoped>
.teamfoto {
  width: 100%;
  height: 250px;
  object-fit: cover; /* Schneidet das Bild bei Bedarf, um Verzerrungen zu vermeiden */
  object-position: 70% 30%;
  margin-bottom: 20px;
  margin-top: 20px; /* Abstand nach oben zwischen Navbar und Bild */

}

</style>
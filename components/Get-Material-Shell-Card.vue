<template>
  <div>
    <v-card-title id="installation" class="display-2 hidden-md-and-up"
      >Installation</v-card-title
    >
    <v-card-title class="text-subtitle-1">
      <span>
        Material Shell require a
        <strong>
          recent
          <a href="https://wiki.gnome.org/Projects/GnomeShell">GNOME Shell</a>
          installed </strong
        >. (At least 40+)
      </span>
    </v-card-title>

    <v-card-text>
      <v-expansion-panels :value="0">
        <v-expansion-panel>
          <v-expansion-panel-header class="text-subtitle-2">
            Get it in two clicks from extensions.gnome.org
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul>
              <li>
                Navigate to
                <a
                  href="https://extensions.gnome.org/extension/3357/material-shell/"
                  >extensions.gnome.org</a
                >
              </li>
              <li>Switch the toggle ON</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--         <v-expansion-panel>
          <v-expansion-panel-header class="text-subtitle-2"
            >Use your distribution Package Manager</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <p class="text-subtitle-1">1- Install the extension</p>
            <ul>
              <li>
                <strong>Fedora:</strong>
                <code class="primary--text text-subtitle-2"
                  >sudo dnf install gnome-shell-extension-material-shell</code
                >
              </li>
              <li>
                <strong>Arch Linux:</strong>
                <code class="primary--text text-subtitle-2"
                  >yay -S gnome-shell-extension-material-shell-git</code
                >
              </li>
              <li>
                <strong>Manjaro:</strong>
                <code class="primary--text text-subtitle-2"
                  >pacman -S gnome-shell-extension-material-shell</code
                >
              </li>
            </ul>
            <i>
              (We appreciate package maintainers! If you would like to make a
              package available for your distro please submit a PR so it can be
              added here!)
            </i>
            <p class="text-subtitle-1 mt-2 mb-2">2- Restart GNOME Shell</p>
            <code class="primary--text text-subtitle-2 mb-2"
              >Log out and Log back in</code
            >
            or
            <code class="primary--text text-subtitle-2 mb-2">Alt+F2 => R</code>
            in Xorg
            <p class="text-subtitle-1 mt-2 mb-2">3- Enable GNOME Shell</p>
            <code class="primary--text text-subtitle-2 mb-2"
              >gnome-extensions enable material-shell@papyelgringo</code
            >
          </v-expansion-panel-content>
        </v-expansion-panel> -->
        <v-expansion-panel>
          <v-expansion-panel-header class="text-subtitle-2"
            >Get the most up to date version with Git</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <p class="text-subtitle-1 mb-2">1- Clone our Github repository</p>
            <code class="primary--text d-block mb-1">
              git clone https://github.com/material-shell/material-shell.git &&
              cd material-shell && make install
            </code>

            <p class="text-subtitle-1 mt-2 mb-2">2- Restart GNOME Shell</p>
            <code class="primary--text text-subtitle-2 mb-2"
              >Log out and Log back in</code
            >
            or
            <code class="primary--text text-subtitle-2 mb-2">Alt+F2 => R</code>
            in Xorg
            <p class="text-subtitle-1 mt-2 mb-2">3- Enable GNOME Shell</p>
            <code class="primary--text text-subtitle-2 mb-2"
              >gnome-extensions enable material-shell@papyelgringo</code
            >

            <p class="text-subtitle-1 mt-2 mb-2">
              The you can update with the last changes
            </p>
            <code class="primary--text">
              git pull
              ~/.local/share/gnome-shell/extensions/material-shell@papyelgringo
            </code>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="css" scoped>
li {
  margin-bottom: 8px;
}
</style>

<template>
  <div id="app">
    <p>Orbit Position</p>
    <span>Orbit3: {{ orbit3 }}</span>
    <input type="range" min="1" max="100" v-model="orbit1" class="slider" />
    <input
      type="range"
      min="0"
      max="5"
      step=".02"
      v-model="orbit2"
      class="slider"
    />
    <input
      type="range"
      min="0"
      max="5"
      step=".02"
      v-model="orbit3"
      class="slider"
    />
    <vgl-renderer antialias style="height: 100vh;">
      <vgl-scene>
        <vgl-grid-helper
          :divisions="divisions"
          :color-center-line="
            `#${[cr, cg, cb]
              .map(v => parseInt(v).toString(16))
              .map(v => (v.length < 2 ? '0' + v : v))
              .join('')}`
          "
          :color-grid="
            `#${[gr, gg, gb]
              .map(v => parseInt(v).toString(16))
              .map(v => (v.length < 2 ? '0' + v : v))
              .join('')}`
          "
        >
          <vgl-geometry
            name="vertices"
            position-attribute="-1, 0, 10, 5, 0, 0, 5, 10, 0, -5, 5, 0, -5, 4, 0, 4, 4, 0, 4, 1, 0, -5, 1, 0"
            color-attribute="1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1"
          ></vgl-geometry>
          <vgl-line-basic-material
            name="line"
            linewidth="5"
            vertex-colors="vertex"
          ></vgl-line-basic-material>
          <vgl-line-loop geometry="vertices" material="line"></vgl-line-loop>
          <vgl-line-loop
            geometry="vertices"
            material="line"
            rotation="0 -1.5708 0 XYZ"
          ></vgl-line-loop>
        </vgl-grid-helper>
      </vgl-scene>
      <vgl-perspective-camera
        :orbit-position="orbit1 + ' ' + orbit2 + ' ' + orbit3"
      ></vgl-perspective-camera>
    </vgl-renderer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      orbit1: 20,
      orbit2: 0.8,
      orbit3: 0.7,
      divisions: 9,
      cb: 222,
      cr: "250",
      cg: "255",
      gr: "200",
      gg: "10",
      gb: "15"
    };
  },
  created() {
    setInterval(() => {
      this.orbit3 += 0.01;
    }, 100);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

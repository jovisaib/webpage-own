<template>
  <div style="text-align: center; width:100%;">
    <div id="mat_icons" />
  </div>
</template>

<script>
import * as d3 from "d3";
import { icons } from "../../js/icons.js";

export default {
  mounted() {
    let size = 200;
    let width = 600;
    let height = 600;

    let colors = d3
      .scaleSequential()
      .domain([0, size])
      .interpolator(d3.interpolateRainbow);

    let svg = d3.select("#mat_icons").append("svg");
    svg.attr("width", width).attr("height", height);

    const svgSelection = svg.append("g");
    let data = this.generateNodes(size);

    var simulation = d3
      .forceSimulation()
      .force("collide", d3.forceCollide(60))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .nodes(data)
      .on("tick", this.tick);

    svgSelection
      .selectAll(".nodes")
      .data(data, function(d, i) {
        return i;
      })
      .enter()
      .append("g")
      .attr("class", "node")
      .append("path")
      .attr("d", (d, i) => icons[i].d)
      .attr("fill", (d, i) => colors(i));

    svgSelection.attr("transform", `translate(${width / 3}, ${height / 3}) scale(0.15)`);
  },
  methods: {
    generateNodes(size) {
      let nodes = [];
      for (let i = 0; i < size; i++) {
        nodes.push({});
      }
      return nodes;
    },
    tick() {
      d3.selectAll(".node").attr("transform", d => `translate(${d.x},${d.y})`);
    }
  }
};
</script>


<style scoped>
</style>

<template>
<div style="text-align:center; width:100%;">
    <div id="mat_icons" />
</div>
</template>

<script>
import * as d3 from "d3";
import {
    icons
} from "../../js/icons.js";

export default {
    mounted() {
        let size = icons.length;
        let width = 450;
        let height = 450;

        let colors = d3
            .scaleSequential()
            .domain([0, size])
            .interpolator(d3.interpolateRainbow);

        let svg = d3.select("#mat_icons").append("svg");
        svg
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("reserveAspectRatio", "xMaxYMax meet");

        const svgSelection = svg.append("g").attr("id", "group");
        let data = this.generateNodes(size);

        let forceLayout = d3
            .forceSimulation()
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("charge", d3.forceManyBody().strength(15))
            .force("collide", d3.forceCollide(12))
            .nodes(data)
            .on("tick", this.tick);

        svgSelection
            .selectAll(".nodes")
            .data(data, function (d, i) {
                return i;
            })
            .enter()
            .append("g")
            .attr("class", "node")
            .append("path")
            .attr("d", (d, i) => icons[i].d)
            .attr("transform", function () {
                let x = this.getBBox().x + this.getBBox().width / 2;
                let y = this.getBBox().y + this.getBBox().height / 2;
                return `translate(${-11}, ${-11}) scale(0.05) rotate(180, ${x}, ${y})`;
            })
            .attr("fill", (d, i) => colors(i));

        svg.on("click", () => {
            forceLayout.force("charge", d3.forceManyBody().strength(15));
            forceLayout.alpha(1).restart();
        });
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
            d3.selectAll(".node").attr("transform", function (d) {
                return `translate(${d.x},${d.y}) `;
            });
        }
    }
};
</script>

<style scoped>
#mat_icons {
    cursor: pointer;
    width: 100%;
    height: 100%;
    max-width: 380px;
    display: inline-block;
}
</style>

<template>
    <!-- <div class="m-1 bg-danger" ref="treeContainer"></div> -->
    <div>
        <!-- <select id="node-select"></select> -->
        <button @click="searchTree(myData)">Search Tree</button>


        <!-- <button @click="searchNodeAndHighlight('ct_236')">Search</button> -->

        <svg class="tree width-100-percent container-border"></svg>
    </div>
</template>
  

<script>
import api from '../main.js';
import * as d3 from 'd3';


// Rest of your code...




export default {
    data() {
        return {
            name: "",
            data: null,
            margin: { top: 20, right: 90, bottom: 30, left: 90 },
            select2Data: [],
            select2DataObject: [],

        };
    },
    async created() {

        this.name = this.$route.params.name;
        this.routerName = this.$route.params.routerName;

        try {
            // const response = await api.get(`tree/${this.name}`);
            const response = await api.get(`device/A1_ACR`);

            // const response = await api.get(`${this.name}/${this.routerName}`);

            this.data = response.data;
            this.renderTree(this.data);

        } catch (error) {
            console.error(error);
            // Handle the error
        }
    },
    methods: {

        renderTree(data) {
            var colourScale = d3
                .scaleOrdinal()
                .domain([0, 1, 2, 3])
                .range(["#abacab", "#53e28c", "#4b80fa"]);

            console.log(data)


            let clientWidth = document.body.clientWidth;
            let clientHeight = document.body.clientHeight;
            this.width = Math.floor(clientWidth * 0.6);
            this.height = clientHeight - 72;
            console.log('width: ' + this.width + ' height: ' + this.height); // eslint-disable-line

            let margin = { top: 10, right: 120, bottom: 10, left: 100 };

            let width = this.width;

            let dy = width / 4;
            let dx = 30;

            let tree = d3.tree().nodeSize([dx, dy]);
            let diagonal = d3.linkHorizontal().x((d) => d.y).y((d) => d.x);

            const root = d3.hierarchy(data);

            root.x0 = 0;
            root.y0 = 0;
            root.descendants().forEach((d, i) => {
                d.id = i;
                d._children = d.children;
                if (d.depth && d.data.name.length !== 4) d.children = null;
            });

            let svg = d3.select('.tree').attr(
                'viewBox',
                [-margin.left, -margin.top, width, dx]
            );

            const gLink = svg
                .append('g')
                .attr('fill', 'none')
                // .attr("stroke", (d) => data.level)

                // .attr('stroke', '#555')
                // .attr('stroke-opacity', 0.4)
                .attr('stroke-width', 1.5)


            const gNode = svg
                .append('g')
                .attr('cursor', 'pointer')
                .attr('pointer-events', 'all');

            // ****************  zoom ************************
            // add zoom capabilities
            let zoomHandler = d3.zoom().on('zoom', zoomActions).scaleExtent([1 / 2, 8]);

            svg.call(zoomHandler).on('dblclick.zoom', null);
            zoomHandler(svg);

            // Zoom functions

            function zoomActions() {
                gNode.attr('transform', d3.event.transform);
                gLink.attr('transform', d3.event.transform);
            }
            // ***********************************************

            function update(source) {
                const duration = d3.event && d3.event.altKey ? 2500 : 250;
                const nodes = root.descendants().reverse();
                const links = root.links();

                // Compute the new tree layout.
                tree(root);
                const imageBaseUrl = "http://172.17.50.15:5173/device";

                const imageWidth = 60;
                const imageHeight = 60;

                let left = root;
                let right = root;
                root.eachBefore((node) => {
                    if (node.x < left.x) left = node;
                    if (node.x > right.x) right = node;
                });

                const height = right.x - left.x + margin.top + margin.bottom;

                const transition = svg
                    .transition()
                    .duration(duration)
                    .attr('viewBox', [-margin.left, left.x - margin.top, width, height])
                    .tween('resize', window.ResizeObserver ? null : () => () => svg.dispatch('toggle'));

                // Update the nodes…
                const node = gNode.selectAll('g').data(nodes, (d) => d.id);

                // Enter any new nodes at the parent's previous position.
                const nodeEnter = node
                    .enter()
                    .append('g')
                    .attr('transform', () => `translate(${source.y0},${source.x0})`)
                    .attr('fill-opacity', 0)
                    .attr('stroke-opacity', 0)
                    .on('click', (d) => {
                        d.children = d.children ? null : d._children;
                        update(d);
                    });

                nodeEnter
                    .append('image')
                    .attr('xlink:href', (d) => {
                        if (d.data.icon) {
                            return `${imageBaseUrl}/${d.data.icon}`;
                        } else {
                            return ''; // Replace with a placeholder image URL or remove this line
                        }
                    })
                    .attr('clip-path', (d) => {
                        const placeholder = '###IMAGE_WIDTH###';
                        const clipPath = `circle(${placeholder}px)`;
                        return clipPath.replace(placeholder, imageWidth / 2);
                    })
                    .attr('width', imageWidth)
                    .attr('height', imageHeight)
                    .attr('x', -imageWidth / 2)
                    .attr('y', -imageHeight / 2);


                // nodeEnter
                //     .append("image")
                //     .attr("xlink:href", (d) => `${imageBaseUrl}/${d.data.icon}`)
                //     .attr("clip-path", (d) => {
                //         const placeholder = "###IMAGE_WIDTH###";
                //         const clipPath = `circle(${placeholder}px)`;
                //         return clipPath.replace(placeholder, imageWidth / 2);
                //     })
                //     .attr("width", imageWidth)
                //     .attr("height", imageHeight)
                //     .attr("x", -imageWidth / 2)
                //     .attr("y", -imageHeight / 2);


                nodeEnter
                    .append('circle')
                    .attr("r", (d) => d.data.value)
                    .attr('fill', (d) => (d._children ? '#c9e4ff' : '#fff'))
                    .attr('stroke-width', 2)
                    .attr('stroke', (d) => (d._children ? '#c9e4ff' : 'steelblue'))
                    .style('stroke', (d) => d.data.type)


                nodeEnter
                    .append('text')
                    .attr('dy', '0.31em')
                    .attr('x', (d) => (d._children ? -30 : 30))
                    .attr('text-anchor', (d) => (d._children ? 'end' : 'start'))
                    .text((d) => d.data.name)
                // .clone(true)
                // .lower()
                // .attr('stroke-linejoin', 'round')
                // .attr('stroke-width', 3)
                // .attr('stroke', 'white');

                var blink = function () {
                    nodeEnter
                        .filter(function (d) {
                            return d.data.nodetype === "user";
                        })
                        .select("circle")
                        .transition()
                        .duration(500)
                        .style("opacity", 0.5)
                        .transition()
                        .duration(700)
                        .style("opacity", 1)
                        .on("end", blink);
                };

                // Start the blinking animation
                blink();

                // Transition nodes to their new position.
                const nodeUpdate = node
                    .merge(nodeEnter)
                    .transition(transition)
                    .attr('transform', (d) => `translate(${d.y},${d.x})`)
                    .attr('fill-opacity', 1)
                    .attr('stroke-opacity', 1);

                // Transition exiting nodes to the parent's new position.
                const nodeExit = node
                    .exit()
                    .transition(transition)
                    .remove()
                    .attr('transform', () => `translate(${source.y},${source.x})`)
                    .attr('fill-opacity', 0)
                    .attr('stroke-opacity', 0);

                // Update the links…
                const link = gLink.selectAll('path').data(links, (d) => d.target.id);

                // Enter any new links at the parent's previous position.
                const linkEnter = link
                    .enter()
                    .append('path')
                    // .attr("class", "link")

                    .attr('d', () => {
                        const o = { x: source.x0, y: source.y0 };
                        return diagonal({ source: o, target: o });
                    })
                    .attr("stroke", (d) => data.level)
                console.log(data.level)

                // Transition links to their new position.
                link.merge(linkEnter).transition(transition).attr('d', diagonal);

                // Transition exiting nodes to the parent's new position.
                link.exit().transition(transition).remove().attr('d', () => {
                    const o = { x: source.x, y: source.y };
                    return diagonal({ source: o, target: o });
                });

                // Stash the old positions for transition.
                root.eachBefore((d) => {
                    d.x0 = d.x;
                    d.y0 = d.y;
                });
            }

            update(root);
        },
        searchTree(d) {
            if (d.children) {
                d.children.forEach(this.searchTree);
            } else if (d._children) {
                d._children.forEach(this.searchTree);
            }
            var searchFieldValue = eval(searchField);
            if (searchFieldValue && searchFieldValue.toLowerCase().match(searchText.toLowerCase())) {
                // Walk parent chain
                var ancestors = [];
                var parent = d;
                while (parent !== null && typeof parent !== "undefined") {
                    ancestors.push(parent);
                    // console.log(parent);
                    parent.class = "found";
                    parent = parent.parent;
                }
                console.log(ancestors);
            }
        }
    }
}







// export default {
//     data() {
//         return {
//             name: '', 
//             responseData: ""
//         };
//     },

//     created() {
//         this.name = this.$route.params.name

//         console.log(this.name)

//         api.get(`tree/${this.name}`).then(response => {

//             this.name = response.data;
//             console.log(this.name.length)
//         })


//     },

// }



</script>




<style >
.width-100-percent {
    width: 100%;
    height: 100vh;
}

.node circle {
    fill: #8fee14;
    stroke: steelblue;
    stroke-width: 3px;
}

.node text {
    font: 12px sans-serif;
}

.link {
    fill: none;
    stroke: #e73b3b;
    stroke-width: 2px;
}
</style>
  
<template>
    <div v-if="flashMessage" class="flash-message">
        {{ flashMessage }}
    </div>
    <LoadingSpinner v-if="loading" />
    <!-- <div id="search" class="js-example-responsive col-md-3" style="width: 35%"></div> -->
    <div style="background-color: #e5e4e2">
        <div id="search" class="col-md-3"></div>

        
        <div id="tree">
            <div class="treemenu">
                <li onclick="addPlc.showModal()">Add PLC</li>
                <li onclick="addUser.showModal()">Add User</li>
                <li onclick="rename.showModal()">Rename</li>
                <li onclick="remove.showModal()">Remove</li>
                <li @click="openModal">Live Traffic</li>

            </div>
        </div>
    </div>
    <!-- Splitter Modal -->
    <dialog id="addPlc" class="modal">
        <form @submit.prevent="addPlc" class="modal-box">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="closeModal">✕</button>
            <h3 class="font-bold text-lg">Add Spliter</h3>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addPlcName">Node Name</label>
                    <input id="addPlcName" type="text" v-model="addPlcName"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addPlcCoreColour">Core Colour</label>
                    <select v-model="addPlcCoreColour"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option>Blue</option>
                        <option>Orange</option>
                        <option>Green</option>
                        <option>Brown</option>
                    </select>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addPlcFiberCode">Fiber Cable Code</label>
                    <input id="addPlcFiberCode" type="text" v-model="addPlcFiberCode"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addPlcTbc">Transmission Box Code</label>
                    <input id="addPlcTbc" type="text" v-model="addPlcTbc"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addPlcLat">Lattitude</label>
                    <input id="addPlcLat" type="text" v-model="addPlcLat"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addPlcLong">Longitude</label>
                    <input id="addPlcLong" type="text" v-model="addPlcLong"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for=" ">Splitter Core
                    </label>
                    <select v-model="addPlcCore"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option>2</option>
                        <option>4</option>
                        <option>8</option>
                        <option>16</option>
                    </select>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addPlcComment">Comment</label>
                    <textarea id="addPlcComment" type="textarea" v-model="addPlcComment"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>

                <div>
                    <input id="addPlcId" type="text" hidden>
                </div>

            </div>

            <div class="flex justify-end mt-6">
                <button type="submit"
                    class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </dialog>

    <!-- User Modal -->
    <dialog id="addUser" class="modal">
        <form method="dialog" class="modal-box" @submit.prevent="addUser">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="closeModal">✕</button>
            <h3 class="font-bold text-lg">Add User</h3>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addUserName">User Name</label>
                    <input id="addUserName" type="text" v-model="addUserName"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addUserTbc">Transmission Box Code</label>
                    <input id="addUserTbc" type="text" v-model="addUserTbc"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addUserLat">Lattitude</label>
                    <input id="addUserLat" type="text" v-model="addUserLat"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="addUserLong">Longitude</label>
                    <input id="addUserLong" type="text" v-model="addUserLong"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <input id="addUserId" type="text" hidden>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button type="submit"
                    class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </dialog>


    <dialog id="rename" class="modal">
        <form method="dialog" class="modal-box" @submit.prevent="rename">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="closeModal">✕</button>
            <h3 class="font-bold text-lg">Rename</h3>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="oldName">Old Name</label>

                    <input id="oldName" type="text" disabled
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="newName">New Name</label>
                    <input id="newName" type="text" v-model="newName"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>
                <div>
                    <input id="renameId" type="text" hidden>
                </div>
            </div>
            <div class="flex justify-end mt-6">
                <button type="submit"
                    class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </dialog>

    <dialog id="remove" class="modal">
        <form method="dialog" class="modal-box" @submit.prevent="remove">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="closeModal">✕</button>

            <div>
                <input id="removeId" type="text" hidden>
            </div>

            <div class="flex justify-center mt-6">
                <h3 class="font-bold text-lg">Are you Sure Remove This Node?</h3>
            </div>
            <div class="flex justify-end mt-6">
                <button type="submit"
                    class="px-6 py-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Ok</button>
            </div>
        </form>
    </dialog>


    <dialog id="livetraffic" class="modal" :open="isModalOpen" @close="closeModal">
        <form method="dialog" class="modal-box">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="closeModal">✕</button>
            <div>
                <input id="chartTitleName" type="text" hidden v-model="chartTitleName">
            </div>
            <div>
                <input id="pppoeClient" type="text" hidden>
            </div>
            <LineChart v-if="eventSourceUrl" :eventSourceUrl="eventSourceUrl" :chartTitleName="chartTitleName" />

        </form>
    </dialog>
</template>
  
  
<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import api from '../main.js';
import Chart from 'chart.js/auto';
import LineChart from '../components/LineChart.vue'


export default {

    components: {
        LoadingSpinner,
        LineChart,

    },

    data() {
        return {
            // url Section
            name: "",
            routerName: "",
            // tree data section
            data: [],
            // loading section
            loading: true,
            flashMessage: '',

            // add Plc Section
            addPlcName: '',
            addPlcFiberCode: '',
            addPlcCoreColour: '',
            addPlcCore: '',
            addPlcTbc: '',
            addPlcLat: '',
            addPlcLong: '',
            addPlcComment: '',

            // add User Section
            addUserName: '',
            addUserTbc: '',
            addUserLat: '',
            addUserLong: '',

            // rename section
            newName: '',
            isModalCanceled: true,

            // remove Section

            removeId: '', // Add the necessary data property for the delete ID

            // Chart Section

            isModalOpen: false,
            eventSourceUrl: '',
            chartTitleName: '',

        };
    },
    async mounted() {
        this.name = this.$route.params.name;
        this.routerName = this.$route.params.routerName;


        try {

            const response = await api.get(`${this.name}/${this.routerName}`)
                .then(response => {
                    this.flashMessage = response.data.message;

                    this.loading = false;
                    // const response = await api.get(`device/A1_ACR`);
                    this.data = response.data;
                    if (response.data.message) {
                        console.error(response.data.message);
                    } else {
                        this.renderTree(this.data);
                    }

                    console.log(response.data)
                })

        } catch (error) {
            console.error(error);
        }




    },



    methods: {

        async addPlc() {
            try {
                console.log('Form data:', {
                    addPlcName: this.addPlcName,
                    addPlcId: addPlcId.value,
                    addPlcFiberCode: this.addPlcFiberCode,
                    addPlcCore: this.addPlcCore,
                    addPlcCoreColour: this.addPlcCoreColour,
                    addPlcTbc: this.addPlcTbc,
                    addPlcLat: this.addPlcLat,
                    addPlcLong: this.addPlcLong,
                    addPlcComment: this.addPlcComment,
                    oltName: this.name,
                    routerName: this.routerName
                });

                if (this.isModalCanceled) {
                    // Reset the cancellation state
                    this.isModalCanceled = false;
                    return; // Exit the method without making the API request
                }

                const response = await api.post('/addPlcNode', {
                    addPlcName: this.addPlcName,
                    addPlcId: addPlcId.value,
                    addPlcFiberCode: this.addPlcFiberCode,
                    addPlcCore: this.addPlcCore,
                    addPlcCoreColour: this.addPlcCoreColour,
                    addPlcTbc: this.addPlcTbc,
                    addPlcLat: this.addPlcLat,
                    addPlcLong: this.addPlcLong,
                    addPlcComment: this.addPlcComment,
                    oltName: this.name,
                    routerName: this.routerName
                });
                console.log(response.data); // Handle the response from the server

                this.closeModal(); // Close the modal after the API request is completed
            } catch (error) {
                console.error(error);
            }
        },
        async addUser() {
            try {
                console.log('Form data:', {
                    addUserName: this.addUserName,
                    addUserTbc: this.addUserTbc,
                    addUserLat: this.addUserLat,
                    addUserLong: this.addUserLong,
                    addUserId: addUserId.value,
                    oltName: this.name,
                    routerName: this.routerName
                });

                if (this.isModalCanceled) {
                    // Reset the cancellation state
                    this.isModalCanceled = false;
                    return; // Exit the method without making the API request
                }

                const response = await api.post('/addUserNode', {
                    addUserName: this.addUserName,
                    addUserTbc: this.addUserTbc,
                    addUserLat: this.addUserLat,
                    addUserLong: this.addUserLong,
                    addUserId: addUserId.value,
                    oltName: this.name,
                    routerName: this.routerName
                });
                console.log(response.data); // Handle the response from the server

                this.closeModal(); // Close the modal after the API request is completed
            } catch (error) {
                console.error(error);
            }
        },

        async rename() {
            try {
                console.log('Form data:', {
                    oldName: oldName.value,
                    newName: this.newName,
                    renameId: renameId.value,
                    oltName: this.name,
                    routerName: this.routerName
                });

                if (this.isModalCanceled) {
                    // Reset the cancellation state
                    this.isModalCanceled = false;
                    return; // Exit the method without making the API request
                }

                const response = await api.post('/renameNode', {
                    oldName: oldName.value,
                    newName: this.newName,
                    renameId: renameId.value,
                    oltName: this.name,
                    routerName: this.routerName
                });
                console.log(response.data); // Handle the response from the server

                this.closeModal(); // Close the modal after the API request is completed
            } catch (error) {
                console.error(error);
            }
        },

        async remove() {
            try {
                console.log('Form data:', {
                    removeId: removeId.value,
                    oltName: this.name,
                    routerName: this.routerName
                });

                if (this.isModalCanceled) {
                    // Reset the cancellation state
                    this.isModalCanceled = false;
                    return; // Exit the method without making the API request
                }
                // const response = await api.get(`${this.name}/${this.routerName}`)
                const response = await api.post('/remove', {
                    removeId: removeId.value,
                    oltName: this.name,
                    routerName: this.routerName
                });
                console.log(response.data); // Handle the response from the server

                this.closeModal(); // Close the modal after the API request is completed
            } catch (error) {
                console.error(error);
            }
        },

        cancelModal() {
            this.isModalCanceled = true; // Set the cancellation state to true
            this.closeModal();
        },
        closeModal() {
            const addPlcDialog = document.getElementById('addPlc');
            const renameDialog = document.getElementById('rename');
            const addUserDialog = document.getElementById('addUser');
            const removeDialog = document.getElementById('remove');

            if (addPlcDialog) {
                const addPlcForm = addPlcDialog.querySelector('form');
                if (addPlcForm) {
                    addPlcForm.reset(); // Reset the form
                }
                addPlcDialog.close(); // Close the dialog
            }

            if (renameDialog) {
                const renameForm = renameDialog.querySelector('form');
                if (renameForm) {
                    renameForm.reset(); // Reset the form
                }
                renameDialog.close(); // Close the dialog
            }

            if (addUserDialog) {
                const addUserForm = addUserDialog.querySelector('form');
                if (addUserForm) {
                    addUserForm.reset(); // Reset the form
                }
                addUserDialog.close(); // Close the dialog
            }

            if (removeDialog) {
                const removeForm = removeDialog.querySelector('form');
                if (removeForm) {
                    removeForm.reset(); // Reset the form
                }
                removeDialog.close(); // Close the dialog
            }

            this.isModalCanceled = true; // Reset the cancellation state

            //Chart Section

            this.isModalOpen = false;
            this.eventSourceUrl = ''; // Reset the eventSourceUrl to empty

            // Close the EventSource connection here
            if (this.eventSource) {
                this.eventSource.close();
                console.log('EventSource connection closed');
            }
        },
        openModal() {
            this.isModalOpen = true;
            this.chartTitleName = chartTitleName.value
            this.eventSourceUrl = `http://192.168.100.2:5000/chart-data/${this.routerName}/${pppoeClient.value}`; // Replace with your actual EventSource URL
            // Hide the treemenu
            d3.select(".treemenu").style("display", "none");

        },
        // closeModal() {
        //     this.isModalOpen = false;
        //     this.eventSourceUrl = ''; // Reset the eventSourceUrl to empty

        //     // Close the EventSource connection here
        //     if (this.eventSource) {
        //         this.eventSource.close();
        //         console.log('EventSource connection closed');
        //     }
        // },

        beforeUnmounted() {
            if (this.isModalOpen && this.eventSourceUrl) {
                // Close the EventSource connection here
                console.log('EventSource connection closed before unmount');
            }
        },


        renderTree(data) {

            var colourScale = d3.scaleOrdinal()
                .domain([0, 1, 2, 3])
                .range(["#abacab", "#53e28c", "#4b80fa"]);

            function select2DataCollectName(d) {
                if (d.children) d.children.forEach(select2DataCollectName);
                else if (d._children) d._children.forEach(select2DataCollectName);
                if (!d.children && d.data.searchable == "YES")
                    select2Data.push(d.data.name);
            }

            //===============================================
            function searchTree(d) {
                console.log("search Tree Active");
                if (d.children) d.children.forEach(searchTree);
                else if (d._children) d._children.forEach(searchTree);
                var searchFieldValue = eval(searchField);
                if (
                    searchFieldValue &&
                    searchFieldValue.toLowerCase().match(searchText.toLowerCase())
                ) {
                    // Walk parent chain
                    var ancestors = [];
                    var parent = d;
                    while (typeof parent !== "undefined" && parent !== null) {
                        ancestors.push(parent);
                        //console.log(parent);
                        parent.class = "found";
                        parent = parent.parent;
                    }
                    console.log(ancestors);
                }
            }
            //===============================================
            function clearAll(d) {
                d.class = "";
                if (d.children) d.children.forEach(clearAll);
                else if (d._children) d._children.forEach(clearAll);
            }
            //===============================================
            function collapse(d) {
                if (d.children) {
                    d._children = d.children;
                    //set the parent object in all the children
                    d._children.forEach(function (d1) {
                        d1.parent = d;
                        collapse(d1);
                    });
                    d.children = null;
                }
            }
            //===============================================
            function collapseAllNotFound(d) {
                if (d.children) {
                    if (d.class !== "found") {
                        d._children = d.children;
                        d._children.forEach(collapseAllNotFound);
                        d.children = null;
                    } else d.children.forEach(collapseAllNotFound);
                }
            }
            //===============================================
            function expandAll(d) {
                if (d._children) {
                    d.children = d._children;
                    d.children.forEach(expandAll);
                    d._children = null;
                } else if (d.children) d.children.forEach(expandAll);
            }
            //===============================================
            // Toggle children on click.
            function toggle(d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }
                clearAll(root);
                update(d);
                $("#search").select2("val", "");
            }
            //===============================================
            $("#search").on("select2-selecting", function (e) {
                clearAll(root);
                expandAll(root);
                update(root);
                searchField = "d.data.name";
                searchText = e.object.text;
                searchTree(root);
                root.children.forEach(collapseAllNotFound);
                update(root);
            });



            // Get the dimensions of the device window
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            // Set the margins for the diagram
            var margin = { top: 10, right: 100, bottom: 10, left: 100 };

            // Calculate the width and height of the SVG element
            var width = windowWidth - margin.left - margin.right;
            var height = windowHeight - margin.top - margin.bottom;

            // Append the SVG element to the body of the page
            var svg = d3
                // .select("body")
                .select("#tree")
                .style("background-color", "#e5e4e2")
                .append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .call(
                    d3.zoom().on("zoom", () => {
                        svg.attr("transform", d3.event.transform);
                    })
                )
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var i = 0,
                duration = 550,
                root;
            const imageBaseUrl = "http://192.168.100.2:5174/device";

            const imageWidth = 60;
            const imageHeight = 60;

            // Declares a tree layout and assigns the size
            var treemap = d3.tree().size([height, width]);

            // Assigns parent, children, height, depth
            root = d3.hierarchy(data, function (d) {
                return d.children;
            });
            root.x0 = height / 2;
            root.y0 = 0;

            // Collapse after the second level
            root.children.forEach(collapse);

            update(root);


            var select2Data = [];
            select2DataCollectName(root);
            var select2DataObject = [];
            var searchField
            var searchText
            select2Data
                .sort(function (a, b) {
                    if (a > b) return 1; // sort
                    if (a < b) return -1;
                    return 0;
                })
                .filter(function (item, i, ar) {
                    return ar.indexOf(item) === i;
                }) // remove duplicate items
                .filter(function (item, i, ar) {
                    select2DataObject.push({
                        id: i,
                        text: item,
                    });
                });
            $("#search").select2({
                placeholder: "Search User Or Splitter",
                data: select2DataObject,
                containerCssClass: "search",
                theme: "classic"
            });



            // Collapse the node and all it's children
            function collapse(d) {
                if (d.children) {
                    d._children = d.children;
                    d._children.forEach(collapse);
                    d.children = null;
                }
            }

            function update(source) {
                // Assigns the x and y position for the nodes
                var data = treemap(root);

                // Compute the new tree layout.
                var nodes = data.descendants(),
                    links = data.descendants().slice(1);

                // Normalize for fixed-depth.
                nodes.forEach(function (d) {
                    d.y = d.depth * 180;
                });

                // ****************** Nodes section ***************************

                // Update the nodes...
                var node = svg.selectAll("g.node").data(nodes, function (d) {
                    return d.id || (d.id = ++i);
                });



                // Enter any new modes at the parent's previous position.
                var nodeEnter = node

                    .enter()
                    .append("g")
                    .attr("class", "node")
                    .attr("transform", function (d) {
                        return "translate(" + source.y0 + "," + source.x0 + ")";
                    })
                    .on("click", click);

                nodeEnter
                    // .append("image")
                    // .attr("xlink:href", (d) => d.data.icon)
                    // // .attr("clip-path", (d) => `circle(${imageWidth / 2}px)`)
                    // .attr("clip-path", (d) => {
                    //     const placeholder = "###IMAGE_WIDTH###";
                    //     const clipPath = `circle(${placeholder}px)`;
                    //     return clipPath.replace(placeholder, imageWidth / 2);
                    // })

                    // .attr("width", imageWidth)
                    // .attr("height", imageHeight)
                    // .attr("x", -imageWidth / 2)
                    // .attr("y", -imageHeight / 2)
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
                    .attr('y', -imageHeight / 2)
                    .on("contextmenu", showContextMenu)
                    .on("click", function (d) {
                        // Call the selectNodeName function when a node name is clicked
                        selectNodeName(d);
                    })

                    // .filter(function (d) {
                    //   return d.data.nodetype !== "user";
                    // })

                    // ON CLICK THEN TRIGGER
                    .on("click", selectNodeId)
                    // MOUSE HOVER THEN TRIGGER
                    .on("mouseover", selectNodeId)
                    .on("onclick", selectNodeId)
                    .on("mouseover", selectNodeName);

                nodeEnter
                    .append("circle")
                    .attr("r", function (d) {
                        // return d.data.value;
                        return d.data.value;
                    })
                    .style("stroke", function (d) {
                        return d.data.type;
                    })

                    .on("contextmenu", showContextMenu)

                    // .filter(function (d) {
                    //   return d.data.nodetype !== "user";
                    // })

                    //ON CLICK THEN TRIGGER
                    .on("click", selectNodeId)
                    //MOUSE HOVER THEN TRIGGER
                    .on("mouseover", selectNodeId)
                    .on("onclick", selectNodeId)
                    .on("mouseover", selectNodeName);

                // Add labels for the nodes
                nodeEnter
                    .append("text")
                    .attr("dy", ".35em")
                    .attr("x", function (d) {
                        return d.children || d._children ? -30 : 30;
                    })
                    .attr("text-anchor", function (d) {
                        return d.children || d._children ? "end" : "start";
                    })
                    .text(function (d) {
                        return d.data.name;
                    });

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

                // node pop up
                node
                    .filter(function (d) {
                        return d.data.nodetype === "user";
                    })
                    // select the specific node by its class
                    .on("mouseover", function (d) {
                        d3.select("#node-popup") // select the pop-up element
                            .style("display", "block") // show the pop-up
                            .html("ID: " + d.data._id + "<br>Name: " + d.data.name) // set the pop-up text to the node data
                            .style("left", d3.event.pageX + 10 + "px") // position the pop-up to the right of the cursor
                            .style("top", d3.event.pageY - 20 + "px");
                    })
                    .on("mouseout", function (d) {
                        d3.select("#node-popup") // select the pop-up element
                            .style("display", "none"); // hide the pop-up
                    });

                // UPDATE
                var nodeUpdate = nodeEnter.merge(node);

                // Transition to the proper position for the node
                nodeUpdate
                    .transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + d.y + "," + d.x + ")";
                    });

                // Update the node attributes and style
                nodeUpdate
                    .select("circle.node")
                    .attr("r", 6)
                    .attr("fill-opacity", "0.7")
                    .attr("stroke-opacity", "1")
                    .style("fill", function (d) {
                        if (d.class === "found") {
                            // return "#ff4136"; //red
                            return "#36F5FF"; //red
                        } else {
                            return typeof d._children !== "undefined"
                                ? colourScale(findParent(d))
                                : "#FFF";
                        }
                    })
                    .style("stroke", function (d) {
                        if (d.class === "found") {
                            // return "#ff4136"; //red
                            return "#36F5FF"; //red
                        } else {
                            return colourScale(findParent(d));
                        }
                    });

                // Remove any exiting nodes
                var nodeExit = node
                    .exit()
                    .transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + source.y + "," + source.x + ")";
                    })
                    .remove();

                // On exit reduce the node circles size to 0
                nodeExit.select("circle").attr("r", 1e-6);

                // On exit reduce the opacity of text labels
                nodeExit.select("text").style("fill-opacity", 1e-6);

                // ****************** links section ***************************

                // // Update the links...
                var link = svg.selectAll("path.link").data(links, function (d) {
                    return d.id;
                });
                const linkEnter = link
                    .enter()
                    .insert("path", "g")
                    .attr("class", "link")
                    .style("stroke", function (d) {
                        return d.data.level;
                    })
                    .attr("d", (d) => {
                        const o = { x: source.x0, y: source.y0 };
                        return diagonal(o, o);
                    });

                // Transition the links to their new position
                var linkUpdate = link.merge(linkEnter);

                linkUpdate.transition()
                    .duration(duration)
                    .attr("d", function (d) {
                        return diagonal(d, d.parent);
                    })
                    .style("stroke", function (d) {
                        if (d.class === "found") {
                            return "#36F5FF"; // Highlight color for found nodes
                        } else {
                            return d.data.level; // Link color based on parent nodes
                        }
                    });

                // Remove any old links
                link.exit()
                    .transition()
                    .duration(duration)
                    .style("stroke-opacity", 0) // Fade out the stroke
                    .remove();
                // // Store the old positions for transition.
                nodes.forEach(function (d) {
                    d.x0 = d.x;
                    d.y0 = d.y;
                })

                // Creates a curved (diagonal) path from parent to the child nodes
                function diagonal(s, d) {
                    const path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
            ${(s.y + d.y) / 2} ${d.x},
            ${d.y} ${d.x}`;

                    return path;
                }


                // Toggle children on click.
                function click(d) {
                    if (d.children) {
                        d._children = d.children;
                        d.children = null;
                    } else {
                        d.children = d._children;
                        d._children = null;
                    }
                    update(d);
                }
            }
            const treemenu = d3.select(".treemenu");


            function showContextMenu(d) {
                d3.event.preventDefault();

                treemenu
                    .style("left", d3.event.pageX + "px")
                    .style("top", d3.event.pageY + "px")
                    .style("display", "block");

                // Add event listener to the body to close the context menu when clicking outside of it
                d3.select("body").on("click.treemenu", () => {
                    const isClickedOnMenu = treemenu.node().contains(d3.event.target);
                    if (!isClickedOnMenu) {
                        treemenu.style("display", "none");
                        d3.select("#tree").on("click.treemenu", null); // Remove the event listener
                        d3.select("body").on("click.treemenu", null); // Remove the event listener from body
                    }
                });

            }
            svg.on("click", () => {
                treemenu.style("display", "none");
                d3.select("#tree").on("click.treemenu", null); // Remove the event listener
                d3.select("body").on("click.treemenu", null); // Remove the event listener from body
            });

            function selectNodeId(d) {
                // Update the input fields with the selected node's data
                // document.getElementById("input-id").value = d.data._id;

                app.dataProperty = d.data.name;
                // Optionally, update any other parts of the UI with the selected node's data

                // Log the selected node to the console
                console.log("Selected node ID By Select Node:", d.data.name);
            }



            function selectNodeName(d) {
                document.getElementById("oldName").value = d.data.name;
                document.getElementById("addUserId").value = d.data.id;
                document.getElementById("addPlcId").value = d.data.id;
                document.getElementById("renameId").value = d.data.id;
                document.getElementById("removeId").value = d.data.id;
                document.getElementById("chartTitleName").value = d.data.name;
                document.getElementById("pppoeClient").value = d.data.name;

                // Update the input fields with the selected node's data
                // this.oldName = d.data.name;
                // app.renameId = d.data._id;
                // app.renameId2 = d.data._id;
                // app.deleteId = d.data._id;
                // app.userId = d.data._id;

                // Optionally, update any other parts of the UI with the selected node's data
                console.log("Selected node Name:", d.data.name);
                console.log("Selected node ID:", d.data._id);
                console.log("Selected node TYPE:", d.data.nodetype);

            }

        }

    },
}


</script>

<style >
/* Add your component-specific styles here */
/* Select2 CSS */

.node circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 3px;
}

.node text {
    font: 12px sans-serif;
}

.link {
    fill: none;
    stroke: #ccc;
    stroke-width: 2px;
}

.found {
    fill: #36ff51;
    stroke: #4eff36;
}

.treemenu {
    position: absolute;
    display: none;
    background-color: #f2f2f2;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    min-width: 100px;
    border: 1px solid #d4d4d4;
    z-index: 1200;

}


.treemenu li {
    list-style-type: none;
    padding: 4px 16px;
}

.treemenu li:hover {
    background-color: #4677f8;
    color: #ffffff;
}


.node-popup {
    position: absolute;
    background-color: rgb(40, 180, 5);
    padding: 40px;
    border: 1px solid rgb(8, 8, 8);
}
</style>


  
<template>
    
        <div class="mb-2 col-sm-12 d-flex justify-content-between rounded  bg-primary ">
            <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1 "></div>
            <h1>OLT</h1>
            <button type="button" class="btn btn-success btn-color btn-bg-color btn-sm col-xs-2 m-2 " data-bs-toggle="modal" data-bs-target="#addOltModal">
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> ADD OLT
            </button>
        </div>



    <table class="table table-hover table-striped table-bordered">
        <thead class="bg-info text-white border rounded">
            <tr>
                <th>Device Name</th>
                <th>Router Name</th>
                <th>Device Type</th>
                <th>Device PORT</th>
                <th>Show Map</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.routerName }}</td>
                <td>{{ item.deviceType }}</td>
                <td>{{ item.devicePort }}</td>

                <td>
                     <RouterLink :to="`/${item.name}/${item.routerName}`" exact>R-Details</RouterLink>
                </td>
                <!-- Add more table cells for other fields -->
            </tr>
        </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="addOltModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" style="padding-left: 180px">Add OLT</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="http://172.17.50.15:5005/addOlt" id="addNodeform" method="post">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6">
                                <div class="mb-3">
                                    <label class="form-label">Olt Name</label>
                                    <input type="text" class="form-control" name="oltName" id="value" placeholder="Olt Name"
                                        autocomplete="off" />
                                    <div id="msg"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <label class="form-label">Select Router</label>
                                    <select type="text" class="form-control" name="routerName">
                                        <option>A1_ACR</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="mb-3">
                                    <label class="form-label">Device type</label>
                                    <select type="text" class="form-control" name="deviceType">
                                        <option>Epon</option>
                                        <option>Gpon</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-6 mb-3">
                                <label class="form-label">Device Port</label>
                                <div class="btn-group-justified m-auto" role="grid" aria-label="First group">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="inlineRadio2" value="2"
                                            name="devicePort" />
                                        <label class="form-check-label" for="inlineRadio2">2</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="inlineRadio4" value="4"
                                            name="devicePort" />
                                        <label class="form-check-label" for="inlineRadio4">4</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="inlineRadio8" value="8"
                                            name="devicePort" />
                                        <label class="form-check-label" for="inlineRadio8">8</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="inlineRadio16" value="16"
                                            name="devicePort" />
                                        <label class="form-check-label" for="inlineRadio16">16</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>

                            <button type="submit" class="btn btn-success">Add Olt</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import api from '../main.js'

export default {
    data() {
        return {
            items: []
        };
    },

    mounted() {
        api
            .get('/olt') // Replace with your API endpoint
            .then(response => {
                console.log(response.data)
                this.items = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    },
}

</script>




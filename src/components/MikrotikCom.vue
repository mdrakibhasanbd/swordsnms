
<template>
    <div>
        <!-- <div class="#">
            <nav class="#">
                <div class="#">
                    Mikrotik
                </div>
                <button href="#addMikrotikModal" class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal"
                    type="submit"><i class="fa fa-plus" aria-hidden="true" data-toggle="#addMikrotikModal"></i>
                </button>
            </nav>
        </div> -->
    
        <div class="container">
        <table class="table table-hover table-striped table-bordered">
            <thead class="bg-info text-white border rounded">
                <tr>
                    <th>Name</th>
                    <th>Host</th>
                    <th>Port</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="router in routers" :key="router.id">
                    <td>{{ router.name }}</td>
                    <td>{{ router.host }}</td>
                    <td>{{ router.port }}</td>
                    <td><button>test</button></td>
                    <!-- Add more table cells for other fields -->
                </tr>
            </tbody>
        </table>
        </div>
    
    
        <!-- <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Edit Data</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="host">Host</label>
                                <input type="text" class="form-control" id="host">
                            </div>
                            <div class="form-group">
                                <label for="port">Port</label>
                                <input type="text" class="form-control" id="port">
                            </div>
                            <div class="form-group">
                                <label for="password">Old Password</label>
                                <input type="password" class="form-control" id="password">
                            </div>
    
                            <div class="form-group">
                                <label for="password">New Password</label>
                                <input type="password" class="form-control" id="password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary save-btn">Save</button>
                    </div>
                </div>
            </div>
        </div> -->
    
    
        <!-- <div class="modal fade" id="addMikrotikModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="editModalLabel">Add Mikrotik</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="/addMikrotik" method="post">
                            <div class="mb-2">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name">
                            </div>
                            <div class="mb-2">
                                <label for="text">Username</label>
                                <input type="text" class="form-control" id="userName" name="userName">
                            </div>
                            <div class="mb-2">
                                <label for="host">Mikrotik IP</label>
                                <input type="text" class="form-control" id="host" name="host">
                            </div>
                            <div class="mb-2">
                                <label for="port">Port</label>
                                <input type="text" class="form-control" id="port" name="port">
                            </div>
    
                            <div class="mb-2">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" name="password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                    
                </div>
            </div>
        </div> -->

    </div>
</template>

<script>
import api from '../main.js'

export default {
    data() {
        return {
        routers: []
        };
    },

    mounted() {
        api
            .get('/router') // Replace with your API endpoint
            .then(response => {
                this.routers = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },
};

</script>


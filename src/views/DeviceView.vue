<template>
    <div class="posts">
        <h1 class="text-center text-6xl">OLT</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Device Name</th>
                    <th>Router Name</th>
                    <th>Device Type</th>
                    <th>Device PORT</th>
                    <!-- Add more table headers for other fields -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.routerName }}</td>
                    <td>{{ item.deviceType }}</td>
                    <td>{{ item.devicePort }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
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
                this.items = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },
};

</script>
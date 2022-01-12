<template>
<div>
    <h1>welcome to home</h1>
    <input type="text" v-model="a" />
    <button type="button" @click="getdata">Get</button>
    <button type="button" @click="setdata">set</button>

    <select v-model="region" @change="ChangeRegion">
        <option :key="idx" :value="data.v" v-for="(data, idx) in options">{{data.t}}</option>
    </select>

    <button type="button" @click="tableshow">table</button>
    <table class="table table-bordered" v-show="show">
        <tr :key="data.v" v-for="data in options">
            <td>{{data.v}}</td>
            <td>{{data.t}}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    data(){
        return{
            a: "abc",
            region: "",
            show: false,
            options: [
                {v:'S', t: 'Seoul'},
                {v:'J', t: 'Jeju'},
                {v:'B', t: 'Busan'},
            ],
        }
    },

    watch: {
        region(){
            console.log(this.region);
        }
    },
  
    methods: {
        getdata() {
            alert(this.a);
        },

        setdata() {
            this.a=12345;
        },

        ChangeRegion() {
            alert(this.region)
        },

        tableshow() {
            if(this.show){
                this.show=false;
            }
            else{
                this.show=true;
            }
        }
    },

}
</script>

<style>

</style>
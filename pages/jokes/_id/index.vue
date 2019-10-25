<template>
    <div>
        <h3>{{joke}}</h3>
        <small>{{$route.params.id}}</small>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return{
            joke:{}
        };
    },
   async created() {
         const config = {
            headers: {
                Accept: "application/json"
            }
        };

        try{
            const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
            this.joke = res.data.joke;
        } catch (err){
            console.log(err);
        }
    },
        head() {
        return{
            title:this.joke,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Best place for corny jokes'
                }

            ]
        };
    }  
};
</script>
<style lang="scss">
</style>
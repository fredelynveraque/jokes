<template>
    <div>
        <h1>About fredJokes</h1>
        <p>This is app displaying fred's corny jokes</p>
    </div>
    
</template>

<script>
export default {
    head() {
        return{
            title:'About My App',
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

<style>

</style>
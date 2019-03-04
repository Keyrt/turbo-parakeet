<template>

<div>
    <button @click="handleClick">{{ loginFlag ? '退出' : '登陆' }}</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            loginFlag: false
        }
    },
    created() {
        
        this.loginFlag = this.$route.matched[0].meta.login;
        // this.$route.matched[0].meta.login = !loginFlag;
    },
    methods: {
        handleClick() {
            this.loginFlag = !this.loginFlag;
            this.$route.matched[0].meta.login = this.loginFlag;
        }
    }
}
</script>

<style scoped>

</style>
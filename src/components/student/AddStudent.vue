<template>
    <div>
        添加学生：
        <input type="text" v-model="name">
        <button @click="add">确认添加</button>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            name: ""
            //  storeName: this.$store.state.name
        };
    },
    computed: {
        ...mapState({
            storeName: state => state.name,
            storeAge: state => state.age,
            storeLook: state => state.look
        }),

        a() {
            return "111";
        }
    },
    methods: {
        add() {
            // this.bus.$emit("add", this.name);

            this.$store.state.studentList.push(this.name);
        }
    }
    // computed: {
    //     storeName() {
    //         return this.$store.state.name;
    //     },
    //     storeAge () {
    //         return this.$store.state.age;
    //     },
    //     storeLook () {
    //         return this.$store.state.look;
    //     }
    // },
    // computed:mapState(['name', 'age', 'look']),
    // computed: mapState({
    //     storeName: state => state.name,
    //     storeAge: state => state.age,
    //     storeLook: state => state.look
    // }),
};
</script>

<style scoped>
button {
    margin-left: 20px;
    line-height: 25px;
    width: 80px;
}
</style>
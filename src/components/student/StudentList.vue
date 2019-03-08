<template>


<div>
    学生列表：
    <ul>
        <li v-for="(item, index) in student"
            :key="index+item">
            {{ item }}    
        </li>
    </ul>
</div>

</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    // props: ['student-list']
    // data () {
    //     return {
    //         // studentList: []
    //     }
    // },
    computed: {
        ...mapState('student',['studentList']),
        ...mapGetters('student',{
            student: 'newStudent'
        }),
        // ...mapGetters(['newStudents']),

        // newstudent () {
        //     return this.$store.getters.newstudent
        // }
    },
    created () {
        this.bus.$on('add', name => {
            this.studentList.push(name)
        })
    }
}
</script>

<style scoped>

</style>
<template>
<div>
    <!-- 学员展示 -->
    <add-student @add="add"></add-student>
    <student-list :student-list="StudentList"></student-list>
</div>

</template>

<script>
import AddStudent from '@/components/student/AddStudent'
import StudentList from '@/components/student/StudentList'

export default {
    components: {
        AddStudent,
        StudentList
    },
    data () {
        return {
            StudentList: []
        }
    },
    methods: {
        add (name) {

        }
    }
}
</script>

<style scoped>

</style>
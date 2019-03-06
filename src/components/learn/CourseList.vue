<template>
<ul id="course-list">
    <li v-for= "item in courseList"
        :key="item.name"
        class="cours">
        <img :src="item.poster" alt="" class="poster">
        <p class="title">{{ item.name }}</p>
        <div>
            <div>{{ item.price }}</div>
            <div class="institution">渡一教育</div>
        </div>
    </li>
</ul>

</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['courseList'])
    }
}
</script>

<style scoped>

</style>
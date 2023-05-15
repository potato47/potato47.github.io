<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear'; // 导入插件
import 'dayjs/locale/zh-cn'; // 导入本地化语言
import { solar2lunar } from 'solar2lunar';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Value',
        dataIndex: 'value',
    },
    {
        title: 'Progress',
        dataIndex: 'progress',
    },
];
const data = reactive([{
    key: '1',
    name: '时钟',
    value: '14:15',
    progress: '50%',
}, {
    key: '2',
    name: '星期',
    value: '星期四',
    progress: '77%',
}, {
    key: '3',
    name: '日历',
    value: '5月11日',
    progress: '40%',
}, {
    key: '4',
    name: '农历',
    value: '五月初五',
    progress: '37%',
}, {
    key: '5',
    name: '人生',
    value: '28',
    progress: '28%',
}]);

onMounted(() => {
    console.log('home onmounted');
});

// function onUpdate() {
//     const now = dayjs();
//     timeText.text = now.format('HH:mm:ss');
//     weekText.text = now.format('YYYY MM DD dddd');
//     const lunar = solar2lunar(now.year(), now.month() + 1, now.date());
//     lunarText.text = `${lunar.Animal}年${lunar.IMonthCn}${lunar.IDayCn}`;
// }

</script>

<template>
    <div ref="container" class="home-layout">
        <a-table :columns="columns" :data="data" :show-header="false" :pagination="false" />
    </div>
</template>

<style scoped>
.home-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
}
</style>

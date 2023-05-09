<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Application, Text } from 'pixi.js';
import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear'; // 导入插件
import 'dayjs/locale/zh-cn'; // 导入本地化语言
import { solar2lunar } from 'solar2lunar';

const container = ref();
const timeText = new Text();
const weekText = new Text();
const lunarText = new Text();

onMounted(() => {
    const appWidth = 500;
    const appHeight = 500;
    const app = new Application({
        width: appWidth,
        height: appHeight,
        // resizeTo: container.value,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        antialias: true,
        backgroundColor: '29292c',
    });
    container.value.appendChild(app.view);

    dayjs.extend(isLeapYear) // 使用插件
    dayjs.locale('zh-cn') // 使用本地化语言

    timeText.style.fill = 'white';
    timeText.anchor.set(0.5);
    timeText.position.set(app.screen.width / 2, app.screen.height / 2 - 100);
    app.stage.addChild(timeText);

    weekText.style.fill = 'white';
    weekText.anchor.set(0.5);
    weekText.position.set(app.screen.width / 2, app.screen.height / 2);
    app.stage.addChild(weekText);

    lunarText.style.fill = 'white';
    lunarText.anchor.set(0.5);
    lunarText.position.set(app.screen.width / 2, app.screen.height / 2 + 100);
    app.stage.addChild(lunarText);

    app.ticker.add(onUpdate)
});

function onUpdate() {
    const now = dayjs();
    timeText.text = now.format('HH:mm:ss');
    weekText.text = now.format('YYYY MM DD dddd');
    const lunar = solar2lunar(now.year(), now.month() + 1, now.date());
    lunarText.text = `${lunar.Animal}年${lunar.IMonthCn}${lunar.IDayCn}`;
}

</script>

<template>
    <div ref="container" class="home-layout">
    </div>
</template>

<style scoped>
.home-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

import Home from './pages/Home.vue';
import CalendarProgram from './pages/CalendarProgram.vue';
import PuzzleGame from './pages/PuzzleGame.vue';
import { markRaw } from 'vue';

export const pages = {
    Home: {
        key: 'Home',
        title: '首页',
        component: markRaw(Home),
    },
    CalendarProgram: {
        key: 'CalendarProgram',
        title: '日历',
        component: markRaw(CalendarProgram),
    },
    PuzzleGame: {
        key: 'PuzzleGame',
        title: '拼图',
        component: markRaw(PuzzleGame),
    },
};
export const menuData = [
    {
        key: 'Program',
        title: '小程序',
        children: [pages.CalendarProgram],
    },
    {
        key: 'Game',
        title: '小游戏',
        children: [pages.PuzzleGame],
    },
];

<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app>
      <!-- -->
      <v-list>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>首页</v-list-item-title>
        </v-list-item>

        <v-list-group
          no-action
          v-for="(menuGroup, i) in menuGroups"
          :key="i"
          :value="menuGroup.expand"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="menuGroup.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, i) in menuGroup.items"
            :key="i"
            link
            :to="item.link"
          >
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item to="/about">
          <v-list-item-title>关于</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <v-toolbar dark color="teal">
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="?"
          solo-inverted
        ></v-autocomplete>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      footer
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {},

  data: () => ({
    menuGroups: [
      {
        title: "信息",
        expand: true,
        items: [
          {
            title: "微博",
            link: "/news/weibo",
          },
          {
            title: "知乎",
            link: "/news/zhihu",
          },
          {
            title: "微信",
            link: "/news/weixin",
          },
        ],
      },
      {
        title: "工具",
        expand: false,
        items: [
          {
            title: "画板",
            link: "/tool/draw",
          },
          {
            title: "图片压缩",
            link: "/tool/compress",
          },
          {
            title: "格式转换",
            link: "/tool/transform",
          },
          {
            title: "生成二维码",
            link: "/tool/qrcode",
          },
        ],
      },
      {
        title: "游戏",
        expand: false,
        items: [
          {
            title: "俄罗斯方块",
            link: "/game/tetris",
          },
          {
            title: "贪吃蛇",
            link: "/game/snake",
          },
          {
            title: "斗地主",
            link: "/game/ddz",
          },
          {
            title: "超级玛丽",
            link: "about/mario",
          },
        ],
      },
    ],
    loading: false,
    items: [],
    search: null,
    select: null,
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  }),

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },

  created: function () {},
};
</script>

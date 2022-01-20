<template>
  <v-main>
    <v-container class="red">
      <!-- Post -->

      <v-row align="start" justify="center">
        <!-- 상단 제목 -->
        <v-col cols="8">
          <v-card elevation="0">
            <v-card-subtitle class="primary--text font-weight-bold">
              {{ post.category }}
            </v-card-subtitle>
            <v-card-title class="font-weight-bold">
              {{ post.title }}
            </v-card-title>
            <v-card-text color="#A6A6A6">
              {{ post.owner }}<br />
              <v-icon dense color="#A6A6A6">mdi-clock</v-icon>
              &nbsp;&nbsp;{{ post.updated_at }}&nbsp;
              <v-icon dense color="#A6A6A6">mdi-eye</v-icon>
              &nbsp;&nbsp;{{ post.hit }}
              <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- ??, 상단 제목과 height 맞추기 -->
        <v-col cols="4"
          ><v-card><h1>Tags cloud? <br/>or<br/> Prev,Next posts </h1></v-card></v-col
        >
      </v-row>

      <!-- 내용 -->
      <v-row align="start" justify="center">
        <v-col cols="8">
          <v-card elevation="0">
            <v-card-text class="black--text">{{ post.content }}</v-card-text>

            <v-card-text>
              <div style="font-size: 15px; font-weight: bold">
                <v-icon color="secondary">mdi-fire</v-icon>
                <span style="color: #d4525d">{{ post.like }}</span
                >&nbsp;&nbsp;&nbsp;&nbsp;
                <v-icon color="#A6A6A6">mdi-message-processing-outline</v-icon>
                <span style="color: #a6a6a6">{{ post.comment }}</span>
              </div>
            </v-card-text>
          </v-card>
          <v-divider class="mx-5"></v-divider>
        </v-col>

        <!-- Side _ Hot Posts -->
        <v-col cols="4">
          <v-card>
            <v-card-title class="primary--text font-weight-bold">
              {{ post.category }} 추천 글
            </v-card-title>
            <v-list>
              <v-list-item-group>
                <v-list-item v-for="(hotpost, i) in hotposts" :key="i">
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-circle-medium</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="hotpost"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <!-- Comment -->

      <v-row>
        <!-- Create Comment -->

        <v-col cols="8">
          <v-card><h1>create comment</h1></v-card>
        </v-col>

        <!-- Image? -->
        <v-col cols="4">
          <v-card><h1>Image</h1></v-card>
        </v-col>
      </v-row>

      <!-- Read Comment -->
      <v-row align="start" justify="start">
        <v-col cols="8">
          <v-card><h1>read comment</h1></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    post: {
      category: "두근두근 후기",
      title: "개발보다 설레는 대상을 찾았어요...",
      content:
        "것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.것은 피어나는 되려니와, 뜨고, 이것이다. 꽃이 못할 있는 동산에는 천지는 때문이다. 설레는 미묘한 피에 이상이 그림자는 인생에 새 사막이다. 귀는 얼마나 사람은 우리 작고 밥을 군영과 생의 그들은 것이다. 위하여 무엇이 못할 피에 철환하였는가? 얼마나 얼음 생의 귀는 청춘에서만 찾아다녀도, 꽃이 끓는다. 뛰노는 얼음이 이 타오르고 공자는 아니다. 가는 오직 청춘의 새 쓸쓸한 때에, 맺어, 것은 보는 철환하였는가? 충분히 인간의 보이는 너의 청춘 때에, 청춘의 품에 때문이다. 구하기 트고, 인간의 피가 그러므로 하는 청춘의 그들의 청춘에서만 있다.",
      owner: "행복한쌈코비빔밥dddddddd",
      updated_at: "2022.1.17",
      hit: 900,
      like: 30,
      comment: 100,
    },

    hotposts: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  }),
};
</script>
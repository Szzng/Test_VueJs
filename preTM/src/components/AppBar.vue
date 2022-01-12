<template>
  <v-app-bar app color="#FFFFFF">
    <v-img
      alt="Teameat Logo"
      class="shrink ml-4"
      src="../assets/tm_img/tm_logo.png"
      transition="scale-transition"
      width="100"
    />

    <v-spacer></v-spacer>

    <v-btn text href="/">Home</v-btn>
    <v-btn text href="/topic">토픽</v-btn>
    <v-btn text href="/pitapat">두근두근</v-btn>
    <v-btn text href="/about">About</v-btn>

    <v-spacer></v-spacer>

    <v-responsive max-width="200">
      <v-text-field
        hide-details
        dense
        outlined
        color="primary"
        rounded
        placeholder="검색어를 입력하세요."
      >
      </v-text-field>
    </v-responsive>

    <v-btn icon>
      <v-icon color="primary">mdi-bell</v-icon>
    </v-btn>

    <v-menu offset-y left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar color="primary" text v-bind="attrs" v-on="on">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
      </template>

      <v-list style="text-align:center;">
        <v-list-item
          ><v-list-item-title>
            <a href="/signup">회원가입</a>
          </v-list-item-title></v-list-item
        >
        <v-list-item
          ><v-list-item-title
            ><a href="/signin">로그인</a></v-list-item-title
          ></v-list-item
        >
        <v-list-item
          ><v-list-item-title
            ><a href="/logout">로그아웃</a></v-list-item-title
          ></v-list-item
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #589290;
  border-width: 2px;
}

a {
  text-decoration: none;
  font-weight: bold;
}
</style>
<template>
  <div>
    <v-app-bar app color="#FFFFFF">
      <a href="/">
        <v-img
          alt="Teameat Logo"
          class="shrink ml-4"
          src="../assets/tm_img/tm_logo.png"
          transition="scale-transition"
          width="100"
      /></a>

      <v-spacer></v-spacer>

      <v-btn text href="/">Home</v-btn>
      <v-btn text href="/topic">토픽</v-btn>
      <v-btn text href="/pitapat">두근두근</v-btn>
      <v-btn text href="/about">About</v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="240">
        <v-text-field
          id="search"
          hide-details
          dense
          filled
          rounded
          color="#F5F6F8"
          append-icon="mdi-magnify"
          placeholder="검색어를 입력하세요"
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

        <v-list style="text-align: center">
          <v-list-item
            ><v-list-item-title>회원가입</v-list-item-title></v-list-item
          >
          <v-list-item @click="dialog.login = true">
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item>

          <v-list-item
            ><v-list-item-title>로그아웃</v-list-item-title></v-list-item
          >
          <v-list-item
            ><v-list-item-title>My Page</v-list-item-title></v-list-item
          >
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- login dialog -->
    <v-dialog v-model="dialog.login" max-width="553" max-height="600">
      <v-card class="pa-8" color="#FFFFFF">
        <v-toolbar cards flat>
          <v-img
            alt="Teameat Logo"
            class="shrink mx-auto"
            src="../assets/tm_img/tm_shy.png"
            transition="scale-transition"
            width="200"
          />
        </v-toolbar>

        <v-form ref="form" class="pa-4 pt-6">
          <v-text-field outlined color="primary" label="이메일"></v-text-field>
          <v-text-field
            outlined
            color="primary"
            label="비밀번호"
            type="password"
          ></v-text-field>

          <v-row align="center" justify="center">
            <v-col>
              <v-checkbox color="secondary">
                <template v-slot:label>로그인을 유지합니다.</template>
              </v-checkbox>
            </v-col>

            <v-col>
              <a href="#">이메일, 비밀번호를 잊으셨나요?</a>
            </v-col>
          </v-row>
        </v-form>

        <v-card-actions>
          <v-btn
            block
            large
            color="primary"
            depressed
            @click="dialog.login = false"
          >
            로그인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: {
      login: false,
    },
  }),
};
</script>

<style scoped>
.v-dialog .v-text-field--outlined >>> fieldset {
  border-color: #b4b4b4;
  border-width: 1px;
}

.v-dialog .v-btn {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
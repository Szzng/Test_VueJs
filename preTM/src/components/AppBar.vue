<template>
  <div>
    <v-app-bar app color="#FFFFFF">
      <!-- teameat logo img -->
      <a href="/">
        <v-img
          alt="Teameat Logo"
          class="shrink ml-4"
          src="../assets/tm_img/tm_logo.png"
          transition="scale-transition"
          width="100"
      /></a>

      <!-- home, 토픽, 두근두근 탭 -->
      <v-tabs centered class="pl-n12" color="primary">
        <v-tabs-slider></v-tabs-slider>
        <v-tab class="black--text" to="/">Home</v-tab>
        <v-tab class="black--text" to="/topic">토픽</v-tab>
        <v-tab class="black--text" to="/pitapat">두근두근</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <!-- 검색창 -->
      <v-responsive max-width="240">
        <v-text-field
          class="search-box"
          hide-details
          dense
          filled
          rounded
          color="#F5F6F8"
          placeholder="검색어를 입력하세요"
        >
          <v-icon slot="append" color="primary">mdi-magnify</v-icon>
        </v-text-field>
      </v-responsive>

      <!-- 알림 버튼 -->
      <v-btn icon>
        <v-icon color="black">mdi-bell</v-icon>
      </v-btn>

      <!-- 계정 버튼 -->
      <v-menu offset-y left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon color="black"> mdi-account</v-icon>
            <span style="color: black">{{ me.username }}</span>
          </v-btn>
        </template>

        <v-list style="text-align: center">
          <template v-if="me.username === 'guest'">
            <v-list-item
              ><v-list-item-title>회원가입</v-list-item-title></v-list-item
            >
            <v-list-item @click="dialogOpen('login')">
              <v-list-item-title>로그인</v-list-item-title>
            </v-list-item>
          </template>

          <template v-else>
            <v-list-item
              ><v-list-item-title @click="logout"
                >로그아웃</v-list-item-title
              ></v-list-item
            >
            <v-list-item>
              <v-list-item-title>My Page</v-list-item-title></v-list-item
            >
          </template>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- login dialog -->
    <v-dialog v-model="dialog.login" width="553" height="600">
      <v-card class="pa-6" color="#FFFFFF">
        <v-toolbar cards flat class="my-6">
          <v-img
            alt="Teameat Logo"
            class="shrink mx-auto"
            src="../assets/tm_img/tm_shy.png"
            transition="scale-transition"
            width="200"
          />
        </v-toolbar>

        <v-form id="login-form" ref="loginForm" class="pa-3 pt-6">
          <v-text-field
            name="email"
            label="이메일"
            outlined
            color="primary"
          ></v-text-field>
          <v-text-field
            name="password"
            label="비밀번호"
            outlined
            color="primary"
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
          <v-btn block large color="primary" depressed @click="save('login')">
            로그인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default {
  data: () => ({
    tab: null,
    dialog: {
      login: false
    },
    me: {
      username: 'guest'
    }
  }),

  methods: {
    dialogOpen (kind) {
      console.log('dialogOpen()...', kind)
      if (kind === 'login') {
        this.dialog.login = true
      }
    },

    save (kind) {
      console.log('save()...', kind)
      if (kind === 'login') {
        this.login()
        this.dialog.login = false
        this.$refs.loginForm.reset()
      }
    },

    login () {
      console.log('login()...')
      this.me = { username: 'sz' }

      // const postData = new FormData(document.getElementById("login-form"));
      // axios
      //   .post("/accounts/login/", postData)
      //   .then((res) => {
      //     console.log("Login POST res", res);
      //     this.me = res.data;
      //   })
      //   .catch((err) => {
      //     console.log("Login POST err.response", err.response);
      //     alert("login NOK");
      //   });
    },

    logout () {
      console.log('logout()...')
      this.me = { username: 'guest' }
      // axios
      //   .get("/accounts/logout/")
      //   .then((res) => {
      //     console.log("Logout GET res", res);
      //     alert(`user ${this.me.username} logout OK`);
      //     this.me = { username: "guest" };
      //   })
      //   .catch((err) => {
      //     console.log("Logout GET err.response", err.response);
      //     alert("logout NOK");
      //   });
    }
  }
}
</script>

<style scoped>
.v-dialog .v-text-field--outlined >>> fieldset {
  border-color: #b4b4b4;
  border-width: 1px;
}

.v-tab,
.v-dialog .v-btn {
  font-weight: bold;
  font-size: 1em;
}

input::-webkit-input-placeholder {
  color: red;
  font-style: italic;
}
input:-ms-input-placeholder {
  color: red;
  font-style: italic;
}

.search-box input::placeholder {
  color: red !important;
  opacity: 1;
}
</style>

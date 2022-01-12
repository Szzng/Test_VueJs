<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" style="max-width: 553px; max-height: 600px">
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
          <v-btn block large color="primary" depressed>
            로그인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col></v-row
  >
</template>

<script>
export default {};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #b4b4b4;
  border-width: 1px;
}

.v-btn {
    font-weight: bold;
    font-size: 1.0em;
}

a {
  text-decoration-line: none;
  font-weight: bold;
}
</style>
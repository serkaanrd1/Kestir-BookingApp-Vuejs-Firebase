<template>
  <div class="welcome container">
    <p>Hoşgeldiniz</p>
    <div v-if="showLogin">
      <h2>Giriş</h2>
      <LoginForm @login="enterHome"></LoginForm>
      <p>
        Henüz hesabın yok mu? <span @click="showLogin = false">Kayıt Ol</span>
      </p>
    </div>
    <div v-else>
      <h2>Kayıt Ol</h2>
      <SignupForm @signup="enterHome"></SignupForm>
      <p>Zaten Üye Misin? <span @click="showLogin = true">Giriş</span></p>
    </div>
    <div>
      <img src="../assets/logo.png" alt="Logo" class="logo" />
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterHome = () => {
      router.push({ name: "homeview" });
    };
    return { showLogin, enterHome };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  color: #777;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
.logo {
  width: 100px;
}
</style>

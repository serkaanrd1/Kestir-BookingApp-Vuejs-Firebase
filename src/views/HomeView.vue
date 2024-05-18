<template>
  <Navbar />
  <Home />
  <img src="../assets/logo.png" alt="Logo" class="logo" />
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import Navbar from "../components/Navbar.vue";
import Home from "../components/Home.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm, Navbar, Home },
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
  width: 150px;
}
</style>

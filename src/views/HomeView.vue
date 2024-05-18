<template>
  <div class="icerik">
    <Navbar />
    <br />
    <Home />
    <br />

    <Footer />
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import Navbar from "../components/Navbar.vue";
import Home from "../components/Home.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm, Navbar, Home, Footer },
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
.icerik {
  overflow-x: hidden; /* Yatay kaydırmayı engeller */
  overflow-y: auto; /* Dikey kaydırmayı gerektiği zaman aktive eder */
}
</style>

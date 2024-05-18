<template>
  <nav v-if="user">
    <div>
      <p>Merhaba {{ user.displayName }}</p>
      <p class="email">Oturum açıldı {{ user.email }}</p>
    </div>
    <button class="pointer" @click="handleClick">Çıkış Yap</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const handleClick = async () => {
      await logout();
      // if (!error.value) {
      //   console.log("user logged out");
      // }
    };
    return { handleClick, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #ffffff;
  text-align: left;
}
nav p.email {
  font-size: small;
  color: #772323;
}
.pointer {
  cursor: pointer;
  background-color: #ff4343;
}
</style>

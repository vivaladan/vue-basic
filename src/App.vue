<template>
  <div>
    <div>Hello {{ value }}</div>
    <template v-if="userName">
      <div>Hi {{ userName }} <a href="/.auth/logout">Logout</a></div>
    </template>
    <template v-else>
      <div>Not logged in <a href="/.auth/login/aad">Login</a></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "World",
      userName: "",
    };
  },
  async mounted() {
    const userResponse = await fetch("/.auth/me");
    const {
      clientPrincipal: { userDetails },
    } = await userResponse.json();
    this.userName = userDetails;

    const response = await fetch("api/message");
    const { text } = await response.json();
    this.value = text;
  },
  components: {},
};
</script>

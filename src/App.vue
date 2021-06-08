<template>
  <div>
    <div>Hello!!!! {{ value }}</div>
    <template v-if="userName">
      <div>Hi {{ userName }} <a href="/.auth/logout">Logout</a></div>
    </template>
    <template v-else>
      <div>Not logged in <a href="/.auth/login/aad">Login</a></div>
    </template>
    <pre>{{ headers }}</pre>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "World",
      userName: "",
      headers: "",
    };
  },
  async mounted() {
    const userResponse = await fetch("/.auth/me");
    const { clientPrincipal } = await userResponse.json();
    this.userName = clientPrincipal?.userDetails;

    const messageResponse = await fetch("/api/message");
    const { text } = await messageResponse.json();
    this.value = text;

    const headersResponse = await fetch("/api/headers");
    const headers = await headersResponse.text();
    this.headers = headers;
  },
  components: {},
};
</script>

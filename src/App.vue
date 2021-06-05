<template>
  <div>Hello {{ value }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "World",
    };
  },
  async mounted() {
    const response = await fetch("api/message");
    const { text } = await response.json();
    this.value = text;
  },
};
</script>

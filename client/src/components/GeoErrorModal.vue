<template>
  <section
    @click="close()"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
  ></section>
  <div class="mx-auto absolute inset-0 login-element" style="width: 500px">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 shadow w-5/6 main-header rounded-lg">
        <div class="p-2 w-full h-full">
          <slot name="body"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }
    return { close };
  },
};
</script>

<style>
</style>
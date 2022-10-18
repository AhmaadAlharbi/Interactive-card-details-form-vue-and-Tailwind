<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="flex justify-between items-center container font-SpaceGrotesk">
    <!-- graident div -->
    <div id="gradient" class="w-[483px] h-screen">
      <div
        class="
          flex flex-col
          justify-center
          items-center
          space-y-10
          mt-40
          translate-x-40
        "
      >
        <!-- card front   -->
        <div class="relative">
          <img src="./assets/images/bg-card-front.png" alt="" />
          <div class="absolute top-10 left-5">
            <img src="./assets/images/card-logo.svg" alt="" />
            <div class="mt-5">
              <h1
                v-if="number.length"
                class="
                  text-white text-2xl
                  font-bold
                  translate-x-5
                  mt-10
                  tracking-widest
                "
              >
                {{ number }}
              </h1>
              <h1
                v-else
                class="
                  text-white text-2xl
                  font-bold
                  translate-x-5
                  mt-10
                  tracking-widest
                "
              >
                0000 0000 0000 0000
              </h1>
              <div
                class="
                  flex
                  mt-5
                  justify-between
                  items-center
                  text-LightGrey
                  font-bold
                  translate-x-5
                  tracking-widest
                "
              >
                <p class="uppercase" v-if="name.length">{{ name }}</p>
                <p v-else>AHMAD ALHARBI</p>
                <p>00/00</p>
              </div>
            </div>
          </div>
        </div>
        <!-- card back   -->
        <div class="translate-x-40">
          <div class="relative">
            <img class="" src="./assets/images/bg-card-back.png" alt="" />
            <p class="absolute top-[44%] right-12 text-white tracking-widest">
              000
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- form div -->
    <div>
      <form class="flex flex-col justify-center items-center">
        <div class="text-left my-6">
          <label
            class="
              text-DeepViolet
              tracking-widest
              uppercase
              text-[12px]
              font-bold
            "
            >cardholder name</label
          >
          <input
            type="text"
            class="
              block
              w-[381px]
              mt-2
              border-gray-300
              h-[45px]
              rounded-2xl
              placeholder-LightGrey
            "
            v-model="name"
            placeholder="e.g.Ahmad Alharbi"
          />
        </div>
        <div class="text-left">
          <label
            class="
              text-DeepViolet
              tracking-widest
              uppercase
              text-[12px]
              font-bold
            "
            >card number</label
          >
          <input
            v-model="number"
            type="text"
            class="
              block
              w-[381px]
              h-[45px]
              border-gray-300
              rounded-2xl
              placeholder-LightGrey
            "
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div class="flex mt-10">
          <div>
            <label
              class="
                block
                text-left text-DeepViolet
                tracking-widest
                uppercase
                text-[12px]
                font-bold
                mb-2
              "
              >Exp.Date .. (MM/YY)</label
            >
            <input
              type="text"
              class="w-[80px] border-gray-300 rounded-2xl placeholder-LightGrey"
              placeholder="MM"
            />
            <input
              type="text"
              class="
                w-[80px]
                mx-3
                border-gray-300
                rounded-2xl
                placeholder-LightGrey
              "
              placeholder="YY"
            />
          </div>
          <div class="text-left">
            <label
              class="
                block
                text-DeepViolet
                tracking-widest
                uppercase
                text-[12px]
                font-bold
                mb-2
              "
              >CVC</label
            >
            <input
              type="text"
              class="
                w-[191px]
                border-gray-300
                rounded-2xl
                placeholder-LightGrey
              "
              placeholder="e.g.123"
            />
          </div>
        </div>
        <button
          class="
            bg-DeepViolet
            text-white
            font-bold
            text-2xl
            w-full
            py-3
            mt-6
            rounded-md
          "
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      number: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

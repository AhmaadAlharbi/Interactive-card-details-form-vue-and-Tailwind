<template>
  <!-- https://github.com/paladinescamila/Interactive-Card-Details-Form -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div
    class="
      flex flex-col
      lg:flex-row
      justify-between
      items-center
      font-SpaceGrotesk
      max-w-7xl
    "
  >
    <!-- graident div -->
    <div id="gradient" class="w-full lg:w-[483px] lg:min-h-screen">
      <div
        class="
          flex flex-col
          justify-center
          items-center
          space-y-10
          mt-20
          lg:translate-x-20
          basis-1/4
        "
      >
        <!-- card front   -->
        <div class="relative">
          <img
            class="w-[286px] lg:w-[447px] lg:h-[245px]"
            src="./assets/images/bg-card-front.png"
            alt=""
          />
          <div class="absolute top-5 md:top-10 left-5">
            <img src="./assets/images/card-logo.svg" alt="" />
            <div class="mt-4 lg:mt-10">
              <h1
                v-if="number.length"
                class="
                  text-white text-xl
                  font-bold
                  translate-x-5
                  tracking-widest
                "
              >
                {{ number }}
              </h1>
              <h1 v-else class="text-white text-xl font-bold tracking-widest">
                0000 0000 0000 0000
              </h1>
              <div
                class="
                  flex
                  justify-between
                  items-center
                  text-LightGrey
                  mt-5
                  md:mt-16
                  tracking-widest
                  relative
                "
              >
                <p
                  class="uppercase max-w-sm overflow-hidden text-[12px]"
                  v-if="name.length"
                >
                  {{ name }}
                </p>
                <p class="uppercase overflow-hidden text-[12px]" v-else>
                  AHMAD ALHARBI
                </p>
                <p class="text-[12px] md:translate-x-36" v-if="mm || yy">
                  {{ mm }}/{{ yy }}
                </p>
                <p class="text-[12px] md:translate-x-36" v-else>00/00</p>
              </div>
            </div>
          </div>
        </div>
        <!-- card back   -->
        <div class="md:translate-x-40">
          <div class="relative">
            <img
              class="w-[286px] lg:w-[447px] lg:h-[245px]"
              src="./assets/images/bg-card-back.png"
              alt=""
            />
            <p
              v-if="cvc"
              class="absolute top-[44%] right-12 text-white tracking-widest"
            >
              {{ cvc }}
            </p>
            <p
              v-else
              class="absolute top-[44%] right-12 text-white tracking-widest"
            >
              000
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- form div -->
    <div class="flex-initial shrink-0">
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
              >Exp.Date <span class="ml-1"> (MM/YY)</span></label
            >
            <input
              v-model="mm"
              type="text"
              class="w-[80px] border-gray-300 rounded-2xl placeholder-LightGrey"
              placeholder="MM"
            />
            <input
              v-model="yy"
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
              v-model="cvc"
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
      mm: "",
      yy: "",
      cvc: "",
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

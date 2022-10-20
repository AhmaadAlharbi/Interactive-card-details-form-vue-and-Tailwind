<template>
  <!-- https://github.com/paladinescamila/Interactive-Card-Details-Form -->
  <!-- https://github.com/cosmoart/Interactive-card-details-form -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div
    class="
      flex flex-col
      lg:flex-row
      justify-center
      lg:justify-evenly
      items-center
      min-h-screen
      font-SpaceGrotesk
      relative
    "
  >
    <div
      id="gradient1"
      class="w-full h-[240px] lg:max-w-lg lg:h-full absolute top-0 left-0"
    ></div>
    <!-- graident div -->
    <div id="gradient">
      <div
        class="
          flex flex-col
          justify-center
          items-center
          lg:space-y-2
          -translate-y-5
        "
      >
        <!-- card front   -->
        <div
          class="
            relative
            overflow-hidden
            order-2
            lg:order-1
            z-10
            -translate-y-14
          "
        >
          <img
            class="w-[286px] lg:w-[447px] lg:h-[245px]"
            src="./assets/images/bg-card-front.png"
            alt=""
          />
          <div
            class="
              absolute
              text-left
              left-0
              right-0
              bottom-10
              lg:bottom-20
              text-white
            "
          >
            <h1
              v-if="number.length"
              class="
                text-white text-md
                lg:text-2xl
                font-bold
                tracking-widest
                ml-1
                lg:ml-8
              "
            >
              {{ number }}
            </h1>
            <h1
              v-else
              class="
                text-white text-md
                lg:text-2xl
                font-bold
                tracking-widest
                ml-2
                lg:ml-8
              "
            >
              0000 0000 0000 0000
            </h1>
          </div>

          <div class="absolute bottom-4 left-2 text-white">
            <p
              class="
                uppercase
                max-w-sm
                overflow-hidden
                text-[12px]
                tracking-widest
              "
              v-if="name.length"
            >
              {{ name }}
            </p>
            <p
              class="uppercase overflow-hidden text-[12px] tracking-widest"
              v-else
            >
              AHMAD ALHARBI
            </p>
          </div>
          <div class="absolute bottom-4 right-2 text-white">
            <p class="text-[12px]" v-if="mm || yy">{{ mm }}/{{ yy }}</p>
            <p class="text-[12px]" v-else>00/00</p>
          </div>
          <div class="absolute top-5 left-5">
            <img
              class="w-[50px] lg:w-full"
              src="./assets/images/card-logo.svg"
              alt=""
            />
          </div>
        </div>

        <!-- card back   -->
        <div class="lg:translate-x-20 order-1 lg:order-2 translate-x-10 z-0">
          <div class="relative">
            <img
              class="w-[286px] lg:w-[447px] lg:h-[245px]"
              src="./assets/images/bg-card-back.png"
              alt=""
            />
            <p
              v-if="cvc"
              class="
                absolute
                top-[42%]
                lg:top-[44%]
                right-6
                lg:right-12
                text-white text-sm
                lg:text-md
                tracking-widest
              "
            >
              {{ cvc }}
            </p>
            <p
              v-else
              class="
                absolute
                top-[42%]
                lg:top-[44%]
                right-6
                lg:right-12
                text-white text-sm
                lg:text-md
                tracking-widest
              "
            >
              000
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- form div -->
    <div v-if="!done" class="px-10 py-6">
      <form
        @submit.prevent="handleSubmit"
        class="
          flex flex-col
          justify-center
          items-center
          animate__animated animate__pulse
        "
      >
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
            :class="{ 'border-red , text-red': errorName }"
            v-model="name"
            placeholder="e.g.Ahmad Alharbi"
          />
          <p :class="{ 'text-red': errorName }">{{ errorName }}</p>
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
            maxlength="16"
            v-model="number"
            type="text"
            :class="{ 'border-red , text-red': errorNumber }"
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
          <p :class="{ 'text-red': errorNumber }">{{ errorNumber }}</p>
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
              maxlength="2"
              v-model="mm"
              type="text"
              class="w-[80px] border-gray-300 rounded-2xl placeholder-LightGrey"
              placeholder="MM"
              :class="{ 'border-red , text-red': errorMM }"
            />

            <input
              maxlength="2"
              v-model="yy"
              type="text"
              class="
                w-[80px]
                mx-3
                border-gray-300
                rounded-2xl
                placeholder-LightGrey
              "
              :class="{ 'border-red , text-red': errorYY }"
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
              maxlength="3"
              v-model="cvc"
              type="text"
              class="
                w-[191px]
                border-gray-300
                rounded-2xl
                placeholder-LightGrey
              "
              :class="{ 'border-red , text-red': errorCVC }"
              placeholder="e.g.123"
            />
          </div>
        </div>
        <div class="flex justify-between items-center space-x-6">
          <p v-if="errorMM || errorYY" class="-translate-x-32 text-red">
            Can’t be blank
          </p>
          <p class="translate-x-24" :class="{ 'text-red': errorCVC }">
            {{ errorCVC }}
          </p>
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
        <p class="text-red text-md" v-if="checkAllField">
          Please full in all fields
        </p>
      </form>
    </div>
    <!-- thank you message -->
    <div
      v-if="done"
      class="
        animate__animated animate__fadeInDownBig
        flex flex-col
        justify-center
        items-center
        transition-all
      "
    >
      <img src="./assets/images/icon-complete.svg" alt="" />
      <h1 class="text-4xl text-DeepViolet my-4">Thank you</h1>
      <p class="text-PurplishGrey">We’ve added your card details</p>
      <button
        @click="backHome"
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
        Continue
      </button>
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
      errorName: "",
      errorNumber: "",
      errorMM: "",
      errorYY: "",
      errorCVC: "",
      done: false,
      errorCount: 0,
      checkAllField: false,
    };
  },
  methods: {
    handleSubmit() {
      // this.errorName = "";
      //
      this.errorNumber = "";
      this.errorMM = "";
      this.errorYY = "";
      this.errorCVC = "";
      this.checkAllField = false;
      this.errorCount = 0;
      let letters = /^[A-Za-z]+$/;
      let numbers = /^\d+$/;
      if (
        this.name == "" ||
        this.number == "" ||
        this.mm == "" ||
        this.yy == "" ||
        this.cvc == ""
      ) {
        this.errorCount++;
        this.checkAllField = true;
      }
      // if (!this.name.match(letters)) {
      //   this.errorName = "Wrong format, letters only";
      // }
      if (!this.number.match(numbers) && this.number.length <= 16) {
        this.errorNumber = "Wrong format, numbers only and 16 digits";
        errorCount++;
      }
      if (!this.mm.match(numbers)) {
        this.errorMM = "Can’t be blank";
        errorCount++;
      }
      if (!this.yy.match(numbers)) {
        this.errorYY = "Can’t be blank";
        errorCount++;
      }
      if (!this.cvc.match(numbers)) {
        this.errorCVC = "Can’t be blank";
        errorCount++;
      }

      if (this.errorCount === 0) {
        this.done = true;
        this.number = this.number
          .replace(/[^\dA-Z]/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim();
      }
    },
    backHome() {
      this.name = "";
      this.number = "";
      this.mm = "";
      this.yy = "";
      this.cvc = "";
      this.done = false;
    },
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

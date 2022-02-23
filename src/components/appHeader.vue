<script>
import scroller from "../helpers/scroller.js";

import HiringService from "../utils/hiring.service.js";
export default {
  data() {
    return {
      suggested: [],
      showSuggestion: false,
      singleSuggestion: "",
      searchResult: [],
      singleSuggesionIndex: "",
    };
  },
  mounted() {
    // make nav stick when it isnt being scrolled
    scroller();
  },
  emit: ["activate_placeholder"],
  methods: {
    autoSuggest() {
      HiringService.Autosuggest()
        .then((res) => {
          this.showSuggestion = true;

          console.log(res);
          // empty  suggested array to avoid added clones
          this.suggested.length = 0;
          // fill arraa with suggested data
          this.suggested = res;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // close suggestion modal
    close() {
      setTimeout(() => {
        this.showSuggestion = false;
      }, 1000);
    },
    // get search input
    addSuggestion(value, i) {
      this.singleSuggestion = value;

      this.singleSuggesionIndex = i;
    },
    // submit search
    search() {
      if (this.singleSuggestion !== "") {
        // set to store
        this.$store.commit(
          "setlocation",
          this.suggested[this.singleSuggesionIndex]
        );
        this.$emit("activate_placeholder", true);
        HiringService.Search(this.suggested[this.singleSuggesionIndex].cityCode)
          .then((res) => {
            console.log(res);
            this.searchResult = res;
            this.singleSuggestion = "";

            // deactivate placeholder
            this.$emit("activate_placeholder", false);
            if (res.outlets.availability.results.length > 0) {
              // destructuring the response body
              const {
                outlets: {
                  availability: { results },
                },
              } = res;
              const {
                outlets: {
                  availability: {
                    pagination: { totalItems },
                  },
                },
              } = res;
              // // save to store
              this.$store.commit("setlocationResult", [results, totalItems]);
            } else {
              // reset store error
              this.$store.commit("setContentError", null);
              // empty out store
              this.$store.commit("setlocationResult", [[], "0"]);
              // deactivate placeholder
              this.$emit("activate_placeholder", false);
            }
          })

          .catch((err) => {
            if (err.response) {
              this.$store.commit("setContentError", err.response.data.message);
            } else {
              this.$store.commit(
                "setContentError",
                "opps... something went wrong"
              );
            }

            this.$store.commit("setlocationResult", [[], "0"]);
            // deactivate placeholder
            this.$emit("activate_placeholder", false);
          });
      }
    },
  },
};
</script>
<template>
  <div>
    <!-- first layer nav start -->
    <div class="flex justify-between py-3 lg:px-28 px-4 text-xs bg-white">
      <div>
        <img class="logo" src="/cloudtravel-logo.jpg" alt="header logo" />
      </div>
      <!-- hamburger menu for moble.hidden on large screen -->
      <div class="block lg:hidden mt-2">
        <i class="fa fa-bars fa-2xl" aria-hidden="true"></i>
      </div>
      <!--nav content hidden on small screen -->
      <div class="lg:flex space-x-3 hidden">
        <div class="flex">
          <div>
            <select
              id="languageSelect"
              class="border-none focus:outline-none outline-none"
            >
              <option>English</option>
            </select>
          </div>
          <div>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mt-2"
            >
              <path d="M0 0L4 5L8 0H0Z" fill="black" />
            </svg>
          </div>
        </div>
        <div class="flex">
          <div>
            <select class="border-none focus:outline-none outline-none">
              <option>USD</option>
            </select>
          </div>
          <div>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mt-2"
            >
              <path d="M0 0L4 5L8 0H0Z" fill="black" />
            </svg>
          </div>
        </div>
        <div>
          <p>My Account</p>
        </div>
        <div>Log Out</div>
      </div>
    </div>
    <!-- first layer nav end -->

    <form
      @submit.prevent="search"
      id="header"
      class="
        text-xs
        z-10
        bg-rakuteenSecondBlue
        lg:flex
        hidden
        w-full
        justify-center
        py-2
        space-x-2
        px-28
        rounded-sm
      "
    >
      <div class="w-full rounded-sm bg-white px-2 flex space-x-1 relative">
        <span class="mt-4">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.73185 12.8287C8.1551 12.8284 9.53733 12.352 10.6585 11.4753L14.1833 15L15.3171 13.8663L11.7923 10.3416C12.6695 9.22038 13.1462 7.83791 13.1466 6.41437C13.1466 2.87765 10.2688 0 6.73185 0C3.19494 0 0.317139 2.87765 0.317139 6.41437C0.317139 9.95109 3.19494 12.8287 6.73185 12.8287ZM6.73185 1.60359C9.38513 1.60359 11.5429 3.76123 11.5429 6.41437C11.5429 9.06751 9.38513 11.2251 6.73185 11.2251C4.07856 11.2251 1.92082 9.06751 1.92082 6.41437C1.92082 3.76123 4.07856 1.60359 6.73185 1.60359Z"
              fill="#757575"
            />
          </svg>
        </span>
        <input
          @focus="autoSuggest"
          @blur="close"
          type="text"
          placeholder="Singapore,Singapore"
          :value="singleSuggestion"
          class="
            py-4
            w-full
            text-rakuttenGrey
            font-extrabold
            border-none
            outline-none
            focus:outline-none
          "
        />
        <!-- suggestions -->
        <div
          v-if="showSuggestion"
          class="
            absolute
            mt-1
            w-full
            bg-white
            -left-1
            right-0
            z-10
            p-2
            space-y-4
            suggestion
          "
        >
          <div
            @click="addSuggestion(suggestion.label, i)"
            class="flex text-xs space-x-2 cursor-pointer"
            v-for="(suggestion, i) in suggested"
            :key="i"
          >
            <span
              ><svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3.5C6.44374 3.5 5.89997 3.66495 5.43746 3.97399C4.97495 4.28303 4.61446 4.72229 4.40159 5.2362C4.18872 5.75012 4.13302 6.31562 4.24154 6.86119C4.35006 7.40676 4.61793 7.9079 5.01126 8.30124C5.4046 8.69457 5.90574 8.96244 6.45131 9.07096C6.99688 9.17948 7.56238 9.12378 8.0763 8.91091C8.59021 8.69804 9.02947 8.33755 9.33851 7.87504C9.64755 7.41253 9.8125 6.86876 9.8125 6.3125C9.81164 5.56684 9.51505 4.85197 8.98779 4.32471C8.46053 3.79745 7.74566 3.50086 7 3.5ZM7 8C6.66624 8 6.33998 7.90103 6.06248 7.7156C5.78497 7.53018 5.56868 7.26663 5.44095 6.95828C5.31323 6.64993 5.27981 6.31063 5.34492 5.98328C5.41004 5.65594 5.57076 5.35526 5.80676 5.11926C6.04276 4.88326 6.34344 4.72254 6.67078 4.65742C6.99813 4.59231 7.33743 4.62573 7.64578 4.75345C7.95413 4.88118 8.21768 5.09747 8.40311 5.37498C8.58853 5.65248 8.6875 5.97874 8.6875 6.3125C8.687 6.7599 8.50905 7.18883 8.19269 7.50519C7.87633 7.82155 7.4474 7.9995 7 8ZM7 0.125C5.35954 0.126861 3.78681 0.779354 2.62683 1.93933C1.46685 3.09931 0.814361 4.67204 0.8125 6.3125C0.8125 8.52003 1.83273 10.8602 3.76302 13.0801C4.63166 14.0831 5.60912 14.9864 6.67741 15.7733C6.77196 15.8395 6.88458 15.875 7 15.875C7.11542 15.875 7.22804 15.8395 7.32259 15.7733C8.39088 14.9864 9.36834 14.0831 10.237 13.0801C12.1672 10.8602 13.1875 8.5201 13.1875 6.3125C13.1856 4.67204 12.5331 3.09931 11.3732 1.93933C10.2132 0.779354 8.64046 0.126861 7 0.125ZM7 14.608C5.83752 13.6962 1.9375 10.3366 1.9375 6.3125C1.9375 4.96984 2.47087 3.68217 3.42027 2.73277C4.36967 1.78337 5.65734 1.25 7 1.25C8.34266 1.25 9.63032 1.78337 10.5797 2.73277C11.5291 3.68217 12.0625 4.96984 12.0625 6.3125C12.0625 10.3366 8.16227 13.6964 7 14.608Z"
                  fill="#757575"
                />
              </svg>
            </span>
            <p class="font-extrabold text-rakuttenGrey">
              {{ suggestion.label }}
            </p>
          </div>
        </div>
        <!-- end of suggestions -->
      </div>

      <div
        class="
          w-1/2
          rounded-sm
          bg-white
          px-2
          flex
          space-x-1
          font-extrabold
          text-rakuttenGrey
        "
      >
        <span class="mt-4"
          ><svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1.35H12.5V0.15C12.5 0.0675 12.425 0 12.3333 0H11.1667C11.075 0 11 0.0675 11 0.15V1.35H5.66667V0.15C5.66667 0.0675 5.59167 0 5.5 0H4.33333C4.24167 0 4.16667 0.0675 4.16667 0.15V1.35H0.666667C0.297917 1.35 0 1.61813 0 1.95V14.4C0 14.7319 0.297917 15 0.666667 15H16C16.3687 15 16.6667 14.7319 16.6667 14.4V1.95C16.6667 1.61813 16.3687 1.35 16 1.35ZM15.1667 13.65H1.5V6.525H15.1667V13.65ZM1.5 5.25V2.7H4.16667V3.6C4.16667 3.6825 4.24167 3.75 4.33333 3.75H5.5C5.59167 3.75 5.66667 3.6825 5.66667 3.6V2.7H11V3.6C11 3.6825 11.075 3.75 11.1667 3.75H12.3333C12.425 3.75 12.5 3.6825 12.5 3.6V2.7H15.1667V5.25H1.5Z"
              fill="#757575"
            />
          </svg>
        </span>
        <input
          type="text"
          class="
            w-full
            py-4
            border-none
            outline-none
            focus:outline-none
            font-extrabold
          "
          placeholder=" Jul19 - Jul20                          1 night"
        />
      </div>
      <div class="w-1/2 px-2 bg-white">
        <input
          type="text"
          class="
            w-full
            py-4
            text-rakuttenGrey
            font-extrabold
            outline-none
            focus:outline-none
          "
          placeholder="2 adults,0 children, 1 room"
        />
      </div>
      <button
        class="bg-rakuteenBlue text-white py-4 font-extrabold rounded-sm px-10"
      >
        Search
      </button>
    </form>
  </div>
</template>

<style scoped>
.suggestion {
  top: 100%;
}
</style>

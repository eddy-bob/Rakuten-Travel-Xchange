<script>
import HiringService from "../utils/hiring.service.js";
export default {
  data() {
    return { sgo: "" };
  },
  methods: {
    // take the page back to the top of the dom
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    // show items on hover
    showItems(id) {
      var item = document.getElementById(id);

      item.style.display = "block";
    },
    hideItems(id) {
      var item = document.getElementById(id);

      item.style.display = "none";
    },
  },
  mounted() {
    HiringService.Autosuggest()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<template>
  <div class="lg:space-x-2 flex min-h-screen lg:mt-4 lg:px-20">
    <!--  -->
    <div class="space-y-1 pb-28 hidden lg:block">
      <!-- sidebar hidden on small menu -->
      <section class="relative h-24">
        <img src="/map-bg.jpeg" alt="map" class="w-full h-full" />
        <button
          class="
            font-extrabold
            absolute
            top-0
            bottom-0
            right-0
            left-0
            m-auto
            bg-rakuteenSecondBlue
            text-white text-xs
            h-10
            px-10
            rounded-sm
          "
        >
          Show On Map
        </button>
      </section>
      <!--  -->
      <section class="rounded-md text-xs shadow-md p-3 space-y-6 bg-white">
        <div class="flex justify-between font-extrabold">
          <p>Price Per Night</p>
          <p class="text-rakuteenSecondBlue">Clear</p>
        </div>
        <div class="relative">
          <div>
            <input
              v-model="sgo"
              type="range"
              class="w-full outline-none focus:outline-none myslider rounded-sm"
              min="1"
              max="100"
              id="sliderRange"
            />
            <!-- <p
              class="w-full bg-rakuteenBlue rounded-lg h-full absolute top-1"
            ></p> -->
            <svg
              class="absolute top-0 bottom-0"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z"
                fill="white"
                stroke="#00A1E6"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        <!-- <div class="w-full h-2">
          <input
            type="range"
            class="w-full outline-none focus:outline-none myslider"
            min="1"
            max="100"
            value="10"
            id="sliderRange"
          />
        </div> -->

        <div class="flex justify-between space-x-1">
          <input
            class="
              h-full
              outline-none
              focus:outline-none
              py-2
              border
              rounded-sm
              font-extrabold
              px-1
            "
            placeholder="SGO-0"
          />

          <p class="border px-2 h-0 mt-4"></p>

          <input
            v-model="sgo"
            class="
              outline-none
              focus:outline-none
              py-2
              border
              rounded-sm
              font-extrabold
              px-1
            "
            placeholder="SGD-550"
          />
        </div>
      </section>
      <!--  -->
      <section
        class="
          text-xs text-rakuttenGrey
          bg-white
          space-y-4
          py-3
          px-2
          rounded-lg
          shadow-lg
        "
      >
        <div class="flex justify-between font-extrabold">
          <p class="text-black">Reviews</p>
          <p class="text-rakuteenSecondBlue">CLEAR</p>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  checked
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check1">Excelent</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check2">Very Good</label>
              </div>
            </div>

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check3">Good</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check4">Fair</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check5">Poor</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check6">No Review</label>
              </div>
            </div>
            <p>999</p>
          </div>
        </div>
      </section>
      <!--  -->
      <section
        class="
          text-xs text-rakuttenGrey
          bg-white
          space-y-4
          py-3
          px-2
          rounded-lg
          justify-center
          shadow-lg
        "
      >
        <div class="flex justify-between font-extrabold">
          <p class="text-black">Start Rating</p>
          <p class="text-rakuteenSecondBlue">CLEAR</p>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  checked
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div class="flex space-x-1">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div class="flex space-x-1">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
              </div>
            </div>

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div class="flex space-x-1">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
              </div>
            </div>
            <p>999</p>
          </div>

          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div class="flex space-x-1">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div class="flex space-x-1">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                    fill="#E9BF2D"
                  />
                </svg>
              </div>
            </div>
            <p>999</p>
          </div>
        </div>
      </section>
      <!--  -->
      <section class="text-xs bg-white rounded-lg py-3 px-2 space-y-2">
        <p class="font-extrabold">Hotel name</p>
        <div class="w-full bg-white px-2 flex space-x-1 border rounded-lg">
          <input
            type="text"
            placeholder="eg.HIlton ibis.."
            class="
              py-3
              w-full
              text-rakuttenGrey
              font-extrabold
              outline-none
              focus:outline-none
            "
          />
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
        </div>
      </section>
      <!--  -->
      <section
        class="
          text-xs text-rakuttenGrey
          bg-white
          space-y-4
          py-3
          px-2
          rounded-lg
          shadow-lg
        "
      >
        <p class="font-extrabold text-black">Reservation Policy</p>

        <div class="space-y-2">
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check1">Free Cancellation</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check2">Book now, Pay later</label>
              </div>
            </div>

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check2">Pay at hotel</label>
              </div>
            </div>

            <p>999</p>
          </div>
        </div>
      </section>
      <!--  -->
      <section
        class="
          text-xs text-rakuttenGrey
          bg-white
          space-y-4
          py-3
          px-2
          rounded-lg
          shadow-lg
        "
      >
        <p class="font-extrabold text-black">Meal Plan</p>

        <div class="space-y-2">
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check1">Room only</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check2">Breakfast</label>
              </div>
            </div>

            <p>999</p>
          </div>
          <div class="flex space-x-1 text-rakuteenSecondBlue">
            <p>Show 5 more</p>
            <span class="">
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-top: 5px"
              >
                <path d="M0 0L4 5L8 0H0Z" fill="black" /></svg
            ></span>
          </div>
        </div>
      </section>
      <!--  -->
      <section
        class="
          text-xs text-rakuttenGrey
          bg-white
          space-y-4
          py-3
          px-2
          rounded-lg
          shadow-lg
        "
      >
        <p class="font-extrabold text-black">Property type</p>

        <div class="space-y-2">
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check1">Hotel</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check1">Hotel/Backpacker accomodation</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check2">Apartment</label>
              </div>
            </div>

            <p>999</p>
          </div>
          <div class="flex space-x-1 text-rakuteenSecondBlue">
            <p>Show 9 more</p>
            <span class="">
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-top: 5px"
              >
                <path d="M0 0L4 5L8 0H0Z" fill="black" /></svg
            ></span>
          </div>
        </div>
      </section>
      <!--  -->

      <section
        class="
          text-xs text-rakuttenGrey
          bg-white
          space-y-4
          py-3
          px-2
          rounded-lg
          shadow-lg
        "
      >
        <p class="font-extrabold text-black">Facilities</p>

        <div class="space-y-2">
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check1">Swimming pool</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check1">Room only</label>
              </div>
            </div>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <div>
                <input
                  type="checkbox"
                  class="
                    bg-rakuteenSecondBlue
                    outline-none
                    focus:outline-none
                    flipswitch
                  "
                />
              </div>
              <div>
                <label for="check2">Breakfast</label>
              </div>
            </div>

            <p>999</p>
          </div>
          <div class="flex space-x-1 text-rakuteenSecondBlue">
            <p>Show 5 more</p>
            <span class="">
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-top: 5px"
              >
                <path d="M0 0L4 5L8 0H0Z" fill="black" /></svg
            ></span>
          </div>
        </div>
      </section>
      <!--  -->
    </div>

    <div class="w-full min-h-screen flex flex-col justify-between pb-4">
      <div class="lg:space-y-2">
        <!-- filter result.hidden on small screen screen -->
        <!--  -->
        <p class="font-extrabold lg:block hidden">
          Singapore 9999 properties found
        </p>
        <!--  -->

        <!-- filter bar for large screen hide on large screen -->
        <div class="lg:flex space-x-1 text-rakuttenGrey text-xs hidden">
          <div class="w-full bg-rakuteenSecondBlue text-center rounded-sm py-3">
            <button class="text-white">Popularity</button>
          </div>
          <div class="flex bg-white w-full py-3 justify-center">
            <select>
              <option>option {lowest first}</option>
            </select>
            <span>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mt-1"
              >
                <path d="M0 0L4 5L8 0H0Z" fill="black" /></svg
            ></span>
          </div>
          <div class="bg-white w-full text-center py-3">
            <button>Reviews</button>
          </div>

          <div class="bg-white w-full text-center py-3">
            <button>Discount</button>
          </div>
        </div>
        <!-- end of filter for large screen -->
        <!-- start of filter for small screen -->
        <div class="">
          <div class="flex space-x-3 bg-white border py-2 px-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mt-3"
            >
              <path
                d="M14.8564 14.5735L11.1375 10.6129C12.0937 9.449 12.6176 7.98455 12.6176 6.45999C12.6176 2.89801 9.78739 0 6.30878 0C2.83017 0 0 2.89801 0 6.45999C0 10.022 2.83017 12.92 6.30878 12.92C7.6147 12.92 8.85917 12.5167 9.92316 11.751L13.6703 15.7416C13.8269 15.9082 14.0376 16 14.2633 16C14.477 16 14.6797 15.9166 14.8336 15.7649C15.1606 15.4428 15.171 14.9085 14.8564 14.5735ZM6.30878 1.68522C8.88002 1.68522 10.9718 3.82712 10.9718 6.45999C10.9718 9.09286 8.88002 11.2348 6.30878 11.2348C3.73754 11.2348 1.64577 9.09286 1.64577 6.45999C1.64577 3.82712 3.73754 1.68522 6.30878 1.68522Z"
                fill="#757575"
              />
            </svg>

            <div class="space-y-1">
              <p class="font-extrabold block lg:hidden">Singapore,Singapore</p>
              <div class="flex space-x-4 text-rakuttenGrey text-xs">
                <p>Aug 18 - Aug 19</p>
                <p>2 adults, 1 room, 0 children</p>
              </div>
            </div>
          </div>
          <div class="flex w-full">
            <div class="flex bg-white w-full justify-center">
              <button class="border-r text-center text-rakuteenSecondBlue">
                Sort & Filter
              </button>
            </div>

            <div class="flex bg-white w-full space-x-4 justify-center py-4">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mt-1"
              >
                <path
                  d="M7 3.5C6.44374 3.5 5.89997 3.66495 5.43746 3.97399C4.97495 4.28303 4.61446 4.72229 4.40159 5.2362C4.18872 5.75012 4.13302 6.31562 4.24154 6.86119C4.35006 7.40676 4.61793 7.9079 5.01126 8.30124C5.4046 8.69457 5.90574 8.96244 6.45131 9.07096C6.99688 9.17948 7.56238 9.12378 8.0763 8.91091C8.59021 8.69804 9.02947 8.33755 9.33851 7.87504C9.64755 7.41253 9.8125 6.86876 9.8125 6.3125C9.81164 5.56684 9.51505 4.85197 8.98779 4.32471C8.46053 3.79745 7.74566 3.50086 7 3.5ZM7 8C6.66624 8 6.33998 7.90103 6.06248 7.7156C5.78497 7.53018 5.56868 7.26663 5.44095 6.95828C5.31323 6.64993 5.27981 6.31063 5.34492 5.98328C5.41004 5.65594 5.57076 5.35526 5.80676 5.11926C6.04276 4.88326 6.34344 4.72254 6.67078 4.65742C6.99813 4.59231 7.33743 4.62573 7.64578 4.75345C7.95413 4.88118 8.21768 5.09747 8.40311 5.37498C8.58853 5.65248 8.6875 5.97874 8.6875 6.3125C8.687 6.7599 8.50905 7.18883 8.19269 7.50519C7.87633 7.82155 7.4474 7.9995 7 8ZM7 0.125C5.35954 0.126861 3.78681 0.779354 2.62683 1.93933C1.46685 3.09931 0.814361 4.67204 0.8125 6.3125C0.8125 8.52003 1.83273 10.8602 3.76302 13.0801C4.63166 14.0831 5.60912 14.9864 6.67741 15.7733C6.77196 15.8395 6.88458 15.875 7 15.875C7.11542 15.875 7.22804 15.8395 7.32259 15.7733C8.39088 14.9864 9.36834 14.0831 10.237 13.0801C12.1672 10.8602 13.1875 8.5201 13.1875 6.3125C13.1856 4.67204 12.5331 3.09931 11.3732 1.93933C10.2132 0.779354 8.64046 0.126861 7 0.125ZM7 14.608C5.83752 13.6962 1.9375 10.3366 1.9375 6.3125C1.9375 4.96984 2.47087 3.68217 3.42027 2.73277C4.36967 1.78337 5.65734 1.25 7 1.25C8.34266 1.25 9.63032 1.78337 10.5797 2.73277C11.5291 3.68217 12.0625 4.96984 12.0625 6.3125C12.0625 10.3366 8.16227 13.6964 7 14.608Z"
                  fill="#002D63"
                />
              </svg>

              <button class="text-center text-rakuteenSecondBlue">
                Map View
              </button>
            </div>
          </div>
        </div>
        <!-- end of filter for small screen -->
        <!--  -->
        <div>
          <div class="space-y-2">
            <!--  -->
            <div
              class="
                flex
                space-x-2
                w-full
                bg-white
                p-2
                rounded-lg
                shadow-lg
                text-rakuttenGrey text-xs
              "
            >
              <div class="grid grid-cols-1">
                <div>
                  <img src="/image1.png" class="" />
                </div>
                <div class="grid grid-cols-4">
                  <img src="/Rectangle63.png" />
                  <img src="/Rectangle64(copy).png" />
                  <img src="/Rectangle 65(1).png" />
                  <img src="/Rectangle66.png" />
                </div>
              </div>
              <div class="flex justify-between">
                <div class="space-y-2">
                  <div class="flex space-x-1">
                    <p class="font-extrabold text-sm">
                      The Fullerton Boy Hotel
                    </p>
                    <div class="flex space-x-1 mt-0.5">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>
                    80 Collyer quay, Marina Bay, Singapore, Singapore, 049326
                    (view map)
                  </p>
                  <p>
                    “Excellent boutique hotel. Great rooms in excellent
                    location. Awesome vibe. Beautiful beac...
                  </p>

                  <div class="space-x-1 flex relative">
                    <div>
                      <button
                        class="
                          border
                          px-1
                          text-rakuteenBlue
                          rounded-sm
                          border-rakuteenBlue
                          py-1
                        "
                      >
                        Breakfast
                      </button>
                    </div>
                    <div>
                      <button
                        class="
                          border
                          px-1
                          text-rakuteenBlue
                          rounded-sm
                          border-rakuteenBlue
                          py-1
                        "
                      >
                        Free Cancellation
                      </button>
                    </div>
                    <div>
                      <button
                        class="
                          border
                          px-1
                          text-rakuteenBlue
                          rounded-sm
                          border-rakuteenBlue
                          py-1
                        "
                      >
                        Pay Later
                      </button>
                    </div>
                    <div>
                      <button
                        @mouseenter="showItems('itemsId')"
                        @mouseleave="hideItems('itemsId')"
                        class="
                          border
                          px-1
                          text-rakuteenBlue
                          rounded-sm
                          border-rakuteenBlue
                          py-1
                        "
                      >
                        +1
                      </button>
                    </div>
                    <!-- hover elements -->
                    <div class="arrow-body absolute hidden" id="itemsId">
                      <div
                        class="
                          bg-rakuttenGrey
                          text-white
                          rounded-md
                          p-4
                          relative
                        "
                      >
                        <div class="arrow-up"></div>
                        <div class="flex space-x-3">
                          <div>
                            <div class="flex">
                              <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M1.5 3.83398L0 5.33398L4.5 9.83398L12 2.33398L10.5 0.833984L4.5 6.83398L1.5 3.83398Z"
                                  fill="#019501"
                                />
                              </svg>
                              <p>Breakfast</p>
                            </div>
                            <div class="flex">
                              <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M1.5 3.83398L0 5.33398L4.5 9.83398L12 2.33398L10.5 0.833984L4.5 6.83398L1.5 3.83398Z"
                                  fill="#019501"
                                />
                              </svg>
                              <p>Free cancellation</p>
                            </div>
                          </div>
                          <div>
                            <div class="flex">
                              <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M1.5 3.83398L0 5.33398L4.5 9.83398L12 2.33398L10.5 0.833984L4.5 6.83398L1.5 3.83398Z"
                                  fill="#019501"
                                />
                              </svg>
                              <p>Pay later</p>
                            </div>
                            <div class="flex">
                              <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M1.5 3.83398L0 5.33398L4.5 9.83398L12 2.33398L10.5 0.833984L4.5 6.83398L1.5 3.83398Z"
                                  fill="#019501"
                                />
                              </svg>
                              <p>Pay at hotel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end of hover elements -->
                  </div>

                  <div class="flex space-x-2">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.50012 11H4.00012V8H6.50012V5.5H9.50012V8H12.0001V11H9.50012V13.5H6.50012V11ZM8.00012 0L0.00012207 3V9.09C0.00012207 14.14 3.41012 18.85 8.00012 20C12.5901 18.85 16.0001 14.14 16.0001 9.09V3L8.00012 0Z"
                        fill="#002D63"
                      />
                    </svg>
                    <p class="font-extrabold">Singapore - SG Clean</p>
                  </div>
                </div>

                <div class="flex flex-col justify-between">
                  <div>
                    <img src="/TY-score-widget-transparent.png" alt="" />
                  </div>
                  <div class="space-y-1 flex flex-col">
                    <button
                      class="
                        border
                        px-1
                        text-white
                        rounded-sm
                        bg-rakuteenBlue
                        py-1
                      "
                    >
                      SAVE 16% TODAY!
                    </button>

                    <div class="w-full">
                      <div class="justify-end flex">
                        <p>Nightly avg.</p>
                      </div>
                      <div class="flex justify-end">
                        <p>
                          SGD 120
                          <span class="font-extrabold text-black text-lg">
                            SGD 100</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div
              class="
                flex
                space-x-2
                w-full
                bg-white
                p-2
                rounded-lg
                shadow-lg
                text-rakuttenGrey text-xs
              "
            >
              <div class="grid grid-cols-1">
                <div>
                  <img src="/image1.png" class="" />
                </div>
                <div class="grid grid-cols-4">
                  <img src="/Rectangle63.png" />
                  <img src="/Rectangle64(copy).png" />
                  <img src="/Rectangle 65(1).png" />
                  <img src="/Rectangle66.png" />
                </div>
              </div>
              <div class="flex justify-between">
                <div class="space-y-2">
                  <div class="flex space-x-1">
                    <p class="font-extrabold text-sm">
                      The Fullerton Boy Hotel
                    </p>
                    <div class="flex space-x-1 mt-0.5">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>
                    80 Collyer quay, Marina Bay, Singapore, Singapore, 049326
                    (view map)
                  </p>
                  <p>
                    “Excellent boutique hotel. Great rooms in excellent
                    location. Awesome vibe. Beautiful beac...
                  </p>

                  <div class="space-x-1">
                    <button
                      class="
                        border
                        px-1
                        text-rakuteenBlue
                        rounded-sm
                        border-rakuteenBlue
                        py-1
                      "
                    >
                      Breakfast
                    </button>
                    <button
                      class="
                        border
                        px-1
                        text-rakuteenBlue
                        rounded-sm
                        border-rakuteenBlue
                        py-1
                      "
                    >
                      Free Cancellation
                    </button>
                  </div>
                  <div class="flex space-x-2">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.50012 11H4.00012V8H6.50012V5.5H9.50012V8H12.0001V11H9.50012V13.5H6.50012V11ZM8.00012 0L0.00012207 3V9.09C0.00012207 14.14 3.41012 18.85 8.00012 20C12.5901 18.85 16.0001 14.14 16.0001 9.09V3L8.00012 0Z"
                        fill="#002D63"
                      />
                    </svg>
                    <p class="font-extrabold">Singapore - SG Clean</p>
                  </div>
                </div>
                <div class="flex flex-col justify-between">
                  <div>
                    <img src="/TY-score-widget-transparent.png" alt="" />
                  </div>

                  <div class="w-full flex justify-end">
                    <div>
                      <p class="ml-2">Nightly avg.</p>
                      <p class="font-extrabold text-black text-lg">SGD 100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div
              class="
                flex
                space-x-2
                w-full
                bg-white
                p-2
                rounded-lg
                shadow-lg
                text-rakuttenGrey text-xs
              "
            >
              <div class="grid grid-cols-1">
                <div>
                  <img src="/image1.png" class="" />
                </div>
                <div class="grid grid-cols-4">
                  <img src="/Rectangle63.png" />
                  <img src="/Rectangle64(copy).png" />
                  <img src="/Rectangle 65(1).png" />
                  <img src="/Rectangle66.png" />
                </div>
              </div>
              <div class="flex justify-between">
                <div class="space-y-2">
                  <div class="flex space-x-1">
                    <p class="font-extrabold text-sm">
                      The Fullerton Boy Hotel
                    </p>
                    <div class="flex space-x-1 mt-0.5">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#E9BF2D"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>
                    80 Collyer quay, Marina Bay, Singapore, Singapore, 049326
                    (view map)
                  </p>
                  <p>
                    “Excellent boutique hotel. Great rooms in excellent
                    location. Awesome vibe. Beautiful beac...
                  </p>

                  <div class="space-x-1">
                    <button
                      class="
                        border
                        px-1
                        text-rakuteenBlue
                        rounded-sm
                        border-rakuteenBlue
                        py-1
                      "
                    >
                      Breakfast
                    </button>
                    <button
                      class="
                        border
                        px-1
                        text-rakuteenBlue
                        rounded-sm
                        border-rakuteenBlue
                        py-1
                      "
                    >
                      Free Cancellation
                    </button>
                  </div>
                  <div class="flex space-x-2">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.50012 11H4.00012V8H6.50012V5.5H9.50012V8H12.0001V11H9.50012V13.5H6.50012V11ZM8.00012 0L0.00012207 3V9.09C0.00012207 14.14 3.41012 18.85 8.00012 20C12.5901 18.85 16.0001 14.14 16.0001 9.09V3L8.00012 0Z"
                        fill="#002D63"
                      />
                    </svg>
                    <p class="font-extrabold">Singapore - SG Clean</p>
                  </div>
                </div>
                <div class="flex flex-col justify-between">
                  <div>
                    <img src="/TY-score-widget-transparent.png" alt="" />
                  </div>

                  <div class="w-full flex justify-end">
                    <div>
                      <p class="ml-2">Nightly avg.</p>
                      <p class="font-extrabold text-black text-lg">SGD 100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div
        class="
          text-xs text-rakuteenSecondBlue
          lg:flex
          lg:space-y-0
          space-y-5
          justify-between
          px-4
        "
      >
        <div class="flex w-full justify-between">
          <div><p @click="toTop" class="cursor-pointer">Back to top</p></div>
          <div>
            <p class="text-rakuttenGrey">Showing Results 1 – 20 of 9999</p>
          </div>
        </div>

        <div
          class="flex justify-between lg:space-x-6 text-rakuttenGrey lg:pl-4"
        >
          <p>
            <svg
              class="mt-0.5"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0L6.25 1.25L2.5 5L6.25 8.75L5 10L0 5L5 0Z"
                fill="#002D63"
              />
            </svg>
          </p>
          <p class="bg-rakuteenSecondBlue text-white px-2 py-1 rounded-md">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>..</p>
          <p>13</p>
          <p>
            <svg
              class="mt-0.5"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 10L0.25 8.75L4 5L0.250001 1.25L1.5 -4.37114e-07L6.5 5L1.5 10Z"
                fill="#002D63"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  left: 45%;
  top: -8%;
  border-bottom: 5px solid #333333;
  position: absolute;
}
.arrow-body {
  top: 90%;
  left: 30%;
}
</style>

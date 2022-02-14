<script>
export default {
  methods: {
    // take the page back to the top of the dom
    toTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<template>
  <div class="space-x-2 flex min-h-screen mt-4 px-20">
    <div class="space-y-1 pb-28">
      <!--  -->
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
              type="range"
              class="w-full outline-none focus:outline-none myslider rounded-sm"
              min="1"
              max="100"
              value="10"
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
      <div class="space-y-2">
        <p class="font-extrabold">Singapore 9999 properties found</p>
        <!--  -->
        <div class="flex space-x-1 text-rakuttenGrey text-xs">
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
                      +1
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
                      <div class=" flex justify-end">
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
      <div class="text-xs text-rakuteenSecondBlue flex justify-between">
        <div><p @click="toTop" class="cursor-pointer">Back to top</p></div>
        <div class="flex space-x-4">
          <div>
            <p class="text-rakuttenGrey">Showing Results 1 – 20 of 9999</p>
          </div>
          <div class="flex space-x-6">
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
            <p class="bg-rakuteenSecondBlue text-white px-2 py-1 rounded-md">
              1
            </p>
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
  </div>
</template>
<style></style>

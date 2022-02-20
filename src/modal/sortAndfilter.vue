<script>
export default {

  emit: ["closeSort"],
};
</script>

<template>
  <div class="absolute w-full lg:hidden top-0">
    <div class="relative">
      <div
        class="
          w-full
          flex
          space-x-3
          text-rakuteenSecondBlue
          bg-white
          px-3
          py-3
          font-extrabold
        "
      >
        <span @click="$emit('close_Sort')">X</span>
        <p>Sort & Filter</p>
      </div>

      <!--  -->
      <div class="py-4 space-y-3 bg-rakuttenLightGrey">
        <p class="font-extrabold text-xs text-rakuteenSecondBlue px-3">
          Sort by
        </p>
        <div class="flex bg-white w-full py-3 text-xs text-rakuttenGrey">
          <select>
            <option>option (lowest first)</option>
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
        <p class="font-extrabold text-xs text-rakuteenSecondBlue px-3">
          Filter by
        </p>
      </div>
      <!--  -->
      <section class="text-xs shadow-md p-3 space-y-6 bg-white">
        <div class="flex justify-between font-extrabold">
          <p>Price Per Night</p>
          <p class="text-rakuteenSecondBlue">Clear</p>
        </div>
        <div class="relative">
          <div>
            <input
              type="range"
              class="w-full outline-none focus:outline-none myslider"
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
              font-extrabold
              px-1
            "
            placeholder="SGD-550"
          />
        </div>
      </section>
      <!--  -->
      <section
        class="text-xs text-rakuttenGrey bg-white space-y-4 py-3 px-2 shadow-lg"
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
      <section class="text-xs bg-white py-3 px-2 space-y-2">
        <p class="font-extrabold">Hotel name</p>
        <div class="w-full bg-white px-2 flex space-x-1 border">
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
        class="text-xs text-rakuttenGrey bg-white space-y-4 py-3 px-2 shadow-lg"
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
        class="text-xs text-rakuttenGrey bg-white space-y-4 py-3 px-2 shadow-lg"
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
        class="text-xs text-rakuttenGrey bg-white space-y-4 py-3 px-2 shadow-lg"
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
        class="text-xs text-rakuttenGrey bg-white space-y-4 py-3 px-2 shadow-lg"
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
    <div
      class="
        flex
        w-full
        lg:hidden
        px-3
        space-x-5
        bg-white
        py-2
        shadow-xl
        fixed
        bottom-0
      "
    >
      <div
        class="
          border border-rakuteenSecondBlue
          text-rakuteenSecondBlue
          bg-white
          py-2
          w-1/2
          border-r
        "
      >
        <button
          class="font-extrabold flex justify-center w-full"
          @click="showSort = true"
        >
          Clear
        </button>
      </div>
      <div class="bg-rakuteenSecondBlue text-white py-2 w-1/2">
        <button class="text-center font-extrabold flex justify-center w-full">
          Filter
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>

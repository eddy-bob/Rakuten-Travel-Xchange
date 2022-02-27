<script>
export default {
  data() {
    return {
      showOption: false,
      oldMeal: [],
      oldProperty: [],
      mealPlan: [
        { name: "Room only", digit: "999" },
        { name: "Breakfast", digit: "999" },
        { name: "Lunch", digit: "999" },
        { name: "Dinner", digit: "999" },
        { name: "Half board", digit: "999" },
        { name: "Full board", digit: "999" },
        { name: "All inclusive", digit: "999" },
      ],

      propertyType: [
        { name: "Hotel", digit: "999" },
        { name: "Hostel/Backpacker accomodation", digit: "999" },
        { name: "Apartment", digit: "999" },
        { name: "Aparthotel", digit: "999" },
        { name: "Resort", digit: "999" },
        { name: "Inn", digit: "999" },
        { name: "Motel", digit: "999" },
        { name: "Bed & breakfast", digit: "999" },
        { name: "Guesthouse", digit: "999" },
        { name: "Condo", digit: "999" },
        { name: "Aparthotel", digit: "999" },
        { name: "All-inclusive property", digit: "999" },
        { name: "Hostal", digit: "999" },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.oldMeal = this.mealPlan.slice(0, 2);
      this.mealPlanLength = `show ${this.mealPlan.length - 2} more`;
      this.oldProperty = this.propertyType.slice(0, 3);
      this.propertyLength = `show ${this.propertyType.length - 3} more`;
    });
  },
  methods: {
    // toggle show full meal options
    showFullMeal() {
      if (this.oldMeal === this.mealPlan) {
        this.oldMeal = this.mealPlan.slice(0, 2);
        this.mealPlanLength = `show ${this.mealPlan.length - 2} more`;
      } else {
        this.oldMeal = this.mealPlan;
        this.mealPlanLength = ` show less`;
      }
    },

    // toggle show full property options
    showFullProperty() {
      if (this.oldProperty === this.propertyType) {
        this.oldProperty = this.propertyType.slice(0, 3);
        this.propertyLength = `show ${this.propertyType.length - 3} more`;
      } else {
        this.oldProperty = this.propertyType;
        this.propertyLength = ` show less`;
      }
    },
  },
};
</script>

<template>
  <div class="absolute w-full lg:hidden top-0 h-full z-30">
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

        <div class="space-y-1 text-xs text-rakuttenGrey">
          <div
            class="
              flex
              h-auto
              relative
              bg-white
              w-full
              px-3
              py-3
              justify-between
              outline-none
              focus:outline-none
            "
          >
            <!-- <select>
                <option selected >option (lowest first)</option>
              </select> -->
            <button
              @click="showOption = !showOption"
              class="outline-none focus:outline-none"
            >
              option (lowest first)
            </button>
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
          <div
            class="bg-white flex justify-center py-3 w-full shadow-sm text-xs"
            v-if="showOption == true"
          >
            <div class="space-y-2">
              <p>option (lowest first)</p>
            </div>
          </div>
          <p class="font-extrabold text-xs text-rakuteenSecondBlue px-3">
            Filter by
          </p>
        </div>
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

        <div class="w-full flex justify-between">
          <div class="w-1/2">
            <input
              class="
                h-full
                outline-none
                w-full
                focus:outline-none
                py-2
                border
                font-extrabold
                px-1
              "
              placeholder="SGO-0"
            />
          </div>
          <div class="w-1/2">
            <p class="border px-2 h-0 mt-4 flex justify-center w-3 mx-auto"></p>
          </div>
          <div class="w-1/2">
            <input
              class="
                outline-none
                focus:outline-none
                py-2
                w-full
                border
                font-extrabold
                px-1
              "
              placeholder="SGD-550"
            />
          </div>
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
            <label class="container">
              <input
                checked
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>

              Excelent</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>

              Very Good</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>

              Good</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>

              Fair</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>

              Fair</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>

              No review</label
            >

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
            <label class="container">
              <input
                type="checkbox"
                class="
                  bg-rakuteenSecondBlue
                  outline-none
                  focus:outline-none
                  flipswitch
                "
              />
              <span class="checkmark"></span>
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
            </label>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="
                  bg-rakuteenSecondBlue
                  outline-none
                  focus:outline-none
                  flipswitch
                "
              />
              <span class="checkmark"></span>

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
            </label>

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="
                  bg-rakuteenSecondBlue
                  outline-none
                  focus:outline-none
                  flipswitch
                "
              />
              <span class="checkmark"></span>
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
            </label>
            <p>999</p>
          </div>

          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="
                  bg-rakuteenSecondBlue
                  outline-none
                  focus:outline-none
                  flipswitch
                "
              />
              <span class="checkmark"></span>
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
            </label>
            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="
                  bg-rakuteenSecondBlue
                  outline-none
                  focus:outline-none
                  flipswitch
                "
              />
              <span class="checkmark"></span>
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
            </label>
            <p>999</p>
          </div>
        </div>
      </section>
      <!--  -->
      <section
        class="text-xs text-rakuttenGrey bg-white space-y-4 py-3 px-2 shadow-lg"
      >
        <p class="font-extrabold text-black">Reservation Policy</p>

        <div class="space-y-2">
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>
              Free Cancellation</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Book now, Pay later</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Pay at hotel</label
            >

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
          <div
            class="flex justify-between"
            v-for="(meal, i) in oldMeal"
            :key="i"
          >
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>{{ meal.name }}</label
            >

            <p>{{ meal.digit }}</p>
          </div>

          <div class="flex space-x-1 text-rakuteenSecondBlue">
            <p class="cursor-pointer" @click="showFullMeal">
              {{ mealPlanLength }}
            </p>
            <span>
              <svg
                v-if="oldMeal.length < 3"
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-top: 5px"
              >
                <path d="M0 0L4 5L8 0H0Z" fill="black" />
              </svg>

              <svg
                v-else
                width="7"
                height="4"
                viewBox="0 0 7 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-top: 5px"
              >
                <path d="M0 4L3.2 0L6.4 4H0Z" fill="#002D63" />
              </svg>
            </span>
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
          <div
            class="flex justify-between"
            v-for="(property, i) in oldProperty"
            :key="i"
          >
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>{{ property.name }}</label
            >
            <p>{{ property.digit }}</p>
          </div>

          <div
            class="flex space-x-1 text-rakuteenSecondBlue"
            @click="showFullProperty"
          >
            <p class="cursor-pointer">{{ propertyLength }}</p>
            <span class="">
              <svg
                v-if="oldProperty.length < 4"
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-top: 5px"
              >
                <path d="M0 0L4 5L8 0H0Z" fill="black" />
              </svg>

              <svg
                v-else
                width="7"
                height="4"
                viewBox="0 0 7 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-top: 5px"
              >
                <path d="M0 4L3.2 0L6.4 4H0Z" fill="#002D63" />
              </svg>
            </span>
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
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Hotel</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Hotel/Backpacker
              accomodation</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Apartment</label
            >

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
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Swimming pool</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Room only</label
            >

            <p>999</p>
          </div>
          <div class="flex justify-between">
            <label class="container">
              <input
                type="checkbox"
                class="bg-rakuteenSecondBlue outline-none focus:outline-none"
              />
              <span class="checkmark"></span>Breakfast</label
            >

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

<script>
import scroller from "../helpers/scroller.js";

export default {
  mounted() {
    // make nav stick when it isnt being scrolled
    scroller();
  },
};
</script>
<template>
  <div>
    <!-- first layer nav start -->
    <div class="flex justify-between py-3 px-28 text-xs bg-white">
      <div>
        <img class="logo" src="/cloudtravel-logo.jpg" alt="header logo" />
      </div>
      <div class="flex space-x-3">
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
      id="header"
      class="
        text-xs
        z-10
        bg-rakuteenSecondBlue
        flex
        w-full
        justify-center
        py-2
        space-x-2
        px-28
        rounded-sm
      "
    >
      <div class="w-full rounded-sm bg-white px-2 flex space-x-1">
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
          type="text"
          placeholder="Singapore,Singapore"
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
          class="w-full py-4 text-rakuttenGrey font-extrabold"
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

<style></style>

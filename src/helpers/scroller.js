const scroller = () => {
  window.addEventListener("scroll", (event) => {
    if (document.documentElement.scrollTop > 0) {
      document.getElementById("header").style.top = 0;
      document.getElementById("header").style.position = "fixed";
    }
    if (document.documentElement.scrollTop === 0) {
      document.getElementById("header").style.position = "relative";
    }
  });
  return document.documentElement.scrollTop;
};
export default scroller;

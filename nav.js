const createNav = () => {
  let nav = document.querySelector(".navBar");
  nav.innerHTML =
    ' <div class="sticky top-0 z-50 bg-white">\n' +
    '        <header class="flex justify-between items-center mt-4">\n' +
    '          <a href="">\n' +
    '            <img class="w-8" src="images/logo.svg" alt="" />\n' +
    "          </a>\n" +
    '          <nav class="flex gap-10 ml-32">\n' +
    '            <a class="active-link negate-active" href="index.html">Home</a>\n' +
    '            <a href="#">Contact</a>\n' +
    '            <a href="#">About</a>\n' +
    '            <a href="#">Sign up</a>\n' +
    "          </nav>\n" +
    "\n" +
    '          <div class="flex gap-8">\n' +
    "            <div\n" +
    '              class="flex items-center gap-8 py-1.5 px-4 m-1.5 bg-white_smoke rounded-md"\n' +
    "            >\n" +
    "              <input\n" +
    '                class="opacity-80 outline-none bg-white_smoke w-full"\n' +
    '                type="search"\n' +
    '                placeholder="What are you looking for?"\n' +
    "              />\n" +
    '              <i class="fa-brands fa-searchengin"></i>\n' +
    "            </div>\n" +
    "            <button>\n" +
    "              <i\n" +
    '                class="fa-solid fa-cart-shopping color text-pakistan_green"\n' +
    "              ></i>\n" +
    "            </button>\n" +
    "          </div>\n" +
    "        </header>\n" +
    '        <div class="h-0.5 w-full bg-white_smoke mt-4"></div>\n' +
    "      </div>\n" +
    "     ";

  // Add sticky styles directly to the created element
  nav.querySelector("header").classList.add("sticky", "top-0", "z-50");
};

createNav();

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navBar");
  const sticky = nav.offsetTop;

  let window;
  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
});

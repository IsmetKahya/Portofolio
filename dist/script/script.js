window.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("heroTitle");
  title.classList.remove("opacity-0", "translate-y-10");
  title.classList.add("opacity-100", "translate-y-0");

  const el = document.getElementById("typeText");
  const fullHTML = el.innerHTML;
  const plainText = el.textContent;

  el.innerHTML = "";
  let i = 0;

  function type() {
    if (i < plainText.length) {
      el.textContent += plainText.charAt(i);
      i++;
      setTimeout(type, 60);
    } else {
      el.innerHTML = fullHTML;
    }
  }

  type();
});

document.addEventListener("DOMContentLoaded", function () {
      VANTA.CELLS({
        el: "#body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x56080d,
        color2: 0x0,
        size: 4.90,
        speed: 3.0,
      });
    });

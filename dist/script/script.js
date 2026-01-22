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

console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("cvModal");
  const openBtn = document.getElementById("cvTrigger");
  const closeBtn = document.getElementById("closeCvBtn");

  console.log(modal, openBtn, closeBtn);

  if (!modal || !openBtn || !closeBtn) {
    console.error("Element bulunamadi");
    return;
  }

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });
});
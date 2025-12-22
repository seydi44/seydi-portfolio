// script.js

document.addEventListener("DOMContentLoaded", () => {
  /* ------------ MOBILE NAV ------------ */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }

  /* ------------ FOOTER YEAR ------------ */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ------------ LANGUAGE SWITCH ------------ */
  const langSwitch = document.querySelector(".lang-switch");
  const langLabels = document.querySelectorAll(".lang-switch-label");

  function setLanguage(lang) {
    const active = lang === "tr" ? "tr" : "en"; // sadece en / tr
    document.documentElement.lang = active;

    // Body class üzerinden CSS ile göster/gizle
    document.body.classList.remove("lang-en", "lang-tr");
    document.body.classList.add("lang-" + active);

    // Slider knob pozisyonu
    if (langSwitch) {
      langSwitch.dataset.lang = active;
    }
  }

  // Varsayılan dil: EN
  setLanguage("en");

  // Slider butonları
  langLabels.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.dataset.langTarget; // "en" veya "tr"
      setLanguage(targetLang);
    });
  });
});

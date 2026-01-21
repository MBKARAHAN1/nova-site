document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------
     Aktif Menü 
  ----------------------------- */
  var links = document.querySelectorAll(".nav__link");
  var page = window.location.pathname.split("/").pop();

  if (page === "") page = "index.html";

  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === page) {
      links[i].classList.add("nav__link--active");
      links[i].setAttribute("aria-current", "page");
    }
  }

  /* -----------------------------
     Scroll’da Header Stili
  ----------------------------- */
  var header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });


 /* -----------------------------
   Kart Hover 
----------------------------- */
var cards = document.querySelectorAll(".card, .work");

for (var j = 0; j < cards.length; j++) {
  cards[j].addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-12px)";
    this.style.transition = "transform 0.25s ease";
  });

  cards[j].addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
}


  /* -----------------------------
     Contact Form (klasik kontrol)
  ----------------------------- */
  var form = document.querySelector(".form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("ad");
      var mail = document.getElementById("mail");
      var message = document.getElementById("mesaj");

      if (name.value.trim() === "" || mail.value.trim() === "") {
        alert("Ad ve e-posta alanları zorunludur.");
        return;
      }

      if (mail.value.indexOf("@") === -1) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return;
      }

      alert("Mesajınız alındı. En kısa sürede dönüş yapılacaktır.");
      form.reset();
    });
  }

});

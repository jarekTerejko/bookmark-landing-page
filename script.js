console.log(1);

const questionCont = document.querySelectorAll(".faq__question-container");

const answerContainer = document.querySelectorAll(".faq__answer-container");

answerContainer.forEach((answer) => {
  answer.classList.add("inactive");
});

questionCont.forEach((question) => {
  question.addEventListener("click", () => {
    const angleArrow = question.lastElementChild;
    const answer = question.nextElementSibling;
    if (answer.classList.contains("inactive")) {
      answer.classList.remove("inactive");
      answer.classList.add("active");
      angleArrow.classList.add("rotated");
    } else {
      answer.classList.remove("active");
      answer.classList.add("inactive");
      angleArrow.classList.remove("rotated");
    }
  });
});

const tabBtns = document.querySelectorAll(".features__btn");

const tabs = document.querySelectorAll(".features__tab");

tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    const target = document.querySelector(tabBtn.dataset.tabTarget);

    if (tabBtn.classList.contains("tab-active")) return;

    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("tab-active");
    });
    tabBtn.classList.add("tab-active");

    tabs.forEach((tab) => {
      tab.classList.remove("active-content");
    });

    target.classList.add("active-content");
  });
});

const form = document.querySelector(".contact__form");
const email = document.querySelector(".contact__email-input");
const circleError = document.querySelector(".fa-exclamation-circle");
const msgContainer = document.querySelector(".contact__info-msg");

const isMailValid = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const checkEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, circleError, "Email cannot be blank...");
  } else if (!isMailValid(emailValue)) {
    setError(email, circleError, "Whoops, make sure it's an email");
  } else {
    setSuccess(email, circleError, "Thank you!");
  }
};

const setError = (input, circleErr, msg) => {
  input.className = "contact__email-input contact__email-input--error";
  circleErr.className = "fas fa-exclamation-circle";
  msgContainer.className = "contact__info-msg contact__info-msg--visible-error";
  msgContainer.textContent = msg;
};

const setSuccess = (input, circleErr, msg) => {
  input.className = "contact__email-input";
  circleErr.className =
    "fas fa-exclamation-circle fa-exclamation-circle--error";
  msgContainer.className =
    "contact__info-msg contact__info-msg--visible-success";
  msgContainer.textContent = msg;
};

form.addEventListener("submit", (e) => {
  checkEmail();
  // to prevent site from reload event if input is correct
  e.preventDefault();
  if (email.classList.contains("contact__email-input--error")) {
    e.preventDefault();
  }
});

const navTrigger = document.querySelector(".navbar__nav-trigger");

const navtriggerInner = navTrigger.children[0];

const logo = document.querySelector(".navbar__site-logo");

const navList = document.querySelector(".navbar__nav-list");

const navLinks = document.querySelectorAll(".navbar__nav-link");

const openNav = () => {
  navList.classList.add("active-list");

  navtriggerInner.src = "images/icon-close.svg";

  logo.src = "images/logo-bookmark-white.svg";
};
const closeNav = () => {
  navList.classList.remove("active-list");

  navtriggerInner.src = "images/icon-hamburger.svg";

  logo.src = "images/logo-bookmark.svg";
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navList.classList.contains("active-list")) {
      closeNav();
    }
  });
});

navTrigger.addEventListener("click", (e) => {
  if (!navList.classList.contains("active-list")) {
    openNav();
  } else {
    closeNav();
  }
});

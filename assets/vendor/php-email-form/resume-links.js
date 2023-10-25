  // Function to open mailto links
  function openEmail() {
    window.location.href = "mailto:goyal.krish@gmail.com";
  }

  // Function to open tel links
  function openPhone() {
    window.location.href = "tel:+919936535554";
  }

  // Function to open Twitter link
  function openTwitter() {
    window.open("https://twitter.com/gk_0786", "_blank");
  }

  // Function to open LinkedIn link
  function openLinkedIn() {
    window.open("https://www.linkedin.com/in/gk321", "_blank");
  }

  // Add click event listeners to the email, phone, Twitter, and LinkedIn elements
  document.querySelector(".email a").addEventListener("click", openEmail);
  document.querySelector(".phone a").addEventListener("click", openPhone);
  document.querySelector(".twitter a").addEventListener("click", openTwitter);
  document.querySelector(".linkedin a").addEventListener("click", openLinkedIn);


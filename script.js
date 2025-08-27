let hearts = 0;

  const heartCountDisplay = document.getElementById("heartCountDisplay");

  function updateNavbar() {
    heartCountDisplay.textContent = hearts;
  }

  function handleHeart() {
    hearts++;
    updateNavbar();
  }

  document.querySelectorAll(".card .heartBtn").forEach(button => {
    button.addEventListener("click", handleHeart);
  });

  updateNavbar();
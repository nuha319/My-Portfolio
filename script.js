document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Simple project click alert (can be replaced with modal later)
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      alert(`You clicked on: ${card.textContent}`);
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.pathname;
    const links = document.querySelectorAll(".nav-link");
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentLocation) {
        link.classList.add("active");
      }
    });
  });
  

  
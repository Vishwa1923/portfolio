// Highlight current nav link
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active-nav");
  }
});

// Smooth scroll (for internal anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark mode toggle with localStorage
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌓";
toggleBtn.className = "dark-toggle";
document.body.appendChild(toggleBtn);

// Check if dark mode was enabled
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Back to top button
const topBtn = document.createElement("button");
topBtn.textContent = "⬆ Top";
topBtn.id = "backToTop";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.onscroll = () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Contact form success message (only works if redirected back from FormSubmit)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("success")) {
  alert("✅ Message sent successfully! I’ll get back to you soon.");
}

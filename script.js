function toggleMenu() {
    const nav = document.querySelector(".navlinks")
    const icon = document.querySelector(".hamburgericon");

    nav.classList.toggle("open");
    icon.classList.toggle("open");
}
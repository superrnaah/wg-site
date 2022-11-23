// mobile nav

const menuToggle = document.querySelector ('.toggle')
        const showcase = document.querySelector ('.showcase')

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')

        })

        document.querySelectorAll(".toggle-nav a").forEach(n => n.
            addEventListener("click", () => {
                menuToggle.classList.remove("active");
                showcase.classList.remove("active");
            }))


// Div appear on scroll

topBtn = document.getElementById("topBtn");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        topBtn.className = "scroll-btn show"
    } else {
        topBtn.className = "scroll-btn hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
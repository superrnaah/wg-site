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
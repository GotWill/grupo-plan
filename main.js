$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        },

    }
})


function openNav() {
  document.getElementById("myNav").style.width = "300px"
  document.querySelector(".nav-button").style.display = "none"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0"
}
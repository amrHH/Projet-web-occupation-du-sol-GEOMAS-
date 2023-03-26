var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    on: {
        init: function () {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 40,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "size": {
                        "value": 2
                    }
                },
                "background": {
                    "color": {
                        "value": "#000000"
                    }
                },
                "fullScreen": {
                    "enable": true
                },
                "interactivity": {
                }
            });
        }
    }
});
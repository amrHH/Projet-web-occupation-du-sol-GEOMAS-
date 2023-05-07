var swiper = new Swiper(".mySwiper", {
    direction: "vertical",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    touchRatio: 0,
    keyboard: true,
    on: {
        init: function () {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "size": {
                        "value": 3
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
            particlesJS('particles-js-2', {
                "particles": {
                    "number": {
                        "value": 7,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": ["#00FF00", "#0000FF", "#FFFF00"]
                    },
                    "opacity": {
                        "value": 0.2,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "shape": {
                        "type": "polygon",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 10
                        },
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                    },
                    "size": {
                        "value": 20,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                },
                "background": {
                    "color": {
                        "value": "#000000"
                    }
                },
                "fullScreen": {
                    "enable": true
                },
                "interactivity": {}
            });
        }
    }
});

var horizontalSwiper = new Swiper(".swiper-container-horizontal", {
    direction: "horizontal",
});
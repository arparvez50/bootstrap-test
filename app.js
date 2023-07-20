$(document).ready(function () {
      $(".owl-carousel").owlCarousel({
            nav: true,
            dots: true,
            margin: 10,
            responsive: {
                  400:{
                        items: 1,
                  },
                  700:{
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      });
});
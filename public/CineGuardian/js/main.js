(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Bar Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";

    var ctx6 = $("#myBarChartProcessador").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "bar",
        data: {
            labels: ["Alto", "Médio","Baixo"],
            datasets: [{
                backgroundColor: [
                    "#EB1616",
                    "#f8bb46",
                    "#ffffff"
                ],
                data: [70, 50,30]
            }]

        },
        options: {
            responsive: true
        }
    });

    alertaDisponibilidade(70, 55)

    function alertaDisponibilidade(totalMaquinas, maquinasAtivas) {
        var porcentagemMaquinasH5 = document.getElementById("porcentagemMaquinas");
        var pocentagemAtivas = (maquinasAtivas/totalMaquinas)* 100

       
    }


    // Bar Chart
    var ctx6 = $("#myBarChartRam").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "bar",
        data: {
            labels: ["Em uso"],
            datasets: [{
                backgroundColor: [
                    "#EB1616",
                ],
                data: [50, ]
            }]
        },
        options: {
            responsive: true
        }
    });

    alertaReiniciada(17)

    function alertaReiniciada(totalMaquinasReiniciadas) {
        var reiniciadasDiaH5 = document.getElementById("reiniciadasDia");
        var reiniciadasDia = (totalMaquinasReiniciadas / 24)

       
    }

    var ctx6 = $("#myBarChartArmazenamento").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "line",
        data: {
            labels: ["Em uso"],
            datasets: [{
                backgroundColor: [
                    "#EB1616"
                ],
                data: [50]
            }]

        },
        options: {
            responsive: true
        }
    });

    alertaDisponibilidade(70, 55)

    var tempo = [1, 2, 3, 4, 5];
    var dados_mbbits = [10, 15, 8, 12, 20];
    var dados_mbbits_por_segundo = dados_mbbits.map(function(valor) {
        return valor / 1e6;    });
    var ctx6 = $("#myBarChartInternet").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "line",
        data: {
            labels: tempo,
            datasets: [{
                label: 'Taxa de Transfência (Mbps),',
                data: dados_mbbits_por_segundo,
                borderColor: 'red',
                fill: false
               // backgroundColor: [
                    //"#EB1616",
                   // "#36A355",
                //],
               // data: [70]
            }]

        },
        options: {
            responsive: true
        }
    });

    alertaDisponibilidade(70, 55)


    
})(jQuery);

// export { graficoDemandas }; not java

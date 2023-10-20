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


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["id-01", "id-02", "id-03", "id-04"],
            datasets: [{
                    label: "Minutos",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgb(54,163,85, .6)"
                },
            ]
            },
        options: {
            responsive: true
        }
    });

    alertaDisponibilidadeTempo(120)

    function alertaDisponibilidadeTempo(tempoCompraSegundos) {
        var disponibilidadeTempoMedioH5 = document.getElementById("disponibilidadeTempoMedio");
        var disponibilidadeTempoMedio = tempoCompraSegundos / 60;

        disponibilidadeTempoMedioH5.innerHTML = `Seus clientes demoram aproximadamente<br> <spam style="color: #36A355; font-size: 1.8rem">${(disponibilidadeTempoMedio).toFixed(2)} minutos</spam> para realizar a compra`;
    }

    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
            datasets: [{
                    label: "Disponibilidade",
                    data: [15, 30, 55, 45, 70, 65, 85],
                    backgroundColor: "rgb(54,163,85, .6)",
                    fill: true
                },
                {
                    label: "Desempenho",
                    data: [99, 135, 170, 130, 190, 180, 270],
                    backgroundColor: "rgba(235, 22, 22, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Disponibilidade / tempo médio",
                fill: true,
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["2º Feira", "3º Feira", "4º Feira", "5º Feira", "6º Feira", "Sábado", "Domingo"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24, 15],
                label: "Horas"
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Funcionando","Inativos"],
            datasets: [{
                backgroundColor: [
                    "#36A355",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 15]
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

        porcentagemMaquinasH5.innerHTML = `Suas máquinas tem uma<br> disponibilidade de <spam style="color: #36A355; font-size: 1.8rem">%${(pocentagemAtivas).toFixed(2)}</spam>`
    }


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Total Máquinas", "Reiniciadas"],
            datasets: [{
                backgroundColor: [
                    "#252525",
                    "#36A355",
                ],
                data: [70, 17]
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

        reiniciadasDiaH5.innerHTML = `Em média, seus totens são <br>reicializados <span style="color: #36A355; font-size: 1.8rem">${(reiniciadasDia).toFixed(2)} vezes</span> por dia`
    }

})(jQuery);


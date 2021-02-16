jQuery(function ($) {
    'use strict';
    // chart1
    var options = {
        series: [{
            name: 'Income',
            data: [18, 51, 80, 38, 88, 50, 40, 52, 88, 80, 60, 70]
        }, {
            name: 'Expenses',
            data: [27, 38, 60, 77, 40, 50, 49, 29, 42, 27, 42, 50]
        },
        {
            name: 'Discount',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 64, 42, 30, 23]
        }
        ],
        chart: {
            foreColor: 'rgba(255, 255, 255, 0.65)',
            type: 'area',
            height: 340,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: false,
                top: 3,
                left: 14,
                blur: 4,
                opacity: 0.10,
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: -25
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 3,
            curve: 'smooth'
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return "$ " + val + " "
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        grid: {
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.12)',
            strokeDashArray: 5,
        },
        colors: ["#dc3545", "#fff", "#28a745"],
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + "$";
                }
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
    };
    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
    // chart 2
    var options = {
        series: [74, 45, 62],
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Customer', 'Sale', 'Product'],
    };

    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();

    // chart 3
    var options = {
        series: [{
            name: 'Revenue',
            data: [10, 22, 9, 12, 7, 9, 15, 19]
        }],
        chart: {
            type: 'area',
            width: 140,
            height: 65,
            sparkline: {
                enabled: true
            },
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                endingShape: 'rounded'
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 0
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            //colors: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'darken',
                shadeIntensity: 0.015,
                gradientToColors: ['#fff'],
                type: 'vertical',
                inverseColors: false,
                opacityFrom: 0.011,
                opacityTo: 0.025,
                stops: [0, 50, 65, 91]
            },
        },
        colors: ["#fff"],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return "$ " + val + " "
                }
            },
            x: {
                show: false
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();

    // chart 4
    var options = {
        series: [{
            name: 'Net Profit',
            data: [10, 9, 24, 19, 22, 9, 12, 7]
        }],
        chart: {
            type: 'area',
            width: 140,
            height: 65,
            sparkline: {
                enabled: true
            },
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                endingShape: 'rounded'
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 0
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                gradientToColors: ['#fff'],
                type: 'vertical',
                inverseColors: false,
                opacityFrom: 0.01,
                opacityTo: 0.04,
                stops: [0, 50, 65, 91]
            },
        },
        colors: ["#fff"],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return "$ " + val + " "
                }
            },
            x: {
                show: false
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart4"), options);
    chart.render();

    // chart 5
    var options = {
        series: [{
            name: 'Visitors',
            data: [4, 10, 18, 8, 17, 9, 12, 7]
        }],
        chart: {
            type: 'area',
            width: 140,
            height: 65,
            sparkline: {
                enabled: true
            },
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                endingShape: 'rounded'
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 0
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            //colors: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                gradientToColors: ['#fff'],
                type: 'vertical',
                inverseColors: false,
                opacityFrom: 0.01,
                opacityTo: 0.05,
                stops: [0, 50, 65, 91]
            },
        },
        colors: ["#fff"],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return "$ " + val + " "
                }
            },
            x: {
                show: false
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart5"), options);
    chart.render();

    // chart 6

    var options = {
        series: [{
            name: 'Orders',
            data: [5, 9, 6, 10, 25, 9, 15, 8]
        }],
        chart: {
            type: 'area',
            width: 140,
            height: 65,
            sparkline: {
                enabled: true
            },
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                endingShape: 'rounded'
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 0
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            //colors: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                gradientToColors: ['#fff'],
                type: 'vertical',
                inverseColors: false,
                opacityFrom: 0.01,
                opacityTo: 0.05,
                stops: [0, 50, 65, 91]
            },
        },
        colors: ["#fff"],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return "$ " + val + " "
                }
            },
            x: {
                show: false
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart6"), options);
    chart.render();

    // chart 7

    options = {
        series: [86],
        chart: {
            type: "radialBar",
            offsetY: -20,
            sparkline: {
                enabled: !0
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    size: "75%",
                    position: "front"
                },
                track: {
                    background: ["rgba(42, 118, 244, .18)"],
                    strokeWidth: "60%",
                    opacity: .5,
                    margin: 5
                },
                dataLabels: {
                    name: {
                        show: !1
                    },
                    value: {
                        offsetY: -2,
                        fontSize: "20px"
                    }
                }
            }
        },
        stroke: {
            lineCap: "butt"
        },
        colors: ["#16c7ff"],
        grid: {
            padding: {
                top: -10
            }
        },
        labels: ["Average Results"]
    };
    (chart = new ApexCharts(document.querySelector("#chart7"), options)).render();

    // Chart 8

    var options = {
        series: [{
        name: 'Week',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Month',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Year',
        data: [44, 76, 78, 13, 43, 10],
      }],
        chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      stroke: {
        width: 2
      },
      tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return "$ " + val + " "
            }
        }
    },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart8"), options);
      chart.render();

}(jQuery));


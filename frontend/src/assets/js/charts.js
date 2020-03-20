window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,

        axisY: {
            title: "Number of questions solved"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },

        "data": [
            {
                "type": "spline",
                "name": "utterlydark",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 5
                    },
                    {
                        "label": "FN2",
                        "y": 5
                    },
                    {
                        "label": "FN3",
                        "y": 0
                    },
                    {
                        "label": "FN4",
                        "y": 6
                    },
                    {
                        "label": "FN5",
                        "y": 5
                    },
                    {
                        "label": "FN6",
                        "y": 5
                    },
                    {
                        "label": "FN7",
                        "y": 0
                    },
                    {
                        "label": "FN8",
                        "y": 7
                    }
                ]
            },
            {
                "type": "spline",
                "name": "sarodesparsh",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 5
                    },
                    {
                        "label": "FN2",
                        "y": 0
                    },
                    {
                        "label": "FN3",
                        "y": 5
                    },
                    {
                        "label": "FN4",
                        "y": 6
                    },
                    {
                        "label": "FN5",
                        "y": 3
                    },
                    {
                        "label": "FN6",
                        "y": 0
                    },
                    {
                        "label": "FN7",
                        "y": 0
                    },
                    {
                        "label": "FN8",
                        "y": 0
                    }
                ]
            },
            {
                "type": "spline",
                "name": "tarun_srivatsa",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 4
                    },
                    {
                        "label": "FN2",
                        "y": 4
                    },
                    {
                        "label": "FN3",
                        "y": 0
                    },
                    {
                        "label": "FN4",
                        "y": 3
                    },
                    {
                        "label": "FN5",
                        "y": 4
                    },
                    {
                        "label": "FN6",
                        "y": 4
                    },
                    {
                        "label": "FN7",
                        "y": 1
                    },
                    {
                        "label": "FN8",
                        "y": 4
                    }
                ]
            },
            {
                "type": "spline",
                "name": "Abhiram",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 2
                    },
                    {
                        "label": "FN2",
                        "y": 3
                    },
                    {
                        "label": "FN3",
                        "y": 3
                    },
                    {
                        "label": "FN4",
                        "y": 0
                    },
                    {
                        "label": "FN5",
                        "y": 0
                    },
                    {
                        "label": "FN6",
                        "y": 4
                    },
                    {
                        "label": "FN7",
                        "y": 0
                    },
                    {
                        "label": "FN8",
                        "y": 3
                    }
                ]
            },
            {
                "type": "spline",
                "name": "srirampraveenva",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 1
                    },
                    {
                        "label": "FN2",
                        "y": 2
                    },
                    {
                        "label": "FN3",
                        "y": 2
                    },
                    {
                        "label": "FN4",
                        "y": 3
                    },
                    {
                        "label": "FN5",
                        "y": 0
                    },
                    {
                        "label": "FN6",
                        "y": 2
                    },
                    {
                        "label": "FN7",
                        "y": 1
                    },
                    {
                        "label": "FN8",
                        "y": 1
                    }
                ]
            },
            {
                "type": "spline",
                "name": "Marchingspy",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 1
                    },
                    {
                        "label": "FN2",
                        "y": 4
                    },
                    {
                        "label": "FN3",
                        "y": 3
                    },
                    {
                        "label": "FN4",
                        "y": 2
                    },
                    {
                        "label": "FN5",
                        "y": 3
                    },
                    {
                        "label": "FN6",
                        "y": 3
                    },
                    {
                        "label": "FN7",
                        "y": 2
                    },
                    {
                        "label": "FN8",
                        "y": 5
                    }
                ]
            },
            {
                "type": "spline",
                "name": "Hermes1707",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 0
                    },
                    {
                        "label": "FN3",
                        "y": 2
                    },
                    {
                        "label": "FN4",
                        "y": 1
                    },
                    {
                        "label": "FN5",
                        "y": 2
                    },
                    {
                        "label": "FN6",
                        "y": 2
                    },
                    {
                        "label": "FN7",
                        "y": 2
                    },
                    {
                        "label": "FN8",
                        "y": 3
                    }
                ]
            },
            {
                "type": "spline",
                "name": "sHiVaM_p",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 1
                    },
                    {
                        "label": "FN2",
                        "y": 0
                    },
                    {
                        "label": "FN3",
                        "y": 0
                    },
                    {
                        "label": "FN4",
                        "y": 1
                    },
                    {
                        "label": "FN5",
                        "y": 3
                    },
                    {
                        "label": "FN6",
                        "y": 2
                    },
                    {
                        "label": "FN7",
                        "y": 2
                    },
                    {
                        "label": "FN8",
                        "y": 0
                    }
                ]
            },
            {
                "type": "spline",
                "name": "aditya_n",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 4
                    },
                    {
                        "label": "FN3",
                        "y": 3
                    },
                    {
                        "label": "FN4",
                        "y": 3
                    },
                    {
                        "label": "FN5",
                        "y": 0
                    },
                    {
                        "label": "FN6",
                        "y": 4
                    },
                    {
                        "label": "FN7",
                        "y": 1
                    },
                    {
                        "label": "FN8",
                        "y": 0
                    }
                ]
            },
            {
                "type": "spline",
                "name": "ShravyaDasu",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 2
                    },
                    {
                        "label": "FN3",
                        "y": 2
                    },
                    {
                        "label": "FN4",
                        "y": 1
                    },
                    {
                        "label": "FN5",
                        "y": 0
                    },
                    {
                        "label": "FN6",
                        "y": 1
                    },
                    {
                        "label": "FN7",
                        "y": 1
                    },
                    {
                        "label": "FN8",
                        "y": 0
                    }
                ]
            },
            {
                "type": "spline",
                "name": "krishna2001",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 3
                    },
                    {
                        "label": "FN3",
                        "y": 3
                    },
                    {
                        "label": "FN4",
                        "y": 1
                    },
                    {
                        "label": "FN5",
                        "y": 4
                    },
                    {
                        "label": "FN6",
                        "y": 1
                    },
                    {
                        "label": "FN7",
                        "y": 1
                    },
                    {
                        "label": "FN8",
                        "y": 0
                    }
                ]
            },
            {
                "type": "spline",
                "name": "DudeL69",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 5
                    },
                    {
                        "label": "FN3",
                        "y": 0
                    },
                    {
                        "label": "FN4",
                        "y": 6
                    },
                    {
                        "label": "FN5",
                        "y": 6
                    },
                    {
                        "label": "FN6",
                        "y": 5
                    },
                    {
                        "label": "FN7",
                        "y": 6
                    },
                    {
                        "label": "FN8",
                        "y": 7
                    }
                ]
            },
            {
                "type": "spline",
                "name": "Akhil_Dua",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 4
                    },
                    {
                        "label": "FN3",
                        "y": 2
                    },
                    {
                        "label": "FN4",
                        "y": 0
                    },
                    {
                        "label": "FN5",
                        "y": 3
                    },
                    {
                        "label": "FN6",
                        "y": 1
                    },
                    {
                        "label": "FN7",
                        "y": 0
                    },
                    {
                        "label": "FN8",
                        "y": 0
                    }
                ]
            },
            {
                "type": "spline",
                "name": "Kumaraskanda",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 3
                    },
                    {
                        "label": "FN3",
                        "y": 3
                    },
                    {
                        "label": "FN4",
                        "y": 0
                    },
                    {
                        "label": "FN5",
                        "y": 3
                    },
                    {
                        "label": "FN6",
                        "y": 1
                    },
                    {
                        "label": "FN7",
                        "y": 0
                    },
                    {
                        "label": "FN8",
                        "y": 0
                    }
                ]
            },
            {
                "type": "spline",
                "name": "Shrujan",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 2
                    },
                    {
                        "label": "FN3",
                        "y": 2
                    },
                    {
                        "label": "FN4",
                        "y": 1
                    },
                    {
                        "label": "FN5",
                        "y": 3
                    },
                    {
                        "label": "FN6",
                        "y": 3
                    },
                    {
                        "label": "FN7",
                        "y": 2
                    },
                    {
                        "label": "FN8",
                        "y": 3
                    }
                ]
            },
            {
                "type": "spline",
                "name": "abhay_hk",
                "showInLegend": false,
                "dataPoints": [
                    {
                        "label": "FN1",
                        "y": 0
                    },
                    {
                        "label": "FN2",
                        "y": 0
                    },
                    {
                        "label": "FN3",
                        "y": 1
                    },
                    {
                        "label": "FN4",
                        "y": 0
                    },
                    {
                        "label": "FN5",
                        "y": 3
                    },
                    {
                        "label": "FN6",
                        "y": 3
                    },
                    {
                        "label": "FN7",
                        "y": 2
                    },
                    {
                        "label": "FN8",
                        "y": 4
                    }
                ]
            }
        ]

    });

    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}
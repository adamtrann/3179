var vg_1 = "daily_cost_bar_chart.vg.json"; //Define variable which containst he location of the vega-lite json file. 
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
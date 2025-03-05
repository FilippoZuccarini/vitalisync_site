document.addEventListener("DOMContentLoaded", function () {
    function initChart(containerId, option) {
        var chartDom = document.getElementById(containerId);
        if (chartDom) {
            var myChart = echarts.init(chartDom);
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
    }

    // Steps - Bar Chart
    initChart("steps-chart", {
        title: { text: "Daily Steps", left: "center" },
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
        yAxis: { type: "value", name: "Steps" },
        series: [{ type: "bar", data: [5000, 7000, 8000, 6500, 9000, 10000, 12000], color: "#4CAF50" }]
    });

    // Heart Rate - Line Chart
    initChart("heart-rate-chart", {
        title: { text: "Heart Rate Over Time", left: "center" },
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"] },
        yAxis: { type: "value", name: "BPM" },
        series: [{ type: "line", data: [70, 75, 80, 78, 76, 72], smooth: true, color: "#E91E63" }]
    });

    // Blood Pressure - Scatter Chart
    initChart("blood-pressure-chart", {
        title: { text: "Blood Pressure Levels", left: "center" },
        tooltip: { trigger: "item" },
        xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], name: "Days" },
        yAxis: { type: "value", name: "BP (mmHg)" },
        series: [
            { name: "Systolic", type: "scatter", data: [120, 118, 122, 125, 121, 119, 123], color: "#2196F3" },
            { name: "Diastolic", type: "scatter", data: [80, 78, 81, 82, 79, 77, 80], color: "#FF9800" }
        ]
    });

    // Oxygen Saturation - Gauge Chart
    initChart("spo2-chart", {
        title: { text: "Oxygen Saturation (SpO2)", left: "center" },
        series: [{
            type: "gauge",
            min: 80,
            max: 100,
            detail: { formatter: "{value}%" },
            data: [{ value: 97, name: "SpO2" }],
            axisLine: { lineStyle: { color: [[0.85, "red"], [0.95, "yellow"], [1, "green"]] } }
        }]
    });

    // Respiratory Rate - Area Chart
    initChart("respiratory-chart", {
        title: { text: "Respiratory Rate", left: "center" },
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"] },
        yAxis: { type: "value", name: "Breaths per Minute" },
        series: [{ type: "line", data: [16, 18, 17, 16, 15, 17], areaStyle: {}, smooth: true, color: "#673AB7" }]
    });

    // Sleep Quality - Radar Chart
    initChart("sleep-quality-chart", {
        title: { text: "Sleep Quality Metrics", left: "center" },
        tooltip: {},
        radar: {
            indicator: [
                { name: "Duration (hrs)", max: 10 },
                { name: "Deep Sleep (%)", max: 100 },
                { name: "REM (%)", max: 50 },
                { name: "Awake Time (min)", max: 60 },
                { name: "Sleep Efficiency (%)", max: 100 }
            ]
        },
        series: [{
            type: "radar",
            data: [{ value: [7.5, 65, 25, 15, 90], name: "Sleep Metrics" }],
            color: "#009688"
        }]
    });
});
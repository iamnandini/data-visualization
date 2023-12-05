
const ctx1 = document.getElementById('myChart1').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');

var graphData1 = {
    type: 'line',
    data: {
        labels: [], 
        datasets: [{
            label: 'Value1',
            data: [],
            borderWidth: 1
        }]
    },
    options: {} 
}

var graphData2 = {
    type: 'line',
    data: {
        labels: [], 
        datasets: [{
            label: 'Value2',
            data: [],
            borderWidth: 1
        }]
    },
    options: {}
}

var graphData3 = {
    type: 'line',
    data: {
        labels: [], 
        datasets: [{
            label: 'Value3',
            data: [],
            borderWidth: 1
        }]
    },
    options: {}
}

var myChart1 = new Chart(ctx1, graphData1);
var myChart2 = new Chart(ctx2, graphData2);
var myChart3 = new Chart(ctx3, graphData3);

var socket = new WebSocket('ws://localhost:8000/ws/graph/');

socket.onmessage = function(e){
    var djangoData = JSON.parse(e.data);

    // Value 1
    var newGraphData1 = graphData1.data.datasets[0].data;
    newGraphData1.shift();
    newGraphData1.push(djangoData.value);
    graphData1.data.datasets[0].data = newGraphData1;
    
    // Value 2
    var newGraphData2 = graphData2.data.datasets[0].data;
    newGraphData2.shift();
    newGraphData2.push(djangoData.value);
    graphData2.data.datasets[0].data = newGraphData2;
    
    // Value 3
    var newGraphData3 = graphData3.data.datasets[0].data;
    newGraphData3.shift();
    newGraphData3.push(djangoData.value3);
    graphData3.data.datasets[0].data = newGraphData3;
    
    // Adding new label
    var newLabel = djangoData.realtime;
    graphData1.data.labels.push(newLabel);
    graphData2.data.labels.push(newLabel);
    graphData3.data.labels.push(newLabel);
    
    // Limiting the number of data points to,  15
    if (graphData1.data.labels.length > 15) {
        graphData1.data.labels.shift();
        graphData2.data.labels.shift();
        graphData3.data.labels.shift();
    }
    
    myChart1.update();
    myChart2.update();
    myChart3.update();
}


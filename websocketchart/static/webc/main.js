const ctx = document.getElementById('myChart');

var graphData = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Random Values',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}

var myChart = new Chart(ctx,graphData);


var socket = new WebSocket('ws://localhost:8001/ws/graph/');

socket.onmessage = function(e){
    var djangoData = JSON.parse(e.data);
    console.log(djangoData);

    var newGraphData = graphData.data.datasets[0].data
    newGraphData.shift();
    newGraphData.push(djangoData.value);

    GraphData.data.datasets[0].data = newGraphData;
    myChart.update();

}



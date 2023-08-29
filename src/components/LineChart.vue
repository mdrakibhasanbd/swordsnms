<template>
  <div class="canvas-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'LineChart',
  props: {
    eventSourceUrl: {
      type: String,
      required: true,
    },

    chartTitleName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const chartData = reactive({
      labels: Array(10).fill('00:00'),
      datasets: [
        {
          label: 'TX',
          // backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(75, 192, 192)',
          data: Array(10).fill(null),
          order: 2, // Set higher order for the "Upload" dataset
          tension: 0.5,
        },
        {
          label: 'RX',
          // backgroundColor: 'rgb(55, 9, 320)',
          borderColor: 'rgb(255, 205, 86)',
          data: Array(10).fill(null),
          order: 1, // Set lower order for the "Download" dataset
          tension: 0.5,
        },
      ],
    });

    const canvasRef = ref(null); // Reference to the canvas element
    let eventSource = null; // Reference to the EventSource instance
  
    const convertKbpsToMbps = (kbps) => {
      return (kbps / 1000).toFixed(2);
    };
    const updateChart = (lineChart, data) => {
      const newLabels = [...chartData.labels, data.time];

      const newUploadData = [...chartData.datasets[0].data, convertKbpsToMbps(data.tx_speed)];
      const newDownloadData = [...chartData.datasets[1].data, convertKbpsToMbps(data.rx_speed)];
      // const newUploadData = [...chartData.datasets[0].data, data.tx_speed];
      // const newDownloadData = [...chartData.datasets[1].data, data.rx_speed];

      if (newLabels.length > 10) {
        newLabels.shift();
        newUploadData.shift();
        newDownloadData.shift();
      }

      chartData.labels = newLabels;
      chartData.datasets[0].data = newUploadData;
      chartData.datasets[0].label = `TX ${convertKbpsToMbps(data.tx_speed)} Mbps`; // Set TX label with tx_speed value
      chartData.datasets[1].data = newDownloadData;
      chartData.datasets[1].label = `RX ${convertKbpsToMbps(data.rx_speed)} Mbps`; // Set RX label with rx_speed value

      lineChart.update();
    };

    onMounted(() => {

      console.log(props.chartTitleName); // Show oldName prop in the console
      console.log("oldName");
      const canvas = canvasRef.value;

      if (!canvas) {
        console.error('Canvas element is null or not found.');
        return;
      }

      const context = canvas.getContext('2d');

      const lineChart = new Chart(context, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: true,
          // fill: true,
          animation: {
            duration: 1000, // Animation duration in milliseconds
          },
          plugins: {
            title: {
              display: true,
              text: props.chartTitleName, 
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Time',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Mbps',
              },
            },
          },
        },
      });

      eventSource = new EventSource(props.eventSourceUrl);

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        updateChart(lineChart, data);
      };
    });

    onBeforeUnmount(() => {
      if (eventSource) {
        eventSource.close(); // Close the EventSource connection before the component is unmounted
      }
    });

    return {
      chartData,
      canvasRef,
    };
  },
};
</script>

<style>
.canvas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

canvas {
  max-width: 100%;
  height: auto;
  border: 2px dotted rgb(0, 132, 255);
}
</style>

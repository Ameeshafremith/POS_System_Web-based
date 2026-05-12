import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.esm.js';

new Chart(document.getElementById('revenueChart'), {
    type: 'bar',
    data: {
        labels: ['Oct 20','Oct 21','Oct 22','Oct 23','Oct 24','Oct 25','Oct 26'],
        datasets: [
            { label: 'Active Sales', data: [390,260,330,100,340,100,410], backgroundColor: '#EF9F27', borderRadius: 4 },
            { label: 'Target Sales', data: [140,80,430,220,140,260,270], backgroundColor: '#1D9E75', borderRadius: 4 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { ticks: { font: { size: 11 } }, grid: { display: false } },
            y: { ticks: { font: { size: 11 }, callback: v => '$' + v }, grid: { color: 'rgba(0,0,0,0.05)' } }
        }
    }
});

new Chart(document.getElementById('orderChart'), {
    type: 'doughnut',
    data: {
        labels: ['Search','Added to cart','Ordered','Delivered'],
        datasets: [{
            data: [30,25,28,17],
            backgroundColor: ['#EF9F27','#7F77DD','#1D9E75','#378ADD'],
            borderWidth: 3,
            borderColor: '#fff',
            hoverOffset: 6
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        cutout: '65%',
        plugins: { legend: { display: false } }
    }
});
</script>


// ---------------- PIE CHART ----------------
const ctx2 = document.getElementById('orderChart');

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Completed', 'Pending', 'Cancelled'],
        datasets: [{
            data: [70, 20, 10],
            backgroundColor: [
                '#ff5722',
                '#ffb300',
                '#4caf50'
            ]
        }]
    },
    options: {
        responsive: true
    }
});

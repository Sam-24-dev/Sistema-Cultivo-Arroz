// Insights page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadInsightsData();
    createInsightsCharts();
});

function loadInsightsData() {
    // Data is already available in cultivoData
    // This function can be used to process and display insights
    updateRecommendationCards();
}

function updateRecommendationCards() {
    const recomendaciones = cultivoData.recomendaciones;
    
    // Best Employee Card
    const bestEmployee = recomendaciones.find(r => r.categoria === 'MEJOR EMPLEADO');
    if (bestEmployee) {
        const card = document.querySelector('.recommendation-card.best-employee');
        if (card) {
            card.querySelector('h4').textContent = bestEmployee.valor.split(' (')[0];
            card.querySelector('.text-muted').textContent = 'Especialidad: ' + bestEmployee.valor.split('(')[1].replace(')', '');
            card.querySelector('.small.text-muted').textContent = bestEmployee.recomendacion;
        }
    }
    
    // Best Area Card
    const bestArea = recomendaciones.find(r => r.categoria === 'ÁREA MÁS RENTABLE');
    if (bestArea) {
        const card = document.querySelector('.recommendation-card.best-area');
        if (card) {
            card.querySelector('h4').textContent = bestArea.valor;
            card.querySelector('.badge').textContent = bestArea.metrica;
            card.querySelector('.small.text-muted').textContent = bestArea.recomendacion;
        }
    }
    
    // Cost Alert Card
    const costAlert = recomendaciones.find(r => r.categoria === 'ACTIVIDAD MÁS COSTOSA');
    if (costAlert) {
        const card = document.querySelector('.recommendation-card.cost-alert');
        if (card) {
            card.querySelector('h4').textContent = costAlert.valor;
            card.querySelector('.text-muted').textContent = costAlert.metrica;
            card.querySelector('.small.text-muted').textContent = costAlert.recomendacion;
        }
    }
}

function createInsightsCharts() {
    createTrendsChart();
}

function createTrendsChart() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx) return;
    
    // Prepare data for trends
    const monthlyData = {};
    const tendencias = cultivoData.tendencias;
    
    tendencias.forEach(item => {
        const monthKey = item.nombre_mes;
        if (!monthlyData[monthKey]) {
            monthlyData[monthKey] = {
                completadas: 0,
                total: 0,
                costo: 0
            };
        }
        
        monthlyData[monthKey].completadas += item.tareas_completadas || 0;
        monthlyData[monthKey].total += item.tareas_iniciadas || 0;
        monthlyData[monthKey].costo += item.costo_promedio || 0;
    });
    
    const months = Object.keys(monthlyData).sort();
    const completionRates = months.map(month => {
        const data = monthlyData[month];
        return data.total > 0 ? (data.completadas / data.total) * 100 : 0;
    });
    const costs = months.map(month => monthlyData[month].costo);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Tasa de Completado (%)',
                    data: completionRates,
                    borderColor: chartColors.success,
                    backgroundColor: chartColors.success + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Costo Promedio ($)',
                    data: costs,
                    borderColor: chartColors.warning,
                    backgroundColor: chartColors.warning + '20',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Tendencias de Rendimiento y Costos (2024)'
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Tasa de Completado (%)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Costo Promedio ($)'
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });
}
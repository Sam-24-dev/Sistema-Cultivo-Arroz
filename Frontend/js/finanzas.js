// Finanzas page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadFinanzasData();
    createFinanzasCharts();
});

function loadFinanzasData() {
    const financialData = cultivoData.financiero;
    const tableBody = document.getElementById('financialTableBody');
    
    let html = '';
    financialData.forEach(item => {
        const completionRate = (item.tareas_completadas / item.total_tareas) * 100;
        const statusClass = item.roi_porcentaje > 100 ? 'success' : item.roi_porcentaje > 0 ? 'primary' : 'danger';
        const statusText = item.roi_porcentaje > 100 ? 'Excelente' : item.roi_porcentaje > 0 ? 'Positivo' : 'Negativo';
        
        html += `
            <tr>
                <td><span class="badge bg-secondary">${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}</span></td>
                <td class="text-center">${item.total_tareas}</td>
                <td class="text-center">
                    <div class="d-flex align-items-center">
                        <span class="me-2">${item.tareas_completadas}</span>
                        <div class="progress flex-grow-1" style="height: 6px;">
                            <div class="progress-bar bg-success" style="width: ${completionRate}%"></div>
                        </div>
                    </div>
                </td>
                <td class="fw-bold text-primary">${formatCurrency(item.inversion_total)}</td>
                <td>${formatCurrency(item.costo_promedio_por_tarea)}</td>
                <td class="${item.desviacion_presupuestaria_pct < 0 ? 'text-success' : 'text-danger'}">
                    ${formatPercentage(item.desviacion_presupuestaria_pct)}
                </td>
                <td class="text-center">${formatNumber(item.horas_promedio_por_tarea, 1)}h</td>
                <td>${formatCurrency(item.costo_por_hora)}</td>
                <td class="fw-bold ${item.roi_porcentaje > 0 ? 'text-success' : 'text-danger'}">
                    ${formatPercentage(item.roi_porcentaje)}
                </td>
                <td>
                    <span class="badge bg-${statusClass}">${statusText}</span>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

function createFinanzasCharts() {
    createCostAnalysisChart();
    createTrendsChart();
}

function createCostAnalysisChart() {
    const ctx = document.getElementById('costosChart').getContext('2d');
    const financialData = cultivoData.financiero;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: financialData.map(item => item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)),
            datasets: [
                {
                    label: 'Inversión Total',
                    data: financialData.map(item => item.inversion_total),
                    backgroundColor: chartColors.primary,
                    borderColor: chartColors.primary,
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Ingresos Generados',
                    data: financialData.map(item => item.ingresos_generados),
                    backgroundColor: chartColors.success,
                    borderColor: chartColors.success,
                    borderWidth: 1,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Análisis Comparativo: Inversión vs Ingresos'
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

function createTrendsChart() {
    const ctx = document.getElementById('tendenciasChart').getContext('2d');
    const tendencias = cultivoData.tendencias
        .filter(item => item.costo_promedio !== null)
        .sort((a, b) => new Date(a.año, a.mes - 1) - new Date(b.año, b.mes - 1));
    
    // Group by activity type
    const actividades = [...new Set(tendencias.map(item => item.tipo_actividad))];
    const datasets = actividades.map((actividad, index) => {
        const data = tendencias
            .filter(item => item.tipo_actividad === actividad)
            .map(item => ({
                x: `${item.año}-${item.mes.toString().padStart(2, '0')}`,
                y: item.costo_promedio
            }));
        
        const colors = [chartColors.primary, chartColors.success, chartColors.warning, chartColors.danger];
        
        return {
            label: actividad.charAt(0).toUpperCase() + actividad.slice(1),
            data: data,
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length] + '20',
            borderWidth: 2,
            fill: false,
            tension: 0.4
        };
    });
    
    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Evolución de Costos por Actividad (2024)'
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    type: 'category',
                    title: {
                        display: true,
                        text: 'Mes'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Costo Promedio ($)'
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

function exportFinancialData() {
    const table = document.getElementById('financialTable');
    if (!table) return;
    
    let csv = [];
    const headers = ['Tipo Actividad', 'Total Tareas', 'Completadas', 'Inversión Total', 'Costo Promedio', 'Desviación %', 'Horas Promedio', 'Costo/Hora', 'ROI %', 'Estado'];
    csv.push(headers.join(','));
    
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = [
            cells[0].textContent.trim(),
            cells[1].textContent.trim(),
            cells[2].textContent.replace(/\s+/g, ' ').trim(),
            cells[3].textContent.trim(),
            cells[4].textContent.trim(),
            cells[5].textContent.trim(),
            cells[6].textContent.trim(),
            cells[7].textContent.trim(),
            cells[8].textContent.trim(),
            cells[9].textContent.trim()
        ];
        csv.push(rowData.map(cell => `"${cell}"`).join(','));
    });
    
    downloadCSV(csv.join('\n'), 'analisis-financiero.csv');
}

// Monthly cost analysis
function analyzeMonthlyTrends() {
    const tendencias = cultivoData.tendencias;
    const monthlyData = {};
    
    tendencias.forEach(item => {
        const monthKey = `${item.año}-${item.mes.toString().padStart(2, '0')}`;
        if (!monthlyData[monthKey]) {
            monthlyData[monthKey] = {
                totalCosto: 0,
                totalTareas: 0,
                actividades: []
            };
        }
        
        if (item.costo_promedio) {
            monthlyData[monthKey].totalCosto += item.costo_promedio;
            monthlyData[monthKey].totalTareas += item.tareas_completadas || 0;
            monthlyData[monthKey].actividades.push(item.tipo_actividad);
        }
    });
    
    return monthlyData;
}

// Cost efficiency calculation
function calculateCostEfficiency() {
    const financialData = cultivoData.financiero;
    
    return financialData.map(item => {
        const efficiency = item.ingresos_generados / item.inversion_total;
        return {
            tipo: item.tipo,
            efficiency: efficiency || 0,
            recommendation: efficiency > 1 ? 'Mantener estrategia' : 'Requiere optimización'
        };
    });
}

// Alert system for financial thresholds
function checkFinancialAlerts() {
    const alerts = [];
    const financialData = cultivoData.financiero;
    const kpis = cultivoData.kpis.finanzas;
    
    // Overall ROI alert
    if (kpis.roi_general_porcentaje < 0) {
        alerts.push({
            type: 'danger',
            title: 'ROI Negativo Crítico',
            message: `ROI general de ${formatPercentage(kpis.roi_general_porcentaje)} requiere acción inmediata`,
            priority: 'high'
        });
    }
    
    // High cost activities
    financialData.forEach(item => {
        if (item.costo_promedio_por_tarea > 200) {
            alerts.push({
                type: 'warning',
                title: 'Actividad de Alto Costo',
                message: `${item.tipo} tiene un costo promedio de ${formatCurrency(item.costo_promedio_por_tarea)}`,
                priority: 'medium'
            });
        }
    });
    
    // Budget deviations
    financialData.forEach(item => {
        if (Math.abs(item.desviacion_presupuestaria_pct) > 10) {
            alerts.push({
                type: 'info',
                title: 'Desviación Presupuestaria',
                message: `${item.tipo} tiene una desviación de ${formatPercentage(item.desviacion_presupuestaria_pct)}`,
                priority: 'low'
            });
        }
    });
    
    return alerts;
}
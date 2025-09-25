// Areas page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadAreasData();
    createAreasCharts();
});

function loadAreasData() {
    const areas = cultivoData.areas;
    const tableBody = document.getElementById('areasTableBody');
    
    let html = '';
    areas.forEach(area => {
        const roiClass = area.roi_porcentaje > 0 ? 'text-success' : 'text-danger';
        const statusClass = area.roi_porcentaje > 100 ? 'success' : area.roi_porcentaje > 0 ? 'primary' : 'danger';
        const statusText = area.roi_porcentaje > 100 ? 'Excelente' : area.roi_porcentaje > 0 ? 'Positivo' : 'Crítico';
        
        html += `
            <tr>
                <td>${getRankingIcon(area.ranking_rentabilidad)}</td>
                <td>
                    <strong>${area.area_nombre}</strong><br>
                    <small class="text-muted">Rank: #${area.ranking_productividad}</small>
                </td>
                <td>${area.ubicacion_nombre}</td>
                <td class="text-center">${formatNumber(area.hectareas, 1)} ha</td>
                <td><span class="badge bg-brown">${area.tipo_suelo}</span></td>
                <td class="text-center">
                    ${area.tareas_completadas}/${area.total_tareas}
                    <div class="progress mt-1" style="height: 4px;">
                        <div class="progress-bar bg-success" 
                             style="width: ${(area.tareas_completadas / area.total_tareas) * 100}%"></div>
                    </div>
                </td>
                <td class="fw-bold text-primary">${formatCurrency(area.inversion_total)}</td>
                <td class="fw-bold text-success">${formatCurrency(area.ingresos_totales)}</td>
                <td class="fw-bold ${roiClass}">${formatPercentage(area.roi_porcentaje)}</td>
                <td class="text-center">
                    ${area.torvadas_totales > 0 ? formatNumber(area.torvadas_totales, 1) : '0'}
                </td>
                <td>
                    <span class="badge bg-${statusClass}">${statusText}</span>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

function createAreasCharts() {
    createScatterChart();
}

function createScatterChart() {
    const ctx = document.getElementById('scatterChart');
    if (!ctx) return;
    
    const areas = cultivoData.areas;
    
    const data = areas.map(area => ({
        x: area.inversion_total,
        y: area.torvadas_totales || 0,
        label: `${area.area_nombre} - ${area.ubicacion_nombre}`,
        roi: area.roi_porcentaje
    }));
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Rendimiento vs Inversión',
                data: data,
                backgroundColor: data.map(point => {
                    if (point.roi > 100) return chartColors.success + '80';
                    if (point.roi > 0) return chartColors.primary + '80';
                    return chartColors.danger + '80';
                }),
                borderColor: data.map(point => {
                    if (point.roi > 100) return chartColors.success;
                    if (point.roi > 0) return chartColors.primary;
                    return chartColors.danger;
                }),
                borderWidth: 2,
                pointRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Análisis de Rendimiento vs Inversión por Área'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const point = data[context.dataIndex];
                            return [
                                point.label,
                                `Inversión: ${formatCurrency(point.x)}`,
                                `Torvadas: ${point.y}`,
                                `ROI: ${formatPercentage(point.roi)}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Inversión Total ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Torvadas Cosechadas'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

function filterByROI(type) {
    const rows = document.querySelectorAll('#areasTableBody tr');
    
    rows.forEach(row => {
        const roiCell = row.cells[8]; // ROI column
        const roiText = roiCell.textContent.trim();
        const roiValue = parseFloat(roiText.replace('%', ''));
        
        let showRow = true;
        
        switch(type) {
            case 'positive':
                showRow = roiValue > 0;
                break;
            case 'negative':
                showRow = roiValue <= 0;
                break;
            case 'all':
            default:
                showRow = true;
                break;
        }
        
        row.style.display = showRow ? '' : 'none';
    });
}

function exportAreasData() {
    const table = document.getElementById('areasTable');
    if (!table) return;
    
    let csv = [];
    const headers = ['Ranking', 'Area', 'Ubicacion', 'Hectareas', 'Tipo Suelo', 'Tareas', 'Inversion', 'Ingresos', 'ROI %', 'Torvadas', 'Estado'];
    csv.push(headers.join(','));
    
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        if (row.style.display !== 'none') {
            const cells = row.querySelectorAll('td');
            const rowData = [
                cells[0].textContent.trim(),
                cells[1].textContent.replace(/\s+/g, ' ').trim(),
                cells[2].textContent.trim(),
                cells[3].textContent.trim(),
                cells[4].textContent.trim(),
                cells[5].textContent.replace(/\s+/g, ' ').trim(),
                cells[6].textContent.trim(),
                cells[7].textContent.trim(),
                cells[8].textContent.trim(),
                cells[9].textContent.trim(),
                cells[10].textContent.trim()
            ];
            csv.push(rowData.map(cell => `"${cell}"`).join(','));
        }
    });
    
    downloadCSV(csv.join('\n'), 'rendimiento-areas.csv');
}
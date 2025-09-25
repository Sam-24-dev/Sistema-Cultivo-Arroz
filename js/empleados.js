// Empleados page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadEmpleadosData();
    createEmpleadosChart();
});

function loadEmpleadosData() {
    const empleados = cultivoData.empleados;
    const tableBody = document.getElementById('empleadosTableBody');
    
    let html = '';
    empleados.forEach(empleado => {
        const roiValue = empleado.roi_empleado_porcentaje;
        const roiDisplay = roiValue ? formatPercentage(roiValue) : 'N/A';
        const statusClass = empleado.tareas_completadas > 0 ? 'success' : 'secondary';
        const statusText = empleado.tareas_completadas > 0 ? 'Activo' : 'Inactivo';
        
        html += `
            <tr>
                <td>${getRankingIcon(empleado.ranking_eficiencia)}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="status-indicator status-${empleado.tareas_completadas > 0 ? 'active' : 'inactive'}"></div>
                        <div>
                            <strong>${empleado.nombre}</strong><br>
                            <small class="text-muted">ID: ${empleado.cedula}</small>
                        </div>
                    </div>
                </td>
                <td>${empleado.cedula}</td>
                <td><span class="badge bg-primary">${empleado.especialidad}</span></td>
                <td>${formatCurrency(empleado.salario_diario)}</td>
                <td class="text-center">${empleado.total_tareas_asignadas}</td>
                <td class="text-center">${formatNumber(empleado.horas_totales_trabajadas)}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <span class="me-2">${formatPercentage(empleado.porcentaje_exito)}</span>
                        <div class="progress flex-grow-1" style="height: 6px;">
                            <div class="progress-bar bg-${getEfficiencyColor(empleado.porcentaje_exito)}" 
                                 style="width: ${empleado.porcentaje_exito}%"></div>
                        </div>
                    </div>
                </td>
                <td class="fw-bold ${roiValue && roiValue > 200 ? 'text-success' : roiValue && roiValue > 100 ? 'text-primary' : 'text-warning'}">
                    ${roiDisplay}
                </td>
                <td>
                    <span class="badge bg-${getEfficiencyColor(empleado.porcentaje_exito)}">
                        ${statusText}
                    </span>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
    
    // Initialize tooltips after adding content
    initializeTooltips();
}

function createEmpleadosChart() {
    const ctx = document.getElementById('empleadosChart');
    if (!ctx) return;
    
    const empleados = cultivoData.empleados
        .filter(emp => emp.roi_empleado_porcentaje !== null)
        .sort((a, b) => b.roi_empleado_porcentaje - a.roi_empleado_porcentaje);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: empleados.map(emp => emp.nombre.split(' ')[0]),
            datasets: [{
                label: 'ROI por Empleado (%)',
                data: empleados.map(emp => emp.roi_empleado_porcentaje),
                backgroundColor: empleados.map(emp => {
                    const roi = emp.roi_empleado_porcentaje;
                    if (roi > 500) return chartColors.success;
                    if (roi > 200) return chartColors.primary;
                    if (roi > 100) return chartColors.warning;
                    return chartColors.danger;
                }),
                borderColor: empleados.map(emp => {
                    const roi = emp.roi_empleado_porcentaje;
                    if (roi > 500) return chartColors.success;
                    if (roi > 200) return chartColors.primary;
                    if (roi > 100) return chartColors.warning;
                    return chartColors.danger;
                }),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Rendimiento sobre Inversión por Empleado'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

function exportTableToCSV() {
    const table = document.getElementById('empleadosTable');
    if (!table) return;
    
    let csv = [];
    const headers = ['Ranking', 'Nombre', 'Cedula', 'Especialidad', 'Salario Diario', 'Tareas Asignadas', 'Horas Trabajadas', '% Exito', 'ROI %', 'Eficiencia'];
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
                cells[5].textContent.trim(),
                cells[6].textContent.trim(),
                cells[7].textContent.trim(),
                cells[8].textContent.trim(),
                cells[9].textContent.trim()
            ];
            csv.push(rowData.map(cell => `"${cell}"`).join(','));
        }
    });
    
    downloadCSV(csv.join('\n'), 'empleados-productividad.csv');
}
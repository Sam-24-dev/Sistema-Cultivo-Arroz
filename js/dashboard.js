// Dashboard specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
    createDashboardCharts();
});

function loadDashboardData() {
    // Update KPI cards
    updateKPICards();
    
    // Load top employees table
    loadTopEmployees();
}

function updateKPICards() {
    const kpis = cultivoData.kpis;
    
    // Update employee count
    document.getElementById('empleados-activos').textContent = kpis.operaciones.empleados_activos;
    
    // Update investment
    document.getElementById('inversion-total').textContent = formatCurrency(kpis.finanzas.inversion_total);
    
    // Update harvest
    document.getElementById('torvadas-totales').textContent = formatNumber(kpis.productividad.torvadas_totales, 1);
    
    // Update completion rate
    document.getElementById('cumplimiento').textContent = formatPercentage(kpis.operaciones.porcentaje_cumplimiento);
}

function loadTopEmployees() {
    const empleados = cultivoData.empleados
        .filter(emp => emp.tareas_completadas > 0)
        .slice(0, 5); // Top 5
    
    const tableBody = document.getElementById('topEmpleados');
    let html = '';
    
    empleados.forEach(empleado => {
        html += `
            <tr>
                <td>${getRankingIcon(empleado.ranking_eficiencia)}</td>
                <td>
                    <strong>${empleado.nombre}</strong><br>
                    <small class="text-muted">${empleado.cedula}</small>
                </td>
                <td><span class="badge bg-secondary">${empleado.especialidad}</span></td>
                <td class="text-center">${empleado.tareas_completadas}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <span class="me-2">${formatPercentage(empleado.porcentaje_exito)}</span>
                        <div class="progress flex-grow-1" style="height: 6px;">
                            <div class="progress-bar bg-${getEfficiencyColor(empleado.porcentaje_exito)}" 
                                 style="width: ${empleado.porcentaje_exito}%"></div>
                        </div>
                    </div>
                </td>
                <td>${empleado.roi_empleado_porcentaje ? formatPercentage(empleado.roi_empleado_porcentaje) : 'N/A'}</td>
                <td>
                    <span class="badge bg-${getEfficiencyColor(empleado.porcentaje_exito)}">
                        Rank ${empleado.ranking_eficiencia}
                    </span>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

function createDashboardCharts() {
    createInvestmentChart();
    createTaskStatusChart();
}

function createInvestmentChart() {
    const ctx = document.getElementById('inversionChart');
    if (!ctx) return;
    
    const financialData = cultivoData.financiero;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: financialData.map(item => item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)),
            datasets: [{
                label: 'Inversión Total ($)',
                data: financialData.map(item => item.inversion_total),
                backgroundColor: [
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.primary
                ],
                borderColor: [
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.primary
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Inversión por Tipo de Actividad'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });
}

function createTaskStatusChart() {
    const ctx = document.getElementById('tareasChart');
    if (!ctx) return;
    
    const kpis = cultivoData.kpis.operaciones;
    
    const completadas = kpis.tareas_completadas;
    const pendientes = kpis.tareas_totales - kpis.tareas_completadas;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completadas', 'Pendientes'],
            datasets: [{
                data: [completadas, pendientes],
                backgroundColor: [
                    chartColors.success,
                    chartColors.warning
                ],
                borderColor: [
                    chartColors.success,
                    chartColors.warning
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

// Dashboard refresh functionality
function refreshDashboard() {
    showLoading('main-content');
    
    setTimeout(() => {
        loadDashboardData();
        createDashboardCharts();
        
        // Show success message
        const toast = document.createElement('div');
        toast.className = 'toast show position-fixed top-0 end-0 m-3';
        toast.innerHTML = `
            <div class="toast-header">
                <i class="fas fa-check-circle text-success me-2"></i>
                <strong class="me-auto">Dashboard</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                Datos actualizados correctamente
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 3000);
    }, 1000);
}
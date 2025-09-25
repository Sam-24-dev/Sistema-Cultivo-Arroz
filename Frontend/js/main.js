// Main JavaScript file for Sistema de Cultivo de Arroz
// Common functions and data handling

// Data Storage
let cultivoData = {
    empleados: [
        {
            cedula: "0946195734",
            nombre: "Charlie López",
            especialidad: "Aplicacion",
            salario_diario: 20.00,
            total_tareas_asignadas: 2,
            horas_totales_trabajadas: 8.00,
            promedio_horas_por_tarea: 4.00,
            tareas_completadas: 2,
            porcentaje_exito: 100.00,
            costo_total_generado: 160.50,
            costo_mano_obra: 20.00,
            roi_empleado_porcentaje: 702.50,
            ranking_eficiencia: 1
        },
        {
            cedula: "0925738347",
            nombre: "Bob Martínez",
            especialidad: "Sembrado",
            salario_diario: 18.00,
            total_tareas_asignadas: 3,
            horas_totales_trabajadas: 24.00,
            promedio_horas_por_tarea: 8.00,
            tareas_completadas: 3,
            porcentaje_exito: 100.00,
            costo_total_generado: 438.50,
            costo_mano_obra: 54.00,
            roi_empleado_porcentaje: 712.04,
            ranking_eficiencia: 2
        },
        {
            cedula: "0930492392",
            nombre: "Kevin Mejía",
            especialidad: "Supervisor",
            salario_diario: 35.00,
            total_tareas_asignadas: 2,
            horas_totales_trabajadas: 44.00,
            promedio_horas_por_tarea: 22.00,
            tareas_completadas: 2,
            porcentaje_exito: 100.00,
            costo_total_generado: 430.50,
            costo_mano_obra: 192.50,
            roi_empleado_porcentaje: 123.64,
            ranking_eficiencia: 3
        },
        {
            cedula: "0782415632",
            nombre: "Eve Rodríguez",
            especialidad: "Cosecha",
            salario_diario: 22.00,
            total_tareas_asignadas: 1,
            horas_totales_trabajadas: 36.00,
            promedio_horas_por_tarea: 36.00,
            tareas_completadas: 1,
            porcentaje_exito: 100.00,
            costo_total_generado: 285.00,
            costo_mano_obra: 99.00,
            roi_empleado_porcentaje: 187.88,
            ranking_eficiencia: 4
        },
        {
            cedula: "0285038323",
            nombre: "David García",
            especialidad: "Riego",
            salario_diario: 17.00,
            total_tareas_asignadas: 3,
            horas_totales_trabajadas: 15.50,
            promedio_horas_por_tarea: 5.17,
            tareas_completadas: 2,
            porcentaje_exito: 66.67,
            costo_total_generado: 97.00,
            costo_mano_obra: 32.94,
            roi_empleado_porcentaje: 194.50,
            ranking_eficiencia: 5
        },
        {
            cedula: "0923456789",
            nombre: "Ana Torres",
            especialidad: "General",
            salario_diario: 19.00,
            total_tareas_asignadas: 1,
            horas_totales_trabajadas: 0.00,
            promedio_horas_por_tarea: 0.00,
            tareas_completadas: 0,
            porcentaje_exito: 0.00,
            costo_total_generado: 0.00,
            costo_mano_obra: 0.00,
            roi_empleado_porcentaje: null,
            ranking_eficiencia: 6
        }
    ],
    
    financiero: [
        {
            tipo: "sembrado",
            total_tareas: 4,
            tareas_completadas: 3,
            inversion_total: 438.50,
            costo_promedio_por_tarea: 146.17,
            desviacion_presupuestaria_pct: -0.90,
            desviacion_estandar_costos: 1.31,
            pct_tareas_sobre_presupuesto: 0.0,
            horas_promedio_por_tarea: 8.0,
            costo_por_hora: 18.27,
            ingresos_generados: 0.00,
            roi_porcentaje: 0.00
        },
        {
            tipo: "cosecha",
            total_tareas: 1,
            tareas_completadas: 1,
            inversion_total: 285.00,
            costo_promedio_por_tarea: 285.00,
            desviacion_presupuestaria_pct: -5.00,
            desviacion_estandar_costos: 0,
            pct_tareas_sobre_presupuesto: 0.0,
            horas_promedio_por_tarea: 60.0,
            costo_por_hora: 4.75,
            ingresos_generados: 926.25,
            roi_porcentaje: 225.00
        },
        {
            tipo: "aplicacion",
            total_tareas: 3,
            tareas_completadas: 2,
            inversion_total: 160.50,
            costo_promedio_por_tarea: 80.25,
            desviacion_presupuestaria_pct: 0.31,
            desviacion_estandar_costos: 0.25,
            pct_tareas_sobre_presupuesto: 0.0,
            horas_promedio_por_tarea: 4.0,
            costo_por_hora: 20.06,
            ingresos_generados: 0.00,
            roi_porcentaje: 0.00
        },
        {
            tipo: "riego",
            total_tareas: 3,
            tareas_completadas: 2,
            inversion_total: 97.00,
            costo_promedio_por_tarea: 48.50,
            desviacion_presupuestaria_pct: -6.13,
            desviacion_estandar_costos: 1,
            pct_tareas_sobre_presupuesto: 0.0,
            horas_promedio_por_tarea: 6.0,
            costo_por_hora: 8.08,
            ingresos_generados: 0.00,
            roi_porcentaje: 0.00
        }
    ],
    
    areas: [
        {
            area_nombre: "Campo Sur",
            ubicacion_nombre: "Lote B2",
            hectareas: 4.20,
            tipo_suelo: "Franco",
            total_tareas: 1,
            tareas_completadas: 1,
            inversion_total: 285.00,
            ingresos_totales: 926.25,
            ganancia_neta: 641.25,
            roi_porcentaje: 225.00,
            torvadas_totales: 28.50,
            rendimiento_promedio_por_hectarea: 0.00,
            ranking_productividad: 1,
            ranking_rentabilidad: 1
        },
        {
            area_nombre: "Campo Norte",
            ubicacion_nombre: "Lote A3",
            hectareas: 5.50,
            tipo_suelo: "Arcilloso",
            total_tareas: 1,
            tareas_completadas: 1,
            inversion_total: 85.50,
            ingresos_totales: 0.00,
            ganancia_neta: -85.50,
            roi_porcentaje: -100.00,
            torvadas_totales: 0.00,
            rendimiento_promedio_por_hectarea: null,
            ranking_productividad: 2,
            ranking_rentabilidad: 2
        },
        {
            area_nombre: "Campo Sur",
            ubicacion_nombre: "Lote B1",
            hectareas: 4.20,
            tipo_suelo: "Franco",
            total_tareas: 2,
            tareas_completadas: 2,
            inversion_total: 97.00,
            ingresos_totales: 0.00,
            ganancia_neta: -97.00,
            roi_porcentaje: -100.00,
            torvadas_totales: 0.00,
            rendimiento_promedio_por_hectarea: null,
            ranking_productividad: 2,
            ranking_rentabilidad: 3
        },
        {
            area_nombre: "Campo Este",
            ubicacion_nombre: "Lote C1",
            hectareas: 3.80,
            tipo_suelo: "Limoso",
            total_tareas: 3,
            tareas_completadas: 1,
            inversion_total: 135.00,
            ingresos_totales: 0.00,
            ganancia_neta: -135.00,
            roi_porcentaje: -100.00,
            torvadas_totales: 0.00,
            rendimiento_promedio_por_hectarea: null,
            ranking_productividad: 2,
            ranking_rentabilidad: 4
        },
        {
            area_nombre: "Campo Norte",
            ubicacion_nombre: "Lote A2",
            hectareas: 5.50,
            tipo_suelo: "Arcilloso",
            total_tareas: 1,
            tareas_completadas: 1,
            inversion_total: 158.00,
            ingresos_totales: 0.00,
            ganancia_neta: -158.00,
            roi_porcentaje: -100.00,
            torvadas_totales: 0.00,
            rendimiento_promedio_por_hectarea: null,
            ranking_productividad: 2,
            ranking_rentabilidad: 5
        },
        {
            area_nombre: "Campo Norte",
            ubicacion_nombre: "Lote A1",
            hectareas: 5.50,
            tipo_suelo: "Arcilloso",
            total_tareas: 3,
            tareas_completadas: 2,
            inversion_total: 220.50,
            ingresos_totales: 0.00,
            ganancia_neta: -220.50,
            roi_porcentaje: -100.00,
            torvadas_totales: 0.00,
            rendimiento_promedio_por_hectarea: null,
            ranking_productividad: 2,
            ranking_rentabilidad: 6
        }
    ],
    
    tendencias: [
        { año: 2024, mes: 1, nombre_mes: "January", tipo_actividad: "sembrado", tareas_iniciadas: 2, tareas_completadas: 2, porcentaje_completadas: 100.0, costo_promedio: 151.75, duracion_promedio_horas: 8.0 },
        { año: 2024, mes: 2, nombre_mes: "February", tipo_actividad: "aplicacion", tareas_iniciadas: 1, tareas_completadas: 1, porcentaje_completadas: 100.0, costo_promedio: 75.00, duracion_promedio_horas: 4.0 },
        { año: 2024, mes: 2, nombre_mes: "February", tipo_actividad: "riego", tareas_iniciadas: 1, tareas_completadas: 1, porcentaje_completadas: 100.0, costo_promedio: 42.00, duracion_promedio_horas: 6.0 },
        { año: 2024, mes: 3, nombre_mes: "March", tipo_actividad: "sembrado", tareas_iniciadas: 1, tareas_completadas: 1, porcentaje_completadas: 100.0, costo_promedio: 135.00, duracion_promedio_horas: 8.0 },
        { año: 2024, mes: 3, nombre_mes: "March", tipo_actividad: "aplicacion", tareas_iniciadas: 1, tareas_completadas: 1, porcentaje_completadas: 100.0, costo_promedio: 85.50, duracion_promedio_horas: 4.0 },
        { año: 2024, mes: 4, nombre_mes: "April", tipo_actividad: "riego", tareas_iniciadas: 1, tareas_completadas: 1, porcentaje_completadas: 100.0, costo_promedio: 55.00, duracion_promedio_horas: 6.0 },
        { año: 2024, mes: 5, nombre_mes: "May", tipo_actividad: "cosecha", tareas_iniciadas: 1, tareas_completadas: 1, porcentaje_completadas: 100.0, costo_promedio: 285.00, duracion_promedio_horas: 60.0 }
    ],
    
    kpis: {
        finanzas: {
            inversion_total: 981.00,
            costo_promedio_tarea: 122.63,
            ingresos_cosecha: 926.25,
            ganancia_neta: -54.75,
            roi_general_porcentaje: -5.58,
            inversion_por_hectarea: 25.55
        },
        operaciones: {
            empleados_activos: 6,
            empleados_especializados: 5,
            areas_productivas: 4,
            ubicaciones_activas: 7,
            tareas_totales: 11,
            tareas_completadas: 8,
            porcentaje_cumplimiento: 72.7
        },
        productividad: {
            torvadas_totales: 28.50,
            kilos_totales_producidos: 5169.90,
            rendimiento_promedio_hectarea: 0.00,
            cosechas_realizadas: 1,
            humedad_promedio: 14.2,
            cosechas_calidad_primera: 1,
            porcentaje_calidad_primera: 100.0
        }
    },
    
    recomendaciones: [
        {
            categoria: "MEJOR EMPLEADO",
            valor: "Charlie López (Aplicacion)",
            metrica: "Eficiencia: 100.0%",
            recomendacion: "Considerar para ascenso a supervisor o líder de equipo"
        },
        {
            categoria: "ÁREA MÁS RENTABLE",
            valor: "Campo Sur",
            metrica: "ROI: 225%",
            recomendacion: "Expandir operaciones y replicar mejores prácticas"
        },
        {
            categoria: "ACTIVIDAD MÁS COSTOSA",
            valor: "COSECHA",
            metrica: "Promedio: $285.00",
            recomendacion: "Revisar procesos y buscar optimizaciones de costo"
        }
    ]
};

// Utility Functions
function formatCurrency(value) {
    if (value === null || value === undefined || isNaN(value)) return 'N/A';
    return '$' + Number(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatPercentage(value) {
    if (value === null || value === undefined || isNaN(value)) return 'N/A';
    return Number(value).toFixed(1) + '%';
}

function formatNumber(value, decimals = 1) {
    if (value === null || value === undefined || isNaN(value)) return 'N/A';
    return Number(value).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function getStatusBadge(roi) {
    if (roi === null || roi === undefined) return '<span class="badge bg-secondary">Sin datos</span>';
    if (roi > 100) return '<span class="badge bg-success">Excelente</span>';
    if (roi > 0) return '<span class="badge bg-primary">Positivo</span>';
    if (roi > -50) return '<span class="badge bg-warning">Regular</span>';
    return '<span class="badge bg-danger">Crítico</span>';
}

function getEfficiencyColor(eficiencia) {
    if (eficiencia >= 100) return 'success';
    if (eficiencia >= 80) return 'primary';
    if (eficiencia >= 60) return 'warning';
    return 'danger';
}

function getRankingIcon(ranking) {
    switch(ranking) {
        case 1: return '<i class="fas fa-trophy text-warning"></i>';
        case 2: return '<i class="fas fa-medal text-secondary"></i>';
        case 3: return '<i class="fas fa-award text-warning"></i>';
        default: return `<span class="badge bg-light text-dark">${ranking}</span>`;
    }
}

// Chart Configuration
const chartColors = {
    primary: '#007bff',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    green: '#28a745',
    brown: '#8b4513',
    orange: '#fd7e14'
};

// Export Functions
function exportTableToCSV(tableId, filename = 'data.csv') {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    let csv = [];
    const rows = table.querySelectorAll('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const row = [], cols = rows[i].querySelectorAll('td, th');
        
        for (let j = 0; j < cols.length; j++) {
            // Clean text content, removing HTML tags
            let cellData = cols[j].innerText.replace(/"/g, '""');
            row.push('"' + cellData + '"');
        }
        
        csv.push(row.join(','));
    }
    
    downloadCSV(csv.join('\n'), filename);
}

function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Loading Animation
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="text-center"><div class="loading"></div></div>';
    }
}

function hideLoading(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTooltips();
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Navigation active state
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavigation);
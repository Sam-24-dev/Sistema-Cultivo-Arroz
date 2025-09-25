# 🌾 Sistema Integral de Gestión de Cultivo de Arroz
### Fullstack Web Application + Data Analytics Platform

[![Frontend Demo](https://img.shields.io/badge/Demo-Frontend%20Live-brightgreen)](https://sam-24-dev.github.io/Sistema-Cultivo-Arroz/)
[![Analytics Demo](https://img.shields.io/badge/Demo-Analytics%20Live-orange)](https://sam-24-dev.github.io/Analisis-Cultivo-Arroz/)
[![Python](https://img.shields.io/badge/Analytics-Python%20%7C%20Jupyter-ff6b6b)](https://github.com/Sam-24-dev/Analisis-Cultivo-Arroz)

---

## 🎯 Descripción del Proyecto

**Sistema completo de gestión agrícola** que integra una aplicación web frontend, base de datos MySQL robusta, y análisis avanzado de datos con Python. Desarrollado para optimizar la gestión de cultivos de arroz mediante tecnología moderna y análisis data-driven.

### 🏆 Características Principales

- **🌐 Dashboard Interactivo** - Métricas KPI en tiempo real
- **👥 Gestión de Empleados** - Sistema CRUD completo 
- **🌱 Control de Cultivos** - Seguimiento de áreas y actividades
- **📊 Análisis Avanzado** - Insights con Python y visualizaciones
- **💰 Análisis Financiero** - ROI, costos y rentabilidad
- **📈 Reportes Ejecutivos** - Business Intelligence profesional

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Estructura semántica moderna
- **CSS3** - Diseño responsive y profesional
- **JavaScript** - Interactividad y manipulación DOM
- **Bootstrap** - Framework CSS para UI/UX

### Backend & Database
- **MySQL** - Base de datos relacional con 7 tablas
- **Stored Procedures** - Lógica de negocio en BD
- **Triggers** - Auditoría y validaciones automáticas
- **Views** - Consultas optimizadas para reportes

### Data Analytics
- **Python 3.8+** - Análisis de datos
- **Pandas** - Manipulación y procesamiento
- **Matplotlib/Seaborn** - Visualizaciones estáticas
- **Plotly** - Gráficos interactivos avanzados
- **Jupyter Notebook** - Análisis profesional documentado

---

## 📊 Resultados y Métricas Clave

### 🎯 Análisis de Performance
- **ROI Actual:** -5.58% → **Meta 2025:** +15% (+20.6 puntos)
- **Eficiencia Operacional:** 72.7% → **Meta:** 90%
- **Productividad:** 28.5 torvadas → **Meta:** 50 torvadas
- **Áreas Rentables:** 1/6 → **Proyección:** 4/6

### 💡 Insights Críticos Identificados
- **Top Performer:** Charlie López (100% eficiencia)
- **Área Más Rentable:** Campo Sur (225% ROI)
- **Oportunidad Crítica:** Reactivación Ana Torres (0% productividad)
- **Actividad Clave:** Cosecha (única generadora de ingresos)

### 📈 Plan Estratégico Cuantificado
- **Inversión Requerida:** $2,000
- **ROI Proyectado:** 75% primer año
- **Payback Period:** 8-10 meses
- **Impacto Total:** +$3,500 retorno anual

---

## 🚀 Demo y Instalación

### 🌐 Demos en Vivo
**Frontend Completo:** [https://sam-24-dev.github.io/Sistema-Cultivo-Arroz/](https://sam-24-dev.github.io/Sistema-Cultivo-Arroz/)
**Análisis Completo:** [https://sam-24-dev.github.io/Analisis-Cultivo-Arroz/](https://sam-24-dev.github.io/Analisis-Cultivo-Arroz/)

> 📊 **Análisis Separado:** El análisis completo de Python está alojado en repositorio dedicado para mejor performance y experiencia de usuario.

### 💾 Configuración Base de Datos
```sql
-- 1. Crear base de datos
CREATE DATABASE cultivo_arroz;

-- 2. Ejecutar estructura principal
SOURCE ./database/SISTEMA_DE_CULTIVO_DE_ARROZ.sql;

-- 3. Ejecutar consultas analíticas
SOURCE ./database/consultas_analiticas_cultivo.sql;
```

### 📊 Ejecutar Análisis Localmente
```bash
# 1. Clonar repositorio de análisis
git clone https://github.com/Sam-24-dev/Analisis-Cultivo-Arroz.git
cd Analisis-Cultivo-Arroz

# 2. Instalar dependencias Python
pip install -r requirements.txt

# 3. Ejecutar análisis automático
python ejecutar_analisis.py

# 4. O abrir Jupyter manualmente
jupyter notebook analisis_cultivos_arroz_profesional.ipynb
```

### 🌐 Frontend Local
```bash
# Servidor local simple
cd frontend
python -m http.server 8000
# Abrir: http://localhost:8000
```

---

## 📂 Estructura del Proyecto

```
Sistema-Cultivo-Arroz/                    # REPO PRINCIPAL
├── frontend/                             # Aplicación Web
│   ├── index.html                       # Dashboard principal
│   ├── areas.html                       # Gestión de áreas
│   ├── empleados.html                   # CRUD empleados
│   ├── finanzas.html                    # Análisis financiero
│   ├── insights.html                    # Reportes ejecutivos
│   ├── css/
│   │   └── style.css                    # Estilos personalizados
│   └── js/
│       ├── main.js                      # Funcionalidad principal
│       ├── dashboard.js                 # Lógica dashboard
│       ├── areas.js                     # Gestión áreas
│       ├── empleados.js                 # CRUD empleados
│       ├── finanzas.js                  # Análisis financiero
│       └── insights.js                  # Visualizaciones
│
├── database/                            # Base de Datos MySQL
│   ├── SISTEMA_DE_CULTIVO_DE_ARROZ.sql        # Estructura principal
│   └── consultas_analiticas_cultivo.sql      # Consultas avanzadas
│
├── docs/                                # Documentación y capturas
│   └── screenshots/                     # Capturas de pantalla
│       ├── dashboard-preview.png
│       ├── empleados-crud.png
│       ├── finanzas-analysis.png
│       └── database-structure.png
│
└── README.md                            # Documentación principal
```

### 📊 Repositorio de Análisis Separado
**Repo:** [Analisis-Cultivo-Arroz](https://github.com/Sam-24-dev/Analisis-Cultivo-Arroz) *(Repositorio independiente)*

---

## 📸 Screenshots

### 🏠 Dashboard Principal
![Dashboard](./docs/screenshots/dashboard-preview.png)
*Métricas KPI en tiempo real con visualizaciones interactivas*

### 👥 Gestión de Empleados  
![Empleados](./docs/screenshots/empleados-crud.png)
*Sistema CRUD completo para gestión de personal*

### 💰 Análisis Financiero
![Finanzas](./docs/screenshots/finanzas-analysis.png)
*Control de costos y análisis de rentabilidad*

### 📊 Análisis Python Detallado  
**Ver Análisis Completo:** [https://sam-24-dev.github.io/Analisis-Cultivo-Arroz/](https://sam-24-dev.github.io/Analisis-Cultivo-Arroz/)

*Notebook interactivo con 15+ visualizaciones, insights de negocio y recomendaciones estratégicas*

---

## 🔧 Funcionalidades Técnicas

### 🎨 Frontend Features
- ✅ **Responsive Design** - Compatible móvil/desktop
- ✅ **Single Page Application** - Navegación fluida
- ✅ **Interactive Charts** - Gráficos dinámicos
- ✅ **Real-time Filters** - Filtrado instantáneo
- ✅ **Form Validation** - Validaciones client-side
- ✅ **Local Storage** - Persistencia datos cliente

### 🗄️ Database Features  
- ✅ **Normalized Schema** - 3NF compliance
- ✅ **Foreign Key Constraints** - Integridad referencial
- ✅ **Stored Procedures** - Lógica de negocio encapsulada
- ✅ **Triggers** - Auditoría automática
- ✅ **Views** - Consultas optimizadas
- ✅ **Indexes** - Performance optimizada

### 📈 Analytics Features
- ✅ **15+ Visualizations** - Plotly interactivos
- ✅ **Multi-dimensional Analysis** - 6 dimensiones clave
- ✅ **Predictive Insights** - Proyecciones cuantificadas  
- ✅ **Business Recommendations** - Accionables y medibles
- ✅ **Executive Dashboard** - KPIs consolidados
- ✅ **Export Capabilities** - Múltiples formatos

---

## 🎯 Casos de Uso Implementados

### 👨‍💼 Para Gerentes/Administradores
- **Dashboard Ejecutivo** con KPIs críticos
- **Análisis de ROI** por área y actividad
- **Ranking de empleados** por productividad
- **Proyecciones financieras** y planes estratégicos

### 👨‍🌾 Para Supervisores de Campo  
- **Asignación de tareas** por empleado
- **Control de actividades** (siembra, riego, cosecha)
- **Seguimiento de áreas** productivas
- **Reportes de eficiencia** operacional

### 📊 Para Analistas de Datos
- **Notebook completo** con 15+ análisis
- **Datasets estructurados** en CSV
- **Metodología replicable** otros sectores
- **Visualizaciones profesionales** exportables


## 👨‍💻 Desarrollo y Contribuciones

### 🛠️ Configuración Desarrollo
```bash
# Clonar repositorio
git clone https://github.com/Sam-24-dev/Sistema-Cultivo-Arroz.git
cd Sistema-Cultivo-Arroz

# Configurar base de datos
mysql -u root -p < database/SISTEMA_DE_CULTIVO_DE_ARROZ.sql

# Instalar dependencias análisis
git clone https://github.com/Sam-24-dev/Analisis-Cultivo-Arroz.git
cd Analisis-Cultivo-Arroz
pip install -r requirements.txt

# Servidor desarrollo frontend
cd ../frontend && python -m http.server 8000
```

### 📋 Tecnologías Requeridas
- **MySQL 8.0+** - Base de datos
- **Python 3.8+** - Análisis de datos  
- **Node.js 16+** - Herramientas desarrollo (opcional)
- **Git** - Control versiones

---

## 📄 Licencia y Contacto

### 📜 Licencia
Este proyecto está bajo la licencia **MIT License** - ver el archivo [LICENSE](LICENSE) para detalles.

### 📧 Contacto Profesional
- **LinkedIn:** [Samir Caizapasto](https://www.linkedin.com/in/samircaizapasto/)
- **GitHub:** [Sam-24-dev](https://github.com/Sam-24-dev)  
- **Email:** samir.leonardo.caizapasto04@gmail.com

---

## 🌟 Agradecimientos

**Proyecto desarrollado como demostración de capacidades fullstack y data analytics para sector agrícola, integrando tecnologías modernas con casos de uso reales y análisis cuantificados.**

---

*⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub*

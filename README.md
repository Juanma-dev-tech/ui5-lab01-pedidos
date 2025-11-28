![Fiori Developer in Progress](https://img.shields.io/badge/Fiori%20Developer-In%20Progress-0FAAFF?style=for-the-badge&logo=sap&logoColor=white)

# SAPUI5 Lab 01 — Lista + Detalle con JSONModel y Routing

Este proyecto es un laboratorio práctico de SAPUI5, donde se implementa una aplicación completa con:

- ✔ Lista de pedidos  
- ✔ Vista de detalle  
- ✔ Navegación con Routing  
- ✔ JSONModel cargado desde un servicio local  
- ✔ Formateo de moneda  
- ✔ Arquitectura estándar UI5 (Component.js + Manifest.json + Views + Controllers)

## 📌 Objetivos del ejercicio

- Comprender la estructura base de un proyecto SAPUI5.  
- Aprender a usar JSONModel para mockear datos locales.  
- Configurar navegación Routing (Routes + Targets) desde manifest.json.  
- Implementar un Master–Detail simple.  
- Crear controladores UI5 con buenas prácticas.  
- Mostrar datos con ObjectHeader + SimpleForm.  
- Usar un formatter para formatear importes.

## 🧱 Estructura del proyecto

```
webapp/
 ├── controller/
 │     ├── Main.controller.js
 │     └── Detail.controller.js
 ├── view/
 │     ├── Main.view.xml
 │     └── Detail.view.xml
 ├── localService/
 │     └── orders.json
 ├── Component.js
 ├── manifest.json
 └── index.html
```

## 🚀 Cómo ejecutar el proyecto

### Requisitos
- Node.js  
- UI5 CLI  

Instalar UI5 CLI:

```
npm install --global @ui5/cli
```

### 1 — Instalar dependencias

```
npm install
```

### 2 — Iniciar el servidor UI5

```
ui5 serve --open index.html
```

La aplicación abrirá en:

👉 http://localhost:8080

---

## 📸 Capturas sugeridas

- Vista Lista (Master)  
- Vista Detalle (Detail)  
- Navegación funcionando  

Ejemplo:

```
docs/lista.png
docs/detalle.png
```

## 🧠 Conceptos SAPUI5 aplicados

- sap.ui.core.Component  
- Routing en manifest.json  
- sap.m.List + StandardListItem  
- sap.ui.model.json.JSONModel  
- sap.m.ObjectHeader  
- sap.ui.layout.form.SimpleForm  
- sap.ui.core.format.NumberFormat  
- attachPatternMatched para cargar detalles dinámicos

---

## ✨ Autor

**Juanma-dev-tech**  
Consultor SAP SD + Fiori Developer en formación.  
Este proyecto forma parte de mi roadmap personal en SAPUI5 y Fiori.

---

## 📄 Licencia

MIT License.

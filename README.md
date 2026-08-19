# 🧡 Kinesio Vitality - Frontend

Frontend del sistema **Kinesio Vitality**, una plataforma web desarrollada para la gestión integral de centros de fisioterapia.

La aplicación permite administrar pacientes, fisioterapeutas, citas, evaluaciones, tratamientos, sesiones, ventas y usuarios desde una interfaz moderna, intuitiva y responsive.

---

## 🚀 Tecnologías utilizadas

- React 19
- Vite
- Material UI (MUI)
- React Router DOM
- Axios
- Context API
- JavaScript (ES6+)

---

## 📂 Estructura del proyecto

```text
src/
│
├── api/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
│
├── config/
├── context/
├── hooks/
├── pages/
│   ├── auth/
│   ├── dashboard/
│   ├── pacientes/
│   ├── fisioterapeutas/
│   ├── citas/
│   ├── evaluaciones/
│   ├── tratamientos/
│   ├── sesiones/
│   ├── ventas/
│   ├── usuarios/
│   ├── servicios/
│   └── configuraciones/
│
├── routes/
├── services/
├── utils/
│
├── App.jsx
└── main.jsx
```

---

# ✨ Características principales

## 🔐 Autenticación

- Inicio de sesión mediante JWT
- Roles de usuario
- Protección de rutas
- Cambio obligatorio de contraseña
- Cierre de sesión seguro

---

## 📊 Dashboard

- Indicadores generales
- Estadísticas del centro
- Resumen operativo

---

## 👤 Pacientes

- Registro
- Edición
- Historial
- Búsqueda dinámica

---

## 🩺 Fisioterapeutas

- Registro
- Gestión de información
- Estado activo/inactivo

---

## 📅 Citas

- Agenda
- Programación
- Estado de citas

---

## 📋 Evaluaciones

- Evaluaciones fisioterapéuticas
- Escala EVA
- Diagnóstico
- Objetivos terapéuticos

---

## ❤️ Tratamientos

- Plan terapéutico
- Técnicas aplicadas
- Objetivos
- Planificación
- Seguimiento

---

## 🏃 Sesiones

- Registro de sesiones
- Evolución del paciente
- Observaciones clínicas

---

## 💰 Ventas

- Registro de ventas
- Gestión de paquetes
- Control comercial

---

## 👥 Usuarios

- Administración de usuarios
- Roles
- Cambio de contraseña
- Activación/Inactivación

---

## ⚙ Configuración

- Configuración general del sistema

---

# 🎨 Diseño

La interfaz fue desarrollada siguiendo una línea moderna utilizando Material UI.

Características:

- Responsive
- Sidebar colapsable
- Topbar moderna
- Formularios organizados
- Búsquedas dinámicas
- Tablas responsivas
- Diálogos reutilizables
- Componentes reutilizables

---

# 🔐 Control de acceso

Actualmente el sistema maneja dos perfiles:

| Rol | Permisos |
|------|----------|
| ADMIN | Acceso total al sistema |
| FISIOTERAPEUTA | Acceso únicamente a los módulos autorizados |

Las rutas están protegidas tanto en el Frontend como en el Backend.

---

# 🔗 Backend

Este proyecto consume una API REST desarrollada con:

- Spring Boot
- Spring Security
- JWT
- PostgreSQL
- Hibernate
- JPA

---

# ⚙ Instalación

Clonar el repositorio

```bash
git clone https://github.com/usuario/kinesio-vitality-frontend.git
```

Entrar al proyecto

```bash
cd kinesio-vitality-frontend
```

Instalar dependencias

```bash
npm install
```

Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

# 📦 Compilar producción

```bash
npm run build
```

Vista previa del build

```bash
npm run preview
```

---

# 📁 Variables de entorno

Crear un archivo:

```
.env
```

Ejemplo:

```env
VITE_API_URL=http://localhost:8080/api
```

---

# 📌 Estado del proyecto

✅ En desarrollo activo.

El sistema continúa incorporando nuevas funcionalidades y mejoras visuales.

---

# 👨‍💻 Autor

**Paul Arias**

Desarrollador Full Stack

- Java
- Spring Boot
- React
- PostgreSQL

---

# 📄 Licencia

Proyecto desarrollado para uso privado del cliente.

Última actualización: Agosto 2026.

Todos los derechos reservados.

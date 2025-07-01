# 🍔 API Los Primos - Backend

## 📋 Endpoints

### Base URL

```
https://tu-backend-render.onrender.com
```

### 1. Crear Compra

-   **Endpoint**: `POST /api/compradores`
-   **Descripción**: Guarda una nueva compra en la base de datos
-   **Body**:

```json
{
    "nombre": "Juan Pérez",
    "banco": "Banco de Chile",
    "carrito": [
        {
            "id": 1,
            "nombre": "Hamburguesa",
            "cantidad": 2,
            "precio": 5000
        }
    ]
}
```

-   **Respuesta exitosa**: `201 Created`

### 2. Obtener Todas las Compras

-   **Endpoint**: `GET /api/compradores`
-   **Descripción**: Retorna todas las compras guardadas
-   **Respuesta**: Array de compras con `_id`, `nombre`, `banco`, `carrito`, `fechaCompra`

### 3. Eliminar Compra

-   **Endpoint**: `DELETE /api/compradores/:id`
-   **Descripción**: Elimina una compra por su ID
-   **Ejemplo**: `DELETE /api/compradores/64f8a1b2c3d4e5f6a7b8c9d0`
-   **Respuesta exitosa**: `200 OK`

### 4. Actualizar Compra

-   **Endpoint**: `PUT /api/compradores/:id`
-   **Descripción**: Actualiza una compra existente
-   **Ejemplo**: `PUT /api/compradores/64f8a1b2c3d4e5f6a7b8c9d0`
-   **Body**: Igual que crear compra
-   **Respuesta**: Compra actualizada

## 🔧 Configuración de Producción

-   **Puerto**: Usa `process.env.PORT` (asignado por Render)
-   **CORS**: Configurado para permitir peticiones desde el frontend
-   **MongoDB**: Conexión a MongoDB Atlas

## 📝 Notas

-   El backend está desplegado en **Render**
-   La base de datos está en **MongoDB Atlas**
-   CORS configurado para desarrollo local y producción
-   Manejo de errores incluido en todos los endpoints

## 🔗 Enlaces

-   **Frontend**: [Repositorio del Frontend](https://github.com/Zetkoska/Pagina-Web-CRUD-)
-   **Backend**: [Repositorio del Backend](https://github.com/Zetkoska/Pagina-Web-CRUD-Backend)

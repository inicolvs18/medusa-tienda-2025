# 🔧 Configuración Worker Mode para Render

## 📋 Variables de Entorno para Render

### Servidor MedusaJS (con Admin)
```env
NODE_ENV=production
PORT=9000
MEDUSA_WORKER_MODE=server
DISABLE_MEDUSA_ADMIN=false
DATABASE_URL=[Auto-generado por Render]
REDIS_URL=[Auto-generado por Render]
JWT_SECRET=3w2koxOVarGn5+V+7+iUOFTO2C4gr9RpbvFAclCf/9c=
COOKIE_SECRET=iP3osUQUYta7luVvd9eZTqJYFdq2L7DeG8ZlR32UYwE=
STORE_CORS=https://medusa-storefront.onrender.com
ADMIN_CORS=https://medusa-admin.onrender.com
AUTH_CORS=https://medusa-backend.onrender.com
```

### Worker MedusaJS (sin Admin)
```env
NODE_ENV=production
PORT=9000
MEDUSA_WORKER_MODE=worker
DISABLE_MEDUSA_ADMIN=true
DATABASE_URL=[Auto-generado por Render]
REDIS_URL=[Auto-generado por Render]
JWT_SECRET=3w2koxOVarGn5+V+7+iUOFTO2C4gr9RpbvFAclCf/9c=
COOKIE_SECRET=iP3osUQUYta7luVvd9eZTqJYFdq2L7DeG8ZlR32UYwE=
STORE_CORS=https://medusa-storefront.onrender.com
ADMIN_CORS=https://medusa-admin.onrender.com
AUTH_CORS=https://medusa-backend.onrender.com
```

## 🚀 Comandos para Render

### Servidor (con Admin)
```bash
Build Command: npm run build:server
Start Command: npm run start:server
```

### Worker (sin Admin)
```bash
Build Command: npm run build:worker
Start Command: npm run start:worker
```

## 🏗️ Estructura de Despliegue Recomendada

### Opción 1: Solo Servidor (Recomendado para empezar)
- **1 Servicio Web**: Modo servidor con admin habilitado
- **1 PostgreSQL**: Base de datos
- **1 Redis**: Cache y colas

### Opción 2: Servidor + Worker (Para producción)
- **1 Servicio Web**: Modo servidor con admin habilitado
- **1 Servicio Web**: Modo worker sin admin
- **1 PostgreSQL**: Base de datos compartida
- **1 Redis**: Cache y colas compartidas

## 📊 URLs que se generarán

### Servidor
- **Backend**: `https://medusa-backend.onrender.com`
- **Admin**: `https://medusa-backend.onrender.com/admin`
- **Store API**: `https://medusa-backend.onrender.com/store`

### Worker (si se despliega)
- **Worker**: `https://medusa-worker.onrender.com`
- **No Admin**: Admin deshabilitado

## 🔧 Configuración de Servicios en Render

### Servidor MedusaJS
```
Name: medusa-backend
Type: Web Service
Repository: inicolvs18/medusa-tienda-2025
Branch: main
Root Directory: lsmarketabduceme
Build Command: npm run build:server
Start Command: npm run start:server
Environment Variables: [Ver variables del servidor arriba]
```

### Worker MedusaJS (Opcional)
```
Name: medusa-worker
Type: Web Service
Repository: inicolvs18/medusa-tienda-2025
Branch: main
Root Directory: lsmarketabduceme
Build Command: npm run build:worker
Start Command: npm run start:worker
Environment Variables: [Ver variables del worker arriba]
```

## ✅ Verificación

### Servidor
- **Health**: `https://medusa-backend.onrender.com/health`
- **Admin**: `https://medusa-backend.onrender.com/admin`
- **Store**: `https://medusa-backend.onrender.com/store/products`

### Worker
- **Health**: `https://medusa-worker.onrender.com/health`
- **No Admin**: Admin deshabilitado

## 💡 Recomendaciones

1. **Para empezar**: Usa solo el modo servidor
2. **Para producción**: Considera agregar el worker para mejor rendimiento
3. **Monitoreo**: Revisa los logs de ambos servicios
4. **Escalabilidad**: El worker puede manejar tareas pesadas independientemente

---

**¡Configuración Worker Mode lista para Render! 🎉**




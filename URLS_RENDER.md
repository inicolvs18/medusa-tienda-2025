# 🔗 URLs y Puertos para Render

## 📍 URLs que Render generará automáticamente:

### Backend MedusaJS
```
https://medusa-backend.onrender.com
```
- **Puerto**: Render asigna automáticamente (variable PORT)
- **Health Check**: `https://medusa-backend.onrender.com/health`
- **Store API**: `https://medusa-backend.onrender.com/store/products`
- **Admin API**: `https://medusa-backend.onrender.com/admin`

### Frontend Storefront
```
https://medusa-storefront.onrender.com
```
- **Puerto**: 80/443 (manejado por Render)
- **Página principal**: `https://medusa-storefront.onrender.com`

### Admin Dashboard
```
https://medusa-admin.onrender.com
```
- **Puerto**: 80/443 (manejado por Render)
- **Admin panel**: `https://medusa-admin.onrender.com`

## ⚙️ Variables de entorno para Render:

### Backend (medusa-backend)
```env
NODE_ENV=production
PORT=9000
DATABASE_URL=[Auto-generado por Render]
REDIS_URL=[Auto-generado por Render]
JWT_SECRET=3w2koxOVarGn5+V+7+iUOFTO2C4gr9RpbvFAclCf/9c=
COOKIE_SECRET=iP3osUQUYta7luVvd9eZTqJYFdq2L7DeG8ZlR32UYwE=
STORE_CORS=https://medusa-storefront.onrender.com
ADMIN_CORS=https://medusa-admin.onrender.com
AUTH_CORS=https://medusa-backend.onrender.com
```

### Frontend (medusa-storefront)
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://medusa-backend.onrender.com
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=[Se obtiene después del primer despliegue]
```

## 🔧 Configuración de puertos en Render:

### 1. Render maneja automáticamente los puertos:
- **Backend**: Render asigna puerto automáticamente (variable PORT)
- **Frontend**: Render usa puertos 80/443 para static sites
- **Admin**: Render usa puertos 80/443 para static sites

### 2. No necesitas configurar puertos manualmente:
- Render establece `process.env.PORT` automáticamente
- Tu aplicación debe usar `process.env.PORT || 9000`
- Render redirige el tráfico a los puertos correctos

## 🚀 Comandos para Render:

### Backend
```bash
Build Command: npm install
Start Command: npm run start:render
```

### Frontend
```bash
Build Command: npm install && npm run build
Publish Directory: out
```

## 📋 Pasos para reemplazar URLs:

### 1. En medusa-config.ts:
- ✅ Ya configurado con URLs de Render
- ✅ CORS configurado correctamente

### 2. En variables de entorno de Render:
- ✅ URLs listas para copiar y pegar
- ✅ Puertos manejados automáticamente

### 3. En frontend:
- ✅ NEXT_PUBLIC_MEDUSA_BACKEND_URL configurado
- ✅ Publishable key se obtiene después del despliegue

## 🔍 Verificación después del despliegue:

### Backend
- Ir a: `https://medusa-backend.onrender.com/health`
- Debe mostrar: `{"status": "ok"}`

### Frontend
- Ir a: `https://medusa-storefront.onrender.com`
- Debe mostrar: Tu tienda funcionando

### Admin
- Ir a: `https://medusa-admin.onrender.com`
- Debe mostrar: Panel de administración

## ⚠️ Notas importantes:

1. **Render asigna URLs automáticamente** basadas en el nombre del servicio
2. **Los puertos se manejan automáticamente** por Render
3. **No necesitas configurar puertos manualmente**
4. **Las URLs se generan como**: `https://[nombre-servicio].onrender.com`

---

**¡Todas las URLs están listas para usar en Render! 🎉**

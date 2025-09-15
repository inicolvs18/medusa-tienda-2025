// Configuración para modo servidor (con admin habilitado)
const { loadEnv, defineConfig } = require('@medusajs/framework/utils')

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

// Función para construir la URL de la base de datos con SSL
function getDatabaseUrl() {
  const baseUrl = process.env.DATABASE_URL
  if (!baseUrl) return baseUrl
  
  // Si estamos en producción y necesitamos SSL, agregar parámetros SSL
  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_SSL === 'true') {
    const url = new URL(baseUrl)
    url.searchParams.set('sslmode', 'require')
    return url.toString()
  }
  
  return baseUrl
}

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: getDatabaseUrl(),
    redisUrl: process.env.REDIS_URL,
    workerMode: "server",
    http: {
      storeCors: process.env.STORE_CORS || "https://medusa-storefront.onrender.com",
      adminCors: process.env.ADMIN_CORS || "https://medusa-admin.onrender.com", 
      authCors: process.env.AUTH_CORS || "https://medusa-backend.onrender.com",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  admin: {
    disable: false, // Admin habilitado en modo servidor
  },
  modules: [
    {
      resolve: "@medusajs/cache-redis",
      key: "cacheService",
      options: {
        redisUrl: process.env.REDIS_URL,
      },
    },
  ],
})

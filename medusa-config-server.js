// Configuración para modo servidor (con admin habilitado)
const { loadEnv, defineConfig } = require('@medusajs/framework/utils')

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
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

const crypto = require('crypto');

console.log('🔑 Generando claves para despliegue en Render...\n');

// Generar claves seguras
const jwtSecret = crypto.randomBytes(32).toString('base64');
const cookieSecret = crypto.randomBytes(32).toString('base64');

console.log('📋 Variables de entorno para Render:\n');
console.log('='.repeat(60));
console.log(`JWT_SECRET=${jwtSecret}`);
console.log(`COOKIE_SECRET=${cookieSecret}`);
console.log('='.repeat(60));

console.log('\n📝 Configuración completa para Render:');
console.log('1. Crear base de datos PostgreSQL');
console.log('2. Crear servicio Redis');
console.log('3. Crear servicio web con estas variables:');
console.log('   - NODE_ENV=production');
console.log('   - PORT=9000');
console.log('   - DATABASE_URL=[Auto-generado por Render]');
console.log('   - REDIS_URL=[Auto-generado por Render]');
console.log('   - STORE_CORS=https://tu-storefront.onrender.com');
console.log('   - ADMIN_CORS=https://tu-admin.onrender.com');
console.log('   - AUTH_CORS=https://tu-backend.onrender.com');

console.log('\n🚀 Comandos para Render:');
console.log('Build Command: npm install');
console.log('Start Command: npm run start:render');

console.log('\n✅ ¡Configuración lista para Render!');

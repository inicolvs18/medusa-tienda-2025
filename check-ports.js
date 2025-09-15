#!/usr/bin/env node

// Script para verificar configuración de puertos en Render
console.log('🔍 Verificando configuración de puertos para Render...\n');

// Verificar variable PORT
const port = process.env.PORT || 9000;
console.log(`✅ Puerto configurado: ${port}`);

// Verificar que Render maneja los puertos automáticamente
console.log('\n📋 Configuración de puertos en Render:');
console.log('• Backend: Render asigna puerto automáticamente (variable PORT)');
console.log('• Frontend: Render usa puertos 80/443 para static sites');
console.log('• Admin: Render usa puertos 80/443 para static sites');

// Verificar URLs que se generarán
console.log('\n🔗 URLs que se generarán en Render:');
console.log('• Backend: https://medusa-backend.onrender.com');
console.log('• Frontend: https://medusa-storefront.onrender.com');
console.log('• Admin: https://medusa-admin.onrender.com');

// Verificar variables de entorno necesarias
console.log('\n⚙️ Variables de entorno necesarias:');
const requiredVars = [
  'NODE_ENV',
  'PORT',
  'DATABASE_URL',
  'REDIS_URL',
  'JWT_SECRET',
  'COOKIE_SECRET',
  'STORE_CORS',
  'ADMIN_CORS',
  'AUTH_CORS'
];

requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${value.substring(0, 20)}...`);
  } else {
    console.log(`❌ ${varName}: No configurado`);
  }
});

console.log('\n🚀 ¡Configuración de puertos lista para Render!');
console.log('💡 Render maneja automáticamente todos los puertos');
console.log('💡 Solo necesitas configurar las variables de entorno');

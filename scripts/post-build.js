#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando build del admin...');

const adminIndexPath = path.join(__dirname, '..', '.medusa', 'server', 'public', 'admin', 'index.html');

if (fs.existsSync(adminIndexPath)) {
  console.log('✅ Admin index.html encontrado en:', adminIndexPath);
  
  // Verificar que el archivo no esté vacío
  const stats = fs.statSync(adminIndexPath);
  if (stats.size > 0) {
    console.log('✅ Admin index.html tiene contenido válido');
  } else {
    console.error('❌ Admin index.html está vacío');
    process.exit(1);
  }
} else {
  console.error('❌ Admin index.html no encontrado en:', adminIndexPath);
  console.log('📁 Directorios disponibles:');
  
  const serverDir = path.join(__dirname, '..', '.medusa', 'server');
  if (fs.existsSync(serverDir)) {
    console.log('📁 .medusa/server:', fs.readdirSync(serverDir));
    
    const publicDir = path.join(serverDir, 'public');
    if (fs.existsSync(publicDir)) {
      console.log('📁 .medusa/server/public:', fs.readdirSync(publicDir));
      
      const adminDir = path.join(publicDir, 'admin');
      if (fs.existsSync(adminDir)) {
        console.log('📁 .medusa/server/public/admin:', fs.readdirSync(adminDir));
      }
    }
  }
  
  process.exit(1);
}

console.log('🎉 Build del admin verificado correctamente');

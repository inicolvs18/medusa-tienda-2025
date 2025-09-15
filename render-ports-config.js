// Configuración específica de puertos para Render
const port = process.env.PORT || 9000;

// Render asigna automáticamente el puerto a través de la variable PORT
console.log(`🚀 Servidor MedusaJS iniciando en puerto: ${port}`);

// Configuración para Render
module.exports = {
  port: port,
  // Render maneja automáticamente el puerto, no necesitas configurar manualmente
  // La variable PORT se establece automáticamente por Render
};




const fs = require('fs');

function valoresIntermedios(desde, hasta, granularidad) {
  const desdeNum = parseFloat(desde);
  const hastaNum = parseFloat(hasta);

  if (isNaN(desdeNum) || isNaN(hastaNum)) {
    console.error('Las clasificaciones deben ser números válidos');
    return [];
  }

  const valores = [];
  for (let i = desdeNum + granularidad; i < hastaNum; i += granularidad) {
    // Redondea a seis decimales y elimina el último cero de la derecha si hay,
    // asi es como se incrementa
    const valorFormateado = i.toFixed(6).replace(/\.?0$/, '');

    valores.push(valorFormateado);
  }

  return valores;
}

const desde = '641.665872';
const hasta = '641.66598';
const granularidad = 0.000001; // Incremento en un millón deavésimas

const valores = valoresIntermedios(desde, hasta, granularidad);

// Escribir en el archivo CSV
const csvContent = 'Valor\n' + valores.join('\n');
fs.writeFileSync('valores_intermedios.csv', csvContent);

console.log('Archivo CSV generado: valores_intermedios.csv');

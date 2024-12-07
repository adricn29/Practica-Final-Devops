const fs = require('fs');
const path = require('path');

test('El archivo index.html contiene "Hola Mundo"', () => {
    const filePath = path.join(__dirname, '../index.html');
    const html = fs.readFileSync(filePath, 'utf8');
    expect(html).toMatch(/Hola Mundo/);
});

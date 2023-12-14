const randomColorGen = require('./index');

test('Generates a valid hex color', () => {
    const color = randomColorGen();
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
});

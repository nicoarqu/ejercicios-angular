// Problema propuesto
// Se necesita realizar algunos cálculos con figuras geometricas
// Para ello deberá construir una interface "FiguraGeometrica"
// Esta interface deberá contener la definicion de métods correspondientes a las figuras
// 1. Cuadrado
// 2. Círculo
// 3. Rectangulo
// 4. Triangulo
// 5. Esfera
// 6. Cono
// 7. Cilindro

//Cada clase debe implementar los métodos calcularPerímetro, calcularArea, calcularVolumen
//Se debe imprimir todos los resultados en pantalla.

interface Figura2D {
    perimetro: number;
    area: number;
    calcularPerimetro(): void;
    calcularArea(): void;
}

interface Figura3D {
    volumen: number;
    calcularVolumen(): void;
}


class Cuadrado implements Figura2D {

    constructor(private lado: number) { }
    perimetro = Math.pow(this.lado, 2);
    area = this.lado * 4;

    calcularPerimetro(): void {
        console.log(`El perímetro del cuadrado es: ${this.perimetro}`);
    }
    calcularArea(): void {
        console.log(`El área del cuadrado es: ${this.area}`);
    }
}

class Circulo implements Figura2D {

    constructor(private radio: number) { }
    perimetro = this.radio * Math.PI * 2;
    area = Math.pow(this.radio, 2) * Math.PI;

    calcularPerimetro(): void {
        console.log(`El perímetro del círculo es: ${this.perimetro}`);
    }
    calcularArea(): void {
        console.log(`El area del círculo es: ${this.area}`);
    }
}

class Rectangulo implements Figura2D {

    constructor(private ancho: number, private largo: number) { }
    perimetro = this.ancho * 2 + this.largo * 2;
    area = this.ancho * this.largo;

    calcularPerimetro(): void {
        console.log(`El perímetro del rectangulo es: ${this.perimetro}`);
    }
    calcularArea(): void {
        console.log(`El área del rectangulo es: ${this.area}`);
    }
}

class Triangulo implements Figura2D {

    constructor(private lados: number[], private base: number, private altura: number) { }
    perimetro = this.lados.reduce((a, b) => a + b, 0);
    area = this.base * this.altura / 2;

    calcularPerimetro(): void {
        console.log(`El perímetro del triangulo es: ${this.perimetro}`);
    }
    calcularArea(): void {
        console.log(`El área del triangulo es: ${this.area}`);
    }
}

class Esfera implements Figura3D {

    constructor(private radio: number) { }
    volumen = Math.pow(this.radio, 3) * Math.PI * 4 / 3;

    calcularVolumen(): void {
        console.log(`El volumen de la esfera es: ${this.volumen}`);
    }
}

class Cono implements Figura3D {

    constructor(private radio: number, private altura: number) { }
    volumen = Math.pow(this.radio, 2) * this.altura * Math.PI * 1 / 3;

    calcularVolumen(): void {
        console.log(`El volumen del cono es: ${this.volumen}`);
    }
}

class Cilindro implements Figura3D {

    constructor(private radio: number, private altura: number) { }
    volumen = Math.pow(this.radio, 2) * this.altura * Math.PI;

    calcularVolumen(): void {
        console.log(`El volumen del cilindro es: ${this.volumen}`);
    }
}

const cuadrado = new Cuadrado(16);
cuadrado.calcularPerimetro();
cuadrado.calcularArea();
console.log("\n");
const rectangulo = new Rectangulo(6, 4);
rectangulo.calcularPerimetro();
rectangulo.calcularArea();
console.log("\n");
const circulo = new Circulo(2);
circulo.calcularPerimetro();
circulo.calcularArea();
console.log("\n");
const triangulo = new Triangulo([3, 4, 5], 4, 2.5);
triangulo.calcularPerimetro();
triangulo.calcularArea();
console.log("\n");
const esfera = new Esfera(12);
esfera.calcularVolumen();
console.log("\n");
const cono = new Cono(5, 10);
cono.calcularVolumen();
console.log("\n");
const cilindro = new Cilindro(3, 5);
cilindro.calcularVolumen();
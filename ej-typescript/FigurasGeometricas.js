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
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
        this.perimetro = Math.pow(this.lado, 2);
        this.area = this.lado * 4;
    }
    Cuadrado.prototype.calcularPerimetro = function () {
        console.log("El per\u00EDmetro del cuadrado es: " + this.perimetro);
    };
    Cuadrado.prototype.calcularArea = function () {
        console.log("El \u00E1rea del cuadrado es: " + this.area);
    };
    return Cuadrado;
}());
var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
        this.perimetro = this.radio * Math.PI * 2;
        this.area = Math.pow(this.radio, 2) * Math.PI;
    }
    Circulo.prototype.calcularPerimetro = function () {
        console.log("El per\u00EDmetro del c\u00EDrculo es: " + this.perimetro);
    };
    Circulo.prototype.calcularArea = function () {
        console.log("El area del c\u00EDrculo es: " + this.area);
    };
    return Circulo;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, largo) {
        this.ancho = ancho;
        this.largo = largo;
        this.perimetro = this.ancho * 2 + this.largo * 2;
        this.area = this.ancho * this.largo;
    }
    Rectangulo.prototype.calcularPerimetro = function () {
        console.log("El per\u00EDmetro del rectangulo es: " + this.perimetro);
    };
    Rectangulo.prototype.calcularArea = function () {
        console.log("El \u00E1rea del rectangulo es: " + this.area);
    };
    return Rectangulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(lados, base, altura) {
        this.lados = lados;
        this.base = base;
        this.altura = altura;
        this.perimetro = this.lados.reduce(function (a, b) { return a + b; }, 0);
        this.area = this.base * this.altura / 2;
    }
    Triangulo.prototype.calcularPerimetro = function () {
        console.log("El per\u00EDmetro del triangulo es: " + this.perimetro);
    };
    Triangulo.prototype.calcularArea = function () {
        console.log("El \u00E1rea del triangulo es: " + this.area);
    };
    return Triangulo;
}());
var Esfera = /** @class */ (function () {
    function Esfera(radio) {
        this.radio = radio;
        this.volumen = Math.pow(this.radio, 3) * Math.PI * 4 / 3;
    }
    Esfera.prototype.calcularVolumen = function () {
        console.log("El volumen de la esfera es: " + this.volumen);
    };
    return Esfera;
}());
var Cono = /** @class */ (function () {
    function Cono(radio, altura) {
        this.radio = radio;
        this.altura = altura;
        this.volumen = Math.pow(this.radio, 2) * this.altura * Math.PI * 1 / 3;
    }
    Cono.prototype.calcularVolumen = function () {
        console.log("El volumen del cono es: " + this.volumen);
    };
    return Cono;
}());
var Cilindro = /** @class */ (function () {
    function Cilindro(radio, altura) {
        this.radio = radio;
        this.altura = altura;
        this.volumen = Math.pow(this.radio, 2) * this.altura * Math.PI;
    }
    Cilindro.prototype.calcularVolumen = function () {
        console.log("El volumen del cilindro es: " + this.volumen);
    };
    return Cilindro;
}());
var cuadrado = new Cuadrado(16);
cuadrado.calcularPerimetro();
cuadrado.calcularArea();
console.log("\n");
var rectangulo = new Rectangulo(6, 4);
rectangulo.calcularPerimetro();
rectangulo.calcularArea();
console.log("\n");
var circulo = new Circulo(2);
circulo.calcularPerimetro();
circulo.calcularArea();
console.log("\n");
var triangulo = new Triangulo([3, 4, 5], 4, 2.5);
triangulo.calcularPerimetro();
triangulo.calcularArea();
console.log("\n");
var esfera = new Esfera(12);
esfera.calcularVolumen();
console.log("\n");
var cono = new Cono(5, 10);
cono.calcularVolumen();
console.log("\n");
var cilindro = new Cilindro(3, 5);
cilindro.calcularVolumen();

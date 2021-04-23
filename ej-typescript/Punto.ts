interface Punto {
    imprimir(): void;
}

class Plano implements Punto {

    constructor(private x:number, private y:number){}

    imprimir(): void{
        console.log(`El punto en el plano es: (${this.x},${this.y})`)
    }
}

class Espacio implements Punto{
    constructor(private x:number, private y:number, private z:number){}

    imprimir(){
        console.log(`Punto en el espacio: (${this.x},${this.y}, ${this.z})`)
    }
}

let plano1 = new Plano(5, 5);
plano1.imprimir();

let espacio = new Espacio(10, 20, 30);
espacio.imprimir();
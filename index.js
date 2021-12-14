const prompt = require('prompt-sync')(); // permite usar el prompt

const gravuniversal = parseFloat(6.67*10**(-11)); // m^3 kg^-1 s^-2; constante de gravitación universal

const FG_BLACK = "\u001b[30m"
const FG_RED = "\u001b[31m"
const FG_GREEN = "\u001b[32m"
const FG_YELLOW = "\u001b[33m"
const FG_BLUE = "\u001b[34m"
const FG_MAGENTA = "\u001b[35m"
const FG_CYAN = "\u001b[36m"
const FG_WHITE = "\u001b[37m"
const FG_BRIGHTBLACK = "\u001b[30;1m"
const FG_BRIGHTRED = "\u001b[31;1m"
const FG_BRIGHTGREEN = "\u001b[32;1m"
const FG_BRIGHTYELLOW = "\u001b[33;1m"
const FG_BRIGHTBLUE = "\u001b[34;1m"
const FG_BRIGHTMAGENTA = "\u001b[35;1m"
const FG_BRIGHTCYAN = "\u001b[36;1m"
const FG_BRIGHTWHITE = "\u001b[37;1m"
const BG_BLACK = "\u001b[40m"
const BG_RED = "\u001b[41m"
const BG_GREEN = "\u001b[42m"
const BG_YELLOW = "\u001b[43m"
const BG_BLUE = "\u001b[44m"
const BG_MAGENTA = "\u001b[45m"
const BG_CYAN = "\u001b[46m"
const BG_WHITE = "\u001b[47m"
const BG_BRIGHTBLACK = "\u001b[40;1m"
const BG_BRIGHTRED = "\u001b[41;1m"
const BG_BRIGHTGREEN = "\u001b[42;1m"
const BG_BRIGHTYELLOW = "\u001b[43;1m"
const BG_BRIGHTBLUE = "\u001b[44;1m"
const BG_BRIGHTMAGENTA = "\u001b[45;1m"
const BG_BRIGHTCYAN = "\u001b[46;1m"
const BG_BRIGHTWHITE = "\u001b[47;1m"
const ST_BOLD = "\u001b[1m"
const ST_UNDERLINE = "\u001b[4m"
const ST_REVERSED = "\u001b[7m"
const RESET = "\u001b[0m"

function menu () { // menu principal
    console.log();
    console.log(FG_GREEN + "1. Calcular la excentricadad de un planeta");
    console.log('2. Calcular la fuerza gravitatoria entre dos cuerpos');
    console.log("3. MRUA" + RESET);
    console.log(FG_RED + '4. Salir' + RESET);
    console.log();
    let elección = prompt('Elige una opción: ');
    switch (elección) { // switch para llevar a cabo las diferentes opciones
        case '1':
            console.log();
            console.log("Has elegido 1. Calcular la excentricidad de un planeta");
            console.log();
            excentricidad();
        case '2':
            console.log();
            console.log("Has elegido 2. Calcular la fuerza gravitatoria entre dos cuerpos");
            console.log();
            fuerza();
        case '3':
            console.log();
            console.log("Has elegido 3. MRUA");
            console.log();
            menuMRUA();
        case '4':
            exit();
        default:
            console.log();
            console.log("Has elegido una opción incorrecta");
            console.log();
            menu();
    };
};	

function excentricidad () { // función para calcular la excentricidad de un planeta
    let apsis = prompt("Introduce el apsis: ");
    let periapsis = prompt('introduce el periapsis (Misma unidad que el apsis): ');

    class planeta {
        constructor(apsis, periapsis) {
            this.apsis = parseFloat(apsis);
            this.periapsis = parseFloat(periapsis);
        };
        get calcexcentricidad () {
            return parseFloat((this.apsis - this.periapsis) / (this.apsis + this.periapsis));
        };
    };

    let planeta1 = new planeta(apsis, periapsis);
    console.log();
    console.log("La excentricidad del planeta es: " + planeta1.calcexcentricidad);
    console.log();
    menu();
};

function fuerza () { // función para calcular la fuerza gravitatoria entre dos cuerpos
    let massa = prompt('Introduce la masa (Kg): '); // Pedimos la masa
    let massa2 = prompt('Introduce la segunda masa (Kg): '); // Pedimos la segunda masa
    let distancia = prompt('Introduce la distancia entre los dos cuerpos (m): '); // Pedimos la distancia entre las dos masas

    class fuerza {
        constructor(massa, massa2, distancia) { // Constructor de la clase para crear objeto con lo q hemos pedido
            this.massa = parseFloat(massa);
            this.massa2 = parseFloat(massa2);
            this.distancia = parseFloat(distancia);
        };
        get calcforça () {
            return parseFloat(gravuniversal*(this.massa * this.massa2) / this.distancia**(2)); // Método para calcular la fuerza gravitatoria con la formula de la constante de gravitación universal
        };
    };
    
    let fuerza1 = new fuerza(massa, massa2, distancia);
    console.log();
    console.log(`La fuerza gravitatoria entre los dos cuerpos: ${fuerza1.calcforça} N`);
    console.log();
    menu();

};

function menuMRUA () { // menu para el MRUA
    console.log();
    console.log("1. Calcular la velocidad de un cuerpo en una trayectoria rectilínea");
    console.log('2. Calcular la velocidad inicial de un cuerpo en una trayectoria rectilínea');
    console.log('3. Calcular la aceleración de un cuerpo en una trayectoria rectilínea');
    console.log('4. Calcular el tiempo de aceleración de un cuerpo en una trayectoria rectilínea');
    console.log('5. Otros');
    console.log();
    let elección = prompt('Elige una opción: ');
    switch (elección) {
        case '1':
            console.log();
            console.log("Has elegido 1. Calcular la velocidad de un cuerpo en una trayectoria rectilínea");
            console.log();
            calcvMRUA(); // llamamos a la función para calcular la velocidad
            function calcvMRUA() { // función para calcular la velocidad de un cuerpo en una trayectoria rectilínea
                let aceleración = prompt('Introduce la aceleración (m/s^2): '); // Pedimos la aceleración
                let tiempo = prompt('Introduce el tiempo (segundos): '); // Pedimos el tiempo
                let v0 = prompt('Introduce la velocidad inicial (m/s): '); // Pedimos la velocidad inicial

                class vMRUA {
                    constructor(aceleración, tiempo, v0) { // constructor de la clase para hacer objeto con las variables que hemos pedido
                        this.aceleración = parseFloat(aceleración);
                        this.tiempo = parseFloat(tiempo);
                        this.v0 = parseFloat(v0);
                    };
                    get calcv() { // función para calcular la velocidad con las variables que hemos pedido
                        return parseFloat(this.v0 + (this.aceleración * this.tiempo));
                    };
                };

                let MRUA1 = new vMRUA(aceleración, tiempo, v0); // creamos el objeto usando el constructor

                console.log();
                console.log(`La velocidad del cuerpo es: ${MRUA1.calcv} m/s`);
                console.log();
                menuMRUA();
            };
        case '2':
            console.log();
            console.log("Has elegido 2. Calcular la velocidad inicial de un cuerpo en una trayectoria rectilínea");
            console.log();
            calcv0MRUA(); // llamamos a la función para calcular la velocidad inicial
            function calcv0MRUA() { // función para calcular la velocidad inicial de un cuerpo en una trayectoria rectilínea
                let aceleración = prompt('Introduce la aceleración (m/s^2): '); // Pedimos la aceleración
                let tiempo = prompt('Introduce el tiempo (segundos): '); // Pedimos el tiempo
                let vf = prompt('Introduce la velocidad final (m/s): '); // Pedimos la velocidad final

                class v0MRUA {
                    constructor(aceleración, tiempo, vf) { // constructor de la clase para hacer objeto con las variables que hemos pedido
                        this.aceleración = parseFloat(aceleración);
                        this.tiempo = parseFloat(tiempo);
                        this.vf = parseFloat(vf);
                    };
                    get calcv0() { // función para calcular la velocidad inicial con las variables que hemos pedido
                        return parseFloat((this.vf - (this.aceleración * this.tiempo)));
                    };
                };

                let MRUA2 = new v0MRUA(aceleración, tiempo, vf); // creamos el objeto usando el constructor

                console.log();
                console.log(`La velocidad inicial del cuerpo es: ${MRUA2.calcv0} m/s`);
                console.log();
                menuMRUA();
            };
        case '3':
            console.log();
            console.log("Has elegido 3. Calcular la aceleración de un cuerpo en una trayectoria rectilínea");
            console.log();
            calcaMRUA(); // llamamos a la función para calcular la aceleración
            function calcaMRUA() { // función para calcular la aceleración de un cuerpo en una trayectoria rectilínea
                let v0 = prompt('Introduce la velocidad inicial (m/s): '); // Pedimos la velocidad inicial
                let vf = prompt('Introduce la velocidad final (m/s): '); // Pedimos la velocidad final
                let tiempo = prompt('Introduce el tiempo (segundos): '); // Pedimos el tiempo

                class aMRUA {
                    constructor(v0, vf, tiempo) { // constructor de la clase para hacer objeto con las variables que hemos pedido
                        this.v0 = parseFloat(v0);
                        this.vf = parseFloat(vf);
                        this.tiempo = parseFloat(tiempo);
                    };
                    get calca() { // función para calcular la aceleración con las variables que hemos pedido
                        return parseFloat((this.vf - this.v0) / this.tiempo);
                    };
                };

                let MRUA3 = new aMRUA(v0, vf, tiempo); // creamos el objeto usando el constructor

                console.log();
                console.log(`La aceleración del cuerpo es: ${MRUA3.calca} m/s^2`);
                console.log();
                menuMRUA();
            };
        case '4':
            console.log();
            console.log("Has elegido 4. Calcular el tiempo de aceleración de un cuerpo en una trayectoria rectilínea");
            console.log();
            calctMRUA(); // llamamos a la función para calcular el tiempo de aceleración
            function calctMRUA() { // función para calcular el tiempo de aceleración de un cuerpo en una trayectoria rectilínea
                let aceleración = prompt('Introduce la aceleración (m/s^2): '); // Pedimos la aceleración
                let v0 = prompt('Introduce la velocidad inicial (m/s): '); // Pedimos la velocidad inicial
                let vf = prompt('Introduce la velocidad final (m/s): '); // Pedimos la velocidad final

                class tMRUA {
                    constructor(aceleración, v0, vf) { // constructor de la clase para hacer objeto con las variables que hemos pedido
                        this.aceleración = parseFloat(aceleración);
                        this.v0 = parseFloat(v0);
                        this.vf = parseFloat(vf);
                    };
                    get calct() { // función para calcular el tiempo de aceleración con las variables que hemos pedido
                        return parseFloat((this.vf - this.v0) / this.aceleración);
                    };
                };

                let MRUA4 = new tMRUA(aceleración, v0, vf); // creamos el objeto usando el constructor

                console.log();
                console.log(`El tiempo de aceleración del cuerpo es: ${MRUA4.calct} segundos`);
                console.log();

            };
        case '5':
            console.log();
            console.log("Has elegido 5. Otros");
            console.log();
            console.log("1. Ir al menú principal")
            console.log("2. Salir")
            console.log();
            let opcion = prompt('Elige una opción: ');
            switch (opcion) {
                case '1':
                    menu();
                    break;
                case '2':
                    exit();
                    break;
                default:
                    console.log();
                    console.log("Has elegido una opción incorrecta");
                    console.log();
                    menuMRUA();
            };
        default:
            console.log();
            console.log("Has elegido una opción incorrecta");
            console.log();
            menuMRUA();
    };
};

function exit () {
    console.log();
    console.log("Hasta pronto!")
    console.log();
    process.exit();
};

menu();

// Recordar compliar a exe con npm pkg 


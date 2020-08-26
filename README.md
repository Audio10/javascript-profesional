# Curso Profesional de JavaScript





## Cómo llega un script al navegador

El **DOM **es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento **DOMContentLoaded** lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

Tanto con **async** como **defer** podemos hacer llamados asíncronos pero tiene sus diferencias:

- **async**. Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
- **defer**. La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.

Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.



## Scope

El **Scope** o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

### Global Scope

Variables disponibles de forma global se usa la palabra *var*, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.

### Function Scope

Variables declaradas dentro de una función sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

### Block Scope

Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop *while* o *for*. Se usa *let* y *const* para declarar este tipo de variables.

### Module Scope

Cuando se denota un script de tipo module con el atributo `type="module` las variables son limitadas al archivo en el que están declaradas.



## Closures

Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los **closures** nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por *default*. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.



## this

*this* se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a *this* directamente y este depende de en que scope nos encontramos:

- Cuando llamamos a *this* en el **Global Scope o Function Scope**, se hace referencia al objeto *window*. A excepción de cuando estamos en **strict mode** que nos regresará *undefined*.
- Cuando llamamos a *this* desde **una función** que está contenida en un objeto, *this* se hace referencia a ese objeto.
- Cuando llamamos a *this* desde una **“clase”**, se hace referencia a la instancia generada por el constructor.



## Los métodos call, apply y bind

Estas funciones nos sirven para establecer el valor de *this*, es decir cambiar el contexto que se va usar cuando la función sea llamada.

Las funciones **call, apply y bind** son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones.

- **functionName.call()**. Ejecuta la función recibiendo como primer argumento el *this* y los siguientes son los argumentos que recibe la función que llamó a call.
- **functionName.apply()**. Ejecuta la función recibiendo como primer argumento el *this* y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
- **functionName.bind()**. Recibe como primer y único argumento el *this*. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.



## Prototype

En Javascript todo son objetos, no tenemos clases, no tenemos ese plano para crear objetos.

Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la **prototype chain**.

La keyword *new* crea un nuevo objeto que “hereda” todas las propiedades del prototype de otro objeto. No confundir prototype con **proto** que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.



```javascript
	  function Hero(name) {
        // this = Object.create(Hero.prototype);
        this.name = name
        // return this;
      }

      Hero.prototype.saludar = function () {
        console.log(`New: ${this.name}`)
      }

      const zelda = new Hero('Zelda')
      zelda.saludar()

      const link = new Hero('Link')
      link.saludar()
```



## Herencia Prototipal

Por default los objetos en JavaScript tienen cómo prototipo a **Object** que es el punto de partida de todos los objetos, es el prototipo padre. Object es la raíz de todo, por lo tanto tiene un prototipo padre *undefined*.

Cuando se llama a una función o variable que no se encuentra en el mismo objeto que la llamó, se busca en toda la prototype chain hasta encontrarla o regresar *undefined*.

La función **hasOwnProperty** sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.

**Object** es el punto de partida de todos los objetos en JavaScript y eso incluye las funciones. Las funciones tambien son objetos en JavaScript.

```javascript
	  function Hero(name) {
        this.name = name;
      }

      Hero.prototype.saludar = function() {
        console.log(`Hola, soy ${this.name}.`);
      };

      const zelda = new Hero('Zelda');

      // propiedades de la instancia
      console.log('Name:', zelda.name);
      // propiedades de la "clase"
      console.log('Saludar:', zelda.saludar);

      // propiedades heredadas ej: toString, Vienen del prototype Object
      console.log('toString:', zelda.toString);

      // hasOwnProperty (de dónde sale toString o esto?) sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain
      console.log(
        'zelda.hasOwnProperty("saludar"):',
        zelda.hasOwnProperty('saludar')
      );
```



## Event Loop

El **Event Loop** hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

- **Stack**. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- **Memory Heap**. De forma desorganizada se guarda información de las variables y del scope.
- **Schedule Tasks**. Aquí se agregan a la cola, las tareas programadas para su ejecución.
- **Task Queue**. Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
- **MicroTask Queue**. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.


Reportar un problema

Getters y setters



## Promesas

Para crear las promesas usamos la clase Promise. El constructor de Promise recibe un sólo argumento, un callback con dos parámetros, **resolve** y **reject**. resolve es la función a ejecutar cuando se resuelve y reject cuando se rechaza.

El async/await es sólo syntax sugar de una promesa, por debajo es exactamente lo mismo.

La clase Promise tiene algunos métodos estáticos bastante útiles:

- **Promise.all**. Da error si una de las promesas es rechazada.
- **Promise.race**. Regresa sólo la promesa que se resuelva primero.

**Todas las funciones async regresan una promesa**



## Getters y setters

Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords *set* y *get* para crear estas propiedades.

Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más dentro del objeto.



## Proxy

El proxy sirve para interceptar la lectura de propiedades de un objeto (los *get*, y *set*) entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica que nosotros definamos.



## Generators

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su *scope*.

Algunas de sus características:

- Los generadores regresan una función.
- Empiezan suspendidos y se tiene que llamar *next* para que ejecuten.
- Regresan un *value* y un *boolean done* que define si ya terminaron.
- *yield* es la instrucción que regresa un valor cada vez que llamamos a *next* y detiene la ejecución del generador.



## Fetch - Cómo cancelar peticiones

La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función **fetch** para esto.

Con **fetch** tenemos algo llamado **AbortController** que nos permite enviar una señal a una petición en plena ejecución para detenerla.
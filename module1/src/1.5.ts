{
  // object in TypeScript
  // object is a non-primitive data type that allows you to store collections of data and more complex entities.
  // In TypeScript, an object can be defined using an object literal or an interface. An object can contain properties and methods.
  // Properties are variables that belong to the object, and methods are functions that belong to the object.

  // object in TypeScript
  // object is a non-primitive data type that allows you to store collections of data and more complex entities.
  // In TypeScript, an object can be defined using an object literal or an interface. An object can contain properties and methods.
  // Properties are variables that belong to the object, and methods are functions that belong to the object.

  // Reference type ==> Object
  // Primitive type ==> String, Number, Boolean, Null, Undefined, Symbol, BigInt
  // Object is a non-primitive data type that allows you to store collections of data and more complex entities.
  // In TypeScript, an object can be defined using an object literal or an interface. An object can contain properties and methods.
  // Properties are variables that belong to the object, and methods are functions that belong to the object.

  const person: {
    name: string;
    age?: number | string;
    isEmployed: boolean;
    greet: () => void;
  } = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    greet: function () {
      console.log("Hello, my name is " + this.name);
    },
  };
}

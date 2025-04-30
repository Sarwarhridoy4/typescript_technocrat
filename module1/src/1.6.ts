{
  // Function in typescript

  function add(a: number, b: number): number {
    return a + b;
  }

  function subtract(a: number, b: number): number {
    return a - b;
  }
  function multiply(a: number, b: number): number {
    return a * b;
  }
  function divide(a: number, b: number): number {
    return a / b;
  }
  function calculate(a: number, b: number, operation: string): number | null {
    switch (operation) {
      case "add":
        return add(a, b);
      case "subtract":
        return subtract(a, b);
      case "multiply":
        return multiply(a, b);
      case "divide":
        return divide(a, b);
      default:
        console.log("Invalid operation");
        return null;
    }
  }
  // Example usage
  const num1: number = 10;
  const num2: number = 5;
  const operation: string = "add";
  const result: number | null = calculate(num1, num2, operation);
  console.log(
    `The result of ${operation}ing ${num1} and ${num2} is: ${result}`
  );

  // Object methods
  const person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    greet: function () {
      console.log("Hello, my name is " + this.name);
    },
  };
  // Example usage
  person.greet(); // Output: Hello, my name is John Doe
  // Object with methods
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
      console.log("Car started");
    },
    stop: function () {
      console.log("Car stopped");
    },
  };
  // Example usage
  car.start(); // Output: Car started
  car.stop(); // Output: Car stopped
}

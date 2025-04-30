{
  // typescript spread operator
  const person1 = {
    name: "John",
    age: 30,
  };
  const person2 = {
    ...person1,
    city: "New York",
    };
    console.log(person2); // Output: { name: 'John', age: 30, city: 'New York' }
    // Object destructuring
    const { name, age } = person2;
    console.log(name); // Output: John
    console.log(age); // Output: 30
    // Object destructuring with default values
    const { name: personName, age: personAge, city = "USA" } = person2;
    console.log(personName); // Output: John
    console.log(personAge); // Output: 30
    console.log(city); // Output: USA
}

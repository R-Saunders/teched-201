# Class 06

## Reading
### JavaScript Object Basics
Objects, if I had to describe an object in an entirely non-technical manner I would say it's a lot like a box of things. An object, in Javascript, is essentially a box that can contain pretty much anything and everything. You can put strings (text) in it, numbers in it and even functions in it. Pretty much whatever you like.   
Object literals allow you to assign properties, with values, to an object. This is very useful when you have many objects that share the same properties but different values.   
Objects are different from arrays (but somewhat the same as everything is an object) because objects allow you to have details assigned to each thing in them.   
Dot notation is faster to write and clearer to read.
Square bracket notation allows access to properties containing special characters and selection of properties using variables.
For example;   
var foo = myForm.foo[]; // incorrect syntax   
var foo = myForm["foo[]"]; // correct syntax   

```
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
```
Lets look at the above code block. In the code block we have a function within an object. Inside the function you can see it is using `${this.name}` and `$this.age*7`. The thing both of these have in common is the term `this` before the relevant dot notation. Using `this` allows more dynamic code as the function with refer to the object it is called upon without having to specify the name of the object. This makes the function even more usable and flexible.

## Introduction To The DOM

DOM stands for document object model. This is the 'template' that informs the browser of the structure of the webpage. It is comprised of a real and virtual DOM. The real DOM is the static page template. The Virtual DOM is a dynamic version of the template. When something is changed or updated on a page the static version will reload. To avoid the entire page reloading client side the real DOM reloads in the background and the virtual DOM will only reload the parts that have changed. Javascript is what changes these parts when people interact with the website. The way the real and virtual DOM work together helps to give a seamless experience to the user.

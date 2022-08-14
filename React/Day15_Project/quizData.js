var data=[
{"question": "What's the output?",
"code": "function sayHi() {\nconsole.log(name);\n console.log(age);\nvar name = 'Lydia';\nlet age = 21;\n}\nsayHi();",
"options":{
"A": "Lydia and undefined",
"B": "Lydia and ReferenceError",
"C": "ReferenceError and 2",
"D": "undefined and ReferenceError"},
"Answer": "D",
"summary":"Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.\n\n Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a ReferenceError."},


{"question":"What's the output?",
"code":"for (var i = 0; i <  3; i++) {\n  setTimeout(() => console.log(i), 1);\n  }\nfor (let i = 0; i <  3; i++) {\n  setTimeout(() => console.log(i), 1);\n  }",
"options":{
"A": "0 1 2 and 0 1 2",
"B": "0 1 2 and 3 3 3",
"C":" 3 3 3 and 0 1"},
"Answer": "C",
"summary":"Because of the event queue in JavaScript, the setTimeout callback function is called _after_ the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.\n \n In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop."},


{"question":" What's the output?",
"code":"const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n},\nperimeter: () => 2 * Math.PI * this.radius,\n};\n console.log(shape.diameter());\n console.log(shape.perimeter());",
"options":{
"A": "20 and 62.83185307179586",
"B": "20 and NaN",
"C": "20 and 6",
"D": "NaN and 63"},
"Answer": "B",
"summary":"Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.\nWith arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n There is no value radius on that object, which returns NaN."},


{"question":"What's the output?",
"code":"+true;\n!'Lydia';",
  "options":{
"A": "1 and false",
"B": "false and NaN", 
"C": "false and false"},
"Answer": "A",
"summary":"The unary plus tries to convert an operand to a number. true is 1, and false is 0.\n The string 'Lydia' is a truthy value. What we're actually asking, is 'is this truthy value falsy?'. This returns false.",
},


{"question":"Which one is true?",
"code":" const bird = {\n  size: 'small',\n};\nconst mouse = {\n  name: 'Mickey',\n  small: true,\n};",
"options":{
"A": "mouse.bird.size is not valid",
"B": "mouse{bird.size} is not valid",
"C": "mouse{bird{'size'}} is not vaid",
"D": "All of them are valid"},

"Answer": "A",
"summary":" In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket { and keeps going until it finds the closing bracket }. Only then, it will evaluate the statement.\n mouse{bird.size}: First it evaluates bird.size, which is 'small'. mouse{'small'} returns true\n However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property 'size' of undefined.\n "
},


{"question":" What's the output?",
"code":"let c = { greeting: 'Hey!' };\nlet d;\n d = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);",
"options":{
"A": "Hello",
"B": "Hey!",
"C": "undeined",
"D": "ReferenceError",
"E": "TypeError"},
"Answer": "A",
"summary":"\nIn JavaScript, all objects interact by _reference_ when setting them equal to each other.\nFirst, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.\n< img src='https://i.imgur.com/ko5k0fs.png' width='200'>When you change one object, you change all of them."},


{"question":"What's the output?",
"code":"let a = 3;\n let b = new Number(3);\n let c = 3;\n console.log(a == b);\n console.log(a === b);\n console.log(b === c); ",
"options":{
"A": "true false true",
"B": "false false true",
"C": "true false false",
"D": "false true true}"},
"Answer": "C",
"summary":"new Number() is a built-in function constructor. Although it looks like \n a number, it's not really a number: it has a bunch of extra features and is an object.\n When we use the == operator, it only checks whether it has the same _value_. They both have the value of 3, so it returns true.\n \n However, when we use the === operator, both value _and_ type should be the same. It's not: new Number() is not a number, it's an **object**. Both return false."
},


{"question":" What's the output?",
"code":"class Chameleon { \n  static colorChange(newColor) {\n     this.newColor = newColor;\n     return this.newColor;\n   }\n \n   constructor({ newColor = 'green' } = {}) {\n     this.newColor = newColor;\n   }\n }\n const freddie = new Chameleon({ newColor: 'purple' });\n console.log(freddie.colorChange('orange'));",
"options":{
"A": "orange",
"B": "purple",
"C": "green",
"D": "TypeError"},
"Answer": "D",
"summary":"The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown."},


{"question":"What's the output?",
"code":"let a = 3;\n let b = new Number(3);\n let c = 3;\n console.log(a == b);\n console.log(a === b);\n console.log(b === c); ",
"options":{
"A": "true false true",
"B": "false false true",
"C": "true false false",
"D": "false true true}"},
"Answer": "C",
"summary":"new Number() is a built-in function constructor. Although it looks like \n a number, it's not really a number: it has a bunch of extra features and is an object.\n When we use the == operator, it only checks whether it has the same _value_. They both have the value of 3, so it returns true.\n \n However, when we use the === operator, both value _and_ type should be the same. It's not: new Number() is not a number, it's an **object**. Both return false."
},


{"question":" What's the output?",
"code":"class Chameleon { \n  static colorChange(newColor) {\n     this.newColor = newColor;\n     return this.newColor;\n   }\n \n   constructor({ newColor = 'green' } = {}) {\n     this.newColor = newColor;\n   }\n }\n const freddie = new Chameleon({ newColor: 'purple' });\n console.log(freddie.colorChange('orange'));",
"options":{
"A": "orange",
"B": "purple",
"C": "green",
"D": "TypeError"},
"Answer": "D",
"summary":"The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown."},


{"question":" What's the output?",
"code":"let greeting;\n"+
"greetign = {};\n"+
"console.log(greetign);\n",
"options":{
"A": "{}",
"B": "Referencerror: greeting is not defined",
"C":" undefine"},
"Answer": "A",
"summary":"It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser).\n"+

"In order to avoid this, we can use 'use strict'. This makes sure that you have declared a variable before setting it equal to anything.\n"},


{"question":"What happens when we do this?",
"code":"function bark() {\n"+
  "console.log('Woof!');\n"+
"}\n"+
"bark.animal = 'dog';\n",
"options":{
"A": "Nothing, this is totally fine!",
"B": "SyntaxError. You cannot add properties to a function this way.",
"C": "'Woof' gets logged",
"D": "ReferenceError"},

"Answer": "A",
"summary":"This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\n"+
"A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.\n"},


{"question":"What's the output?",
"code":"function Person(firstName, lastName) {\n"+
  "this.firstName = firstName;\n"+
  "this.lastName = lastName;\n"+
"}\n"+

"const member = new Person('Lydia', 'Hallie');\n"+
"Person.getFullName = function() {\n"+
  "return ${this.firstName} ${this.lastName};\n"+
"};\n"+

"console.log(member.getFullName());",
"options":{
"A": "TypeError",
"B": "SyntaxError",
"C": "Lydia Halli",
"D": "undefined undefined"},

"Answer": "A",
"summary":"In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError. \n"+

"If you want a method to be available to all object instances, you have to add it to the prototype property:\n"+
"\n"+
"Person.prototype.getFullName = function() {\n"+
  "return ${this.firstName} ${this.lastName};\n"+
"};\n"
},



{"question":"What's the output?",
"code":"function Person(firstName, lastName) {\n"+
  "this.firstName = firstName;\n"+
  "this.lastName = lastName;\n"+
"}\n"+
"\n"+
"const lydia = new Person('Lydia', 'Hallie');\n"+
"const sarah = Person('Sarah', 'Smith');\n"+

"console.log(lydia);\n"+
"console.log(sarah);\n",
"options":{
"A": "Person {firstName: 'Lydia', lastName: 'Hallie'} and undefined",
"B": "Person {firstName: 'Lydia', lastName: 'Hallie'} and Person {firstName: 'Sarah', lastName: 'Smith'}",
"C": "Person {firstName: 'Lydia', lastName: 'Hallie'} and {}}",
"D": "Person {firstName: 'Lydia', lastName: 'Hallie'} and ReferenceError"
},

"Answer": "A",
"summary":"For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the **global object**!\n"+
"\n"+
"We said that this.firstName equals \"Sarah\" and this.lastName equals \"Smith\". What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function."},
 {"question":"What are the three phases of event propagation?",
"options":{
"A": "Target > Capturing > Bubbling",
"B": "Bubbling > Target > Capturing",
"C": "Target > Bubbling > Capturin",
"D": "Capturing > Target > Bubbling"},

"Answer": "D",
"summary":"During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.\n"+
"< img src='https://i.imgur.com/N18oRgd.png' width='200'>",
}

]


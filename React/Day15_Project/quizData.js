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
},

{"question":" All object have prototypes.",
"options":{
"A": "true",
"B": "false"},
 "Answer": "B",
 "summary":"All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you."},
  {"question":" What's the output?",
 "code":"function sum(a, b) {\n"+
  "return a + b;\n"+
  "}\n"+

"sum(1, '2');\n"+
"\n",
"options":{
"A": "NaN",
"B": "TypeError",
"C": "12",
"D": "3"},
"Answer": "C",
"summary":"JavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.\n"+
"In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like \"Hello\" + \"World\", so what's happening here is \"1\" + \"2\" which returns \"12\"."
},


{"question":" What's the output?",
"code":"let number = 0;\n"+
"console.log(number++);\n"+
"console.log(++number);\n"+
"console.log(number);",
"options":{
"A": "1 1 2",
"B": "1 2 2",
"C": "0 2 ",
"D":" 0 1 2"},

"Answer": "C",
"summary":"The **postfix** unary operator ++:\n"+

"1. Returns the value (this returns 0)\n"+
"2. Increments the value (number is now 1)\n"+
"\n"+
"The **prefix** unary operator ++:\n"+

"1. Increments the value (number is now 2)\n"+
"2. Returns the value (this returns 2)\n"+

"This returns 0 2 2\n"
},

{"question":" What's the output?",
 "code":"function getPersonInfo(one, two, three) {\n"+
  "console.log(one);\n"+
  "console.log(two);\n"+
  "console.log(three);\n"+
"}\n"+
"\n"+
"const person = 'Lydia';\n"+
"const age = 21;\n"+
"getPersonInfo${person} is ${age} years old;",
"options":{
"A": "\"Lydia\" 21 {'', ' is ', \" years old\"}",
"B": "{\"\", \" is \", \" years old\"} \"Lydia\" 21",
" C":" \"Lydia\" {\"\", \" is \", \" years old\"} "},
"Answer": "B",
"summary":"If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!"},



{"question":"What's the output?",
  "code":"function checkAge(data) {\n"+
  "if (data === { age: 18 }) {\n"+
    "console.log('You are an adult!');\n"+
  "} else if (data == { age: 18 }) {\n"+
    "console.log('You are still an adult.');\n"+
  "} else {\n"+
    "console.log(Hmm.. You don't have an age I guess);\n"+
  "}\n"+
"}\n"+

"checkAge({ age: 18 });\n",
"options":{
"A": "You are an adult!",
"B": "You are still an adult.",
"C":"Hmm.. You don't have an age I gue"},
"Answer": "C",
"summary":"When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory."+
"The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality."+
"This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false."
},

{"question":"What's the output?",
"code":"function getAge(...args) {\n"+
  "console.log(typeof args);\n"+
"}\n"+
"getAge(21);\n",
"options":{
"A": "number",
"B": "array",
"C": "object",
"D": "NaN"},
"Answer": "C",
"summary":"The rest parameter (...args) lets us \"collect\" all remaining arguments into an array. An array is an object, so typeof args returns object"
},


{"question":"What's the output?",
"code":"function getAge() {\n"+
  "'use strict';\n"+
  "age = 21;\n"+
  "console.log(age);\n"+
"}\n"+
"\n"+
"getAge();",
"options":{
"A": "21",
"B": "undefined",
"C": "Referencerror",
"D": "TypeError"},

"Answer": "C",
"summary":"With \"use strict\", you can make sure that you don't accidentally declare global variables."+
" We never declared the variable age, and since we use \"use strict\", it will throw a reference error. If we didn't use \"use strict\","+
" it would have worked, since the property age would have gotten added to the global object."
},



{"question":"What's the value of sum?",
"code":"const sum = eval('10*10+5');",

"options":{
"A": "105",
"B": "\"105\"",
"C": "TypeEror",
"D": "10*10+5"},
"Answer": "A",
"summary":"eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105."
},

  {"question":" How long is cool_secret accessible?",
    "codes":"sessionStorage.setItem('cool_secret', 123);",
"options":{
"A": "Forever, the data doesn't get lost.",
"B": "When the user closes the tab.",
"C": "When the user closes the entie browser, not only the tab.",
"D": "When the user shuts off their computer."},
"Answer": "B",
"summary":"The data stored in sessionStorage is removed after closing the _tab_.\n"+

"If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked."},


{"question":"What's the output?",
"code":"var num = 8;\n"+
"var num = 10;\n"+

"console.log(num);\n",
"options":{
"A": "8",
"B": "10",
"C": "SytaxError",
"D": "ReferenceError"},
"Answer": "B",
"summary":"With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value."+
"You cannot do this with let or const since they're block-scoped."},
{"question":"What's the output?",
"code":"const obj = { 1: 'a', 2: 'b', 3: 'c' };\n"+
"const set = new Set({1, 2, 3, 4, 5});\n"+
"obj.hasOwnProperty('1');\n"+
"obj.hasOwnProperty(1);\n"+
"set.has('1');\n"+
"set.has(1);\n",
"options":{
"A": "false true false true",
"B": "false true true true",
"C": "true true false true",
"D": "true true true true"},

"Answer": "C",
"summary":"All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true."+"It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true."},

{"question":" What's the output?",
"code":"const obj = { a: 'one', b: 'two', a: 'three' };\n"+
"console.log(obj);",
"options":{
"A": "{ a: \"one\", b: \"two\" }",
"B": "{ b: \"two\", a: \"three\"}",
"C": "{ a: \"three\", b: \"two\"}",
"D": "SyntaxError"},
"Answer": "C",
"summary":"If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value."},


{"question":"global execution context creates two things for you: the global object, and the \"this\" keyword.",
"options":{
"A": "true",
"B": "false",
"C": "it deeps"},
"Answer": "A",
"summary":"The base execution context is the global execution context: it's what's accessible everywhere in your code."},

{"question":"What's the output?",
"code":"for (let i = 1; i <  5; i++) {\n"+
"  if (i === 3) continue;\n"+
"  console.log(i);"+
"}",

"options":{
"A": "1 2",
"B": "1 2 3",
"C": "1 2 ",
"D": "1 3 4"},

"Answer": "C",
"summary":"The continue statement skips an iteration if a certain condition returns true."},



{"question":"What's the output?",
"code":"String.prototype.giveLydiaPizza = () => {\n"+
"  return 'Just give Lydia pizza already!';"+
"};\n"+"const name = 'Lydia';"+
"name.giveLydiaPizza();",
"options":{
"A": "Just give Lydia pizza already!",
"B": "TypeError: not a function",
"C": "SyntaxErro",
"D": "undefined"},

"Answer": "A",
"summary":"String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!"
},





{"question":" What is the event.target when clicking the button?",
"code":"< div onclick=\"console.log('first div')\">\n"+
  "< div onclick=\"console.log('second div')\">\n"+
    "< button onclick=\"console.log('button')\">\n"+
      "Click!\n"+
    "< /button>\n"+
  "< /div>\n"+
"< /div>\n",

"options":{
"A": "Outer div",
"B": "Inner div",
"C": "button",
"D": "An array of all nested elements."},
"Answer": "C",
"summary":"The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation"
},


{"question":" When you click the paragraph, what's the logged output?",
"code":"< div onclick=\"console.log('div')\">"+
  "< p onclick=\"console.log('p')\">\n"+
    "Click here!\n"+
  "< /p>\n"+
"< /div>\n",
"options":{
"A": "p div",
"B": "div p",
"C": "none",
"D": "div"},

"Answer": "A",
"summary":"If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest nested element outwards."},


{"question":" What's the output?",
"code":"const person = { name: 'Lydia' };\n"+
"function sayHi(age) {\n"+
  "return ${this.name} is ${age};\n"+
"}\n"+

"console.log(sayHi.call(person, 21));\n"+
"console.log(sayHi.bind(person, 21));\n",

"options":{
"A": "undefined is 21 Lydia is 21",
"B": "function function",
"C": "Lydia is 21 Lydiais 21",
"D": "Lydia is 21 function"},
"Answer": "D",
"summary":"With both, we can pass the object to which we want the this keyword to refer to. However, .call is also _executed immediately_!"+
".bind. returns a _copy_ of the function, but with a bound context! It is not executed immediately."}

]

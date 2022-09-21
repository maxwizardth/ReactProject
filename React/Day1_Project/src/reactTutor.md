# Create the areas list
areas = ["hallway", 11.25, "kitchen", 18.0, "living room", 20.0, "bedroom", 10.75, "bathroom", 9.50]

# Print out second element from areas
print(areas[1])

# Print out last element from areas
print(areas[-1])

# Print out the area of the living room
print(areas[_])





# Create the areas list
areas = ["hallway", 11.25, "kitchen", 18.0, "living room", 20.0, "bedroom", 10.75, "bathroom", 9.50]

# Sum of kitchen and bedroom area: eat_sleep_area


# Print the variable eat_sleep_area






1. Functions
In this video, I'm going to introduce you to functions. Once you learn about them you won't be able to stop using them. I sure can't.

2. Functions
Functions aren't entirely new for you actually: you've already used them. type, for example, is a function that returns the type of a value. But what is a function? Simply put, a function is a piece of reusable code, aimed at solving a particular task. You can call functions instead of having to write code yourself. Maybe an example can clarify things here.

3. Example
Suppose you have the list containing only the heights of your family, fam: Say that you want to get the maximum value in this list. Instead of writing your own piece of Python code that goes through the list and finds the highest value, you can also use Python's max function. This is one of Python's built-in functions, just like type. We simply pass fam to max inside parentheses. The output makes sense: 1-point-89, the highest number in the list. max worked kind of like a black box here:

4. Example
you passed it a list, then the implementation of max, that you don't know, did its magic,

5. Example
and produced an output. How max actually did this, is not important to you, it just does what it's supposed to, and you didn't have to write your own code, which made your life easier.

6. Example
Of course, it's possible to also assign the result of a function call to a new variable, like here. Now tallest is just like any other variable; you can use it to continue your fancy calculations.

7. round()
Another one of these built-in functions is round. It takes two inputs: first, a number you want to round, and second, the precision with which to round, which is how many digits after the decimal point you want to keep. Say you want to round 1-point-68 to one decimal place. The first input is 1-point-68, the second input is 1. You separate the inputs with a comma. But there's more. It's perfectly possible to call the round function with only one input, like this. This time, Python figured out that you didn't specify the second input, and automatically chooses to round the number to the closest integer. To understand why both approaches work, let's open up the documentation. You can do this with yet another function, help, like this. It appears that round takes two inputs.

8. round()
In Python, these inputs, also called arguments, have names: number and ndigits. When you call the function round,

9. round()
with these two inputs, Python matches the inputs to the arguments:

10. round()
number is set to 1-point-68 and

11. round()
ndigits is set to 1. Next,

12. round()
The round function does its calculations with number and ndigits as if they are Python variables in a script. We don't know exactly what code Python executes. What is important, though, is that the function produces an output,

13. round()
namely the number 1-point-68 rounded to 1 decimal place.

14. round()
If you call the function round with only one input,

15. round()
Python again tries to

16. round()
match the inputs to

17. round()
the arguments. There's no input to match to the ndigits argument though. Luckily,

18. round()
the internal machinery of the round function knows how to handle this. When ndigits is not specified, the function simply rounds to the closest integer and

19. round()
returns that integer. That's why we got the number 2.

20. round()
In other words, ndigits is an optional argument. This tells us that you can call round in this form, as well as in this one.

21. Find functions
By now, you have an idea about how to use max and round, but how could you know that a function such as round exists in Python in the first place? Well, this is something you will learn with time. Whenever you are doing a rather standard task in Python, you can be pretty sure that there's already a function that can do this for you. In that case, you should definitely use it! Just do a quick internet search and you'll find the function you need with a nice usage example. And there is of course DataCamp, where you'll also learn about powerful functions and how to use them.

22. Let's practice!
Get straight to it in the interactive exercises, and I'll see you back here soon!

### How to create suscribe card using React.
Hey guys! I am oladejo Abdullahi(Maxwizard). today I am going to teach use how to create your first react project. this is so good for beginer to practice as it doesn't require much knowledge of React  infact it is for total novice. 

To get started you should download Node.js then download react for that is what we will be using to run our codes on . Also download your react you can clone it here if you like too. I believe you would have that before and if you don't you can click here to see how to set up everything.

Now let's go in to the project. in 


if you think downloading the react is giving you problem then you can just imclude react link in your file and write the codes only that you will have to connect with internet to run the codes. with out wasting our time let's start with today's simple project but before that let me explain the important tools we will be making use of known as JXS.

###what is JXS?
JSX stands for JavaScript XML. as you can guess from the full meaning it is the mixture of javascript and html, so it allows you to write HTML elements with JavaScript code. An HTML element has an opening and closing tags, content, and attribute in the opening tag. 

However, it should be noted that there are somes HTML elements that doesn't usually have content and s closing tag - they are self closing elements.example of such elements are <img>,<hr>,<br> etc. 
I beleive you already have knowledge of javascript so, you must have learnt that createElement() is a function used to create HTML element in javascript. However in React it is not like that all we just do is to use JSX element. so, JSX is easier and faster to write HTML element in React. React comes with a library call Babel which convert the JSX codes to Javascript on browser. 
let's take a look at the JSX code below.
#### Example 1
```jxs
// JSX syntax
// we don't need to use quotes with JSX
const jsxElement = <h1>This is JSX element</h1>
const welcome = <h2>Welcome to React Tutorial</h2>
```
```Js
JavaScript codes
const jsxElement=document.createElement('<h1>')
jsxElement.createTextNode('This is JSX element')
const welcome=document.createElement('<h2>')
welcome.createTextNode('Welcome to React Tutorial')
```
look at the two set of codes above one is JSX which we are going to be using in React while the other is normal javaScript you already know. Both of them are going to do the same work however, one is very easier and faster. 

Let's take a look at another JXS example and its equivalent codes in javaScript. 

#### Example 2
Imaging you need to add class to all the element above how are you goin to do it? take a look at the below codes.

**JXS>>**
```jxs
// JSX syntax
// we don't need to use quotes with JSX
const jsxElement = <h1 className='heading'>This is JSX element</h1>
const welcome = <h2 className='heading'>Welcome to React Tutorial</h2>
```

**JavaScript>>**
```Js
JavaScript codes
const jsxElement=document.createElement('<h1>')
jsxElement.createTextNode('This is JSX element')
jsxElement.addClass('heading')
const welcome=document.createElement('<h2>')
welcome.createTextNode('Welcome to React Tutorial')
welcome.addClass('heading')
```

Now no doubt you must have seen why many developer would choose react. the two codes above will do the same thing. it should be noted that whenever you need to include attribute in any HTML element in jxs it has to be written in camelCase. for example class will become className,font-size will turn fontSize, padding-left turn to paddingLeft etc.

that was amazing right? well that is not all, the most powerful feature of JXS is that it allow you to write as manhy html element as you want only that all have to be wrapped in parent element.take a look at the following codes

```jxs
const header = (
  <header>
    <h1>Maxwizard React tutorial</h1>
    <h2>Getting Started React </h2>
    <h3>JXS codes </h3>
    <p>Oladejo Abdullahi</p>
  </header>
)
```
just think the lines of codes it will take you ig you were to create all the element element above in javascript. No doubt you would use not less than ten lines of codes. Notice the code above that all the element are children of *header* tag. that is what we mean by wrapping. when you have two or more element it is a must to wrap it another parent element like **div,p,header,,footer,section etc.**

Now that you have a little knowledge of JSX let's go on and write your codes for React. 
If you are going to be running your codes offline it mean you already download the React and Node that will be used to run the code otherwise just write your codes in html file and connect to wifi.



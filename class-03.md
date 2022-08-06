# Class 03 

## Learn HTML.
### Ordered & Unordered Lists.
Unordered lists are used to create lists with no particular order, they are good for basic bullet points.  
You can change the buttle point style of unordered lists by using the CSS property of `list-style-type` or `list-style-image`.  
Ordered lists should be used when the list items are meant to have a specific order. This will be in situations like reciting a recipe or set of instructions that must be completed in order.  
You can change the buttle point style of ordered lists by using the CSS property of `list-style-type` or `list-style-image`.  

## Learn CSS.
### The Box Model.

![The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)
Margin will increaese the spacing around the element starting from the outside of the border. Padding will create spacing around the content from the inside of the border. The four parts of the box model are contnt, padding, border and margin.]

## Learn JS.
### Array. Operators & Expressions. Conditionals. Loops.
You can store any type of data in an array. Strings, numbers, booleans.
```
const people = [
  ['pete', 32, 'librarian', null], 
  ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], 
  ['bill', null, 'artist', null]
  ];
```
The above example is an array containing three further arrays. You can access items in the array by calling the array such as `people` or for the first array in the array you use `people[0]` and for the first item in the first array within the array you use `people[0][0]`.  
There are also a number of shorthand operators you can use, below are some examples.   
|Name|Shorthand|Meaning|
|----|---------|-------|
|Assignment|x = f()|x = f()|
|Addition assignment|	x += f()|x = x + f()|
|Subtraction assignment|x -= f()|x = x - f()|
|Multiplication assignment|x *= f()|x = x * f()|
|Division assignment|x /= f()|x = x / f()|

Let's evaluate the below expression.
```
 let a = 10;
 let b = 'dog';
 let c = false;

 // evaluate this
 (a + c) + b;
 ```
 This will return `'10dog'` as we are concantenating the first two, you can not concantenate a boolean.    
 A conditional statement may be used for things such as checking input data is valid.   
 A loop statement would be used when you want to run a piece of code repeatedly until a certain condition is met.

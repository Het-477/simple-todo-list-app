# A To Do List App with some functionality

## Description:

Hi, im a beginner to web dev and this my first to-do list project to get started and learn some fundamentals of html, css, and js.
here is what ive learned new about html, css, and js soo far:

Edit: Hi again, i was making this project by following [this](https://www.youtube.com/watch?v=3OqWCGVaOkA&t=4053s "The slowest and the most beginner un-friendly todo list tutorial") tutorial and it seemed good at the starting but now at the js scripting section it feels so confusing to even understand the js code. idk if im to dumb of its just javascript which is bothering me or the creator of the tutorial isn't straight forward and jaggy that looking at the tutorial code and my code makes me so confused and makes me anxious that im not good enough. 

#### HTML

- `placeholder="text"` : to put a placeholder text inside an input field to tell the user what to enter. eg: email, phone.no, todo's etc.

- `<script src="./script.js" defer><script>` : The `defer` attribute runs the entire html page first before running the script or in this case the js file

#### CSS

- `:root {}` : The `root` selection in css allows us to select everything like literally everything on the page like body, head, title, etc the whole html on the page. `:root` has higher specificity and is preferred for declaring CSS custom properties (variables).

- creating custom `--variables` : in css we can create variables using `--` followed by the variable name (eg: `--var_name`). these variables cna be used in the css as well as the javascript file with the help of selectors to change colors of the page programmatically (eg: light and dark mode) which i will learn late on my journey.

- the `linear-gradient()` function : This is a built in css function which is used to make gradients using two or more colors. Here's how it works

  - syntax:

  ```css
  --variable: linear-gradient(
    deg,
    color-1 start_percentage%,
    color-2 end_percentage%
  );
  ```

- the input[type="input-type"] selector : An attribute selector is a CSS feature used to select elements based on their attributes and attribute values. In this case, it targets <input> elements that have a specific type attribute. mainly used for styling input fields such as radio buttons, check-boxes, text, etc.
  eg:

```html
<form>
  <input type="checkbox" id="option1" />
  <input type="checkbox" id="option2" />
  <input type="radio" id="option3" />
  <input type="text" id="input-field" />
</form>
```

```css
input[type="checkbox"] {
  background-color: lightblue;
  width: 20px;
  height: 20px;
}
```

## Basic functionalities:

- add and remove items from the
  list 
  
## Some advanced functionalities:

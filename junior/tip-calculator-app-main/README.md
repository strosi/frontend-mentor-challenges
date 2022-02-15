# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

<img src="./solution-screenshots/tip-calculator-app-mobile.jpg">
<img src="./solution-screenshots/tip-calculator-app-desktop.jpg">

### Links

- Solution URL: [View code here](https://github.com/strosi/frontend-mentor-challenges/edit/main/junior/tip-calculator-app-main/)
- Live Site URL: [View solution in action](https://strosi.github.io/frontend-mentor-challenges/junior/tip-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- Sass preprocessor
- Flexbox
- CSS Grid
- Vanilla JS
- Mobile-first workflow

### What I learned

In this project the focus was on the functionality. Here are some ideas I found useful while working on the solution:
- I decided to change the `button` element with `input[type=radio]` for the tip buttons so they can be accessible from the keyboard;
- I used `form.onsubmit = () => {return false;}` to prevent field value disappear on press Enter;
- I wanted the reset button to be active only when there is field changed or tip button selected so I needed a function to check that and here is the end result:
```js
const checkIfAllValuesEmpty = (values) => {
    let allEmpty = true;

    for (v of values) {
        if (v === 0 || v) {
            allEmpty = false;
            break;
        }
    }
    return allEmpty;
}
```

### Useful resources

- [Dynamic text color with Sass](https://www.kevinpowell.co/article/dynamic-text-color-with-sass/) - This helped me with the button theme function.
- [How TO - Hide Arrows From Input Number](https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp) - Useful to hide the spinner/arrows from the number field.
- [JS - Detect when a user clears a field](https://stackoverflow.com/questions/31471575/js-detect-when-a-user-clears-a-field) - From here I came to the `NaN || ''` which returns empty string. Though I didn't use it in the final solution it was interesting to know that...
- [Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) - Rounds the results of the calculation...

## Acknowledgments

Always thankful to all smart people who share their work on the net (articles, solutions, videos, answers...)!
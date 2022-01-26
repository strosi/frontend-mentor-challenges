# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

<img src="./solution-screenshots/signup-page-mobile-view-comparison.jpg">
<img src="./solution-screenshots/signup-page-desktop-view-comparison.jpg">
<img src="./solution-screenshots/signup-page-desktop-active-view-comparison.jpg">

### Links

- Solution URL: [View Intro component with signup form - code](https://github.com/strosi/frontend-mentor-challenges/tree/main/intro-component-with-signup-form-master)
- Live Site URL: [View Intro component with signup form - in action](https://strosi.github.io/frontend-mentor-challenges/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- Sass preprocessor
- Flexbox
- JavaScript
- Mobile-first workflow
- BEM methodology for organising styles

### What I learned

The challenge was requiring more research about JS validation of form with multiple fields. I learned about some of the built-in modules in Sass and cleared some questions about JS classList methods...

### Useful resources

- https://falkus.co/2017/05/using-lighten-and-darken-in-sass/ - `lighten()` and `darken()` functions in Sass... (Read more about built-in modules in Sass)
- https://stackoverflow.com/questions/4574912/css-content-generation-before-or-after-input-elements - `input` element have no content and can not be used with `::after` and `::before` pseudo elements...
- https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/ - validate form with multiple input fields. Took the base of my form validation from here and added clear errors method...
- https://stackoverflow.com/questions/36999220/checking-classlist-with-contains-if-a-class-exists-before-add-or-remove - relied on this reply for deciding wether there is need to use `classList.contain` before `classList.remove`... But have to check it. Are methos `add()` and `remove()` really check automatically if class name is in the list?


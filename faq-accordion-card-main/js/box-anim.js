/**
 * Short animation that moves aside the box image 
 * and is triggered when the mouse hover a question label.
 * 
 * Information for matchMedia from 
 * https://css-tricks.com/working-with-javascript-media-queries/
 */

let box = document.querySelector(".box-img");
let questHeader = document.querySelectorAll(".faq__question");

let mediaQueryMedium = window.matchMedia('(min-width: 960px)');

// Use media query check to prevent adding listeners in mobile view
// because then the box image is removed from the view.



handleWidthChange = (e) => {
    if (e.matches) {
        console.log('Listeners are added!');
    
        questHeader.forEach(header => {
            header.addEventListener("mouseover", () => {
                box.classList.add("move");
            });
            header.addEventListener("mouseout", () => {
                box.classList.remove("move");
        
            })
        });
    }
}

mediaQueryMedium.onchange = handleWidthChange;

// Initial check
handleWidthChange(mediaQueryMedium);


// addListener is depricated

// function handleWidthChange(e) {
//     if (e.matches) {
//         console.log('Listener is added!');
    
//         questHeader.forEach(header => {
//             header.addEventListener("mouseover", () => {
//                 box.classList.add("move");
//             });
//             header.addEventListener("mouseout", () => {
//                 box.classList.remove("move");
        
//             })
//         });
//     }
// }

// mediaQueryMedium.addListener(handleWidthChange);

// // Initial check
// handleWidthChange(mediaQueryMedium);
// quantity js 

let counter = 1;

const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countBtn = document.getElementById("count");

incrementBtn.addEventListener("click", () => {
    counter++;
    countBtn.innerHTML = counter;
});
decrementBtn.addEventListener("click", () => {
    if (counter > 1) {
        counter--;
    }
    countBtn.innerHTML = counter;
});


// quantity js 

let counte = 1;

const decrement = document.getElementById("dec");
const increment = document.getElementById("inc");
const count = document.getElementById("countes");

increment.addEventListener("click", () => {
    counte++;
    count.innerHTML = counte;
    
});
decrement.addEventListener("click", () => {
    if (counte > 1) {
        counte--;
    }
    count.innerHTML = counte;
});





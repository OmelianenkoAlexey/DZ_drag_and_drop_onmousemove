// ! drag and drop

// const block = document.querySelector(".block");
// let x, y;

// block.onmousedown = e => {

//     console.log(e);
//     x = e.screenX;
//     y = e.screenY;
// };

// document.onmouseup = e => {
//     _x = e.screenX;
//     _y = e.screenY;

//     diff_x = _x - x;
//     diff_y = _y - y;

//     block.style.left = !block.style.left ? `${diff_x}px` : `${parseInt(block.style.left) + diff_x}px`;
//     block.style.top = !block.style.top ? `${diff_y}px` : `${parseInt(block.style.top) + diff_y}px`;
//     console.log(block.style.left, block.style.top);
// };
// !!!!!!!!!!!!!!!!!!!!!!!!

const block = document.querySelector(".block");

let x, y;
let isBlockActive = false;

block.onmousedown = e => {
    x = e.screenX;
    y = e.screenY;

    isBlockActive = true;
};

block.onmousemove = e => {
    if (isBlockActive) {
        let _x = e.screenX;
        let _y = e.screenY;

        diff_x = _x - x;
        diff_y = _y - y;

        block.style.left = !block.style.left ? `${diff_x}px` : `${parseInt(block.style.left) + diff_x}px`;
        block.style.top = !block.style.top ? `${diff_y}px` : `${parseInt(block.style.top) + diff_y}px`;

        x = _x;
        y = _y;
    }
}

block.onmouseup = () => isBlockActive = false;
// !!!!!!!!!!!!!!!!!!!!

// ! keypress, keydown, keyup

// const block = document.querySelector(".block");

// document.addEventListener("keypress", e => console.log("keypress", e.keyCode));
// document.addEventListener("keydown", e => console.log("keydown", e.keyCode));
// document.addEventListener("keyup", e => console.log("keyup", e.keyCode));

// const STEP = 10;

// ! способ 1
// document.addEventListener("keydown", e => {
//     if (e.keyCode === 37) block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) - STEP}px`;
//     if (e.keyCode === 38) block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) - STEP}px`;
//     if (e.keyCode === 39) block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`;
//     if (e.keyCode === 40) block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) + STEP}px`;
// })

// ! способ 2

// const operations = {
//     37: block => block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) - STEP}px`,
//     38: block => block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) - STEP}px`,
//     39: block => block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`,
//     40: block => block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) + STEP}px`,
// }

// document.addEventListener("keydown", e => operations[e.keyCode](block));

// !!!!!!!!!!!!!!!!!!!!

// ! form, e.preventDefault()

const form = document.getElementById("form");
const button = document.getElementById("submit-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");

const array = [false, false, false];

function validation() {
    console.log("validation");
    return array.every((item) => item);
}

firstName.addEventListener("input", () => {
    if (firstName.value && firstName.value.length > 3) {
        array[0] = true
    } else {
        array[0] = false
        button.setAttribute("disabled", "disabled");
    }

    if (validation()) button.removeAttribute("disabled");
})

lastName.addEventListener("input", () => {
    if (lastName.value && lastName.value.length > 3) {
        array[1] = true
    } else {
        array[1] = false
        button.setAttribute("disabled", "disabled");
    }

    if (validation()) button.removeAttribute("disabled");
})

age.addEventListener("input", () => {
    if (age.value && age.value > 18) {
        array[2] = true
    } else {
        array[2] = false
        button.setAttribute("disabled", "disabled");
    }

    if (validation()) button.removeAttribute("disabled");
})

form.addEventListener("click", e => {
    e.preventDefault();
})



button.addEventListener("click", () => {
    const data = {
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value,
    }

    console.log(`Data send success!`, data);
});

import './tailwind.css';
import './style.scss'

// function to change iphone colour
function changePhone(colour) {
    console.log("worked")
    let box = document.getElementById("selector");
    for (let i = 0; i < box.children.length; i++) {
        if (box.children[i].classList.contains(colour)) {
            box.children[i].classList.remove("hidden")
            box.children[i].classList.add("block")
            for (let j = 0; j < box.children.length; j++) {
                if (box.children[j] !== box.children[i]) {
                    box.children[j].classList.remove("block")
                    box.children[j].classList.add("hidden")
                }
            }
        }
    }
}

// code to effect listening and changing of colour
let picker = document.querySelector(".picker");
for (let i = 0; i < picker.children.length; i++) {
    picker.children[i].addEventListener("click", () => {
        changePhone(picker.children[i].getAttribute("id"))
    })
}

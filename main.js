const transformElement = document.querySelector(".flex-v");

const timer = setInterval(() => {
    if (transformElement.classList.contains("transform")) {
        transformElement.classList.remove("transform");
    } else {
        transformElement.classList.add("transform");
    }
}, 2300);

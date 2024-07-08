let dropdownButton = document.getElementById("drop-text");
let list = document.querySelector(".dropdown-list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

// show dropdown list on click on dropdown button
dropdownButton.onclick = function () {
    // rotate arrow icon
    if (list.classList.contains("show")) {
        icon.style.transform = "rotate(0deg)";
    } else {
        icon.style.transform = "rotate(-180deg)";
    }
    list.classList.toggle("show");
};

// hide dropdown list when clicked outside dropdown button
window.onclick = function (e) {
    if (
        e.target.id !== "drop-text" &&
        e.target.id !== "span" &&
        e.target.id !== "icon" &&
        !e.target.classList.contains("dropdown-list-item")
    ) {
        list.classList.remove("show");
        icon.style.transform = "rotate(0deg)";
    }
};

listItems.forEach((item) => {
    item.onclick = function (e) {
        // change dropdown button text on click on selected list item
        span.innerText = e.target.innerText;

        // change input placeholder text on selected list item
        if (e.target.innerText === "Everything") {
            input.placeholder = "Search Anything...";
        } else {
            input.placeholder = "Search in " + e.target.innerText + "...";
        }
    };
});

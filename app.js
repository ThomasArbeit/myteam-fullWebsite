let toggles = document.querySelectorAll(".team__toggle");

// console.log(toggles);

toggles.forEach(function(toggle){
    toggle.addEventListener('click', function(e){
        let previousNode = toggle.previousElementSibling;
        let carousel = previousNode.firstElementChild;

        if (carousel.classList == "team__carousel"){
            carousel.classList = "team__carousel--clicked";

            toggle.style.transform = "rotate(135deg)";
            toggle.style.backgroundColor = "#79C8C7";
        } else {
            carousel.classList = "team__carousel";

            toggle.style.transform = "rotate(0deg)";
            toggle.style.backgroundColor = "#F67E7E";
        }
    })
})

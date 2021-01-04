let toggles = document.querySelectorAll(".team__toggle");

// console.log(toggles);

toggles.forEach(function(toggle){
    toggle.addEventListener('click', function(e){
        let previousNode = toggle.previousElementSibling;
        let carousel = previousNode.firstElementChild;

        if (carousel.classList == "team__carousel"){
            carousel.classList = "team__carousel--clicked";

            toggle.classList = "team__toggle team__toggle--clicked"
        } else {
            carousel.classList = "team__carousel";

            toggle.classList = "team__toggle"
        }
    })
})

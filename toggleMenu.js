const toggleOn = document.getElementById("toggleOn");
const toggleOff = document.getElementById("toggleOff");

const mobileNav = document.getElementById("mobileNav");

console.log(toggleOn, toggleOff, mobileNav);

toggleOn.addEventListener("click", function(e){
    e.preventDefault();

    mobileNav.classList = "mobileNav mobileNav--active";
})

toggleOff.addEventListener("click", function(e){
    e.preventDefault();

    mobileNav.classList = "mobileNav";
})
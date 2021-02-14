//used for the scrollup button

// We select the element we want to target
var target = document.querySelector('.scrollTrigger');

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.remove("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.add("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);

function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

var splide = new Splide( '#review', {
    rewind : true,
    pagination: false,
    autoplay: true
  } );
  
  splide.mount();

var splide = new Splide( '#blog', {
    rewind : true,
    pagination: false,
    autoplay: true,
} );
splide.mount();



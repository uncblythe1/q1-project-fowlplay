document.addEventListener('DOMContentLoaded', (ev) => {
  
let chooseSong = document.getElementById('chooseSong');
chooseSong.addEventListener('click', (ev) => {
  displaySongs();
})  
  function displaySongs() {
    let animateCircles = anime({
      targets: '.song',
      opacity: .3,
      translateX: '13.5rem',
      translateY: '15rem',
      scale: [1, 3],
      rotate: '.25turn',
      delay: function(el, index) {
          return index * 500 },
      direction: 'alternate',
      loop: false,
      duration: 1000
    });

    let transformBox = anime({
      targets: '.song',
      borderRadius: [ '0','100'],
    })
  }



})


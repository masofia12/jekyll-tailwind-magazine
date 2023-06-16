console.log(`First one to find this get bonus points. extra if you can tell the mentor's with out anyone else seeing it :D`)

const sliderContainer = document.querySelector('#before-and-after-slider')

function updateImageSlide(e){
  if(sliderContainer.classList.contains('clicked')){
    console.log(e.offsetX)
    gsap.set("#before-image", {
      width: `${e.offsetX}px`
    });
  }
}

sliderContainer.addEventListener('mousedown',(e) => {
  sliderContainer.classList.add('clicked')
  updateImageSlide(e)
})
sliderContainer.addEventListener('mouseup',() => {
  sliderContainer.classList.remove('clicked')
})
sliderContainer.addEventListener('mouseout',() => {
  sliderContainer.classList.remove('clicked')
})

sliderContainer.addEventListener('mousemove',(e) => {
  updateImageSlide(e)
})

//   

// Open your HTML file in a web browser, and you should now have a slider that adjusts its width based on the mouse position.

// By following these beginner-friendly instructions, you should be able to successfully implement the provided GSAP functionality for the slider on your web page.


// change image functionality
const altImageGrid = document.querySelector('#alt-image-grid')
const altImages = altImageGrid.querySelectorAll('img')

altImages.forEach(img => {
  img.addEventListener('click', () => {
    console.log(`url(${img.src})`)
    gsap.set('#before-image',{
      backgroundImage: `url('${img.src}')`
    })
    gsap.set('#after-image',{
      backgroundImage: `url('${img.dataset.preImage}')`
    })
  })
});
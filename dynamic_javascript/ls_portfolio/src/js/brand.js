// import brandData from './brand-data.json'
let obj = loadJsonFile.sync('./brand-data.json')
const brandLogo = document.querySelector('.media-logo img')
console.log(obj)

window.addEventListener('DOMContentLoaded', () => {
  // brandLogo.textContent = 'Loading...';
  brandLogo.setAttribute('src', 'logo')

  // reloader()
})

function reloader() {
  fetch(url)
    .then((reps) => reps.json())
    .then((data) => {
      // console.log(data);
      outpt.innerHTML = ''
      data.forEach((ele, ind) => {
        console.log(ele, ind)
        makeLst(ele)
      })
    })
}

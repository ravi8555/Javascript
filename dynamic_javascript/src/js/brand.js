import brandData from './brand-data.json'
// const thumb = brandData["brandLogo"]
// console.log(thumb);

window.addEventListener('DOMContentLoaded', () => {
  // console.log('The DOM Is Loaded');
  const str = JSON.stringify(brandData)
  // console.log(str.map())
  brandData.forEach((el, idx) => {
    // headerData(el)
    filmSec(el)
  })
})

function headerData(elem) {
  const brdLogoImg = document.querySelector('.media-logo img')
  // console.log(brdLogoImg)
  brdLogoImg.setAttribute('src', elem.brandLogo)
  const brdTitle = document.querySelector('.item-title')
  brdTitle.textContent = elem.brandName
  let campCountEl = document.querySelector('.item-logo span b')
  // let campCount = document.createElement('b')
  // campCountEl.appendChild(campCount).innerHTML = elem.campaign
  campCountEl.innerHTML = elem.campaign

  // $('.item-logo span').appendChild(campCount)
}

function filmSec(e) {
  const uniqueCat = [...new Set(brandData.map((item) => item.Film.filmTumb))]
  console.log(uniqueCat)
  let filmContain = document.getElementsByClassName('films-contain')
  filmContain.innerHTML = 'txxxx'
  // console.log(e.Film.filmTumb)
  //   filmContain.innerHTML = `
  //   <div class="filmes-card">
  //   <div class="image-content">
  //     <img src="./img/banner1.jpg" class="tumb" alt="">
  //     <div class="top-row">
  //       <div class="dimond">
  //         <img src="./img/king.png" alt="">
  //       </div>
  //       <div class="play-btn">
  //         <img src="./img/play-btn-small.png" alt="">
  //       </div>
  //     </div>
  //   </div>
  //   <div class="title">#Take Off</div>
  // </div>
  //   `
}

let bradInfo = document.getElementById('brandInfo')
// console.log(brdLgo);

const vals = Object.values(brandData)
vals.forEach((value) => {
  // console.log("Value",value.brandLogo);
})

// console.log(bradInfo);

// let data = JSON.parse(brandData);
// console.log(brandData);
// const jsonData = JSON.stringify(brandData);
// console.log(jsonData);

// const request = require('request');
// request({
//   url:'https://mockup.org.uk/Ravindra/brand-data.json',
//   json:true
// },(error, respo, body) =>{
// console.log(body);
// }
// )

// for (const pro in contentData.contentData) {
//   // console.log(pro);
// }
// const keys = Object.keys(contentData.contentData)
// console.log(keys);

// keys.forEach((kk) => {
//   console.log(kk);
// })

// const vals = Object.values(contentData.contentData)
// vals.forEach((value) => {
//   console.log("Value",value.imageThumb);
// })

// const entries = Object.entries(contentData)
// entries.forEach((ent) => {
//   console.log(ent);
//   // console.log(ent[0]);
//   // console.log(ent[1]);
// })
// ra -- end

// window.addEventListener('DOMContentLoaded', () => {
//   // brandLogo.textContent = 'Loading...';
//   brandLogo.setAttribute('src', 'logo')

//   // reloader()
// })

// function reloader() {
//   fetch(url)
//     .then((reps) => reps.json())
//     .then((data) => {
//       // console.log(data);
//       outpt.innerHTML = ''
//       data.forEach((ele, ind) => {
//         console.log(ele, ind)
//         makeLst(ele)
//       })
//     })
// }

import brandData from './brand-data.json'
console.log(brandData.brandS)
const brandLogo = document.querySelector('.media-logo img')
// console.log(brandLogo);
// const parsJson = JSON.parse(brandData.brandS)
// console.log(parsJson)
// brandLogo.setAttribute('src', `${}`)

// ra -- start
// console.log(brandData)
// const thumb = brandData["imageThumb"]
// console.log(thumb);
for (const pro in brandData) {
  // console.log(pro)
}
const keys = Object.keys(brandData)
// console.log(keys)

keys.forEach((kk) => {
  // console.log(kk)
})

const vals = Object.values(brandData)
vals.forEach((value) => {
  // console.log(value)
})

const entries = Object.entries(brandData)
entries.forEach((ent) => {
  // console.log(ent)
  // console.log(ent[0]);
  // console.log(ent[1]);
})
// ra -- end

const album = [
    {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },];

const dataDiv = document.getElementById("data");
const conatiner = document.querySelector('.container')

function loadAlbum(item){
   item.forEach((ele) => {
        const fragment = document.createElement("li");

        const title = document.createElement("p");
        title.textContent = ele.title
        fragment.appendChild(title);

        title.addEventListener("mouseover", (e)=>{
            e.target.style.backgroundColor = "#f00";
            console.log(e.target.style);
            // title.style.backgroundColor = "red";
        })
        title.addEventListener("mouseout", (eve) =>{
            eve.target.style.backgroundColor = "green"
        })

        const photo = document.createElement("img");
        photo.src = ele.thumbnailUrl;
        fragment.appendChild(photo);

        photo.addEventListener("dblclick",(e)=>{
            photo.style.display = photo.style.display === "none" ? "block" : "none"
        })

        dataDiv.appendChild(fragment)

        return fragment

    });
}

loadAlbum(album)

const inputName = document.getElementById("name")
function keyPress(){
    inputName.addEventListener("keydown", (e)=>{
        console.log(e.key);
    })
}
keyPress()

function keyUp(){
    inputName.addEventListener('keyup', (e)=>{
        const para = document.createElement("p");
        para.innerText = e.target.value
        conatiner.appendChild(para)
    })
}
keyUp()

function 

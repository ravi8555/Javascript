// fetch api data
// Challenge.html
const fetchApiData = async function getApiData(){
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        // console.log(data);
        return data
    }catch (error) {
        console.error(error);
        return null
    }    
}

const createDom = (data )=>{
    const parentDiv = document.getElementById('album1');
          parentDiv.innerHTML="" ;

    if(!document.querySelector("#totalAlbumDiv")){
        const totalAlbumDiv = document.createElement('div');
        totalAlbumDiv.id="totalAlbumDiv";
        totalAlbumDiv.textContent = `Total Album : ${data.length}`;
        document.body.insertBefore(totalAlbumDiv, parentDiv)
    }
    
    data.forEach((album)=>{
        const listItem = document.createElement('li');
        listItem.textContent = `Id : ${album.id}, Title : ${album.title}`;
        parentDiv.appendChild(listItem)
    });    
}


const createButton = (userIds)=>{
    const buttonCoantainer = document.getElementById("buttons");
    buttonCoantainer.innerHTML = "";

    userIds.forEach((userId)=>{
        const button = document.createElement('button');
        button.textContent = `User Id : ${userId}`;

        button.onclick = async ()=>{
            const data = await fetchApiData();
            const filterData = data.filter((album) => album.userId === userId);
            createDom(filterData)
        }
        buttonCoantainer.appendChild(button)

    })
}

const init = async ()=>{
    const data = await fetchApiData();
    const uniqueUserIds = [...new Set(data.map((album)=> album.userId))] 
    createButton(uniqueUserIds);

    const byDefaultUserId = data.filter((album)=> album.userId === uniqueUserIds[0]);
    createDom(byDefaultUserId)

    
}
init();





// fetch api data

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

const getEachAlbumId = async ()=>{
    const albumId = await fetchApiData();
    const albumPromisses = albumId.map( async (album)=>{
        const albumIdApiEndPoint = "https://jsonplaceholder.typicode.com/albums" + album.userId;
        const fetchAlbumId = await fetch(albumIdApiEndPoint)
        return fetchAlbumId.json()
    })
    return Promise.all(albumPromisses)

}
const albumIdinfo = getEachAlbumId();

albumIdinfo.forEach((albm)=>{
    console.log(albm);
    
})






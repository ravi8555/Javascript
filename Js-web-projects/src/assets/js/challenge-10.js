const album = [
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"}, 
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 1, id: 3, title: "officia porro iure quia iusto qui ipsa ut modi", url: "https://via.placeholder.com/600/24f355", thumbnailUrl: "https://via.placeholder.com/150/24f355"}, 
    {albumId: 1, id: 4, title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae", url: "https://via.placeholder.com/600/d32776", thumbnailUrl: "https://via.placeholder.com/150/d32776"}, 
    {albumId: 1, id: 5, title: "natus nisi omnis corporis facere molestiae rerum in", url: "https://via.placeholder.com/600/f66b97", thumbnailUrl: "https://via.placeholder.com/150/f66b97"}];

    const allbumDiv = document.getElementById("album");

    function getallbum( item){
        const continer = document.createElement("div")
        const mapTheTitleandImage =  item.map((item)=>{
            const title = document.createElement("p")
            title.textContent = item.title

            const thumb = document.createElement("img");
            thumb.src = item.thumbnailUrl

            continer.appendChild(title)
            continer.appendChild(thumb)
            
            return continer
        })
        return mapTheTitleandImage
    }
    const albumitem = getallbum(album)   
    albumitem.forEach((item) => allbumDiv.appendChild(item));

    function showAllbum (items){
        const fragment = document.createElement();

        items.forEach((ele=>{
            
        }))
    }
    

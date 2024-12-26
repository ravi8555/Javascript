// Search.html
const fetchUsersApi = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Users data not found: ${error}`);
        return null;
    }
};

const createResultDom = (data) => {
    const parentDiv = document.getElementById('result');
    parentDiv.innerHTML = "";

    if (!document.querySelector("#totalusers")) {
        const totalUser = document.createElement('div');
        totalUser.id = "totalusers";
        totalUser.textContent = `User Name: ${data.length}`;
        parentDiv.appendChild(totalUser)
    }
    const userList = document.createElement('ul')
    data.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Name: ${user.name}, Phone: ${user.phone}, Email: ${user.email}, Company Name: ${user.company.name}`;
        userList.appendChild(listItem);
    });
    parentDiv.appendChild(userList)
};

const handleSearch = async (id) => {
    const data = await fetchUsersApi();    
    if (!data) {
       return
    }

    const parseID = parseInt(id, 10) 

    const filteredData = data.filter((user) => user.id === parseID);
    createResultDom(filteredData)
};

const searchInput = document.getElementById('search-input')
searchInput.addEventListener('input', async ()=>{
    const username = searchInput.value;
    await handleSearch(username)
})

// const fetchUsersApi = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(`Users data not found: ${error}`);
//       return null;
//     }
//   };
  
//   const createResultDom = (data) => {
//     const parentDiv = document.getElementById('result');
//     parentDiv.innerHTML = "";
  
//     if (!document.querySelector("#totalusers")) {
//       const totalUser = document.createElement('div');
//       totalUser.id = "totalusers";
//       totalUser.textContent = `Total users: ${data.length}`;
//       parentDiv.appendChild(totalUser);
//     }
  
//     const userList = document.createElement('ul'); // Create a new unordered list
//     data.forEach((user) => {
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `Name: ${user.name}, Phone: ${user.phone}, Email: ${user.email}, Company Name: ${user.company.name}`;
//       userList.appendChild(listItem);
//     });
//     parentDiv.appendChild(userList); // Append the user list to the parent div
//   };
  
//   const handleSearch = async (username) => { // Use username for clarity
//     const data = await fetchUsersApi();
//     if (!data) {
//       return; // Handle potential errors or empty data
//     }
  
//     const filteredData = data.filter((user) => user.username === username);
//     createResultDom(filteredData);
//   };
  
//   // Assuming you have an input element with ID 'search-input'
//   const searchInput = document.getElementById('search-input');
//   searchInput.addEventListener('change', async () => {
//     const username = searchInput.value;
//     await handleSearch(username); // Use await to ensure data is fetched before rendering
//   });





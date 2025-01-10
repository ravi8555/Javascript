// curl -u ravi855 "https://api.github.com/repos/user/repo/issues?state=closed";
// https://api.github.com/users
// mojombo
// defunkt
// pjhyett
// for search

const getUserData = async function fetchApi() {
    try {
      const fetchData = await fetch("https://api.github.com/users");
      const response = await fetchData.json();
      return response;
    } catch (err) {
      console.error(err);
    }
    return null;
  };
  
  const getEachUser = async () => {
    const userData = await getUserData();
  
    const userPromises = userData.map(async (item) => {
      const userAPIEndpoint = "https://api.github.com/users/" + item.login;
      const fetchLoginUserData = await fetch(userAPIEndpoint);
      return fetchLoginUserData.json();
    });
  
    return Promise.all(userPromises);
  };
  
  const createCardDom = (
    avatar_url,
    name,
    location,
    followers,
    following,
    publicRepos,
    twitterUsername,
    bioinfo
  ) => {
    const gitUserData = document.getElementById("gitUserData");
    const getUserDataHTML = `
      <div class="user-text">
      
        <h2>${name}</h2>
        <h3>${location}</h3>
        <p>${bioinfo}</p>
        <ul>
          <li>
            <span>Followers:</span>
            <p>${followers}</p>
          </li>
          <li>
            <span>Following:</span>
            <p>${following}</p>
          </li>
          <li>
            <span>Repos:</span>
            <p id="repos">${publicRepos}</p>
          </li>
          <li>
            <span>Twitter:</span>
            <p id="twitter">${twitterUsername}</p>
          </li>
        </ul>
      </div>
      <div class="user-img">
        <img src="${avatar_url}" alt="${name}" />
      </div>
    `;
    gitUserData.innerHTML += getUserDataHTML;
  };
  
  const searchGitUserRecords = async (search) => {
    const searchInput = document.getElementById("search-bar");
    const gitUserInfo = await getEachUser();
  
    searchInput.addEventListener("input", () => {
      document.getElementById("dispmsg").innerHTML = "";
      const searchTerm = searchInput.value.toLowerCase();
      gitUserInfo.forEach((user) => {
        const username = user.login.toLowerCase();
        if (username === searchTerm) {
          // Clear the existing user data before displaying the new one
          const gitUserData = document.getElementById("gitUserData");
          gitUserData.innerHTML = "";
  
          createCardDom(
            user.avatar_url,
            user.name,
            user.location,
            user.followers,
            user.following,
            user.public_repos,
            user.twitter_username,
            user.bio
          );
        }
      });
    });
  };
  
  export { getUserData, getEachUser, searchGitUserRecords };
  
  /*
  const getUserData = async function fetchApi() {
    try {
      const fetchData = await fetch("https://api.github.com/users");
      const response = await fetchData.json();
      return response;
    } catch (err) {
      console.log(err);
    }
    return null;
  };
  
  const getEachUser = async () => {
    const userData = await getUserData();
  
    const userPromises = userData.map(async (item) => {
      const userAPIEndpoint = "https://api.github.com/users/" + item.login;
      const fetchLoginUserData = await fetch(userAPIEndpoint);
      return fetchLoginUserData.json();
    });
  
    return Promise.all(userPromises);
  };
  
  const createCardDom = (
    avatarUrl,
    name,
    location,
    followers,
    following,
    publicRepos,
    twitterUsername,
    bioinfo
  ) => {
    const gitUserData = document.getElementById("gitUserData");
    const getUserData = `
    
      <div class="user-text">
      <h2 id="">${name}</h2>
      <h3 id="">${location}</h3>
      <p>${bioinfo}</p>
      <ul>
        <li>
          <span>Followers:</span>
          <p id="">${followers}</p>
        </li>
        <li>
          <span>Following : </span>
          <p id="">${following}</p>
        </li>
        <li>
          <span>Repos</span>
          <p id="repos">${publicRepos}</p>
        </li>
        <li>
          <span>Twitter</span>
          <p id="twitter">${twitterUsername}</p>
        </li>
      </ul>
    
              </div>
              <div class="user-img">
                <img
                  src="${avatarUrl}" alt"${name}"
                />
              </div>
      `;
    gitUserData.innerHTML += getUserData;
  };
  
  
  const serchGitUserRecords = async (search) => {
    const searchInput = document.getElementById("search");
    const gitUserInfo = await getEachUser();
    // console.log(gitUserInfo);
    searchInput.addEventListener("input", () => {
  
      if (searchInput.value === gitUserInfo.name()) {
        gitUserInfo.forEach((user) => {
          createCardDom(
            user.avatar_url,
            user.name,
            user.location,
            user.followers,
            user.following,
            user.public_repos,
            user.twitter_username,
            user.bio
          );
        });
      }
    });
  };
  */
  
  // const getUserData = async function fetchApi() {
  //   try {
  //     const fetchData = await fetch("https://api.github.com/users");
  //     const response = await fetchData.json();
  //     return response;
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   return null;
  // };
  
  // const getEachUser = async () => {
  //   const userData = await getUserData();
  
  //   const userPromises = userData.map(async (item) => {
  //     const userAPIEndpoint = "https://api.github.com/users/" + item.login;
  //     const fetchLoginUserData = await fetch(userAPIEndpoint);
  //     return fetchLoginUserData.json();
  //   });
  
  //   return Promise.all(userPromises);
  // };
  
  // const createCardDom = (
  //   avatarUrl,
  //   name,
  //   location,
  //   followers,
  //   following,
  //   publicRepos,
  //   twitterUsername,
  //   bioinfo
  // ) => {
  //   const gitUserData = document.getElementById("gitUserData");
  //   const getUserData = `
  
  //   <div class="user-text">
  //   <h2 id="">${name}</h2>
  //   <h3 id="">${location}</h3>
  //   <p>${bioinfo}</p>
  //   <ul>
  //     <li>
  //       <span>Followers:</span>
  //       <p id="">${followers}</p>
  //     </li>
  //     <li>
  //       <span>Following : </span>
  //       <p id="">${following}</p>
  //     </li>
  //     <li>
  //       <span>Repos</span>
  //       <p id="repos">${publicRepos}</p>
  //     </li>
  //     <li>
  //       <span>Twitter</span>
  //       <p id="twitter">${twitterUsername}</p>
  //     </li>
  //   </ul>
  
  //           </div>
  //           <div class="user-img">
  //             <img
  //               src="${avatarUrl}" alt"${name}"
  //             />
  //           </div>
  //   `;
  //   gitUserData.innerHTML += getUserData;
  // };
  
  // const insertToDom = async () => {
  //   try {
  //     const gitUserInfo = await getEachUser();
  
  //     if (!Array.isArray(gitUserInfo)) {
  //       console.log("Data is not an array:", gitUserInfo);
  //       return;
  //     }
  
  //     gitUserInfo.forEach((user) => {
  //       createCardDom(
  //         user.avatar_url,
  //         user.name,
  //         user.location,
  //         user.followers,
  //         user.following,
  //         user.public_repos,
  //         user.twitter_username,
  //         user.bio
  //       );
  //     });
  //   } catch (error) {
  //     console.error("Error in insertToDom:", error);
  //   }
  // };
  
  // export { getUserData, insertToDom, getEachUser };
  
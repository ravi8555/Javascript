console.log('me_jsDom_loaded')
// console.log(document.querySelector('h1'));
// let h1elTagName = document.getElementsByTagName('h1');
// console.log(h1elTagName)
// let firstEle = h1elTagName[0];
// // firstEle.innerText = "Practicing DOM Manipulation!"
// // console.log(firstEle)
// // console.log(firstEle.innerText);

// function createNewDiv(){
//     const factEl = document.getElementById('facts-list');
//     // To create new Div with id after facts-list
//     /*const newDiv = document.createElement('div');
//     newDiv.innerText = "innerText property refers to the text inside an element";
//     newDiv.setAttribute('id', 'new-created-div')
//     const newEle = factEl.parentNode.insertBefore(newDiv, factEl.nextSibling );*/

//     // const newDiv = document.createElement('div');
//     // newDiv.innerText = "innerText property refers to the text inside an element";
//     // newDiv.setAttribute('id', 'new-created-div')
//     // const newEle = factEl.parentNode.insertBefore(newDiv, factEl.nextSibling );

//     const textEle = document.createElement('p');
//     // textEle.innerText = "innerText property refers to the text inside an element";
//     // factEl.innerText =  "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>"
//     factEl.innerHTML =  "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>"
//     factEl.appendChild(textEle)

// }

// const tableDiv = document.getElementById('table-div');
// function loadTable(){

//     const tbl = document.createElement('table');
//     const tblHead = document.createElement('thead');
//     const tblBody = document.createElement('tbody');
//     const tblRow = document.createElement('tr');
//     const tblCell = document.createElement('td');

//     tbl.setAttribute("width", "400px");
//     tbl.setAttribute('border','solid')

//     tbl.appendChild(tblHead);
//     tbl.appendChild(tblBody)

//     // append the row to the thead
//     const tblHeadRow = document.createElement('tr');
//     tblHead.appendChild(tblHeadRow);
//     tblHead.innerHTML = "<td>ID</td><td>Name</td>";

//     // append the row to the tbody element
//     tblBody.appendChild(tblRow);
//     tblBody.innerHTML =  "<td>1</td><td>LS Digital</td>";

//     console.log(tbl);

//     tableDiv.appendChild(tbl)

//     // method 2
//     /*tableDiv.innerHTML = ` <table border="1" width="400px">
//     <thead>
//         <tr>
//             <td>ID</td>
//             <td>Name</td>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>1</td>
//             <td>LS Digital</td>
//         </tr>
//     </tbody>
//  </table>`*/

// }
// // createNewDiv()
// // loadTable()

// function getStyledTable(){
//     const tbl = document.createElement('table');
//     tbl.setAttribute("width", "400px");
//     tbl.setAttribute('border','solid')
//     // tableDiv.appendChild(tbl);
//     return tbl
// }

// function getTableHeader(){
//     let tableHeader = document.createElement('thead');
//     tableHeader.innerHTML = `<tr><th>Id</th><th>Name</th></tr>`;

//     return tableHeader
// }

// function loadTableRefactored(){
//     // create Table element with Style
//     let table = getStyledTable();

//     // insert the table header in the table and append the data to the table header
//     // table.appendChild(getTableHeader());
//     // or

//     let tableHeader = getTableHeader();
//     table.append(tableHeader)

//     // append the table to the node table div
//     document.getElementById('table-div').append(table);
// }
// // loadTableRefactored()

// // function getStudentTableRow(id, name){
// //     let stdTblRow = document.createElement('tbody');
// //     students.forEach((item)=>{
// //         stdTblRow.innerHTML += `<tr><td>${item.id}</td><td>${item.name}</td></tr>`;

// //     })
// //     return stdTblRow

// // }

// function getStudentTableRow(id, name){

//     // create tBody
//     let tbody = document.createElement('tbody');
//     let tr = document.createElement('tr');
//     let idTd = document.createElement('td');
//     let nameTd = document.createElement('td');
//     tbody.appendChild(tr);
//     tr.appendChild(idTd)
//     tr.appendChild(nameTd);
//     idTd.textContent = id;
//     nameTd.textContent = name;

//     return tbody
// }

// function loadTableFromJson(){
//     // table style
//     let table = getStyledTable();

//     // table header
//     let tableHeader = getTableHeader();
//     table.append(tableHeader)

//     // let tRow = getStudentTableRow()

//     // iterate the student data using for loop
//     for(let i =0; i < students.length; i ++){

//         let studentInfo = students[i];
//         let studentDetails = getStudentTableRow(studentInfo.id, studentInfo.name);
//         table.append(studentDetails)
//     }

//     // append Table body
//     table.append(getStudentTableRow());

//     // append the table to the node table div
//     document.getElementById('table-div').append(table);

// }
// // loadTableFromJson()

// // const btnShow = document.getElementById('showTbl');
// // btnShow.addEventListener('click', ()=>{
// //     const btnText = btnShow.textContent;

// //     if(btnText === "Show Table"){
// //         btnShow.textContent = "Hide Table";
// //         loadTableFromJson();
// //     } else{
// //         btnShow.textContent = "Show Table";
// //         document.getElementById('table-div').innerHTML ="";
// //     }

// // });

// // const inputEle = document.querySelector('input');
// // const dispContent = document.getElementById('name-display');

// // inputEle.addEventListener('input', ()=>{
// //     const name = inputEle.value;
// //     dispContent.textContent = name
// // })
// const team = [
//     {
//       id: "anna",
//       fullName: "Anna Kendrick",
//       jobTitle: "Front-end Ninja",
//       bio:
//         "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
//       avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
//     },
//     {
//       id: "harry",
//       fullName: "Harry Fawn",
//       jobTitle: "Illustrator",
//       bio:
//         "Creates new illustrations each week, will kill for coffee, and loves beaches",
//       avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
//     },
//     {
//       id: "sofia",
//       fullName: "Sofia Sultan",
//       jobTitle: "Backend Engineer",
//       bio:
//         "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
//       avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
//     }
//   ];
// //   const content = document.getElementById("team-data");
// //   const getImageElement = (src, alt) => {
// //     const img = document.createElement('img');
// //     img.setAttribute('src', src);
// //     img.setAttribute('alt', alt)
// //     return img;
// //   };

// //   function generateCard(id, fullName, jobTitle, bio, avatar) {
// //     //1. Create a new "section" element and set the className and id
// //     const section = document.createElement('section');

// //     //2. Generate the image using getImageElement() function
// //     const imagealt = getImageElement (avatar, fullName)
// //     //Hint - Use fullname as alt for the image.

// //     const div = document.createElement('div');
// //     div.setAttribute('id', id)
// //     //3. Create a div for text content

// //     //4. Create an h2 for fullName
// //     const h2 = document.createElement('h2');
// //     h2.textContent = fullName

// //     //5. Create an h3 for jobTitle
// //     const h3 = document.createElement('h3');
// //     h3.textContent = jobTitle
// //     //6. Create a p for bio
// //     const p = document.createElement('p');
// //     p.textContent = bio

// //     //7. Append the fullName, jobTitle, and bio element
// //     //   to the div created for text.
// //     div.append(imagealt, h2,h3,p)

// //     //8. Append the Image and the Text div
// //     //   to the new section you created in step 1
// //     section.append(div)

// //     //Return the new section element created.
// //     return section;
// //   }

// //   function generateCardArray(data) {
// //     const cards = [];
// //     for (const teamMember of data) {
// //       const card = generateCard(
// //         teamMember.id,
// //         teamMember.fullName,
// //         teamMember.jobTitle,
// //         teamMember.bio,
// //         teamMember.avatar
// //       );
// //       cards.push(card);
// //     }
// //     return cards;
// //   }

// //   const cardsArray = generateCardArray(team);
// //   console.log(cardsArray);

// //   for (let card of cardsArray) {
// //     content.append(card);
// //   }

// //   console.log(team);

// fetch('https://api.github.com/users')
// .then((res) => res.json())
// .then((data)=>{
//     // console.log(data);
//     function getImageElement(src, alt){
//         const avtaarDiv = document.createElement('div');
//         const img = document.createElement('img');
//         avtaarDiv.append(img)
//         avtaarDiv.classList.add('avtaar_img');
//         img.setAttribute('src', src);
//         img.setAttribute("alt", alt);
//          return avtaarDiv
//     }
//     function displayUserInfo(Avtaar, Id, LoginId, GitUrl, organizations_url){
//         const section = document.createElement('section');
//         section.classList.add('gridTable')
//         section.setAttribute('id', Id);

//         const avtaarDiv = getImageElement(Avtaar, organizations_url);

//         const contentDiv = document.createElement('div');
//         contentDiv.classList.add('content');

//         const keyEl = document.createElement('div');
//         keyEl.classList.add('keyvalue');

//         const IdEl = document.createElement('div');
//         IdEl.textContent = Id
//         const LoginDiv = document.createElement('div');
//         LoginDiv.textContent = LoginId
//         const GitUrlDiv = document.createElement('div');
//         GitUrlDiv.textContent = GitUrl

//         keyEl.append(IdEl, LoginId, GitUrl)

//         const detailsCnt = document.createElement('div');
//         detailsCnt.classList.add('details');

//         contentDiv.append(keyEl, detailsCnt)

//         section.append(avtaarDiv, contentDiv);

//         return section
//     }
//     function generateDataTable(data1){
//         const dataRow = [];
//         for(const memberData in data1){
//             const card = displayUserInfo(
//                 memberData.Avtaar,
//                 memberData.Id,
//                 memberData.LoginId,
//                 memberData.GitUrl,
//                 memberData.organizations_url,
//             )
//             dataRow.push(card)
//         }
//         return dataRow

//     }

//     const memberArry = generateDataTable(data);
//     console.log(memberArry);
//     // console.log(displayUserInfo("abc.png", "1", "Myname", "GitUrl", "organizations_url"));
// });

// // inputEle.addEventListener('change', updateValue)
// // function updateValue(e){
// //     dispContent.textContent = e.target.value
// // }

function generateSortedList(arr) {
  // const sortedArr = arr.sort()
  const sortedArr = arr.sort((a, b) => a - b)
  const HtmlDiv = document.getElementById('sort-list')
  let ulItem = document.createElement('ul')

  // for (i = 0; i < sortedArr.length; i++) {
  //   let liItem = document.createElement('li')
  //   liItem.innerHTML = sortedArr[i]
  //   ulItem.appendChild(liItem)
  // }
  sortedArr.forEach((num) => {
    let liItem = document.createElement('li')
    liItem.innerHTML = num
    ulItem.appendChild(liItem)
    return liItem
  })

  // for (const listNum of sortedArr) {
  //   let liItem = document.createElement('li')
  //   liItem.innerHTML = listNum
  //   ulItem.appendChild(liItem)
  // }

  HtmlDiv.appendChild(ulItem)
  return HtmlDiv
}

generateSortedList([2, 58, 18, 12, 3])

const mainElement = document.getElementById('main')
function addNewChildElementToParent(parentId, childType, txtContent) {
  const parentDiv = document.createElement('div')
  parentDiv.setAttribute('id', parentId)

  if (childType.toLowerCase() === 'ul') {
    let ulElement = document.createElement('ul')

    for (const itemTxt of txtContent) {
      let liElement = document.createElement('li')
      liElement.innerHTML = itemTxt
      ulElement.appendChild(liElement)
    }
    parentDiv.appendChild(ulElement)
  } else if (childType.toLowerCase() === 'li') {
    let ulElement = document.getElementById(parentId)
    let liElement = document.createElement(childType)
    ulElement.appendChild(liElement)
    liElement.innerHTML = txtContent
  } else {
    let childElemnet = document.createElement(childType)
    childElemnet.innerHTML = txtContent
    parentDiv.append(childElemnet)
  }

  mainElement.appendChild(parentDiv)

  return parentDiv
}
console.log(
  addNewChildElementToParent('listItem', 'li', 'This is the  Fourth item')
)
// console.log(addNewChildElementToParent('listItem', 'p', 'This is first item'))

// console.log(
//   addNewChildElementToParent('listItem', 'ul', [
//     'This is the first item',
//     'This is the second item',
//     'This is the third item',
//   ])
// )

async function fetchUlistApi() {
  try {
    const fetchUname = await fetch('https://api.github.com/users')
    const response = await fetchUname.json()
    // if (!response.ok) {
    //   throw new Error('Network response was not ok!')
    // }
    // console.log(response)
    return response
  } catch (err) {
    console.log(err)
    return null
  }
}
// fetchUlistApi()

function getUserNameFromApi(uname) {
  const username = uname.map((item) => item.login)
  //   console.log(username)
  return username
}

function addUListDom(lgn) {
  const ul = document.createElement('ul')
  lgn.forEach((list) => {
    let li = document.createElement('li')
    li.innerHTML = list
    ul.appendChild(li)
  })
  return ul
}
// uses

async function insertInDom() {
  const userLists = await fetchUlistApi()
  const getUname = getUserNameFromApi(userLists)
  const UiElement = addUListDom(getUname)

  document.getElementById('user-list').appendChild(UiElement)
}
insertInDom()

// Activity 1

let names = ['Anil', 'Dhoni', 'Kohli', 'Aaron', 'Ajinkya']
const namesWithA = names.filter((item) => {
  return item.includes('A')
})
// const namesWithA = names.filter((item) => item.includes('A'))

console.log(namesWithA)

// Activity 2
// Approach 1
let runsScored = [20, 100, 53, 44, 21]
const newArray = []
let currSocre = runsScored.map((item) => {
  if (item >= 50) {
    newArray.push(item)
  } else {
    newArray.push(0)
  }
})

// Approach 2

const newArra = runsScored.map((currentScore) => {
  if (currentScore >= 50) {
    return currentScore
  } else {
    return 0
  }
})
console.log(newArray) // prints [ 0, 100, 53, 0, 0 ]
console.log(newArra) // prints [ 0, 100, 53, 0, 0 ]
/*
function isPalindrome(str) {
  const words = str.split('')
  let reversWord = ''

  for (i = str.length - 1; i >= 0; i--) {
    reversWord += words[i]
    // console.log(reversWord)
  }
  if (reversWord === str) {
    return true
  } else {
    return false
  }
}
console.log(isPalindrome('madam'))
*/
function maskPalindrome(str, mask = '*') {
  if (isPalindrome(str)) {
    const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const firstLetter = modifiedStr.charAt(0)
    const lastLetter = modifiedStr.charAt(modifiedStr.length - 1)
    const maskedPalindrome =
      firstLetter + mask.repeat(modifiedStr.length - 2) + lastLetter
    return maskedPalindrome
  }
  return str
}

console.log(maskPalindrome('madam')) // Output: "m***m"
console.log(maskPalindrome('hello')) // Output: "hello"

async function getApiData(){
    let response = await fetch("https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003");
    let question = await response.json();
  
    console.log(question);
    return question
}
getApiData()

  async function fetchApi(){
    let apiData = await getApiData();
    console.log(apiData);
  
  }
fetchApi()

function getTableRow(title, acRate, difficulty){
    // const tblrow = `<tr><td>${title}</td><td>${acRate}</td><td>${difficulty}</td></tr>`;
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    

    const tbody = document.getElementById('')
}



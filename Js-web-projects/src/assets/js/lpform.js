const floorData = [
  {
    id : 1,
    blurImgSrc : 'blur-img-1.jpg',
    imgSrc :'tower26-unit3.jpg'
  },{
    id : 2,
    blurImgSrc : 'blur-img-2.jpg',
    imgSrc :'tower26-unit3.jpg'
  },{
    id : 3,
    blurImgSrc : 'blur-img-3.jpg',
    imgSrc :'tower26-unit3.jpg'
  },{
    id : 4,
    blurImgSrc : 'blur-img-4.jpg',
    imgSrc :'tower26-unit3.jpg'
  },{
    id : 5,
    blurImgSrc : 'blur-img-5.jpg',
    imgSrc :'tower26-unit3.jpg'
  },{
    id : 6,
    blurImgSrc : 'blur-img-6.jpg',
    imgSrc :'tower26-unit3.jpg'
  }
]
  const floorList = document.getElementById('blurImgSrc')
  let ui = '';
for(let i = 0; i < floorData.length; i++){
  ui += `
 <div class="flrplans plan4-img"> 
<a href="javascript:void(0)" data-index="0" data-src="test-images/${floorData[i].blurImgSrc}" data-caption="plan-1" btnViewFloorPlan">
            <span class="viewPlanBtn">View Plan</span>
  <img src="test-images/${floorData[i].blurImgSrc}" alt="Image">                        
</a>
</div>  
  
  `;
  floorList.innerHTML = ui
}

let actionFlag = '';
 const popup = document.getElementById('popupBg')
 const clsbtn = document.getElementById('btnCloseForm')
 const viewPlanBtn = document.querySelectorAll('.viewPlanBtn');
 const dwnFloorBtn = document.getElementById('downloadFoor');
 const dwnBroucherBtn = document.getElementById('downloadBorucher');
 const subBtn = document.getElementById('submit');
 const formOpenBtn = document.querySelectorAll('.btn-open-form')
 const mobile_num = document.getElementById('mobile'); 
 const fname = document.getElementById('firstName');
 const lname = document.getElementById('lastName');
 const email_id = document.getElementById('email');
 const spanElement = document.createElement('span');
 const suceesPopup = document.getElementById('thanksPopup');
 const checkbox = document.getElementById('chkbx');
 
 const regexAlpha = /^[a-zA-Z ]*$/ 
 const regexNumSpe = /^[0-9]{0,2}$/
 const regexNum =  /^[0-9]{10}$/
 const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 mobile_num.addEventListener('input',(e)=>{
     const inputText = e.target.value;
     if(inputText.length > 10){
        e.target.value = inputText.slice(0, 10)
     }
     var alpha = /[a-zA-Z]/gi;
     mobile_num.value = mobile_num.value.replace(alpha, '')
     })


const validateField = (field, regx, errmsg) => {
  // Remove existing error message if any
  const existingErrorSpan = field.parentElement.querySelector('.error-message');
  if (existingErrorSpan) {
    existingErrorSpan.remove();
  }
  
  if (field.value.length === 0 || !regx.test(field.value)) {
    field.parentElement.classList.add('errormsg');
    
    // Create a new span element for the error message
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.style.cssText = `font-size:10px; color:red`;
    errorSpan.innerHTML = errmsg;
    field.parentElement.append(errorSpan);
    
    field.style.borderColor = "red";
    return false;
  } else {
    field.parentElement.classList.remove('errormsg');
    field.style.borderColor = "#ced4da";
    return true;
  }
};

const validateCheckbox = (checkbox, errmsg) => {
  // Remove existing error message if any
  const existingErrorSpan = checkbox.parentElement.querySelector('.error-message');
  if (existingErrorSpan) {
    existingErrorSpan.remove();
  }
  
  if (!checkbox.checked) {
    checkbox.parentElement.classList.add('errormsg');
    
    // Create a new span element for the error message
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.style.cssText = `font-size:10px; color:red`;
    errorSpan.innerHTML = errmsg;
    checkbox.parentElement.append(errorSpan);
    
    return false;
  } else {
    checkbox.parentElement.classList.remove('errormsg');
    return true;
  }
};
      function downloadFloorPdf() {
        console.log("test");
        const linkNw = document.createElement("a");
        linkNw.href = "img/BPTP_Amaario_Floor_Plans.pdf";
        linkNw.target = "_blank";
        linkNw.download = "BPTP_Amaario_Floor_Plans.pdf";
        linkNw.click();
      }
      function downloadBroucherPdf() {
        console.log("test");
        const linkNw = document.createElement("a");
        linkNw.href = "img/BPTP_The_Amaario_Brochure.pdf";
        linkNw.target = "_blank";
        linkNw.download = "BPTP_Amaario_Floor_Plans.pdf";
        linkNw.click();
      }

     window.addEventListener('DOMContentLoaded', ()=>{

      

        // popup

        viewPlanBtn.forEach((btn)=>{
          btn.addEventListener('click', (e)=>{
            actionFlag = 'viewPlan'
              popup.classList.add('is-visible') 
               // console.log(popup);
           })
        })

        subBtn.addEventListener('click', (e)=>{
          popup.classList.add('is-visible')
          // console.log(popup);
         e.preventDefault();     
const isFnameValid = validateField(fname, regexAlpha, "Please enter full name");
// const isLnameValid = validateField(lname, regexAlpha, "Please enter last name");
const isMobileNumValid = validateField(mobile_num, regexNum, "Enter 10 digit mobile number");
const isEmailIdValid = validateField(email_id, emailRegex, "Enter valid email address");

const isCheckboxValid = validateCheckbox(checkbox, "Please check the WhatsApp notifications checkbox")

// Check overall validation status
const isValid = isFnameValid && isMobileNumValid && isEmailIdValid && isCheckboxValid;

         if(isValid){            
          // alert("test")
          fname.value = '';
          // lname.value = '';
          mobile_num.value = '';
          email_id.value='';          
          suceesPopup.classList.add('show');
          popup.classList.remove('is-visible'); 

          if(actionFlag === 'viewPlan'){
          const images = document.querySelectorAll('.flrplans img')
          const anchors = document.querySelectorAll('.flrplans a');
          
          for(let i =0; i <floorData.length; i++){
              images[i].src = `test-images/${floorData[i].imgSrc}`;
              anchors[i].classList.add('fancyBx');
              anchors[i].setAttribute("data-src", `test-images/${floorData[i].imgSrc}`);
              anchors[i].setAttribute("data-fancybox","gallery3" )
              const span = anchors[i].querySelector('span');
              if(span){
                  span.remove()
              }
          }
        }else if(actionFlag === 'downloadFloorPlan'){
          downloadFloorPdf();
        }else if(actionFlag === 'downloadBroucher'){
          downloadBroucherPdf();
        }

      } 
      setTimeout(()=>{
          suceesPopup.classList.remove('show')
         }, 3000);             
         
       });
// Download floor plan
   dwnFloorBtn.addEventListener('click', (e)=>{
    actionFlag = 'downloadFloorPlan'
     popup.classList.add('is-visible')
     // console.log(popup);
     })

// Download broucher
dwnBroucherBtn.addEventListener('click', (e)=>{
actionFlag = 'downloadBroucher'
popup.classList.add('is-visible')
// console.log(popup);
});
formOpenBtn.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    console.log("check");
    popup.classList.add('is-visible')
  })
})


  //   
  popup.addEventListener('click', function (event){
      if (event.target === this || event.target.id === "btnCloseForm") {    
          event.preventDefault()
          this.classList.remove('is-visible')
      }
  })

})




  

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
    <div class="swiper-slide swiper-slide-next" role="group" aria-label="4 / 10" style="width: 826px;">
      <div class="flrplans plan4-img">
          <img src="assets/img/test-images/${floorData[i].blurImgSrc}" alt="flat plan">
          <a href="javascript:void(0)" class="temp3-tsTxt btnViewFloorPlan">
              <span class="popupBtn">View Plan</span>
          </a>
      </div>
    </div>`;
    floorList.innerHTML = ui
  }
  
   const popup = document.getElementById('popupBg')
   const clsbtn = document.getElementById('btnCloseForm')
   const popupBtn = document.querySelectorAll('.popupBtn');
   const subBtn = document.getElementById('submit');
   const mobile_num = document.getElementById('mobile'); 
   const fname = document.getElementById('firstName');
   const lname = document.getElementById('lastName');
   const email_id = document.getElementById('email');
   const spanElement = document.createElement('span');
   const suceesPopup = document.getElementById('thanksPopup');
   
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
       const validateField = (field, regx, errmsg)=>{
          if(field.value.length ===0 || !regx.test(field.value)){
            field.parentElement.classList.add('error');     
            field.parentElement.append(spanElement);
            spanElement.style.cssText = `font-size:10px; color:red`
            spanElement.innerHTML = errmsg
            field.style.borderColor="red";
            // field.focus()
            return false
          }else{
            field.parentElement.classList.remove('error');
            field.style.borderColor="#ced4da";
            const errorSpan = field.parentElement.querySelector('span');
            if(errorSpan){
               errorSpan.remove()
            }
            
            return true
          }
        }
    
       window.addEventListener('DOMContentLoaded', ()=>{
          // popup

          popupBtn.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                popup.classList.add('is-visible') 
                 // console.log(popup);
             })
          })

          subBtn.addEventListener('click', (e)=>{
            popup.classList.add('is-visible')
            // console.log(popup);
           e.preventDefault();     
           const isValid =            
           validateField(fname, regexAlpha, "Please enter full name")  && 
           validateField(lname, regexAlpha, "Please enter last name")  && 
           validateField(mobile_num, regexNum,"Enter 10 digit mobile number")  && 
           validateField(email_id, emailRegex,"Enter valide email address")

           if(isValid){            
            // alert("test")
            fname.value = '';
            lname.value = '';
            mobile_num.value = '';
            email_id.value='';          
            suceesPopup.classList.add('show');
            popup.classList.remove('is-visible'); 
            
            const images = document.querySelectorAll('.flrplans img')
            const anchors = document.querySelectorAll('.flrplans a');
            for(let i =0; i <floorData.length; i++){
                images[i].src = `assets/img/test-images/${floorData[i].imgSrc}`;
                anchors[i].classList.add('fancyBx');
                const span = anchors[i].querySelector('span');
                if(span){
                    span.remove()
                }
            }
        } 
        setTimeout(()=>{
            suceesPopup.classList.remove('show')
           }, 3000);             
           
         })
   
       })
 
    //   
    popup.addEventListener('click', function (event){
        if (event.target === this || event.target.id === "btnCloseForm") {    
            event.preventDefault()
            this.classList.remove('is-visible')
        }
    })


    

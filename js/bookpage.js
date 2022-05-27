import restaurant from '../components/restaurant.js';
import photos from '../components/photos.js';
import booked from '../components/booked.js';

var sliderContainer = document.getElementById('slider-container');
var found;
getData();
async function getData(){
        var url=" http://localhost:3000/products"
        var data=await fetchData(url);
        
        found=data.find(el=>el.id===1);
        displayData(found);
   
}

async function fetchData(url){
    try {
        let res=await fetch(url)
        let data=await res.json();
        return data;
    } catch (error) {
        console.log('error');
    }
}


function displayData(data){
    sliderContainer.innerHTML=restaurant();

    var image=data.images;
    var img=document.getElementById('image-slider-image');

       

    img.src=data.images[0];

    img.addEventListener('click',function(){
        model(img.src);
    });

    
    let i=0
    document.getElementById("right-arrow").addEventListener('click',function(){
        if(i<image.length-1){
                img.src=image[i+1];
                i++;
            }
    })
    document.getElementById("left-arrow").addEventListener('click',function(){
       if(i>0){
        img.src=image[i-1];
        i--;
       }
    });





    // Restaurant Details

    let name=document.getElementById('name');
    name.innerText=data.name;
    let rupees=document.getElementById('rupees');
    rupees.innerText=data.costForTwo+" for 2";
    let foodType=document.getElementById('food-type');
    foodType.innerText=data.foodType;
    let address=document.getElementById('address');
    address.innerText=data.address;
    let city=document.getElementById('city');
    city.innerText=data.city;
    let openingTime=document.getElementById('opening-time');
    openingTime.innerText="(Opens at "+data.openingTime+")"; 

    let rating=document.getElementById('rating');
    rating.innerText=data.rating;
    let totalReview=document.getElementById('total-review');
    totalReview.innerText=data.reviews.length;

    //photos

    let allPhotos=document.getElementById('all-photos');
    allPhotos.addEventListener('click',function(){
        var phto=photos();
        gallary(data,phto); 
    });



    //menu-bar

    let foodMenu=document.getElementById('menu-img');
    let menuImg=document.createElement('img');
    menuImg.src=data.menuImage;
    foodMenu.append(menuImg);
    menuImg.addEventListener('click',function(){
        model(menuImg.src);
    })

    let about=document.getElementById('about-details');
    about.innerText=data.about;
    
    let readMore=document.getElementById('read-more');
    readMore.addEventListener('click',function(){
        about.style.height='150px';
        about.style.textOverflow='auto'
        readMore.innerText="Read less";
    });

    let cuisine=document.getElementById('cuisine');
    cuisine.innerText=data.cuisine;
    let dineType=document.getElementById('dine-type');
    dineType.innerText=data.type;
    let cost=document.getElementById('cost');
    cost.innerText=data.costForTwo+"for two people";

}

function model(img){
    var imgModal=document.getElementById('image-modal');
    imgModal.style.display="block";
    var modalImg=document.getElementById('modal-img'); 
    var closeImgModal=document.getElementById('close');
    modalImg.src=img;
    closeImgModal.addEventListener('click',function(){
        imgModal.style.display="none"
    });
}
const dateSlideRight=document.getElementById('date-slide-right');
const dateSlideLeft=document.getElementById('date-slide-left');
var dateContainer=document.getElementById('dates');
var ul=document.getElementById('ul-container');

dateSlideRight.addEventListener('click',function(){
    dateContainer.scrollLeft +=60;
});
dateSlideLeft.addEventListener('click',function(){
    dateContainer.scrollLeft -= 60;
});

var today = new Date();
let todayDate=dateFormates(today);
todayDate[2]='Today';



displayDates(todayDate);
for(let i=1;i<=40;i++){
    var nextDate=new Date(new Date().setDate(today.getDate()+i));
    let nextDateFormat=dateFormates(nextDate)
    displayDates(nextDateFormat);
}


function dateFormates(date){
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    return ([monthNames[date.getMonth()],date.getDate(),days[date.getDay()]]);

}

function displayDates(dateFormate){
    var li=document.createElement('li');
    var day=document.createElement('span');
    day.innerText=dateFormate[2];
    var datediv=document.createElement('div');
    datediv.innerText=dateFormate[1];

    li.addEventListener('click',function(){
        let sDate=document.getElementById('s-date');
        sDate.innerHTML=dateFormate[1]+"-"+dateFormate[0]+"-2022  ";
        availableTimings();
    });    
    li.append(day,datediv);
    ul.append(li);
    
}


var emailaddress=document.getElementById('email-address')
emailaddress.addEventListener('click',function(){
    emailaddress.style='none';
    emailaddress.style.marginBottom='0px';
    var inputEmail=document.getElementById('email');
    inputEmail.style.display='block';
    var AddemailIcon=document.getElementById('email-add-icon');
    AddemailIcon.style.display="none"
    var AddemailText=document.getElementById('add-email-text');
    AddemailText.style.display='none';
});
var specialreq=document.getElementById('special-request');
specialreq.addEventListener('click',function(){
    specialreq.style='none';
    specialreq.style.marginBottom='0px';
    var inputReq=document.getElementById('request');
    inputReq.style.display='block';
    var AddReqIcon=document.getElementById('request-add-icon');
    AddReqIcon.style.display="none"
    var AddReqText=document.getElementById('add-request-text');
    AddReqText.style.display='none';
});


function gallary(data,phto){

    sliderContainer.innerHTML=phto;

    let pimage=document.getElementById('photos-img');
    pimage.src=data.images[0];
    
    let pname=document.getElementById('photos-name');
    pname.innerText=data.name;
    let prupees=document.getElementById('photos-rupees');
    prupees.innerText=data.costForTwo;
    let pfoodType=document.getElementById('photos-food-type');
    pfoodType.innerText=data.foodType;
    let paddress=document.getElementById('photos-address');
    paddress.innerText=data.address;
    let pcity=document.getElementById('photos-city');
    pcity.innerText=data.city;
    
    let prating=document.getElementById('photos-rating');
    prating.innerText=data.rating;
    let ptotalReview=document.getElementById('photos-total-review');
    ptotalReview.innerText=data.reviews.length;

    let galaryName=document.getElementById('galary-name');
    galaryName.innerText=data.name+" Photos ("+data.images.length+")";

    let pReseName=document.querySelectorAll("[id=p-res-name]");
    console.log(pReseName)
    let pResAddress=document.querySelectorAll("[id=p-address]");
    for(let i=0;i<3;i++){
        pReseName[i].innerText=data.name;
        pResAddress[i].textContent=data.address;
    }

    
    



    let galaryGrid=document.getElementById('galary-grid');
    data.images.forEach(function(ele){
        console.log(ele);
        let galaryImg=document.createElement('img');
        galaryImg.src=ele;
        galaryImg.addEventListener('click',function(){
            model(galaryImg.src);
        });
        galaryGrid.append(galaryImg);
    });

    document.getElementById('back-button').addEventListener('click',function(){
        sliderContainer.innerHTML=restaurant();
        getData();
    });
}




//available timings

function availableTimings(){
    let chooseTiming=document.getElementById("choose-timing");
    chooseTiming.innerHTML="";
    let availtitle=document.createElement('div');
    availtitle.innerText="Available Timings"
    availtitle.className="avail-timings"
    let timings=found.availableTimings;
    let avaiCont=document.createElement('div');
    avaiCont.className="avail-timings-container";
    console.log(timings)
    timings.forEach(function(ele){
       
        let item=document.createElement('div');
        item.innerText=ele;
        item.addEventListener('click',function(){
            let stiming=document.getElementById('s-time');
            stiming.innerText=ele;
            chooseTiming.innerHTML="";
            let guestCont=document.getElementById('select-Guest-Container');
            guestCont.style.display="block";
            var guestCount=document.getElementById('guest-count');
            var continueButton=document.getElementById('continue');
            var counter=0;
            document.getElementById("add-guest").addEventListener('click',function(){
                continueButton.style.display="block";
                if(counter<=6){
                    counter++;
                    guestCount.innerText=counter;
                } 
            });
            document.getElementById('remove-guest').addEventListener('click',function(){
                if(counter==1){
                    continueButton.style.display="none";
                }
                
                if(counter>0){
                    counter--;
                    guestCount.innerText=counter;
                }
            });
        });
        avaiCont.append(item);
    });
    chooseTiming.append(availtitle,avaiCont);

}

var continuebutton=document.getElementById('continue');
continuebutton.addEventListener('click',function(){
    let bookpageCont=document.getElementById('bookpage-container');
    bookpageCont.innerHTML=booked();

});
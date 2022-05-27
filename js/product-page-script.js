

let productDetails=document.querySelector("#product-details");
fetchData();




async function fetchData(){
    try {
        let url="http://localhost:3000/products";
        let res= await fetch(url);
        let data= await res.json();
        // console.log(data);
        // console.log(data[0]);
        displayData(data);
        
    } catch (error) {
        console.log(error, "Error in fatching data");
        
    }
}

function displayData(productDatas){
    let productDetails=document.querySelector("#product-details");
    productDetails.innerHTML="";
    productDatas.forEach(product => {
        // console.log(product);
        // productDetails.innerHTML="";
        let linkEle=document.createElement("a");
        linkEle.setAttribute("href","bookpage.html")
        linkEle.setAttribute("id","linkEle");
       

        let card=document.createElement("div");

        let divImg=document.createElement("div");
        divImg.setAttribute("class","img-feature");

        let _img=document.createElement("img");
        _img.src=product.img;

        let _rating= document.createElement("div");
        _rating.textContent=product.rating;
        _rating.setAttribute("class","rate")

        divImg.append(_img,_rating);        

        let divText=document.createElement("div");
        divText.setAttribute("class","txt-feature");

        let _title= document.createElement("p");
        _title.textContent=product.title;
        _title.setAttribute("class","title")

        let _location= document.createElement("p");
        _location.textContent=product.location;

        let _price = document.createElement("p");
        _price.textContent=`₹ ${product.price} for 2 (approx )`;

        let _foodType= document.createElement("p");
        _foodType.textContent=product.foodType;

        let dine=document.createElement("span");
        dine.textContent="Dineout Pay ";
        dine.setAttribute("class","dine");
        dine.style.color="#F67373";
        dine.style.backgroundColor="#FFF4F4";
        dine.style.marginLeft="10px";
        
        card.addEventListener('click',function(){
            location.href='bookpage.html';
        });
        divText.append(_title,_location,_price,_foodType,dine);
        card.append(divImg,divText);
        linkEle.append(card);
        productDetails.append(linkEle);
        
    });
}




// apply filter functionality


async function fetchDataFilter(){
    try {
        let url="http://localhost:3000/products";
        let res= await fetch(url);
        let data= await res.json();
        // console.log(data);
        // console.log(data[0]);
        let filterDAta=sortAndDisplayData(data);

        // displayData(data);
        
    } catch (error) {
        console.log(error, "Error in fatching data");
        
    }

}


function sortAndDisplayData(data){
    
    let val=document.querySelector("#sortby").value;

    // based on ratting
    data.sort(function(a,b){
        if(val=="Rating"){
            return b.rating-a.rating;
        }else if(val=="Price: Low to High"){
            return a.price-b.price;
        }else if(val=="Price: High to Low"){
            return b.price-a.price;

        }else{
            return;
        }
        
    });
    // console.log(data);
    displayData(data);
}

let sort=document.querySelector("#sortby");
sort.addEventListener("change",function(){
    let val=document.querySelector("#sortby").value;
    console.log(val);
    fetchDataFilter(); 
});


// implement header function 


// function addNavBar(element){


// }
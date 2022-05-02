// write js code here corresponding to favourites.html
let favouriteArr=JSON.parse(localStorage.getItem("favourites"));
displaydata(favouriteArr);

function displaydata(data){
   data.forEach(function (elem,index) {
     let tr=document.createElement("tr");
     let td1=document.createElement("td");
     td1.innerText=elem.matchno;
     let td2=document.createElement("td");
     td2.innerText=elem.teamA;
     let td3=document.createElement("td");
     td3.innerText=elem.teamB;
     let td4=document.createElement("td");
     td4.innerText=elem.date;
     let td5=document.createElement("td");
     td5.innerText=elem.venue;
     let td6=document.createElement("td");
     td6.innerText="Delete";
     td6.style.cursor="pointer";
     td6.setAttribute("class","delfav");
     td6.addEventListener("click",function(){
         deleteFav(elem,index);
     }) 
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr); 
   }); 
   
}
function deleteFav(elem,index){
    favouriteArr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
    window.location.reload();
}
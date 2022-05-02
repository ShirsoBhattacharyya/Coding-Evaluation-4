// write js code here corresponding to matches.html
let submissionform=JSON.parse(localStorage.getItem("schedule"));
let favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];
document.querySelector("#filterVenue").setAttribute("onChange","handleVenueFilter()");


function handleVenueFilter(){
    let selectedVenue=document.querySelector("#filterVenue").value;
    let filteredList=submissionform.filter(function (elem){
        return elem.venue==selectedVenue;
    })
    displaydata(filteredList);
}


displaydata(submissionform);
function displaydata(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem){
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
        td6.innerText="Add as Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function (){
            addingtoFav(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    });
}
function addingtoFav(elem){
    favouriteArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
}
let latitude="";
let longitude="";

function getLocation(){

navigator.geolocation.getCurrentPosition(function(position){

latitude=position.coords.latitude;

longitude=position.coords.longitude;

document.getElementById("location").innerHTML=
"Latitude : "+latitude+
"<br>Longitude : "+longitude;

});

}

function submitComplaint(){

let category=document.getElementById("category").value;

let id="SWR"+Math.floor(Math.random()*10000);

let complaint={

id:id,

category:category,

lat:latitude,

lng:longitude

};

localStorage.setItem("complaint",JSON.stringify(complaint));

alert("Complaint Submitted Successfully!\nComplaint ID : "+id);

window.location="track.html";

}
console.log(document);

let flag = document.getElementById("flag");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

let country = prompt("Enter your contry's name");

if (country == "cameroon" || country == "Cameroon" || country == "cameroun" || country == "Cameroun" || country == "CAMEROUN") {
    item1.style.backgroundColor = "green";
    item2.style.backgroundColor = "red";
    item3.style.backgroundColor = "yellow";
}
else if(country == "senegal" || country == "Senegal") {
    item1.style.backgroundColor = "green";
    item2.style.backgroundColor = "yellow";
    item3.style.backgroundColor = "red";
}
else if(country == "guinee" || country == "guinea" || country == "Guinea" || country == "Guinee") {
    item1.style.backgroundColor = "red";
    item2.style.backgroundColor = "yellow";
    item3.style.backgroundColor = "green";
}
else if(country == "japon" || country == "Japon" || country == "japan" || country == "Japan" || country == "JAPAN") {
    item1.style.backgroundColor = "white";
    item2.style.backgroundColor = "red";
    item2.style.borderRadius = "50%"
    item2.style.width = "500px"
    item2.style.height = "500px"
    item3.style.backgroundColor = "white";
}
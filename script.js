/* NAVIGATION */
function goHome(){ window.location="home.html"; }
function goCart(){ window.location="cart.html"; }
function goShoes(){ window.location="shoes.html"; }
function goWatches(){ window.location="watches.html"; }
function goElectronics(){ window.location="electronics.html"; }

/* THEME */
function toggleTheme(){
document.body.classList.toggle("dark");
}

/* LOGIN SYSTEM */
function login(){
let name = prompt("Enter username:");
if(name){
localStorage.setItem("user", name);
alert("Logged in as " + name);
}
}

function signup(){
let name = prompt("Create username:");
if(name){
localStorage.setItem("user", name);
alert("Account created!");
}
}

function logout(){
localStorage.removeItem("user");
alert("Logged out!");
}

/* SEARCH */
function handleSearch(e){
if(e.key === "Enter"){

let query = e.target.value.toLowerCase();

if(query.includes("watch")){
localStorage.setItem("search", query);
window.location="watches.html";
}
else if(query.includes("shoe")){
localStorage.setItem("search", query);
window.location="shoes.html";
}
else if(query.includes("tv") || query.includes("electronics")){
localStorage.setItem("search", query);
window.location="electronics.html";
}
else{
alert("No results found");
}
}
}
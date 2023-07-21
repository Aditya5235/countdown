const APIURL = "https://fakestoreapi.com/products/category/electronics";

const getmovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    //    console.log(data)
    //    showmoview(data.results);
};

getmovies(APIURL);

const clock = () => {
    const endDate = "30 DECEMBER 2023 01:12:20 AM";
    const old = new Date(endDate);
    const now = new Date();
    let diff = (old - now) / 1000;
    if (diff < 0) return;

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600 % 24);
    const minuts = Math.floor(diff / 60 % 60)
    const seconds = Math.floor(diff % 60)

    let element = document.getElementById("end-date");
    let day = document.getElementById("day");
    let hour = document.getElementById("hour");
    let minut = document.getElementById("minut");
    let second = document.getElementById("second");
    element.innerHTML = endDate;
    day.innerHTML = days;
    hour.innerHTML = hours;
    minut.innerHTML = minuts;
    second.innerHTML = seconds;

    //            console.log(minuts)// console.log(seconds)
};
clock();
setInterval(() => {
    clock();

}, 1000)

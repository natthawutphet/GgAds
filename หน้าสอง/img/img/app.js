var referrer = document.referrer;
console.log(referrer);
console.log('xxxx');




var btn = document.getElementById("btn");

const urls = 'https://shop.p-phones.shop/';

btn.addEventListener('click', () => {
    window.location=urls;
})

var PgPhone = document.getElementById("img");

var allowedReferrer = "https://www.google.com/";
var referrer = document.referrer;

if (referrer === allowedReferrer) {
    var PgPhone = document.getElementById("img");


const images = [
     "<img src='https://shop.p-phones.shop/img/img/1.jpg'>",
     "<img src='https://shop.p-phones.shop/img/img/2.jpg'>",
     "<img src='https://shop.p-phones.shop/img/img/3.jpg'>",
     "<img src='https://shop.p-phones.shop/img/img/4.jpg'>",
     "<img src='https://shop.p-phones.shop/img/img/5.jpg'>"

 ];

 PgPhone.innerHTML = images;
} else {
    const image = [
        "<img src='https://shop.p-phones.shop/img/img/6.jpg'>",
        "<img src='https://shop.p-phones.shop/img/img/7.jpg'>",
        "<img src='https://shop.p-phones.shop/img/img/8.jpg'>",
        "<img src='https://shop.p-phones.shop/img/img/9.jpg'>",
        "<img src='https://shop.p-phones.shop/img/img/10.jpg'>"
  
    ];

    PgPhone.innerHTML = image;

};


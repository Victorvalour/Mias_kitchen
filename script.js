const orderButton = document.querySelector(".general-btn");
orderButton.onclick = () => alert("Your order has been placed.")

const orderButton2 = document.querySelector(".order-btn");
orderButton2.onclick = () => alert("Your order has been placed.")

const menuButton = document.querySelector('.hamburger-icon-orange');
const menuPanel = document.querySelector('.menu-panel');
const body = document.querySelector('body')
if (menuPanel.style.display ="none") {
menuButton.onclick = () => menuPanel.style.display ="block"}
 
 onscroll = () => menuPanel.style.display ="none";

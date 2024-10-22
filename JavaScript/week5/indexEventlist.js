const btn = document.getElementById("btn");
btn.addEventListener("mouseover", () => {
  //mouseover is a listener there are differernt kind of listener
  btn.style.color = "white";
  btn.style.backgroundColor = "blue";
  btn.style.padding = "1rem";
  btn.style.borderRadius = "2rem";
  btn.style.border = "none";
});

const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
  btn2.style.backgroundColor = "red";
};

const imgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6juIAFATO3bJZFAppnE0pWLCyaXZPDRc9g&s",
  "https://assets-prd.ignimgs.com/2024/08/15/blackmythwukong-review-blogroll-1723762612149.jpg",
  "https://i.ytimg.com/vi/u83VdXAVq08/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDp4J1COPhZRAGM3Homl1lNPib5nQ",
  "https://gaming-cdn.com/images/products/7678/616x353/black-myth-wukong-pc-game-steam-europe-and-us-and-canada-cover.jpg?v=1724142714",
];

const img = document.getElementById('wukongImg')

console.log(imgs.length)
const changeImg = document.getElementById('changeImg')
changeImg.addEventListener('click',(event)=>{
  console.log(event.type) 
  const random = Math.round(Math.random() * imgs.length)
  const src = imgs[random]
  console.log(src)
  img.setAttribute('src',src) 
  
  console.log(random)
})


const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener("scroll",()=>{
  // if(window.pageYOffset>=navbarOffsetTop)
  // {
  //   navbar.classList.add("sticky");
  // }
  // else{
  //   navbar.classList.remove("sticky");
  // }
  mainFn();
})

// if(window.pageYOffset+window.innerHeight >= progress.offsetTop)
// {
//   document.querySelectorAll(".progress-percent").forEach((el,i) =>
//   {
//     el.style.width = `${progressBarPercents[i]}%`;
//   });
// }

const mainFn=()=>{
  window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=navbarOffsetTop)
    {
      navbar.classList.add("sticky");
    }
    else{
      navbar.classList.remove("sticky");
    }
  })
  
  if(window.pageYOffset+window.innerHeight >= progress.offsetTop)
  {
    document.querySelectorAll(".progress-percent").forEach((el,i) =>
    {
      el.style.width = `${progressBarPercents[i]}%`;
    });
  }
}


// sections.forEach((section, i) => {
//   if(window.pageYOffset >= section.offsetTop - 10) {
//     navbarLinks.forEach((navbarLink) => {
//       navbarLinks.forEach(navbarLink => {
//         navbarLink.classList.remove("change");
//       })
//     });
//     navbarLinks[i].classList.add("change");
//   }
// });

window.addEventListener('resize',() =>
{
  window.location.reload();
})
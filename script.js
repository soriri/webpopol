const toggleBtn = document.querySelector('.m_side_btn');
const menu = document.querySelector('nav');
const lcon = document.querySelector('.close_btn');


toggleBtn.addEventListener('click', () => {
    menu.style.transform = "translateX(0px)";
  });

  lcon.addEventListener('click', ()=>{
    console.log("DD")
    menu.style.transform = "translateX(-295px)"
  })
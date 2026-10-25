const body = document.body;
const menu_btn = document.getElementById('menu');
const navlinks = document.getElementById('btns');

body.addEventListener('wheel', e => {
  if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
    e.preventDefault();
    body.scrollLeft += e.deltaY;
  }
},{passive:false});


menu.addEventListener('click', menu_toggle);
function menu_toggle(){
  // const position = navlinks.style.right = '0px';
  // navlinks.toggle = navlinks.style.right = '0px';
    // const position  =navlinks.style.right = '0px';
  navlinks.classList.toggle("menu_show");
  // console.log('menu clicked');
  // alert('Are You Sure ?');
}
  



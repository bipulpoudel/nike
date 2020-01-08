var nav = document.getElementById('nav-main1');
nav.addEventListener('mouseover',expand);
nav.addEventListener('mouseleave',close);
var window1 = document.getElementById('nav-window1');
window1.addEventListener('mouseover',expand);
window1.addEventListener('mouseleave',close);
function expand()
{
    setTimeout(function(){ window1.style.display = 'block';},300);
}
function close()
{
    setTimeout(function(){ window1.style.display = 'none';},300);
}


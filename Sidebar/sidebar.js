var menu = document.getElementsByTagName("a")[0];
var close = document.getElementsByClassName("xmark")[0];
var sideBar = document.getElementById("sidebar");
var sideBarPosition = window.getComputedStyle(sideBar).bottom;
const bottom = sideBarPosition.substring(0, sideBarPosition.indexOf("px"));
var i = bottom;
var j = 0;
var fun;

function pullMenu(x)
{
    if(x)
    {
        fun = setInterval(openMenu, 1);
        i = bottom;
    }
    else
    {
        fun = setInterval(closeMenu, 1);
        j = 0;
    }
}

function openMenu()
{
    if(i > 0)
    {
        console.log(i);
        i -= 10;
        sideBar.style.bottom = i + "px";
    }
    else
    {
        clearInterval(fun);
    }
}

function closeMenu()
{
    if(j < bottom)
    {
        console.log(j);
        j += 10;
        sideBar.style.bottom = j + "px"; 
    }
    else
    {
        clearInterval(fun);
    }
}
menu.addEventListener("click", function(){ pullMenu(1) }, false);
close.addEventListener("click", function(){ pullMenu(0) }, false);

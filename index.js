{
    let menu=document.querySelector('#menu-icon')
    let navbar=document.querySelector('.navbar')
    menu.onclick = () => {
        menu.classList.toggle('fa-solid');
        navbar.classList.toggle('open');
        
    }
}
{
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-content")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-content")
    }
}
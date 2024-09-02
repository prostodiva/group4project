document.addEventListener("DOMContentLoaded", function() {

    //navBarMenu interaction
    const menuItemElement = document.getElementById("active");
    menuItemElement.addEventListener("mouseover", 
        (event) => {
            event.target.style.color= "#91d511";
            //smooth color change
            event.target.style.transition="all 0.5s";
            event.target.style['text-decoration']='underline';
        });
    //color reset
    menuItemElement.addEventListener("mouseout", 
        (event)  => {
            event.target.style.color ="";
            event.target.style.transition="all 0.3s";
            event.target.style['text-decoration']='';
        });   
    //support
    const supportElement = document.getElementById("active2");
    supportElement.addEventListener("mouseover", 
        (event) => {
            event.target.style.color="black";
            event.target.style.transition="all 0.5s";
            event.target.style['text-decoration']='underline';
        });
    //reset
    supportElement.addEventListener("mouseout", 
        (event) => {
            event.target.style.color="#91d511";
            event.target.style.transition="all 0.3s";
            event.target.style['text-decoration']='';
        });
    });

window.onload = function () {





const dropDown = () => {

    
    let navItems = document.querySelectorAll(".nav-i");
    let subMenus = document.querySelectorAll(".sub-menu");

    if (navItems || subMenus){


  


    for (let i=0; i<=navItems.length;i++){

        for (let j=0; j<=subMenus.length;j++){


        navItems[i].addEventListener("mouseenter", function(){

            subMenus[i].style.visibility = "visible";
        
        
        });
        
        navItems[i].addEventListener("mouseleave",function(){
        
        subMenus[i].style.visibility = "hidden";
        
        
        });



    }





    };


}


};


dropDown();
console.log(navItems);
console.log(subMenus);
    
};

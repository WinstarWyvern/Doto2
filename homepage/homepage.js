$(document).ready(function(){

    var x = 0;

   $("#prev").click(function(){
       if(x >= 100) x-= 100;
       else x = 200;

        $(".slider").css("left",-x+"%")
   })

   $("#next").click(function(){
        if(x <= 100) x+= 100;
        else x = 0;

         $(".slider").css("left",-x+"%")
})

})

function dropdownheader() {
    document.getElementById("dropbtn").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = $(".dropdown-content");
        let i = 0;
        while (i < dropdowns.length) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            i++;
        }
    }
}
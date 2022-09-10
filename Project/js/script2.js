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
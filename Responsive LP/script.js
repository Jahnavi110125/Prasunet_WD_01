
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hreg").onclick = function(){
        document.querySelector(".regcontent").style.display = "block";
        document.querySelector(".logcontent").style.display = "none";
        document.querySelector("#hreg").style.textDecoration = "underline";
        document.querySelector("#hlog").style.textDecoration = "none";
    }

    document.getElementById("hlog").onclick = function(){
        document.querySelector(".regcontent").style.display = "none";
        document.querySelector(".logcontent").style.display = "block";
        document.querySelector("#hreg").style.textDecoration = "none";
        document.querySelector("#hlog").style.textDecoration = "underline";
    }        

    function toggleDropdown() {
        var dropdown = document.getElementById("dropdown-content");
        dropdown.classList.toggle("show");
    }
    
    document.querySelector(".dropbtn").onclick = function(){
        toggleDropdown()
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("rnavi1");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    
    
    
});
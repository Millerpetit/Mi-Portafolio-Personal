window.addEventListener("scroll", () => {
    var nav = document.getElementById("nav");
    const viewport = window.innerHeight;
    nav.classList.toggle("fixed", window.scrollY > viewport);
});


const navbarToggler = document.getElementById('navbarToggler');

navbarToggler.addEventListener("click", () => {
    // Obtiene el icono del span
    const icon = navbarToggler.querySelector('i');

    //Cambiar el icono en base al estado del menu
    if(navbarToggler.classList.contains('collapsed')){
        //Menu colapsado
        icon.classList.remove('fa-sharp', 'fa-solid', 'fa-x');
        icon.classList.add('fa-sharp', 'fa-solid', 'fa-bars');
    }else{
        icon.classList.remove('fa-sharp', 'fa-solid', 'fa-bars');
        icon.classList.add('fa-sharp', 'fa-solid', 'fa-x');
    }
});

// Para que al dar click a un enlace del menu, el menu no se quede desplegado
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('li a');

    links.forEach((link) => {
        link.addEventListener("click", () => {
            const toggler = document.querySelector(".navbar-toggler");

            // Evaluando si el boton existe y si esta desplegado
            if(toggler && toggler.getAttribute("aria-expanded") === "true"){
                toggler.click();
            }
        })
    })
})

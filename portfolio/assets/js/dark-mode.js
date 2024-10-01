document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = document.getElementById('icon');
    const body = document.body;
  
    darkModeToggle.addEventListener('change', function () {
      if (darkModeToggle.checked) {
        body.setAttribute('data-bs-theme', 'dark');
        icon.classList.remove('fa-solid','fa-moon');
        icon.classList.add('fa-solid','fa-sun'); // Cambia la clase del icono al modo oscuro
        // Guarda el modo oscuro en el localStorage
        localStorage.setItem('mode', 'dark');
      } else {
        body.setAttribute('data-bs-theme', 'light');
        icon.classList.remove('fa-solid','fa-sun');
        icon.classList.add('fa-solid','fa-moon'); // Cambia la clase del icono al modo claro
        // Guarda el modo claro en el localStorage
        localStorage.setItem('mode', 'light');
      }
    });

    if(localStorage.getItem('mode') === 'dark'){
      darkModeToggle.checked = true;
      body.setAttribute('data-bs-theme', 'dark');
      icon.classList.add('fa-solid','fa-sun');
    }else{
      body.setAttribute('data-bs-theme', 'light');
      icon.classList.add('fa-solid','fa-moon');
    }
});
  
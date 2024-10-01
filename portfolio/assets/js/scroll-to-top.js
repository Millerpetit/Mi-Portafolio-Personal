window.onscroll = function (){
    const ScrollToTopButton = document.querySelector('#scrollToTop');

    if(document.documentElement.scrollTop > 100){
        ScrollToTopButton.classList.remove('d-none');
        ScrollToTopButton.classList.add('d-block');
    }else{
        ScrollToTopButton.classList.remove('d-block');
        ScrollToTopButton.classList.add('d-none');
    }
}

document.querySelector('#scrollToTop').addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
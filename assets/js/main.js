const current_year = document.getElementById('current_year');
const year = new Date().getFullYear();
current_year.textContent = year;


// page active 
const  windowPathname = window.location.pathname;
const navELLinks = document.querySelectorAll('.nav_link');
console.log(navELLinks)




navELLinks.forEach( navLinkEl => {
    if( navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }else {
        navELLinks[0, 4].classList.add('active')
        // navELLinks[4].classList.add('active')
    }


    // const navLinkUrl = new URL(navLinkEl.href).pathname;
    // if((windowPathname === navLinkUrl) || (windowPathname === '/index.html' && windowPathname === '/')) {
    //     navLinkEl.classList.add('active')
    // }

})



// mobile menu 
const menu_bar_icon = document.getElementById('menu_bar_icon');
const mobile_menu_close = document.getElementById('mobile_menu_close');
const moble_menu_container = document.getElementById('moble_menu_container');

menu_bar_icon.addEventListener('click', () => {
    moble_menu_container.classList.add('active')
    mobile_menu_close.classList.add('active')
});
mobile_menu_close.addEventListener('click', () => {
    moble_menu_container.classList.remove('active')
});




// cv fole download 
if(windowPathname === '/index.html') {
    document.getElementById('cv_download').addEventListener('click', () => {
        const file = '/assets/images/cv/cv.pdf';
        const link = document.createElement('a');
        link.download = 'cv.pdf';
        link.href = file;
        link.click();
        link.remove()
    });

}


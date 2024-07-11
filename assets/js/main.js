const current_year = document.getElementById('current_year');
const year = new Date().getFullYear();
current_year.textContent = year;


const current_page = window.location.pathname;
console.log(current_page);
const list_item = document.querySelectorAll('.list_item');

if(current_page === '/index.html') {
    console.log('index.html')
    if(list_item[0].textContent.toLowerCase() === 'home') {
        list_item[0].id = 'active'
    }
}
else {
    console.log('blog.html')
    if(list_item[1].textContent.toLowerCase() === 'blogs') {
        // list_item[0].classList.add('active')
        list_item[1].id = 'active'
    }
}
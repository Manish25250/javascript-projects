const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener('click', function (event) {
    //console.log(event.target.dataset.id);
    const id = event.target.dataset.id;
    if(id) {
        //remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            event.target.classList.add("active");
        });
        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
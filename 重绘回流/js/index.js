var viewHeight =document.documentElement.clientHeight//获取可视区高度

window.onscroll = function () {
    function checkImgs() {
        const imgs = document.getElementsByClassName('image-item');
        Array.from(imgs).forEach(el => {
            if (el.getBoundingClientRect().top < viewHeight - 100) {
                el.src = el.dataset.original;
            }
        })
    }
    checkImgs();
}
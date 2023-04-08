function addToCart() {
    var btn = document.querySelector('.cart-items');
    btn.innerText++;
}

function contactUs() {
    alert('Contact us at 555-5555');
}

function sortedBy() {
    var sortedSpan = document.querySelector('#sorted-span');
    var sortedBy = document.querySelector('#select-sort-type');
    sortedSpan.innerText = sortedBy.value;
}
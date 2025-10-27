document.addEventListener("DOMContentLoaded", function() {
    const clockIcon = document.querySelector('.bi.bi-clock');
    const datePicker = document.getElementById('datePicker');

    datePicker.style.display = 'none';  

    clockIcon.addEventListener('click', function() {
        if(datePicker.style.display === 'none' || datePicker.style.display === '') {
            datePicker.style.display = 'block';
        } else {
            datePicker.style.display = 'none';
        }
    });
});

document.getElementById('datePicker').min = new Date().toISOString().split('T')[0];
//check the time for invalid order

function addToCart(cartButton) {
    const datePicker = document.getElementById('datePicker');
    
    // 检查是否已选择日期
    if (!datePicker.value) {
        alert("Please select a date before adding to cart!");
        return; // 没有选择日期，不执行后面的代码
    }

    // 使用日期作為關鍵字
    const dateAttr = 'data-added-' + datePicker.value;

    // 检查是否已经添加日期
    if (cartButton.getAttribute(dateAttr) === 'true') {
        alert("Product for this date is already in cart!");
    } else {
        alert("Add to Cart Successful!");
        cartButton.setAttribute(dateAttr, 'true');
    }
}



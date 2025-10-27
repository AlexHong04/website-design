document.addEventListener('DOMContentLoaded', function()
{
    const buttons = document.querySelectorAll('.questionButton');

    buttons.forEach(button =>
    {
        button.addEventListener('click', function()
        {
            const description = this.parentElement.nextElementSibling;
            if(description.style.display === "none" || description.style.display === '')
            {
                description.style.display = "block";
                this.textContent = "-"
            }
            else
            {
                description.style.display = "none";
                this.textContent = "+";
            }
        });
    });
});

function performSearch() {
    //關鍵字
    const query = document.getElementById('searchInput').value.toLowerCase().trim();

    // 打印查询关键字
    console.log("Search Query:", query);

    // 問題項目
    const items = document.querySelectorAll('.questionItem');

    // 打印问题数量
    console.log("Total Question Items:", items.length);

    // 顯示或隱藏
    items.forEach(item => {
        const keyword = item.getAttribute('data-keyword') || "";
        if (keyword.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}


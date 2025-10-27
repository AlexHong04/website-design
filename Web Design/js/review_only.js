function pageNav(page) {
  const pageOne = document.getElementById("page1");
  const pageTwo = document.getElementById("page2");
  const count = document.getElementById("countPage");

  if (page === 2) {
    pageTwo.style.display = "block";
    pageOne.style.display = "none";
    count.innerText = "2";
  } else {
    pageTwo.style.display = "none";
    pageOne.style.display = "block";
    count.innerText = "1";
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//     const pages = document.querySelectorAll(".page");
//     const prevButton = document.getElementById("prevPage");
//     const nextButton = document.getElementById("nextPage");
//     const count = document.getElementById("countPage");
//     let currentPage = 0;
//     function showPage(pageNumber) {
//       pages.forEach((page, index) => {
//         if (index === pageNumber) {
//           page.style.display = "block";
//         } else {
//           page.style.display = "none";
//         }
//       });
//     }
//     function updateButtons() {
//       prevButton.disabled = currentPage === 0;
//       nextButton.disabled = currentPage === pages.length - 1;
//       count.innerHTML = currentPage + 1;
//     }
//     prevButton.addEventListener("click", function () {
//       if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//         updateButtons();
//       }
//     });
//     nextButton.addEventListener("click", function () {
//       if (currentPage < pages.length - 1) {
//         currentPage++;
//         showPage(currentPage);
//         updateButtons();
//       }
//     });
//     showPage(currentPage);
//     updateButtons();
// });

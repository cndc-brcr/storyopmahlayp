document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const categoriesList = document.querySelector(".categories");

    toggleBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        categoriesList.style.display = categoriesList.style.display === "block" ? "none" : "block";
    });
});


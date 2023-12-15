// Show Products 
let lis = document.querySelectorAll("#sidebar li");
let products = document.querySelectorAll("#pro .single-shop-product");


lis.forEach((li) => {
    li.addEventListener("click", function (e) {
        products.forEach((pro) => {
            pro.parentElement.style.display = "none";
            document.querySelectorAll(this.dataset.fet).forEach((ele) => {
                ele.parentElement.style.display = "block";
            });
        });
    });
});

// Search Bar
const search = document.querySelector(".con input");
    search.addEventListener("input",() =>{
        console.log(search.value)
    })
                                
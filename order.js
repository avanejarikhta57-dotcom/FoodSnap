let orderForm = document.getElementById("orderForm");

let result = document.createElement("p");
result.style.fontWeight = "bold";
result.style.marginTop = "10px";
orderForm.appendChild(result);

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let total = 0;


    if (document.getElementById("masalachai").checked) {
        let qty = document.getElementsByName("MasalaChaiQty")[0].value;
        total = total + 20 * Number(qty);
    }

    if (document.getElementById("samosa").checked) {
        let qty = document.getElementsByName("SamosaQty")[0].value;
        total = total + 15 * Number(qty);
    }

    if (document.getElementById("sandwich").checked) {
        let qty = document.getElementsByName("SandwichQty")[0].value;
        total = total + 40 * Number(qty);
    }

    if (document.getElementById("coffee").checked) {
        let qty = document.getElementsByName("CoffeeQty")[0].value;
        total = total + 25 * Number(qty);
    }


    if (document.getElementById("pizza").checked) {
        let qty = document.getElementsByName("PizzaQty")[0].value;
        total = total + 100 * Number(qty);
    }


    if (document.getElementById("paneerroll").checked) {
        let qty = document.getElementsByName("PaneerRollQty")[0].value;
        total = total + 50 * Number(qty);
    }

    // Veg Puff
    if (document.getElementById("vegpuff").checked) {
        let qty = document.getElementsByName("VegPuffQty")[0].value;
        total = total + 20 * Number(qty);
    }

    // Lemonade
    if (document.getElementById("lemonade").checked) {
        let qty = document.getElementsByName("LemonadeQty")[0].value;
        total = total + 15 * Number(qty);
    }

    if (total === 0) {
        result.textContent = "Please select at least one item.";
    } else {
        result.textContent = "Your total bill is ₹" + total;
    }
});

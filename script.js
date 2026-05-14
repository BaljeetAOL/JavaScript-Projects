function placeOrder() {
    let total = 0;
    let receipt = "";

    // SIZE
    const size = document.querySelector('input[name="size"]:checked').value.split("|");
    receipt += `<p>${size[0]}</p>`;
    total += Number(size[1]);

    // CRUST
    const crust = document.querySelector('input[name="crust"]:checked').value.split("|");
    receipt += `<p>${crust[0]}</p>`;
    total += Number(crust[1]);

    // SAUCE
    const sauce = document.querySelector('input[name="sauce"]:checked').value.split("|");
    receipt += `<p>${sauce[0]}</p>`;

    // CHEESE
    const cheese = document.querySelector('input[name="cheese"]:checked').value.split("|");
    receipt += `<p>${cheese[0]}</p>`;
    total += Number(cheese[1]);

    // VEGGIES
    const vegs = document.querySelectorAll(".veg:checked");
    vegs.forEach(v => receipt += `<p>${v.value}</p>`);
    if (vegs.length > 1) total += vegs.length - 1;

    // MEAT
    const meats = document.querySelectorAll(".meat:checked");
    meats.forEach(m => receipt += `<p>${m.value}</p>`);
    if (meats.length > 1) total += meats.length - 1;

    document.getElementById("orderList").innerHTML = receipt;
    document.getElementById("total").innerHTML = `Total Price: $${total.toFixed(2)}`;
}
``
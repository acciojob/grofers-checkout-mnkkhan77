// Create and append the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class 'price' (corrected from 'prices')
    const prices = document.querySelectorAll(".price");

    // Convert NodeList to an array and compute total sum
    let totalPrice = Array.from(prices)
        .map(price => parseFloat(price.textContent.trim()) || 0) // Handle non-numeric values
        .reduce((sum, value) => sum + value, 0); // Sum up the values

    // Remove any existing total row before adding a new one
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total price
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow";

    // Create a cell that spans across both columns and add an ID for Cypress test
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.id = "ans"; // Adding ID for Cypress
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;

    // Append the cell to the row, and row to the table
    totalRow.appendChild(totalCell);
    document.querySelector("table").appendChild(totalRow);
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);
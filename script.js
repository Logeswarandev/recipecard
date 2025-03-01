function showSecondBox() {
    if (!document.getElementById("box2")) {
        let box2 = document.createElement("div");
        box2.classList.add("box");
        box2.id = "box2";
        box2.innerHTML = `
            <h1>Ingredients Required</h1>
            <hr>
            <p>Gather all the ingredients before starting.</p>
            <ol>
                <li>Oil - 100ml, Ghee - 50ml.</li>
                <li>Cinnamon, Cloves, Cardamom - 3 each.</li>
                <li>Onion - 1/4 kg.</li>
                <li>Ginger garlic paste - 4 tablespoons.</li>
                <li>Tomato - 3 pieces.</li>
                <li>Curd - 100ml.</li>
                <li>Mint leaves, Coriander leaves - 1 cup.</li>
                <li>Chili powder - 1 spoon.</li>
                <li>Salt - 1 1/2 spoon, Lemon - 1.</li>
                <li>Chicken - 1kg.</li>
                <li>Rice - 1kg.</li>
                <li>Water - 1 1/2 liter.</li>
            </ol>
            <div class="button-container">
                <button class="backbutton" onclick="hideBox('box2')">Back</button>
                <button onclick="showThirdBox()">Start to Cook</button>
            </div>
        `;
        document.querySelector(".container").appendChild(box2);
    }
}

function showThirdBox() {
    if (!document.getElementById("box3")) {
        let box3 = document.createElement("div");
        box3.classList.add("box");
        box3.id = "box3";
        box3.innerHTML = `
            <h1>Cooking Process</h1>
            <hr>
            <p>Follow the step-by-step instructions to cook biryani.</p>
            <ol>
                <li>Heat oil and ghee in a large pot.</li>
                <li>Add cinnamon, cloves, and cardamom; sauté.</li>
                <li>Add chopped onions and fry until golden brown.</li>
                <li>Add ginger-garlic paste and cook until aromatic.</li>
                <li>Add tomatoes, curd, and spices; cook for 5 minutes.</li>
                <li>Add chicken and cook until half done.</li>
                <li>Add rice, water, and let it simmer until fully cooked.</li>
                <li>Garnish with mint and coriander, then serve.</li>
            </ol>
            <div class="button-container2">
                <button onclick="hideBox('box3')">Back</button>
            </div>
        `;
        document.querySelector(".container").appendChild(box3);
    }
}

function hideBox(boxId) {
    let box = document.getElementById(boxId);
    if (box) {
        box.remove();
    }
}

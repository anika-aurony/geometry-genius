// Function to get input
function getInput(input) {
    const inputField = document.getElementById(input);
    const inputValue = inputField.value;
    console.log(typeof (inputValue))
    const inputFloat = parseFloat(inputValue);
    inputField.value = '';
    return inputFloat;
}

// Function to display result
function setOutput(output, p) {
    const container = document.getElementById('orderList');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const span1 = document.createElement('span');
    const sup = document.createElement('sup');
    const sup1 = document.createElement('sup');
    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-info');
    button.classList.add('w-50');
    button.classList.add('p-0');
    button.classList.add('ms-2');
    li.classList.add('mb-2');
    li.innerText = p;
    span.innerText = output;
    li.appendChild(span);
    const unit = ' cm'
    const power = '2';
    span1.innerText = unit;
    sup.innerText = power;
    sup1.innerText = power;
    li.appendChild(span1)
    li.appendChild(sup)
    button.innerText = 'convert to m'
    button.appendChild(sup1);
    li.append(button)
    container.appendChild(li)

}

function errorMessage(alert) {
    document.getElementById(alert).innerText = 'Please provide positive number';
}

// Triangle
document.getElementById('triangleButton').addEventListener('click', function () {
    const triangleb = getInput('triangleB');
    const triangleh = getInput('triangleH');
    if (triangleb >= 0 && triangleb <= 999999999 && triangleh >= 0 && triangleh <= 999999999) {
        const triangleArea = .5 * triangleb * triangleh;
        const triangleResult = triangleArea.toFixed(2)

        // Display Result
        const outputName = 'Triangle  '
        setOutput(triangleResult, outputName)
        document.getElementById('triangleAlert').style.display = "none"
    }
    else {
        document.getElementById('triangleAlert').style.display = "block"
        errorMessage('triangleAlert');
    }
})

// Rectangle
document.getElementById('rectangleButton').addEventListener('click', function () {
    const rectangleW = getInput('rectangleW');
    const rectangleL = getInput('rectangleL');
    if (rectangleW >= 0 && rectangleW <= 999999999 && rectangleL >= 0 && rectangleL <= 999999999) {
        const rectangleArea = rectangleW * rectangleL;
        const rectangleResult = rectangleArea.toFixed(2)

        // Display Result
        const outputName = 'Rectangle '
        setOutput(rectangleResult, outputName);
        document.getElementById('rectangleAlert').style.display = "none"
    }
    else {
        document.getElementById('rectangleAlert').style.display = "block"
        errorMessage('rectangleAlert');
    }
});

//Paralellogram
document.getElementById('paralellogramButton').addEventListener('click', function () {
    const paralellogramB = getInput('paralellogramB')
    const paralellogramH = getInput('paralellogramH')
    if (paralellogramB >= 0 && paralellogramB <= 999999999 && paralellogramH >= 0 && paralellogramH <= 999999999) {
        const paralellogramArea = paralellogramB * paralellogramH;
        const paralellogramResult = paralellogramArea.toFixed(2);

        // Display Result
        const outputName = 'Paralellogram ';
        setOutput(paralellogramResult, outputName);
        document.getElementById('parallelogramAlert').style.display = "none"
    }
    else {
        document.getElementById("parallelogramAlert").style.display = "block"
        errorMessage('parallelogramAlert');
    }
})

// Rhombus
document.getElementById('rhombusButton').addEventListener('click', function () {
    const rhombusD1 = getInput('rhombusD1')
    const rhombusD2 = getInput('rhombusD2')
    if (rhombusD1 >= 0 && rhombusD1 <= 999999999 && rhombusD2 >= 0 && rhombusD2 <= 999999999) {
        const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
        const rhombusResult = rhombusArea.toFixed(2)

        // Display Result
        const outputName = 'Rhombus '
        setOutput(rhombusResult, outputName)
        document.getElementById('rhombusAlert').style.display = "none"
    }
    else {
        document.getElementById("rhombusAlert").style.display = "block"
        errorMessage('rhombusAlert');
    }
})


// Pentagon
document.getElementById('pentagonButton').addEventListener('click', function () {
    const pentagonP = getInput('pentagonP')
    const pentagonB = getInput('pentagonB')
    if (pentagonP >= 0 && pentagonP <= 999999999 && pentagonB >= 0 && pentagonB <= 999999999) {
        const pentagonArea = 0.5 * pentagonP * pentagonB;
        const pentagonResult = pentagonArea.toFixed(2)

        // Display Result
        const outputName = 'Pentagon '
        setOutput(pentagonResult, outputName);
        document.getElementById('pentagonAlert').style.display = "none"
    }
    else {
        document.getElementById("pentagonAlert").style.display = "block"
        errorMessage('pentagonAlert');
    }
})

//Ellipse
document.getElementById('ellipseButton').addEventListener('click', function () {
    const ellipseA = getInput('ellipseA')
    const ellipseB = getInput('ellipseB')
    if (ellipseA >= 0 && ellipseA <= 999999999 && ellipseB >= 0 && ellipseB <= 999999999) {
        const ellipseArea = 3.14 * ellipseA * ellipseB;
        const ellipseResult = ellipseArea.toFixed(2)

        // Display Result
        const outputName = 'Ellipse '
        setOutput(ellipseResult, outputName);
        document.getElementById('ellipseAlert').style.display = "none";
    }
    else {
        document.getElementById("ellipseAlert").style.display = "block"
        errorMessage('ellipseAlert');
    }
})

// Set random color to card background
function setBgColor(patternName){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(patternName).style.backgroundColor = "#" + randomColor;
}
// Triangle Card
document.getElementById('bgColorTriangle').addEventListener('mouseenter', function () {
    setBgColor("setColorTriangle");    
})
// Rectangle Card
document.getElementById('bgColorRectangle').addEventListener('mouseenter', function () {
    setBgColor("setColorRectangle"); 
})
// Paralellogram Card
document.getElementById('bgColorParallelogram').addEventListener('mouseenter', function () {
    setBgColor("setColorParallelogram"); 
})
// Rhombus Card
document.getElementById('bgColorRhombus').addEventListener('mouseenter', function () {
    setBgColor("setColorRhombus"); 
})
// Pentagon Card
document.getElementById('bgColorPentagon').addEventListener('mouseenter', function () {
    setBgColor("setColorPentagon"); 
})
// Ellipse Card
document.getElementById('bgColorEllipse').addEventListener('mouseenter', function () {
    setBgColor("setColorEllipse"); 
})

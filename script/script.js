function getInput(input){
    const inputField = document.getElementById(input);
    const inputValue = inputField.value;
    const inputFloat = parseFloat(inputValue); 
    inputField.value ='';
    return inputFloat;
    
}

// Triangle
document.getElementById('triangleButton').addEventListener('click', function(){
    const triangleb = getInput('triangleB');
    const triangleh = getInput('triangleH');  
    const triangleArea = .5*triangleb*triangleh;
    const triangleResult = triangleArea.toFixed(2)
    console.log(triangleArea);
    ///
    const container = document.getElementById('orderList');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const span1 = document.createElement('span');
    const sup= document.createElement('sup');
    const sup1= document.createElement('sup');
    const button= document.createElement('button');
    button.classList.add('btn')
    button.classList.add('btn-info')
    button.classList.add('w-50')
    button.classList.add('p-0')
    button.classList.add('ms-1')
    const p = 'Triangle  '
    li.innerText = p;
    span.innerText = triangleResult;
    li.appendChild(span);
    const unit = 'cm'
    const power = '2' ;
    span1.innerText = unit;
    sup.innerText = power;
    sup1.innerText = power;
    li.appendChild(span1)
    li.appendChild(sup)
    button.innerText = 'convert to m'
    button.appendChild(sup1);
    li.append(button)
    container.appendChild(li)
})

// Rectangle
document.getElementById('rectangleButton').addEventListener('click', function(){
    const rectangleW = getInput('rectangleW');
    const rectangleL = getInput('rectangleL');   
    const rectangleArea = rectangleW*rectangleL;
    console.log(rectangleArea);
});

//Paralellogram
document.getElementById('paralellogramButton').addEventListener('click', function(){
    const paralellogramB = getInput('paralellogramB')
    const paralellogramH = getInput('paralellogramH')
    const paralellogramArea = paralellogramB * paralellogramH;
    console.log(paralellogramArea)
})

// Rhombus
document.getElementById('rhombusButton').addEventListener('click', function(){
    const rhombusD1 = getInput('rhombusD1')
    const rhombusD2 = getInput('rhombusD2')
    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
    console.log(rhombusArea)
})


// Pentagon
document.getElementById('pentagonButton').addEventListener('click', function(){
    const pentagonP = getInput('pentagonP')
    const pentagonB = getInput('pentagonB')
    const pentagonArea = 0.5 * pentagonP * pentagonB;
    console.log(pentagonArea);
})

//Ellipse
document.getElementById('ellipseButton').addEventListener('click', function(){
    const ellipseA = getInput('ellipseA')
    const ellipseB = getInput('ellipseB')
    const ellipseArea = 3.14 * ellipseA * ellipseB;
    console.log(ellipseArea);
})



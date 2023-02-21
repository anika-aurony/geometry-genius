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
    console.log(triangleArea);
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
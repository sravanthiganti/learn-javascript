const myCustomDiv = document.addEventListener('div');
for (let i=1; 1<=200;i++){
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph' + i;
    

    newElement.addEventListener('click', function respondToTheClick(evt){
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
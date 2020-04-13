let boxesContainer = document.getElementById('boxes');
document.getElementById('addButton').addEventListener('click', buttonClicked)

function addBox(text,container){
    let cardBody = document.createElement('div');
    let image = document.createElement('img');
    let deleteButton = document.createElement('a');

    cardBody.classList.add('card-body','border')
    image.classList.add('img-thumbnail');
    deleteButton.classList.add('btn','btn-danger','form-control');
    image.src = text;
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function(){this.parentNode.parentNode.removeChild(this.parentNode)};
    cardBody.appendChild(image);
    cardBody.appendChild(deleteButton);
    container.prepend(cardBody);
}

function buttonClicked(e){
    let url = document.getElementById('url').value;
    addBox(url,boxesContainer);
    e.preventDefault();    
}

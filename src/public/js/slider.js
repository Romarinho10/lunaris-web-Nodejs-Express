let indice = 1;
showSlide(indice);

function newSlide(n){
    showSlide(indice+=n);
}

function posSlide(n){
    showSlide(indice=n);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName('mySlider');
    let lines = document.getElementsByClassName('line');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }

    for (i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    for (i=0; i< lines.length; i++){
        lines[i].className = lines[i].className.replace(" active", "");
    }

    slides[indice-1].style.display= 'block';
    lines[indice-1].className += ' active'; //concatenar
}


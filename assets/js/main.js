const btnSwitch = document.querySelector('#switch');
const btnFilterP = document.querySelector('#filtro-p');
const btnFilterI = document.querySelector('#filtro-i');
const btnFilterX = document.querySelector('#filtro-x');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardo el modo "dark" en el Local Storage

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    };
});

    // Obtenemos el modo actual

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
};

btnFilterP.addEventListener('click', () => {
    document.body.classList.add('selectedP');
    
    if(document.body.classList.contains('selectedP')){
        document.body.classList.remove('selectedI', 'selectedX')
    }

    btnFilterP.classList.add('focus');
    
    if(btnFilterP.classList.contains('focus')){
        btnFilterI.classList.remove('focus');
        btnFilterX.classList.remove('focus');
    };
});

btnFilterI.addEventListener('click', () => {
    document.body.classList.add('selectedI');

    if(document.body.classList.contains('selectedI')){
        document.body.classList.remove('selectedX', 'selectedP')
    }
    
    btnFilterI.classList.add('focus');

    if(btnFilterI.classList.contains('focus')){
        btnFilterP.classList.remove('focus');
        btnFilterX.classList.remove('focus');
    };
});

btnFilterX.addEventListener('click', () => {
    document.body.classList.add('selectedX');

    if(document.body.classList.contains('selectedX')){
        document.body.classList.remove('selectedI', 'selectedP');
    };

    btnFilterX.classList.add('focus');

    if(btnFilterX.classList.contains('focus')){
        btnFilterP.classList.remove('focus');
        btnFilterI.classList.remove('focus');
    };
});
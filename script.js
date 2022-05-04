const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('car1');

selectEl.addEventListener('change', function() {

  
    
    switch(true) {
        case this.value === 'uni' : registrationImage.src = "3.png";
        break;
        case this.value === 'sed' : registrationImage.src = "1.png";
        break;
        case this.value === 'coup' : registrationImage.src = "2.png";
        break;
        case this.value === 'picap' : registrationImage.src = "4.png";
        break;
    
    }
})
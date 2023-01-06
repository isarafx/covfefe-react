// === Avatar Icon Changer ====
const img = document.querySelector('#Eavarta_icon');
const file = document.querySelector('#pAvarta_input');

file.addEventListener('change', function(){
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

    }
});
// =============================

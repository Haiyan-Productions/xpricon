// mobile ka menu down kar na ka lya
function my_menu_down() {
    document.getElementById("my-mob-nav-21-drop-option-bar").style.top = '10%';
    document.getElementById("my-menu-btn").style.display = 'none';
    document.getElementById("my-menu-x-btn").style.display = 'inline';
}
function my_menu_up() {
    document.getElementById("my-mob-nav-21-drop-option-bar").style.top = '-100%';
    document.getElementById("my-menu-btn").style.display = 'inline';
    document.getElementById("my-menu-x-btn").style.display = 'none';
}
let html = document.getElementById("a45").innerHTML;
document.getElementById('a46').innerHTML += html



// ===============================================================================

// for cli


const scriptURL1 = 'https://script.google.com/macros/s/AKfycbzia8XR3A8o0Jo41pE1c_waFnoXdWfHnvksg6Wvuxc5aZSAJfLjmhDwp16o5BJHkoiX/exec'
const form1 = document.forms['google-sheet1']



form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL1, { method: 'POST', body: new FormData(form1) })
        .then(response => alert("Dr.Win Cli Mode Download successfully"))
        .catch(error => console.error('Error!', error.message))
})


function download_cli_java() {
    window.open("files/Dr_Win.exe", "_self");
    document.getElementById("555cli").click();

}


// ===============================================================================
// for gui


const scriptURL2 = 'https://script.google.com/macros/s/AKfycbwoHKEduWQOH2nB8wOsZyuDY57zAXus5MRWPI_bS4FvyvZIcdUU9gQiY5Y5KhKFhu7l/exec'
const form2 = document.forms['google-sheet2']


form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form2) })
        .then(response => alert("Dr.Win Gui Mode Download successfully"))
        .catch(error => console.error('Error!', error.message))
})



function download_gui_java() {
    window.open("files/Dr.Win.zip", "_self");
    document.getElementById("555gui").click();

}





// ===============================================================================


// visit
const scriptURL = 'https://script.google.com/macros/s/AKfycbzgTpWMZrWYlaok2Cu6dIdhsa-Bjxj3Va_yEC8kF2NrghcJ8DmeZ9uvjB92v3YGYzcI/exec'
const form = document.forms['google-sheet']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
})


document.getElementById("555view").click();



// https://obfuscator.io/
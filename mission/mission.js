// Thank you!

const themeSelector = document.querySelector('select');
const logo = document.querySelector('img'); 

function changeTheme() {
    const selectedValue = themeSelector.value;

    if (selectedValue === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
    } 
    else {
        document.body.classList.remove('dark');
        logo.src = 'byui_logo.png'; 
    }
}

themeSelector.addEventListener('change', changeTheme);

// Select the toggle button and the body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to switch themes
function toggleTheme() {
    body.classList.toggle('dark-mode'); // Add/remove dark-mode class from body
            // Update the button text based on active theme
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = "Light Mode";//Dark mode active – show Light Mode option
    } else {
        themeToggleBtn.textContent = "Dark Mode";//Light mode active – show Dark Mode option
    }
}

        // Listen for button clicks and call toggleTheme function
themeToggleBtn.addEventListener('click', toggleTheme);

        //============================= TRANSLATION - language wrap
const langEl = document.querySelector('.langWrap');
        // i got here only 'a' tags from only '.langWrap' class
        //without involving other 'a' tags here
        //here is an alternative way to reach the same result:
        // grab the container…
        //const langWrap = document.querySelector('.langWrap');
        // …then only its <a> children
        //const links = langWrap.querySelectorAll('a');
const links = document.querySelectorAll('.langWrap a');
const logoEl = document.querySelector('.logo');
        //main logic start here
links.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        const attr = el.getAttribute('language');
        logoEl.textContent = data[attr].logo;
    });
});
        //JSON start here for Language wrap
        // \u00AE - it stands for R symbol
var data = {
    "english":{
        "logo": "Dmitriy Ivanov \u00AE"
    },
    "kyrgyz":{
        "logo":"Дмитрийбек Ивановбай \u00AE"
    },
    "russian":{
        "logo":"Дмитрий Иванов \u00AE"
    }
}
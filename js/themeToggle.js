document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('themeButton');
    const lightThemeLink = document.createElement('link');
    lightThemeLink.rel = 'stylesheet';
    lightThemeLink.href = 'css/light-theme.css';
    lightThemeLink.id = 'light-theme';

    themeButton.addEventListener('click', () => {
        if (document.getElementById('light-theme')) {
            document.getElementById('light-theme').remove();
        } else {
            document.head.appendChild(lightThemeLink);
        }
    });
}); 
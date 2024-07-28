document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const currentTheme = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
        themeToggle.textContent = currentTheme;

        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeToggle.textContent = savedTheme === 'dark' ? 'Modo Claro' : 'Modo Oscuro';
    }

    // Script para abrir automáticamente el acordeón según la fecha actual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    if (currentMonth === 7) {
        $('a[href="#inicio-01"]').tab('show');
    } else if (currentMonth === 8) {
        $('a[href="#inicio-02"]').tab('show');
    } else if (currentMonth === 9) {
        $('a[href="#inicio-03"]').tab('show');
    }
});

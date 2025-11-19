// Скрипт для интерактивности образовательной платформы

document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка к якорям
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Добавление функциональности для уровней понимания
    const levelElements = document.querySelectorAll('.level');
    levelElements.forEach(level => {
        const header = level.querySelector('h4');
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                const content = level.querySelector('ul');
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            });
        }
    });

    // Добавление подсветки активной секции в навигации
    const sections = document.querySelectorAll('.tech-section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Добавление функциональности для копирования команд установки
    const codeBlocks = document.querySelectorAll('.installation code');
    codeBlocks.forEach(codeBlock => {
        const button = document.createElement('button');
        button.textContent = 'Копировать';
        button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #3498db;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 0.8rem;
        `;
        
        const pre = codeBlock.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', () => {
            const text = codeBlock.innerText;
            navigator.clipboard.writeText(text)
                .then(() => {
                    button.textContent = 'Скопировано!';
                    setTimeout(() => {
                        button.textContent = 'Копировать';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Ошибка при копировании: ', err);
                });
        });
    });
    
    // Добавление функциональности для скрытия/показа требований
    const requirementLists = document.querySelectorAll('.requirements ul');
    requirementLists.forEach(list => {
        const header = list.previousElementSibling;
        if (header && header.tagName === 'H3') {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                list.style.display = list.style.display === 'none' ? 'block' : 'none';
            });
        }
    });
});
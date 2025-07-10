

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.opacity = 1;
                el.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(el); // если хочешь, чтобы один раз проигрывалось
            }
        });
    }, {
        threshold: 0.1 // когда хотя бы 10% элемента видно
    });

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.opacity = 1;
                el.classList.add('animate__animated', 'animate__backInLeft');
                observer.unobserve(el); // если хочешь, чтобы один раз проигрывалось
            }
        });
    }, {
        threshold: 0.1 // когда хотя бы 10% элемента видно
    });

    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.opacity = 1;
                el.classList.add('animate__animated', 'animate__backInRight');
                observer.unobserve(el); // если хочешь, чтобы один раз проигрывалось
            }
        });
    }, {
        threshold: 0.1 // когда хотя бы 10% элемента видно
    });

    document.querySelectorAll('.animate__animated-fadeInUp').forEach(el => {
        observer.observe(el);
    });
    document.querySelectorAll('.animate__animated-left').forEach(el => {
        observer2.observe(el);
    });
    document.querySelectorAll('.animate__animated-right').forEach(el => {
        observer3.observe(el);
    });
})

// animate__animated animate__animated-fadeInUp 
// animate__animated animate__animated-right
// animate__animated animate__animated-left  
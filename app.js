    const video = document.getElementById('intro-video');
        const introText = document.getElementById('intro-text');

        video.onended = function() {
            introText.classList.add('show');
            document.body.style.overflow = 'auto';
        };

        setTimeout(() => {
            if (!introText.classList.contains('show')) {
                introText.classList.add('show');
                document.body.style.overflow = 'auto';
            }
        }, 6000); 
        document.addEventListener('DOMContentLoaded', ( ) => {
            const glitchText = document.querySelector('.nickname');
        if (glitchText) {
            glitchText.setAttribute('data-text', glitchText.textContent);
            document.addEventListener('touched', (e) => {
                if (e.target !== glitchText) {
                   glitchText.blur();
                }
            }, 1000);
        }
    }); 
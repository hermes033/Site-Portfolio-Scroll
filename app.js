document.addEventListener('DOMContentLoaded', function() {
    const links2 = document.querySelectorAll('.link2');
    
    links2.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Varsayılan tıklama davranışını engelle
            const targetSection = document.querySelector('.box3'); // Hedef bölümü seç
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Hedef bölüme kaydır
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links1 = document.querySelectorAll('.link1');
    
    links1.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Varsayılan tıklama davranışını engelle
            const targetSection = document.querySelector('.box2'); // Hedef bölümü seç
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Hedef bölüme kaydır
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links3 = document.querySelectorAll('.link3');
    
    links3.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Varsayılan tıklama davranışını engelle
            const targetSection = document.querySelector('.box4'); // Hedef bölümü seç
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Hedef bölüme kaydır
            }
        });
    });
});

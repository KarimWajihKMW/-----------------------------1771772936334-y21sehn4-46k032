console.log('Al-Sahel Billboard Loaded');

document.addEventListener('DOMContentLoaded', () => {
    // Hover sound effect capability (optional placeholder)
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach((item, index) => {
        // Staggered animation on load
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });

    // Interactive Phone Button
    const phoneBtn = document.getElementById('phone-btn');
    if(phoneBtn) {
        phoneBtn.addEventListener('click', (e) => {
            console.log('Phone number clicked');
            // Visual feedback
            phoneBtn.classList.add('scale-110');
            setTimeout(() => phoneBtn.classList.remove('scale-110'), 200);
        });
    }
});
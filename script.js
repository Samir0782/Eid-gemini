// Phase 1 Logic: Find the moon
const moon = document.getElementById('moon');
const phase1 = document.getElementById('phase1');
const phase2 = document.getElementById('phase2');

moon.addEventListener('mouseover', () => {
    moon.style.opacity = '1';
    setTimeout(() => {
        phase1.classList.add('hidden');
        phase2.classList.remove('hidden');
    }, 1000);
});

// Phase 2 Logic: Decorations
function addLanterns() {
    const decor = document.getElementById('decorations');
    decor.innerHTML += '<span class="lanterns">🏮</span>';
}

function addBanner() {
    const decor = document.getElementById('decorations');
    decor.innerHTML = '<h3>🌙 EID MUBARAK 🌙</h3>' + decor.innerHTML;
}

// Phase 3 Logic: The Letter
function showLetter() {
    document.getElementById('phase2').classList.add('hidden');
    document.getElementById('phase3').classList.remove('hidden');
    document.getElementById('letter-text').innerText = 
        "May this Eid bring you and your family endless joy, peace, and prosperity. " +
        "Thank you for being part of my journey!";
}


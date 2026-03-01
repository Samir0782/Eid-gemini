/// Phase 1 Logic: Find the moon (Supports Touch & Click)
const moon = document.getElementById('moon');
const phase1 = document.getElementById('phase1');
const phase2 = document.getElementById('phase2');

// Function to trigger the transition
function revealMoon() {
    moon.style.opacity = '1';
    setTimeout(() => {
        phase1.classList.add('hidden');
        phase2.classList.remove('hidden');
    }, 800);
}

// Listen for both Mouse and Finger Taps
moon.addEventListener('mouseover', revealMoon); // For PC
moon.addEventListener('click', revealMoon);     // For Mobile Tap
moon.addEventListener('touchstart', revealMoon); // For faster Mobile response


// Phase 3 Logic: The Letter
function showLetter() {
    document.getElementById('phase2').classList.add('hidden');
    document.getElementById('phase3').classList.remove('hidden');
    document.getElementById('letter-text').innerText = 
        "May this Eid bring you and your family endless joy, peace, and prosperity. " +
        "Thank you for being part of my journey!";
}


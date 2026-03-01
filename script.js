function nextPhase(phaseId) {
    document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
    document.getElementById(phaseId).classList.add('active');
}

// Moon Logic - Works on Touch and Click
document.getElementById('moon').addEventListener('click', function() {
    this.style.opacity = '1';
    setTimeout(() => nextPhase('phase2'), 1000);
});

// Touchstart for faster mobile response
document.getElementById('moon').addEventListener('touchstart', function() {
    this.style.opacity = '1';
    setTimeout(() => nextPhase('phase2'), 1000);
});

function lightLanterns() {
    document.getElementById('decor-status').innerText = "The lanterns are glowing...";
    for(let i=0; i<8; i++) {
        let l = document.createElement("div");
        l.className = "lantern";
        l.innerText = "🏮";
        l.style.left = Math.random() * 90 + "%";
        l.style.animationDuration = (5 + Math.random() * 5) + "s";
        document.body.appendChild(l);
    }
}

let boxClicks = 0;
function openBox() {
    boxClicks++;
    let hint = document.getElementById('box-instruction');
    if(boxClicks < 3) {
        hint.innerText = `Tap ${3 - boxClicks} more times!`;
    } else {
        hint.innerText = "🎁 OPENING...";
        setTimeout(() => nextPhase('phase4'), 800);
    }
}

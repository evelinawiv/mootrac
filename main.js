let mood = '#f02';

function setMood(color) {
    mood = color;
}

window.onload = (event) => {
    document.querySelectorAll('.day').forEach(e => {
        e.addEventListener('click', (ev) => {
            ev.target.style.setProperty('background-color', mood);
        })
    })
    console.log('page is fully loaded');
  };


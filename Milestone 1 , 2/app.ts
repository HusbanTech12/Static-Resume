const showb = document.getElementById('Show') as HTMLButtonElement;
// const hide = document.getElementById('Hide') as HTMLButtonElement;
const skills = document.getElementById('Skills') as HTMLElement;

showb.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        
    } else {
        skills.style.display = 'none';
    }
});

// hide.addEventListener('click', () => {
//     if (skill.style.display === 'block') {
//         skill.style.display = 'none';
//     } else {
//         skill.style.display = 'block'
//     }
// });
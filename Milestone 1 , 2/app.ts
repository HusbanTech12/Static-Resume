const hideB = document.getElementById('Hide') as HTMLButtonElement;
const showB = document.getElementById('Show') as HTMLButtonElement;
const skills = document.getElementById('Skills') as HTMLElement;



skills.style.display = 'none';

showB.addEventListener('click', ()=> {
    
    skills.style.display = 'block';
    // } else {
    //     skill.style.display = 'none';
    // }
});

hideB.addEventListener('click', () => {
    
    skills.style.display = 'none';
    // } else {
    //     skill.style.display = 'block'
    // }
});
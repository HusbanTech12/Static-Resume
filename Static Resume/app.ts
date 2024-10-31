const hide = document.getElementById('Hide') as HTMLButtonElement;
const show = document.getElementById('Show') as HTMLButtonElement;
const skill = document.getElementById('Skills') as HTMLElement;



skill.style.display = 'block';


hide.addEventListener('click', () => {
    
    skill.style.display = 'none';
   
});


show.addEventListener('click', () => {
    skill.style.display = 'block'
});
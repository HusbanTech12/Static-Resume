var show = document.getElementById('Show');
// const hide = document.getElementById('Hide') as HTMLButtonElement;
var skill = document.getElementById('Skills');
show.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
// hide.addEventListener('click', () => {
//     if (skill.style.display === 'block') {
//         skill.style.display = 'none';
//     } else {
//         skill.style.display = 'block'
//     }
// });

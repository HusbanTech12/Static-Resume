var hideB = document.getElementById('Hide');
var showB = document.getElementById('Show');
var skills = document.getElementById('Skills');
skills.style.display = 'none';
showB.addEventListener('click', function () {
    skills.style.display = 'block';
    // } else {
    //     skill.style.display = 'none';
    // }
});
hideB.addEventListener('click', function () {
    skills.style.display = 'none';
    // } else {
    //     skill.style.display = 'block'
    // }
});

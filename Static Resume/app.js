var hideBtn = document.getElementById('Hide');
var showB = document.getElementById('Show');
var skill = document.getElementById('Skills');
skill.style.display = 'block';
hideBtn.addEventListener('click', function () {
    skill.style.display = 'none';
});
showB.addEventListener('click', function () {
    skill.style.display = 'block';
});

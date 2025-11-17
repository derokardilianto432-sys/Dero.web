document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Get the project name
        const project = button.getAttribute('data-project');
        // Display the form
        document.getElementById('form-title').innerText = `Form ${project}`;
        document.getElementById('projectForm').style.display = 'block';
    });
});
function closeForm() {
    document.getElementById('projectForm').style.display = 'none';
}

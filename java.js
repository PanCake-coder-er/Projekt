let currentId = localStorage.getItem('lastId') ? parseInt(localStorage.getItem('lastId')) : 1;

function updateFields() {
    const idField = document.getElementById('id_display');
    const dateField = document.getElementById('data_display');
    
    if (idField) idField.value = currentId;
    if (dateField) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        dateField.value = `${year}-${month}-${day}`;
    }
}

updateFields();

const form = document.getElementById('problemForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    fetch("https://hook.eu1.make.com/3c5y57it2qcxaadb2oxypsh1h09kxv8g", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Wysłano!");
        currentId++;
        localStorage.setItem('lastId', currentId);
        form.reset();
        updateFields();
    })
    .catch(err => console.error(err));
});

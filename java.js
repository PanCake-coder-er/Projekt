let currentId = 1;

function updateFields() {
    const idField = document.getElementById('id_display');
    const dateField = document.getElementById('data_display');
    
    if (idField) idField.value = currentId;
    if (dateField) dateField.value = new Date().toLocaleString("pl-PL");
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
        form.reset();
        updateFields();
    })
    .catch(err => console.error(err));
});

let currentId = 1;

function updateFields() {
    document.getElementById('id_display').value = currentId;
    document.getElementById('data_display').value = new Date().toLocaleString("pl-PL");
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

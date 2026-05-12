 let currentId = 1;

  function updateIdField() {
    document.getElementById('id_display').value = currentId;
  }

  updateIdField();

  const form = document.getElementById('problemForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();


    fetch("https://hook.eu1.make.com/3c5y57it2qcxaadb2oxypsh1h09kxv8g", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      currentId++;
      form.reset();
      updateIdField();
      alert("Wysłano poprawnie!");
    })
    .catch(error => {
      console.error(error);
      alert("Błąd wysyłki.");
    });
  });

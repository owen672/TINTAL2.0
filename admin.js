function enableEditing() {
  const pass = document.getElementById("adminPass").value;
  if (pass !== "copatintal2025") {
    alert("Contraseña incorrecta");
    return;
  }
  document.querySelectorAll("input").forEach(i => i.disabled = false);
}

function guardarDatos() {
  alert("Para guardar en Google Sheets, se debe configurar Google Apps Script con Web App.");
  // Aquí iría la integración con Google Apps Script, si se implementa.
}


document.addEventListener('DOMContentLoaded', () => {
  const csvUrl = 'https://docs.google.com/spreadsheets/d/17fxyyNhBzcc8nHUP8KQP3Yz56hKNkFxV/export?format=csv&gid=0';
  fetch(csvUrl)
    .then(res => res.text())
    .then(csv => {
      const data = parseCSV(csv);
      mostrarTabla(data);
    });
});

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return {
      Club: values[0],
      Oro: parseInt(values[1]),
      Plata: parseInt(values[2]),
      Bronce: parseInt(values[3])
    };
  });
}

function mostrarTabla(clubes) {
  const tbody = document.querySelector('#tablaClubes tbody');
  tbody.innerHTML = '';
  clubes.forEach((club, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td><input type="text" value="${club.Club}" disabled></td>
      <td><input type="number" value="${club.Oro}" disabled></td>
      <td><input type="number" value="${club.Plata}" disabled></td>
      <td><input type="number" value="${club.Bronce}" disabled></td>
    `;
    tbody.appendChild(row);
  });
}

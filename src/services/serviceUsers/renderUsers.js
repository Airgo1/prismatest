export class RenderUsers {

  tableId = "containerUsers"

  columns = [
    { label: "Nom" },
    { label: "Prénom" },
    { label: "Âge" },
    { label: "Couleur des yeux" },
    { label: "email" },
    { label: "Entreprise" },
    { label: "Addresse" }
  ]

  createContentHTML(data) {
    return `<table>
              <thead>
                ${this.columns.map((column) => `<th>${column.label}</th>`).join("\n")}
              </thead>
              <tbody>
                ${data.map((person) => `<tr>
                  <td>${person.name.last}</td>
                  <td>${person.name.first}</td>
                  <td>${person.age}</td>
                  <td>${person.eyeColor}</td>
                  <td>${person.email}</td>
                  <td>${person.company}</td>
                  <td>${person.address}</td>
                </tr>`).join("\n")}
              </tbody>
            </table>`
  }

  render(data) {
    if (document.getElementById(this.tableId))
      document.getElementById(this.tableId).innerHTML = this.createContentHTML(data);
  }
}

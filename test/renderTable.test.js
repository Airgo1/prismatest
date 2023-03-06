import { RenderUsers } from "../src/services/serviceUsers/renderUsers";

const renderUsers = new RenderUsers();

const testData = [
  {
    age: 38,
    eyeColor: "blue",
    name: {
      first: "Henson",
      last: "Jacobson",
    },
    company: "DELPHIDE",
    email: "henson.jacobson@delphide.org",
    address: "130 Brighton Court, Barrelville, Arkansas, 2523",
  }
]

const expectedTableHtml = `
      <table>
        <thead>
          <th>Nom</th>
<th>Prénom</th>
<th>Âge</th>
<th>Couleur des yeux</th>
<th>email</th>
<th>Entreprise</th>
<th>Addresse</th>
        </thead>
        <tbody>
          <tr>
            <td>Jacobson</td>
            <td>Henson</td>
            <td>38</td>
            <td>blue</td>
            <td>henson.jacobson@delphide.org</td>
            <td>DELPHIDE</td>
            <td>130 Brighton Court, Barrelville, Arkansas, 2523</td>
          </tr>
        </tbody>
      </table>`

describe("test render table", () => {

  it("should build html correctly", () => {
    expect(renderUsers.createContentHTML(testData)).toEqual(expectedTableHtml);
  });
});
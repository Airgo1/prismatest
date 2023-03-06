import { ManageUsers } from "./manageUsers"
import { RenderUsers } from "./renderUsers"
import { handleError } from "./handleError"

const manageUsers = new ManageUsers()
const renderUsers = new RenderUsers()

export const main = async () => {
  
  // GET query parameters from URL
  const params = new URLSearchParams(window.location.search)
  const age = params.get("age")
  const eyeColor = params.get("eyeColor")

  // Construction de la requete
  const query = {};
  if (age) query.age = age
  if (eyeColor) query.eyeColor = eyeColor

  try {
    // GET users data 
    const data = await manageUsers.fetchData(query)

    // Render data in table
    renderUsers.render(data)
  } catch (error) {
    handleError(error)
  }
};

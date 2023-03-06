import { httpClient } from "../httpClient/httpClient";

export class ManageUsers {
  /**
   * @param {Object} query Query object for filter list users with attribute eyeColor and age
   */
  async fetchData(query) {
    // validate query to verfy that the data eyeColor and age are correct
    this.validateQuery(query);
    
    // Get data users
    const fetchedData = await httpClient.get("data.json");

    // Filter data with the query (eyeColor or/and age)
    return this.filterData(fetchedData, query);
  }

  /**
   * @param {query} query Query object {age, eyeColor}
   */
  validateQuery(query) {
    // Check query  age and eyeColor
    if ("age" in query) this.validateAge(query.age)
    if ("eyeColor" in query) this.validateEyeColor(query.eyeColor)
  }

  /**
   * @param {string} age  Age format xx-xx
   * @returns             If age is correct return TRUE else return False
   */
  validateAge(age) {
    const { startAgeRange, endAgeRange } = this.getAgeRangeFromString(age);

    if (isNaN(startAgeRange) || isNaN(endAgeRange)) {
      throw new Error(ManageUsersErrors.QUERY_AGE_INVALID_INPUT);
    }

    // check the intervale
    if (endAgeRange - startAgeRange !== 5) {
      throw new Error(ManageUsersErrors.QUERY_AGE_INVALID_RANGE);
    }

    // check if age is between 20 and 40
    if (endAgeRange > 40 || startAgeRange < 20) {
      throw new Error(ManageUsersErrors.QUERY_AGE_INVALID_MIN_MAX_AGE);
    }
    return true;
  }

  /**
   * @param {string} eyeColor   Eye color
   * @returns                   return True if color is bue, green or brown else throw error
   */
  validateEyeColor(eyeColor) {
    const validColors = ["brown", "blue", "green"];
    if (!validColors.includes(eyeColor)) {
      throw new Error(ManageUsersErrors.QUERY_EYECOLOR_INVALID_VALUE);
    }
    return true;
  }

  /**
   * @param {string} age  La tranche d'age
   * @returns             Returner un objet { startAgeRange, endAgeRange }
   */
  getAgeRangeFromString(age) {
    const [startAgeRange, endAgeRange] = (age || "")
      .split("-")
      .map((i) => parseInt(i));
    return { startAgeRange, endAgeRange }
  }

  /**
   * @param {query} query L'objet de la requete qui permet de filtrer la donnée {age, eyeColor}
   */
  filterData(data, query) {
    const shouldFilterByAge = "age" in query;
    const shouldFilterByEyeColor = "eyeColor" in query;

    // If age and eyeColor are None
    if (!shouldFilterByAge && !shouldFilterByEyeColor) {
      return data;
    }

    const { startAgeRange, endAgeRange } = this.getAgeRangeFromString(query.age)
    
    return data.filter((el) => {
      // Filter by age and/or eyes' color
      if (shouldFilterByAge && shouldFilterByEyeColor) {
        return (
          el.eyeColor === query.eyeColor &&
          el.age <= endAgeRange &&
          el.age >= startAgeRange
        );
      }
     
      if (shouldFilterByAge && !shouldFilterByEyeColor) return el.age <= endAgeRange && el.age >= startAgeRange

      if (!shouldFilterByAge && shouldFilterByEyeColor) return el.eyeColor === query.eyeColor
      
    })
  }
}

// List of errors who can be append
export const ManageUsersErrors = {
  QUERY_AGE_INVALID_INPUT: "QUERY_AGE_INVALID_INPUT",
  QUERY_AGE_INVALID_RANGE: "QUERY_AGE_INVALID_RANGE",
  QUERY_AGE_INVALID_MIN_MAX_AGE: "QUERY_AGE_INVALID_MIN_MAX_AGE",
  QUERY_EYECOLOR_INVALID_VALUE: "QUERY_EYECOLOR_INVALID_VALUE",
};

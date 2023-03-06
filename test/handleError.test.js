import { errorMessages, getMessageError } from "../src/services/serviceUsers/handleError";
import { ManageUsersErrors } from "../src/services/serviceUsers/manageUsers";

describe("handleError", () => {
  it("test right message if know error", () => {
    const knownError = new Error(ManageUsersErrors.QUERY_AGE_INVALID_INPUT);
    expect(getMessageError(knownError)).toBe(errorMessages[ManageUsersErrors.QUERY_AGE_INVALID_INPUT]);
  });
  it("test right message if unknow error", () => {
    expect(getMessageError(new Error("unknown error"))).toBe("Une erreur est survenue");
  });
  it("test right message if null error", () => {
    expect(getMessageError(null)).toBe("Une erreur est survenue");
  });
});
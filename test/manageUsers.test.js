import { ManageUsersErrors, ManageUsers } from "../src/services/serviceUsers/manageUsers";

const service = new ManageUsers();

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
  },
  {
    age: 37,
    eyeColor: "brown",
    name: {
      first: "Naomi",
      last: "Puckett",
    },
    company: "ROUGHIES",
    email: "naomi.puckett@roughies.name",
    address: "973 Cleveland Street, Bend, Alabama, 147",
  },
  {
    age: 35,
    eyeColor: "blue",
    name: {
      first: "Phyllis",
      last: "Hester",
    },
    company: "GLOBOIL",
    email: "phyllis.hester@globoil.us",

    address: "276 Preston Court, Fairacres, Missouri, 2664",
  },
  {
    age: 31,
    eyeColor: "blue",
    name: {
      first: "Kristina",
      last: "Nelson",
    },
    company: "GLOBOIL",
    email: "phyllis.hester@globoil.us",

    address: "276 Preston Court, Fairacres, Missouri, 2664",
  },
]

const blueEyeColor = [
  {
    address: "130 Brighton Court, Barrelville, Arkansas, 2523",
    age: 38,
    company: "DELPHIDE",
    email: "henson.jacobson@delphide.org",
    eyeColor: "blue",
    name: { first: "Henson", last: "Jacobson" },
  },
  {
    address: "276 Preston Court, Fairacres, Missouri, 2664",
    age: 35,
    company: "GLOBOIL",
    email: "phyllis.hester@globoil.us",
    eyeColor: "blue",
    name: { first: "Phyllis", last: "Hester" },
  },
  {
    address: "276 Preston Court, Fairacres, Missouri, 2664",
    age: 31,
    company: "GLOBOIL",
    email: "phyllis.hester@globoil.us",
    eyeColor: "blue",
    name: { first: "Kristina", last: "Nelson" },
  },
]

const usersAge35_40 = [
  {
    address: "130 Brighton Court, Barrelville, Arkansas, 2523",
    age: 38,
    company: "DELPHIDE",
    email: "henson.jacobson@delphide.org",
    eyeColor: "blue",
    name: { first: "Henson", last: "Jacobson" },
  },
  {
    age: 37,
    eyeColor: "brown",
    name: {
      first: "Naomi",
      last: "Puckett",
    },
    company: "ROUGHIES",
    email: "naomi.puckett@roughies.name",
    address: "973 Cleveland Street, Bend, Alabama, 147",
  },
  {
    address: "276 Preston Court, Fairacres, Missouri, 2664",
    age: 35,
    company: "GLOBOIL",
    email: "phyllis.hester@globoil.us",
    eyeColor: "blue",
    name: { first: "Phyllis", last: "Hester" },
  },
]

const usersBlueEyeColorAge35_45 = [
  {
    address: "130 Brighton Court, Barrelville, Arkansas, 2523",
    age: 38,
    company: "DELPHIDE",
    email: "henson.jacobson@delphide.org",
    eyeColor: "blue",
    name: { first: "Henson", last: "Jacobson" },
  },
  {
    address: "276 Preston Court, Fairacres, Missouri, 2664",
    age: 35,
    company: "GLOBOIL",
    email: "phyllis.hester@globoil.us",
    eyeColor: "blue",
    name: { first: "Phyllis", last: "Hester" },
  }
];


describe("tests validateAge", () => {
  it("should throw error if passing wrong string", () => {
    expect(() => service.validateAge("aa-aa")).toThrow(
      ManageUsersErrors.QUERY_AGE_INVALID_INPUT
    );
  });

  it("should throw error if passing string-number", () => {
    expect(() => service.validateAge("aa-22")).toThrow(
      ManageUsersErrors.QUERY_AGE_INVALID_INPUT
    );
  });

  it("should throw error if passing number-string", () => {
    expect(() => service.validateAge("20-aa")).toThrow(
      ManageUsersErrors.QUERY_AGE_INVALID_INPUT
    );
  });

  it("should throw error if passing number-number and range is not 5", () => {
    expect(() => service.validateAge("20-23")).toThrow(
      ManageUsersErrors.QUERY_AGE_INVALID_RANGE
    );
  });

  it("should throw error if passing number-number and range is not 5", () => {
    expect(() => service.validateAge("20-28")).toThrow(
      ManageUsersErrors.QUERY_AGE_INVALID_RANGE
    );
  });

  it("should throw error if passing number-number and range is 5", () => {
    expect(service.validateAge("30-35")).toBeTruthy();
  });

  it("should throw error if passing start range < 20", () => {
    expect(() => service.validateAge("15-20")).toThrow(
      ManageUsersErrors.QUERY_AGE_INVALID_MIN_MAX_AGE
    );
  });

  it("should throw error if passing start range range > 40", () => {
    expect(() => service.validateAge("40-45")).toThrow(
      ManageUsersErrors.QUERY_AGE_INVALID_MIN_MAX_AGE
    );
  });
});

describe("tests getAgeRangeFromString", () => {
  it("should return valid data", () => {
    expect(service.getAgeRangeFromString("20-25")).toEqual({
      startAgeRange: 20,
      endAgeRange: 25,
    });
  });
});

describe("tests validateEyeColor", () => {
  it("should throw error if eyeColor is not : brown, blue or green", () => {
    expect(() => service.validateEyeColor("test")).toThrow(
      ManageUsersErrors.QUERY_EYECOLOR_INVALID_VALUE
    );
  });

  it("should pass if eyeColor is green", () => {
    expect(service.validateEyeColor("green")).toBeTruthy();
  });
});

describe("tests filterData", () => {
  it("should return only persons with eye color equal to blue", () => {
    expect(service.filterData(testData, { eyeColor: "blue" })).toEqual(
      blueEyeColor
    );
  });

  it("should return only persons that are between 35 and 40", () => {
    expect(service.filterData(testData, { age: "35-40" })).toEqual(
      usersAge35_40
    );
  });

  it("should return only persons that are between 35 and 40 and have blue eyes", () => {
    expect(
      service.filterData(testData, { age: "35-40", eyeColor: "blue" })
    ).toEqual(usersBlueEyeColorAge35_45);
  });
});

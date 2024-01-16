// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

const findMatching = drivers.find((element) => element === "Bobby");

const findSusan = drivers.find(function (element) {
  return element === "Susan";
});

const Alldrivers = drivers(drivers.length);

const firstDriver = drivers.find(function (driver) {
  return driver.startsWith("Sa");
});

const matchDriver = drivers.find(function (driver) {
  return driver.startsWith("y");
});

const middleEndDiver = drivers.find(function (driver) {
  return driver.startsWith("mm");
});

const result = drivers.find(({ name }) => name === "Bobby");

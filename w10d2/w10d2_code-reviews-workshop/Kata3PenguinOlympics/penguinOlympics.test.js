import calculateWinners from "./penguinOlympics.js";

describe("calculate Penguin Winners", function () {
  it("3 Lanes", function () {
    const snapshot = `|----p---~---------|
    |----p---~~--------|
    |----p---~~~-------|`;

    const penguins = ["Derek", "Francis", "Bob"];

    const expected = "GOLD: Derek, SILVER: Francis, BRONZE: Bob";

    const actual = calculateWinners(snapshot, penguins);

    expect(actual).toEqual(expected);
  });

  it("4 Lanes", function () {
    const snapshot = `|-~~------------~--p-------|
    |~~--~p------------~-------|
    |--------~-p---------------|
    |--------~-p----~~~--------|`;

    const penguins = ["Joline", "Abigail", "Jane", "Gerry"];

    const expected = "GOLD: Joline, SILVER: Jane, BRONZE: Gerry";

    const actual = calculateWinners(snapshot, penguins);

    expect(actual).toEqual(expected);
  });
  it("Capital Penguins", function () {
    const snapshot = `|-~~------------~--P-------|
    |~~--~P------------~-------|
    |--------~-P---------------|
    |--------~-P----~~~--------|`;

    const penguins = ["Joline", "Abigail", "Jane", "Gerry"];

    const expected = "GOLD: Joline, SILVER: Jane, BRONZE: Gerry";

    const actual = calculateWinners(snapshot, penguins);

    expect(actual).toEqual(expected);
  });
});

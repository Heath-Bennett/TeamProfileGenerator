const { TestScheduler } = require("jest");
const Manager = require('../lib/Manager');

test("can set an Manager name", () => {
    const name  = "Heath";
    const manager = new Manager(name);

    expect(manager.name).toBe("Heath"); //scale to compare
});

test("can set Manager email", () => {
    const emailAdd = "heathben418@gmail.com";
    const manager = new Manager("Heath", 1, emailAdd);

    expect(manager.getEmail()).toBe("heathben418@gmail.com");
})

test('can set Manager id', () => {
    const id = 33;
    const manager = new Manager("Heath", id);

    expect(manager.getId()).toBe(33);
});

test('can get Manager school', () => {
    const officeNumber = 302;
    const manager = new Manager("Heath", 33, 'Heathben418@gmail.com', officeNumber);

    expect(manager.getOfficeNumber()).toBe(302);
});
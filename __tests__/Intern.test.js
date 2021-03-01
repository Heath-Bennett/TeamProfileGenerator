const { TestScheduler } = require("jest");
const Intern = require('../lib/Intern');

test("can set an Intern name", () => {
    const name  = "Heath";
    const intern = new Intern(name);

    expect(intern.name).toBe("Heath"); //scale to compare
});

test("can set Intern email", () => {
    const emailAdd = "heathben418@gmail.com";
    const intern = new Intern("Heath", 1, emailAdd);

    expect(intern.getEmail()).toBe("heathben418@gmail.com");
})

test('can set Intern id', () => {
    const id = 33;
    const intern = new Intern("Heath", id);

    expect(intern.getId()).toBe(33);
});

test('can get Intern school', () => {
    const school = 'UNH Coding Bootcamp';
    const intern = new Intern("Heath", 33, 'Heathben418@gmail.com', school);

    expect(intern.getSchool()).toBe('UNH Coding Bootcamp');
});
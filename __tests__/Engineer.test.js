const { TestScheduler } = require("jest");
const Engineer = require('../lib/Engineer');

test("can set an engineer name", () => {
    const name  = "Heath";
    const engineer = new Engineer(name);

    expect(engineer.name).toBe("Heath"); //scale to compare
});

test("can set engineer email", () => {
    const emailAdd = "heathben418@gmail.com";
    const engineer = new Engineer("Heath", 1, emailAdd);

    expect(engineer.getEmail()).toBe("heathben418@gmail.com");
})

test('can set engineer id', () => {
    const id = 33;
    const engineer = new Engineer("Heath", id);

    expect(engineer.getId()).toBe(33);
});

test('can get engineer github username', () => {
    const github = 'heath-bennett';
    const engineer = new Engineer("Heath", 33, 'Heathben418@gmail.com', github);

    expect(engineer.getGithub()).toBe('heath-bennett');
});
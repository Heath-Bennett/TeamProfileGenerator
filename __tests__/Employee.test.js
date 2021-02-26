const { TestScheduler } = require("jest");

const Employee = require("../lib/Employee");

test("can set an employee name", () => {
    const name  = "Heath";
    const employee = new Employee(name);

    expect(employee.name).toBe("Heath"); //scale to compare
});

test("can set employee email", () => {
    const email = "heathben418@gmail.com";
    const employee = new Employee("Heath", 1, email);

    expect(employee.getEmail()).toBe("heathben418@gmail.com");
})
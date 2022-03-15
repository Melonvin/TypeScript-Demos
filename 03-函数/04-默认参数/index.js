function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = "Smith"; }
    return firstName + " " + lastName;
}
console.log(buildName(void 0, "Jack"));

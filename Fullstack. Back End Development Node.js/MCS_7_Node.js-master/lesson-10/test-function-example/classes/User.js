export default class User {
    constructor(name, lastName, birthday) {
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
    }

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
}
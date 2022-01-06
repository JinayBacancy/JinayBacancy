class Hello {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;

    }

    detail() {
        console.log(this.firstname + " " + this.lastname);
    }
}

var obj = new Hello("Jinay", "Shah");
var obj1 = new Hello("unknown", "Shah");
obj.detail();
obj1.detail();
console.log(Hello.name);
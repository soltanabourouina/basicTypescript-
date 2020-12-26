var Contact = /** @class */ (function () {
    function Contact(name, telephone) {
        this.name = name;
        this.telephone = telephone;
    }
    Contact.prototype.afficheContact = function () {
        console.log("name : " + this.name, "telephone: " + this.telephone);
    };
    return Contact;
}());
var contact = new Contact(); //instanciation avec la class Contact
contact.afficheContact();

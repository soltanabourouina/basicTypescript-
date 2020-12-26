var Contact = /** @class */ (function () {
    function Contact() {
    }
    Contact.prototype.createContact = function (Contact) {
    };
    Contact.prototype.updateContact = function (Contact) {
    };
    Contact.prototype.deleteContact = function (Contact) {
    };
    Contact.prototype.afficheContact = function () {
        console.log("name : " + this.name, "telephone: " + this.telephone);
    };
    return Contact;
}());
var contact = new Contact; //instanciation avec la class Contact
contact.name = "soltana bourouina";
contact.telephone = "0605040503";
contact.afficheContact();

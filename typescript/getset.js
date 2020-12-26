var Contact = /** @class */ (function () {
    function Contact(_name, _telephone) {
        this._name = _name;
        this._telephone = _telephone;
    }
    Object.defineProperty(Contact.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Contact.prototype.afficheContact = function () {
        console.log("name : " + this._name);
    };
    return Contact;
}());
var contact = new Contact();
contact.name = "soltana bourouina sandra";
contact.afficheContact();

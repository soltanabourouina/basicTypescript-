class Contact{
    name:string;
    telephone:string;

    createContact(Contact: Contact){ //on a creer ces methodes a partir des arrow function

    }
    updateContact(Contact: Contact){//--
        
    }
    deleteContact(Contact: Contact){//--
        
    }
    afficheContact(){
        console.log("name : "+this.name, "telephone: "+this.telephone)
    }
}

let contact = new Contact; //instanciation avec la class Contact
contact.name="soltana bourouina";
contact.telephone="0605040503";
contact.afficheContact();
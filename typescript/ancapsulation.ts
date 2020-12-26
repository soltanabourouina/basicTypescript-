class Contact{


    constructor(private name?: string, private telephone?: string){
      
    }

    getName(){
        return this.name;
    }
  
    afficheContact(){
        console.log("name : "+this.name, "telephone: "+this.telephone)
    }
}

let contact = new Contact(); //instanciation avec la class Contact

contact.afficheContact();

//ancapsulation ou access modifiers
//public ,private, protected
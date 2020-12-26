class Contact{
    name:string;
    telephone:string;

    constructor(name?: string, telephone?: string){
        this.name= name;
        this.telephone= telephone;
    }
  
    afficheContact(){
        console.log("name : "+this.name, "telephone: "+this.telephone)
    }
}

let contact = new Contact(); //instanciation avec la class Contact

contact.afficheContact();
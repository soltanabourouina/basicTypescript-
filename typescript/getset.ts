class Contact{


    constructor(private _name?: string, private _telephone?: string){
      
    }

    get name(){
        return this._name;
    }

    set name(value){
         this._name=value;
    }
  
    afficheContact(){
        console.log("name : "+this._name)
    }
}

let contact = new Contact(); 
contact.name= "soltana bourouina sandra";
contact.afficheContact();


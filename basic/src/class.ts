
export class User {
    public name: string;

    constructor (name : string){
        this.name = name;
    }
}

let user = new User("rasdi");
console.log(user.name);
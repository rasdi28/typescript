function getName (): string {
    return "hello world";
}

console.log(getName());


function getNumber(): number {
    return 123;

}

console.log(getNumber());


function printName(): void {
     console.log("hello");
}

printName();


//function as type

type Tambah = (val1: number, val2:number)=> number;
const Add: Tambah = (val1: number, val2:number) : number =>{
    return val1 + val2;
}
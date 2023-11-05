{
    // class and object

    class Animal {
    //    public name:string;
    //    public species:string
    //    public sound:string;

        constructor(public name:string,public species:string,public sound:string){
            // this.name= name
            // this.species= species
            // this.sound = sound
        }

        makeSound(){
            console.log(`the ${this.name} bollam ${this.sound}`)
        }
    }

    const dog = new Animal('american kicu','hobe r ki','etao hobe r ki')
    dog.makeSound();
    


    // 

}
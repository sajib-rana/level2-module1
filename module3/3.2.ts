{
    // inheritence in typescript where recieve child from his parent 
    class Parent {
         name:string;
        age:number;
        address:string;

        constructor(name:string,age:number,address:string){
            this.name= name
            this.age = age
            this.address = address
        }

        makeSleep(sleepOfHours:string){
          console.log(`${this.name} are too lazy.he is sleeping ${sleepOfHours}`)
        }
    }

    class Student extends Parent {
        // name:string;
        // age:number;
        // address:string;

        constructor(name:string,age:number,address:string){
            super(name,age,address)
            // this.name= name
            // this.age = age
            // this.address = address
        }

        // makeSleep(sleepOfHours:string){
        //   console.log(`${this.name} are too lazy.he is sleeping ${sleepOfHours}`)
        // }
    }

    const student1 = new Student('Mr. Sajib',20,'bangladesh')

    class Teacher extends Parent {
        // name:string;
        // age:number;
        // address:string;
        designation:string

        constructor(name:string,age:number,address:string,designation:string){
             super(name,age,address)
            // this.name= name
            // this.age = age
            // this.address = address
            this.designation = designation
        }

        // makeSleep(sleepOfHours:string){
        //   console.log(`${this.name} are too lazy.he is sleeping ${sleepOfHours}`)
        // }
        takeClass(numOfClass:string){
            console.log(`${this.name} take everyday ${numOfClass}`)
        }
    }

    const teacher1 = new Teacher('sajidul',40,'bangladesh','professor')
    teacher1.address

    // 
}
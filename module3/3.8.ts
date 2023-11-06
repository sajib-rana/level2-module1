{
    // polymorphism in typescript

    class Person{
        getSleep(){
            console.log(`I am sleeping 8 Hours everyday`)
        }
    }
    class Student extends Person{
        getSleep(){
            console.log(`I am sleeping 7 Hours everyday`)
        }
    }
    class Developer extends Person{
        getSleep(){
            console.log(`I am sleeping 6 Hours everyday`)
        }
    }

    const getSleepHours = (param:Person)=>{
        param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepHours(person1)
    getSleepHours(person2)
    getSleepHours(person3)


    class Shape{
        getArea(): number{
            return 0;
        }
    }

    class Circle extends Shape{
        redius:number;
        constructor(redius:number){
            super()
            this.redius = redius
        }
        getArea(): number {
            return Math.PI * this.redius * this.redius;
        }
    }
    class Rectangle extends Shape{
        height:number;
        width:number;
        constructor(height:number,width:number){
            super()
            this.height = height
            this.width = width
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    const getShapeArea = (param: Shape)=>{
        console.log(param.getArea())
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(3,4);

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)



    // 
}
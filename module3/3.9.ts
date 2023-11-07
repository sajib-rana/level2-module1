{
    // abstruction : 1. interface 2. abstruct
   //idea 
    interface Vehicle1 {
        startEngine() : void
        stopEngine() : void
        move() : void
    }
     //real implementation are here
    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log(`I am starting the car`);
        }
        stopEngine(): void {
            console.log(`I am stoping the car`);
        }
        move(): void {
            console.log(`I am moving the car`);
        }
        test(){
            console.log(`I am testing the car`);
        }
    }

    const toytaCar = new Car1();
    toytaCar.startEngine();

    //abstruct class

   abstract class Car2 {
       abstract startEngine(): void 
       abstract stopEngine(): void 
       abstract move(): void 
        test(){
            console.log(`I am testing the car`);
        }

    }

    class ToytaCar extends Car2{
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stoping  the car engine`);
        }
        move(): void {
            console.log(`I am moving the car engine`);
        }
    }

    // const hondaCar = new Car2();
    // hondaCar.startEngine


    // 
}
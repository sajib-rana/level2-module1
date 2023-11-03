{
    // 
    type Roll1 = number[];
    interface Roll2 {
        [index:number]:number
    }

    const RollNumber1:Roll2 = [1,2,3];

    // we can use in function type and interface cross
    type Add1 =(num1:number,num2:number)=>number;
    interface Add2 {
       (num1:number,num2:number) :number
    }

    const add:Add2 =(num1,num2)=>num1+num2;


    // 
}
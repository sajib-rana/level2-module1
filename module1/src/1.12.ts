{
    // 
    const searchName = (value:string | null)=>{
        if(value){
            console.log("You are find your name");
        }else{
           console.log('You are not succeded to find');
        }
    }

    searchName(null);

    const speed = (val:unknown)=>{
       if(typeof val === 'number'){
        const res = (val*1000)/3600;
        console.log(`value is : ${res}`)
       }else if(typeof val === 'string'){
        const [num,ex ]= val.split(' ');
        const res = (parseFloat(num)*1000)/3600;
        console.log(`value is : ${res}`)
       }else{
        console.log("You are given wrong value")
       }
    }
    speed(null);
 
    // never type
    const throError = (msg:string):never=>{
        throw new Error(msg)
    }
    throError('dilam r ki jeta kokhono return korbe nah')
    // 
}
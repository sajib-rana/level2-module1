{
    // 

    // type assertion
    let anything:any;
    anything = 'sajidul islam sajib';
    (anything as string)
    // (anything as string).charAt

    const kgToGm = (value: string| number):number|string|undefined=>{
        if(typeof value ==='string'){
            const convertedValue = parseFloat(value)*1000;
            return `The converted value is: ${convertedValue}`;
        }
        if(typeof value ==='number'){
            return value*1000;
        }
    }

    const result = kgToGm(1000) as number
    const result2 = kgToGm('1000') as string
    
    // try catch error system if use error as custom error message it is ok
    type CustomError = {
        message:string
    }

    try{

    }
    catch(error){
        console.log((error as CustomError).message);
    }
    
     




    // 
}
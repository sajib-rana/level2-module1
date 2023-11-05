{
    // mapped in typescript

    const arrOfNumber : number[] = [1,3,4,5];

    const arrOfString : string[]= arrOfNumber.map(number=>number.toString());
    console.log(arrOfString);

    type AreaNumber = {
        height: number;
        width: number;
    }
    //  look up type
    type Height = AreaNumber['height']; 

    // type AreaString = {
    //     [key in keyof AreaNumber]: string;
    // }
    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString<{height:string; width:number}> ={
        height:'100',
        width: 23
    }


    // 
}
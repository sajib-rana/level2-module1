{
    // generic type with interface----previous module we use generic using type

    interface Developer<T>{
        name:string;
        computer:{
            brand:string
            model:string
            releaseYear:number
        }
        smartWatch:T
    }

    type EmAbWatch={
        brand:string
        model:string
        display:string
    }
    // or interface use and if we want to more than one perameter we can give it in Developer<T,X> and if no need X, give X=null
    // type EmAbWatch {
    //     brand:string
    //     model:string
    //     display:string
    // }

    const poorDeveloper: Developer<EmAbWatch> ={
        name:'sajib',
        computer:{
            brand:'asus',
            model:'any',
            releaseYear:2012
        },
        smartWatch:{
            brand:'w2',
            model:'wev',
            display:'jh'
        }
    }


    // 

}
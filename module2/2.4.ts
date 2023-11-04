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

    const poorDeveloper: Developer<{
        brand:string
        model:string
        display:string
    }> ={
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
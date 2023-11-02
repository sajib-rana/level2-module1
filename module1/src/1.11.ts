{
    // 
    const age :number = 15;
    if(age>=18){
        console.log("You are fit for marry");
    }else{
        console.log('fitter khao age');
    }
    const adult = age>=18 ? 'You are permit to marry' : 'boyosh baruk';
    console.log(adult);
    
    // nullish operator
    const isAuthenticated = '';
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({result1},{result2})

    type User = {
        name: string,
        adrress:{
            city:string,
            road:string,
            presentAdrress:string,
            permanentAdrress?:string
        }
    }
    const user: User = {
        name:'sajib rana',
        adrress:{
            city:'dhaka',
            road: 'three',
            presentAdrress:'Mirpur-1'
        }
    }
    const permanentAdrress = user?.adrress?.permanentAdrress ?? 'No permanent Adrress' 
    // nullish operator null or undefine er opor depend kore dekhay tai ekhane undefine er poriborte No permanent Adrress
    console.log({permanentAdrress})
    // 
}
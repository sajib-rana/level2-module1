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
    // 
}
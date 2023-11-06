{
    // type gurd
    // typeof ---> type gurd

    type AlphaNumeric = string | number;
    const add = (param1:AlphaNumeric,param2:AlphaNumeric): AlphaNumeric =>{
      if(typeof param1 ==='number' && param2==='number'){
        return param1+param2;
      }else{
        return param1.toString()+param2.toString()
      }
    }

    const result1 = add(2,4);
    console.log('the result is ',result1);

    // in gurd

    type NormalUser = {
        name:string;

    }

    type AdminUser ={
        name:string;
        role:'admin'
    }

    const getUser = (user: NormalUser | AdminUser)=>{
        if('role' in user){
            console.log(`${user.name} is an ${user.role}`)
        }else{
            console.log(`this is only ${user.name} not admin`)
        }
    }

    const normalUser: NormalUser = {name:'sajib'}
    const adminUser: AdminUser = {name:'sajib',role:'admin'}

    getUser(normalUser);
    getUser(adminUser);
    


    // 
}
{
    // generic constraint with keyof operator

  type Vehicle = {
    bike:string;
    car:string;
    ship:string;
  }
  type Owner = 'bike'|'car'|'ship';
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X,Y extends keyof X>(obj:X, key:Y)=>{
       return obj[key]
  }

  const user ={
       name:'sajib',
       age: 25,
       address:'dhaka'
  }

  const result = getPropertyValue(user,'address')


    // 
}
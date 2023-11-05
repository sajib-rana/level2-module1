{
    // some utility like pick, omit, required, partial, readonly and record
    
    type Person = {
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

    type NameAge = Pick<Person,'name'|'age'>

    type ContactInfo = Omit<Person,'name'|'age'>

    type PersonRequired = Required<Person>

    type PersonPartial = Partial<Person>

    type PersonReadOnly = Readonly<Person>

    const person1:PersonReadOnly ={
        name:'sajib',
        age:24,
        contactNo:'0138'
    }
    // person1.name='abul' not possible to change this name

    type MyObj = Record<string,string>

    const EmptyObject : Record<string,unknown> ={}

    const obj1:MyObj ={
        a:'aa',
        b:'bb',
        c:'cc',
        d:'rr'
    }


    // 
}
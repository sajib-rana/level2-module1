{
    // Generic Function 

    const createArray = (param:string): string[]=>{
        return [param]
    }
    // dynamic function
    const createArrayWithGeneric = <T>(param:T): T[]=>{
        return [param]
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<boolean>(true)
    type User ={id:number; name:string}
    const resGenericObject = createArrayWithGeneric<User>({id:23,name:'sajib'})


    // create array with tuple
    const createArrayWithTuple = <T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }

    const res10 = createArrayWithTuple<string,number>('Bangladesh',23)
    const resGenericTuple = createArrayWithTuple<boolean,boolean>(true,false)
    type User1 ={id:number; name:string}
    const resTupleObject = createArrayWithGeneric<User1>({id:23,name:'sajib'})

    const addCourseToStudent = <T>(student:T)=>{
        const course ='next level web development';
        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'sajib',email:'sajibrana444@gmail.com',devType:'nlwd'});
    const student2 = addCourseToStudent({name:'sajidul',email:'sajiduli693@gmail.com',hasWatch:'Apple-watch'});


    // 
}
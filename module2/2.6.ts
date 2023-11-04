{
    // constraints jar mane hoche force kora

    const addCourseToStudent = <T extends {id:number; name:string; email:string}>(student:T)=>{
        const course ='next level web development';
        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
    }>({id:23,name:'sajib',email:'sajibrana444@gmail.com',devType:'nlwd'});
    const student2 = addCourseToStudent({id:32,name:'sajidul',email:'sajiduli693@gmail.com',hasWatch:'Apple-watch'});


    // 
}
{
    // Generic type
    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [1,2,4,6]
    const rollNumber: GenericArray<number> = [1,2,4,6]


    // const mentors: string[] = ['sajib','abdur','karim']
    const mentors: GenericArray<string> = ['sajib','abdur','karim']


    // const boolArray: boolean[] = [true,false,true,false]
    const boolArray: GenericArray<boolean> = [true,false,true,false]

    // generic Tuple
    type GenericTuple <X,Y> = [X,Y]

    const mansuh: GenericTuple<string,string>=['sajib','sajidul'];

    const userWithId:GenericTuple<number,{name:string,email:string}> = [234,{name:'sajib',email:'sajibrana444@gmail.com'}]


    // 
}
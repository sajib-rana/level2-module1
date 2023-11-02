{
    // 

    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    // const frontendDeveloper : FrontendDeveloper = 'fakibazDeveloper'
    // console.log(frontendDeveloper);

    type FrontendDeveloper = {
        skills:string[],
        designation1:'frontendDeveloper'
    }
    type BackendDeveloper = {
        skills: string[],
        designation2:'backendDeveloper'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper ={
        skills:['html','css','javascript','react','node'],
        designation1:'frontendDeveloper',
        designation2:'backendDeveloper'
    }
    console.log(fullStackDeveloper)


    // 

}
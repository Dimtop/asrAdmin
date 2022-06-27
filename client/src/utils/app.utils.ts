const userRoleToString = (roleNumber:number):string=>{

    switch(roleNumber){
        case 0:
            return "Admin"
        case 1:
            return "Consumer"
        default:
            return "Unknown role"
    }
}

export {userRoleToString}
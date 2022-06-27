import { IUserInitialState, Nullable } from ".";

export interface ILoginData{
    username:String;
    password:String;
}


export interface IGenericResponse{
    statusCode:number;
    success:boolean;
    message?:string;
    data?:any;
}

export interface IUserGetReponseData extends Omit<IGenericResponse, "data">{
    data:IUserInitialState
}


export interface ITotalInspectionsNumberGetReponseData extends Omit<IGenericResponse, "data">{
    data:{
        totalNumber:number
    }
}

export interface ITotalTodaysInspectionsNumberGetReponseData extends Omit<IGenericResponse, "data">{
    data:{
        totalNumber:number
    }
}

export interface ITotalSprayersNumberGetReponseData extends Omit<IGenericResponse, "data">{
    data:{
        totalNumber:number
    }
}


export interface IPendingSubscriptionsNumberGetResponseData extends Omit<IGenericResponse, "data">{
    data:{
        pendingSubscriptions:number
    }
}


import { Nullable } from ".";

export interface IAuthInitialState{
    isUserAuthenticated:boolean;
}


export interface IUserInitialState{
    id:string;
    name:string;
    username:string;
    role:number;
}

export interface IAppInitialState{
    isMenuOpen:boolean;
}

export interface IWidgetsInitialState{
    totalInspectionsNumber:number,
    totalInspectionsNumberLoading:boolean;

    totalTodaysInspectionsNumber:number,
    totalTodaysInspectionsNumberLoading:boolean;

    totalSprayersNumber:number;
    totalSprayersNumberLoading:boolean;

    pendingSubscriptionsNumber:number;
    pendingSubscriptionsNumberLoading:boolean;
}
export type Nullable<T> = T | null;

export type {
    ILoginData,
    IGenericResponse,
    IUserGetReponseData,
    ITotalInspectionsNumberGetReponseData,
    ITotalSprayersNumberGetReponseData,
    ITotalTodaysInspectionsNumberGetReponseData,
    IPendingSubscriptionsNumberGetResponseData
} from "./api.interfaces"


export type{
    IAuthInitialState,
    IUserInitialState,
    IAppInitialState,
    IWidgetsInitialState
} from "./state.interfaces"
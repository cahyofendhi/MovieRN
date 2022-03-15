export const FECTH_USER_STATUS_MAIN = 'FECTH_USER_STATUS_MAIN';
export const UPDATE_USER_STATUS_MAIN = 'UPDATE_USER_STATUS_MAIN';

interface FetchUserStatusMain {
  type: typeof FECTH_USER_STATUS_MAIN;
}

interface UpdateUserStatusMain {
  type: typeof UPDATE_USER_STATUS_MAIN;
  payload: boolean;
}


export type MainActionType =
  | FetchUserStatusMain
  | UpdateUserStatusMain;

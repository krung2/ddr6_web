import { autobind } from "core-decorators";
import { action, observable, runInAction } from "mobx";
import MainRepository from "./Main.repository";

export interface IUser {
  status: number;
  message: string;
  data: (DataEntity)[];
}
export interface DataEntity {
  uniqueId: string;
  uplayId: string;
  generation: string;
  name: string;
  userName: string;
  profileImage: string;
  level: number;
  rank: string;
  rankImage: string;
  wl: number;
  wins: number;
  losses: number;
  kd: number;
}

export interface IReqBody {

  generation: string;
  userName: string;
}

export interface IReqBodyNot {

  name: string;
  generation: string;
  userName: string;
}

@autobind()
export default class MainStore {

  @observable users: DataEntity[] = [];

  @action
  async handleAddUser(reqBody: IReqBody, token: string) {

    try {
      await MainRepository.handleAddUser(reqBody, token);

    } catch (err) {

      throw err;
    }
  }

  @action
  async handleAddUserNot(reqBody: IReqBodyNot) {

    try {
      await MainRepository.handleAddUserNot(reqBody);

    } catch (err) {

      throw err;
    }
  }

  @action
  async hadleGetUser() {

    try {

      const { data }: { data: DataEntity[] } = await MainRepository.handleGetUser();

      runInAction(() => {
        this.users = data;
      })
    } catch (err) {

      throw err;
    }
  }
}


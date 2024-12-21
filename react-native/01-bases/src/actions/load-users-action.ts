import axios from "axios";
import { UserListResponse } from "../interface/reqresponse";

export const loadUsersAction = async (page: number = 2) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

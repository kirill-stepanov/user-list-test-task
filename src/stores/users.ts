import { apiRouters } from "@/constants";
import { useApiFetch } from "@/hooks/useApiFetch";
import { defineStore } from "pinia";

export interface UsersState {
  loading: boolean;
  users: UserData[];
  selectedUser: UserData | null;
}

export interface UserData {
  id: 1;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export const useUsersStore = defineStore("users", {
  state: (): UsersState => ({
    loading: false,
    users: [],
    selectedUser: null,
  }),
  actions: {
    async getUsers() {
      const { getRequest } = useApiFetch();

      this.loading = true;

      const response = await getRequest(apiRouters.USERS).finally(() => {
        this.loading = false;
      });

      this.users = response?.data;
    },
    async getSelectedUser(userId: string) {
      const { getRequest } = useApiFetch();

      this.loading = true;

      const response = await getRequest(
        `${apiRouters.USERS}/${userId}`
      ).finally(() => {
        this.loading = false;
      });

      this.selectedUser = response?.data;
    },
  },
});

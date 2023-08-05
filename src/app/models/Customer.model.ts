export interface Customer {
  token: string;
  civility: string;
  password: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phone: string;
  role: {
    id: number;
    name: string;
  };

}

export interface Customer {
  token: string;
  civility: string;
  credential: {
    histoCredential: {
      id: number;
      name: string;
    };
    id: number;
    password: string;
  };
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

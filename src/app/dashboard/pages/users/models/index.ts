export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  birthDate: Date; 
  address: {
    street: string; 
    city: string;   
    zipCode: string; 
  };
}

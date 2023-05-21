export interface UsersProps {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
}

export const LlamadaApi: UsersProps[] = [
  { id: 1, name: "Mario", email: "mario@gmail.com", age: 23, password: "mariola" },
  { id: 2, name: "Amanda", email: "amanda@gmail.com", age: 43, password: "amadanda33" },
  { id: 3, name: "Gianni", email: "gigi@gmail.com", age: 25, password: "giannino" },
];

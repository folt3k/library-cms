export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_reader: boolean;
  is_librarian: boolean;
}

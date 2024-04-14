export interface UserData {
  id: string;
  name: string;
  email: string;
  role: {
    id: string;
    slug: string;
  };
  avatar: string;
  photoUrl: string;
}

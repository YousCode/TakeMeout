export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  preferences: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
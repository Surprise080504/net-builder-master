export enum UserRole {
  User = 'USER',
  Admin = 'ADMIN'
}

export interface TokenResponse {
  accessToken: string;
}

export interface SuccessResponse {
  success: boolean;
}

export interface User {
  id: number;
  digitalId: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isEmailVerified: boolean;
  walletAddress: string;
  invitation: string;
  star: number;
}

export interface Profile {
  level: number;
}

export interface UserWithProfile extends User {
  profile: Profile;
  invitor: User;
}

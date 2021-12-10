import { UserWithProfile } from './auth.model';

export interface Friend {
  level: number;
  user: UserWithProfile;
}

export interface GroupOfFriends {
  level: number;
  friends: Friend[];
}

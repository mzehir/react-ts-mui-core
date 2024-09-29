// export enum UserTypes {
//   guest = 'guest',
//   admin = 'admin',
// }

// export type UserType = keyof typeof UserTypes;

export enum UserTypes {
  admin = 'admin',
  teacher = 'teacher',
  student = 'student',
  guest = 'guest',
}

export type UserType = keyof typeof UserTypes;

export enum UserTypes {
  admin = 'admin',
  guest = 'guest',
  //! 001DeletedStart
  teacher = 'teacher',
  student = 'student',
  //! 001DeletedFinish
}

export type UserType = keyof typeof UserTypes;

export enum UserTypes {
  admin = 'admin',
  guest = 'guest',
  //! 001 Start: Rows to be deleted to start a project
  teacher = 'teacher',
  student = 'student',
  //! 001 Finish: Rows to be deleted to start a project
}

export type UserType = keyof typeof UserTypes;

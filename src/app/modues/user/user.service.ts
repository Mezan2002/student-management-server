import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import userModel from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a empty user object
  const userData: Partial<TUser> = {};

  // check if password is provided or not
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // set manually generated ID
  userData.id = '2030100001';

  // create a new user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id and _id
    studentData.id = newUser.id;
    studentData.user = newUser._id;
  }
  const newStudent = await StudentModel.create(studentData);
  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};

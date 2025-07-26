interface loginType {
  username: string;
  password: string;
}

enum rolesEnum {
  USR = "USR",
  ADM = "ADM",
}

interface registerType extends loginType {
  role: rolesEnum;
}

export const Login = ({ username, password }: loginType) => {
  console.log(username, password);
};

export const Register = ({ username, password, role }: registerType) => {
  console.log(username, password, role);
};

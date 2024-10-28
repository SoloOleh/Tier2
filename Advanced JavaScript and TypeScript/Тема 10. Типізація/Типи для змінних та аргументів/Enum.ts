enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}

// export = {};

// enum Role {
//  ADMIN,
//  USER,
// }

// console.log(Role.ADMIN); // 0
// console.log(Role[Role.ADMIN]); // "ADMIN"

// enum UserStatus {
//  Active = 'ACTIVE',
//  Inactive = 'INACTIVE',
//  Banned = 'BANNED',
// }
// let status: UserStatus = UserStatus.Active;

enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
  // handle response
}

respond(HttpCodes.OK);

export { };

const enum HttpCodes2 {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

const status = HttpCodes2.OK;

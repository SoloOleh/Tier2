// дозволяє вам обрати набір властивостей з існуючого типу і створити новий тип на основі цих властивостей.

type User = {
  id: number;
  name: string;
  email: string;
};

type UserBasicInfo = Pick<User, 'id' | 'name'>;

let userBasicInfo: UserBasicInfo = {
  id: 1,
  name: 'John Doe',
//   email: 'john@example.com', // Error: Property 'email' does not exist on type 'UserBasicInfo'
};

export {};
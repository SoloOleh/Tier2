// !!! Невірно: клас робить занадто багато речей
// class User {
//   public name: string;
//   public email: string;

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
  
//   public save(): void {
//     // Логіка для збереження користувача в базі даних
//   }

//   public sendEmail(message: string): void {
//     // Логіка для відправки електронної пошти користувачу
//   }
// }

// Вірно: кожен клас виконує тільки одну задачу
class User {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  
  public save(): void {
    // Логіка для збереження користувача в базі даних
  }
}

class EmailService {
  public sendEmail(user: User, message: string): void {
    // Логіка для відправки електронної пошти користувачу
  }
}

// дозволяє створювати типи із заздалегідь відомими властивостями

type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Weekend = 'Sat' | 'Sun';

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: 'Понеділок',
  Tue: 'Вівторок',
  Wed: 'Середа',
  Thu: 'Четверг',
  Fri: "П'ятниця",
  Sat: 'Субота',
  Sun: 'Неділя',
};

export {};





enum UserRoles {
  admin = 'admin',
  manager = 'manager',
  employee = 'manager',
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
//   [UserRoles.employee]: true,
};

export {};
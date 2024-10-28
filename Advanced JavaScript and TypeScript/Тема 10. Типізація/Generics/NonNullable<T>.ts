// приймає тип T та виключає з нього null та undefined.
type SomeType = string | null | undefined;

// NonNullableType будет равен 'string'
type NonNullableType = NonNullable<SomeType>;

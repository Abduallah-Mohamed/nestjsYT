import { IsEmail, IsString, IsDefined } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  username: string;
}

export class UserDtoParams {
  @IsEmail()
  @IsDefined()
  email: string;
}

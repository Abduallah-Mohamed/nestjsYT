import { IsString, IsBoolean, IsNumber } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  name: string;

  @IsString()
  id: string;

  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;

  @IsString()
  owner: string;

  @IsNumber()
  duration: number;
}

import { IsString } from 'class-validator';

export class TaskParamDto {
  @IsString()
  id: string;
}

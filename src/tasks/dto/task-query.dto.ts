import { Transform } from 'class-transformer';
import { IsDefined, IsBoolean, IsString } from 'class-validator';

export class TaskQueryDto {
  @IsDefined()
  @IsBoolean()
  @Transform((value) => {
    if (value['value'] === 'true') return true;
    if (value['value'] === 'false') return false;
    return value['value'];
  })
  filter: boolean;

  @IsString()
  name: string;
}

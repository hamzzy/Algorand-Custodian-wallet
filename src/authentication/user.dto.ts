import { IsOptional, IsString, ValidateNested, Min } from 'class-validator';

class CreateUserDto {
  @IsString()
  public fullName: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;
}

export default CreateUserDto;

import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  // @MinLength(5, { message: 'service name most not be less than 5' })
  // @MaxLength(15, { message: 'service name most not be greater than 60' })
  name: string;

  @IsNotEmpty()
  images: [];

  @IsString()
  @IsNotEmpty()
  product_image: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  category_name: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  category_id: string;

  @IsString()
  @IsNotEmpty()
  // @MinLength(60, { message: 'description most not be less than 60 characters' })
  // @MaxLength(250, { message: 'description most not be less than 600 characters' })
  description: string;
}

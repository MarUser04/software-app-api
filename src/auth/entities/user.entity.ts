import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({
    description: 'User ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'User Name' })
  @Column('text', {
    nullable: false,
    unique: true,
  })
  username: string;

  @ApiProperty({ description: 'First Name' })
  @Column('text')
  firstName: string;

  @ApiProperty({ description: 'Last Name' })
  @Column('text')
  lastName: string;

  @ApiProperty({ description: 'User Role' })
  @Column('text', {
    nullable: false,
  })
  role: string;

  @ApiProperty({ description: 'User Password' })
  @Column('text')
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

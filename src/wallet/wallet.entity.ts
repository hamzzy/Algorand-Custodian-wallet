import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import User from '../authentication/user.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public_key: string;

  @Column()
  private_key: string;

  @OneToOne(() => User, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  public created_date: string;

  @UpdateDateColumn()
  public update_date: string;
}

@Entity()
export class WalletBalance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @OneToOne(() => User, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  user: User;

  @OneToOne(() => Wallet, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  wallet: Wallet;

  @CreateDateColumn()
  public created_date: string;

  @UpdateDateColumn()
  public update_date: string;
}

@Entity()
export class TransactionHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transaction_hash: string;

  @Column()
  recipient: string;

  @Column()
  network_fee: string;

  @Column()
  status: string;

  @Column()
  amount: string;

  @OneToMany(() => User, (user) => user, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  user: User[];

  @OneToMany(() => Wallet, (wallet) => wallet, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  wallet: Wallet[];

  @CreateDateColumn()
  public created_date: string;

  @UpdateDateColumn()
  public update_date: string;
}

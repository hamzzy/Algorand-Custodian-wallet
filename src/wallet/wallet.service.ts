import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
// import UserWithThatEmailAlreadyExistsException from '../exceptions/UserWithThatEmailAlreadyExistsException';
import CreateUserDto from '../authentication/user.dto';
import User from '../authentication/user.entity';
import HttpException from '../exceptions/HttpException';
import { CreateAlgoWallet, isEmpty } from '../utils/utils';
import { Wallet, WalletBalance } from '../wallet/wallet.entity';

class WalletService {
  private userRepository = getRepository(User);
  private WalletRepository = getRepository(Wallet);
  private WalletBalance = getRepository(WalletBalance);

  public async balance(user_id: string): Promise<void> {
    const data = await this.WalletBalance.findOne({ user: user_id });
    return { data };
  }
}
export default WalletService;

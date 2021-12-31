// import * as bcrypt from "bcryptjs";
// import * as jwt from "jsonwebtoken";
// import { getRepository } from "typeorm";
// // import UserWithThatEmailAlreadyExistsException from '../exceptions/UserWithThatEmailAlreadyExistsException';
// import CreateUserDto from "../authentication/user.dto";
// import User from "../authentication/user.entity";
// import HttpException from "../exceptions/HttpExecption";
// import { CreateAlgoWallet, isEmpty } from "../utils/utils";
// import { Wallet, WalletBalance } from "../wallet/wallet.entity";

// class WalletService {
//   private userRepository = getRepository(User);
//   private WalletRepository = getRepository(Wallet);
//   private WalletBalance = getRepository(WalletBalance);

//   public async register(userData) {
//     // if (await this.userRepository.findOne({ email: userData.email })) {
//     //   throw new UserWithThatEmailAlreadyExistsException(userData.email);
//     // }

//     if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

//     // const findUser: User = await this.userRepository.findOne({
//     //   email: userData.email,
//     // });
//     // const balance = this.WalletBalance.create({
//     //   ...userData,
//     // });
//     // await this.userRepository.save(balance);

//     // return {
//     //   balance,
//     // };
//   }
// }

// export default WalletService;

// import * as express from "express";
// import Controller from "../interfaces/controller.interface";
// // import CreateUserDto from "./user.dto";
// import WalletService from "./wallet.service";
// import validationMiddleware from "../middleware/validation.middleware";

// class WalletController implements Controller {
//   public path = "/wallet";
//   public router = express.Router();
//   private walletService = new WalletService();

//   constructor() {
//     this.initializeRoutes();
//   }

//   private initializeRoutes() {
//     this.router.post(`${this.path}/balance`, this.WalletBalance);
//   }

//   private WalletBalance = async (
//     request: express.Request,
//     response: express.Response,
//     next: express.NextFunction
//   ) => {
//     try {
//          const data = request.body;
//       const { balance } = await this.walletService.balance(data);

//       response.status(201).json({ balance: balance });
//     } catch (error) {
//       next(error);
//     }
//   };
// }

// export default WalletController;

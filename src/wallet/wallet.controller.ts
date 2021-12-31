import * as express from 'express';
import Controller from '../interfaces/controller.interface';
// import CreateUserDto from "./user.dto";
import WalletService from './wallet.service';
import validationMiddleware from '../middleware/validation.middleware';
import authMiddleware from '../middleware/auth.middleware';

class WalletController implements Controller {
  public path = '/wallet';
  public router = express.Router();
  private walletService = new WalletService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/balance`, authMiddleware, this.WalletBalance);
  }

  private WalletBalance = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): Promise<void> => {
    try {
      const { id, email, pasword } = request.user;
      const balance = await this.walletService.balance(id);
      response.status(200).send(balance);
    } catch (error) {
      next(error);
    }
  };
}

export default WalletController;

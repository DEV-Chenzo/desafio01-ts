import { DioAccount } from "./DioAccount";
export class PlusAccount extends DioAccount {

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value + 10;
      console.log(`Voce depositou ${value} e ganhou um bonus de 10 reais com sucesso!`);
    }
  };
}

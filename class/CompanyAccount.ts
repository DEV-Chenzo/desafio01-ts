import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (setValue: number) => {
   if (this.validateStatus()) {
     this.balance += setValue;
     console.log(`Voce pegou um empréstimo de ${setValue} com sucesso!`);
     console.log(`Seu novo saldo é de ${this.getBalance()}`);
   }
  }
}

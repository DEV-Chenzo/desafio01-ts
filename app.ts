import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'DEV', 10)
console.log(peopleAccount)
peopleAccount.deposit(1000)
peopleAccount.withdraw(100)
console.log(peopleAccount)
console.log('---------------------')
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(5000)
companyAccount.withdraw(3000)
companyAccount.getLoan(10000)
console.log(companyAccount)
console.log('---------------------')
const plusAccount: PlusAccount = new PlusAccount('PLUS', 30)
console.log(plusAccount)
plusAccount.deposit(1000)
plusAccount.withdraw(500)
console.log(plusAccount)

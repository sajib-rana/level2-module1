{
    // getter and setter

    class BankAccount {
      public readonly id:number;
      public name:string;
      protected  _balance:number;  // use protected replace of private because we use _balance in another child class

        constructor(id:number,name:string,_balance:number){
            this.id = id
            this.name = name
            this._balance = _balance
        }

        //using set
        set deposit(amount:number){
             this._balance = this._balance + amount;
        }

        // addDeposit(amount:number){
        //     this._balance = this._balance + amount
        // }

        //using get
        get balance(){
           return this._balance
        }

        // getAmount(){
        //     return this._balance
        // }
    }

    // class StudentAccount extends BankAccount {
    //     test(){
    //      this._balance
    //     }
    // }

    const atimAccount = new BankAccount(222,'sajib',20)
    // atimAccount.addDeposit(30)
    // const myBalance = atimAccount.getAmount();
    atimAccount.deposit = 50
    const mybalance = atimAccount.balance
    console.log(mybalance)


    // 

}
import React from 'react';

const About = () => {
  return (
    <>
      <div className="header">
        What is Savvy Saver?
      </div>

      <div className="content-wrapper">
        <div className="content">
            <p>
            This app was created to help you budget smart and save savvy.
            Keep track of your finances without stress and feel good about spending money when you do!
            Inspired by Genevieve Davis, author of the book <i>Becoming Rich</i>.
            </p>

            <hr />
            <h4 align="center">How to use this app</h4>
            <hr />

            <p>
            <h6><strong>1. Edit Account Names</strong></h6>
            As you can see on the dashboard, you have access to not only a main account, but four other savings accounts.
            Use the edit icon to make sure you are happy with the name of your accounts.
            It is recommended you have something similar to the following accounts to maximize your savings:
            <ul className="list">
              <li>Treat Yourself - splurge on yourself and don't feel guilty about it</li>
              <li>Give to Receive - treating others always feels great</li>
              <li>Big Purchases - save up for a special purchase</li>
              <li>Savings - only touch in emergencies</li>
            </ul>
            </p>
            <p>
            <h6><strong>2. Add Debit Transactions</strong></h6>
            Click 'Debit' under 'Add Transaction' to report an incoming deposit.
            During Step 2 you have the option to allocate up to 10% of that deposit to each of your other savings accounts.
            For example, if you deposited $100 and chose 10%, then $10 would be deposited into each of your savings accounts, and $60 will be deposited in your main account.
            You may also choose 0% and have the whole amount be deposited in your main account.
            </p>
            <p>
            <h6><strong>3. Add Credit Transactions</strong></h6>
            Click 'Credit' under 'Add Transaction' to report a charge to your account.
            Make sure to choose which account you would like to charge the transaction.
            For example, if you treated yourself to a spa day for $100, make sure to choose
            </p>
            <h6><strong>4. Modify Transactions</strong></h6>
            <p>
            To mimic a real bank account, transactions cannot be deleted.
            But, transactions in any of your four savings accounts can be moved to the main account by clicking the 'X' icon.
            </p>
        </div>
      </div>
      </>
  )

}

export default About

import { useState } from 'react';
import './Kotak.css'
import BankAccount from './Bank';
// Create BankAccount class

const Kotak = () => {
    const [accounts, setAccounts] = useState([])
    const [currentAccountHolder, setCurrentAccountHolder] = useState(null)


    function showAccounHolder() {
        let select = document.querySelector('#accountHolder');
        select.style.display = "block"
        document.querySelector('#bankAction').style.display = "block"

        //to clear old option tag
        select.innerHTML = '';

        accounts.forEach((account, index) => {
            let option = document.createElement('option');
            option.value = index;
            option.text = `${account.accountHolder} : Balance - ${account.balance}`
            select.appendChild(option)
        })
        //By defualt the first account holder name will be display
        currentAccountHolder = accounts[0]
    }

    const createBankAccount = () => {
        let custName = document.querySelector('#name').value.trim();
        let balance = parseInt(document.querySelector('#balance').value);

        //validation 
        if (custName === "" || isNaN(balance)) {
            document.querySelector('#output').innerHTML = '<p> &#10060; Please Enter Valid details </p>'
            return;
        }

        let newAccount = new BankAccount(custName, balance)
        accounts.push(newAccount)
        alert('Account Created Successfully !!!')

        //After account created the data will be display
        showAccounHolder()

        document.querySelector('#output').innerText = `Account created for ${custName} - Rs. ${balance}`;

        //clear input field
        document.querySelector('#name').value = ''
        document.querySelector('#balance').value = ''
    }

    const selectAccount = () => {
        let select = document.querySelector('#accountHolder');
        let index = select.value
        currentAccountHolder = accounts[index]
        document.querySelector('#output').innerText = `Selected Account - ${currentAccountHolder.accountHolder}`
    }

    //deposit
    const deposit = () => {
        let amount = parseInt(document.querySelector('#amount').value)
        let message = currentAccountHolder.deposit(amount)
        showAccounHolder()
        document.querySelector('#output').innerText = message
    }

    const checkBalance = () => {
        let message = currentAccountHolder.checkBalance()
        document.querySelector('#output').innerText = message
    }

    return (
        <div class="main">
            <h2>&#127974; Kotak Mahindra Bank System</h2>

            {/* User Input for bank account creation  */}

            <input type="text" id="name" placeholder="Enter Customer Name" />
            <input type="number" id="balance" placeholder="Enter initial Amount" />
            <br />
            <button onClick={createBankAccount()}>Create Account</button>


            <select id="accountHolder" style={{ display: 'none' }} onChange={selectAccount()}></select>

            {/* Action Buttons */}
            <div id="bankAction" style="display: none;">
                <input type="number" id="amount" placeholder="Enter Amount" />
                <button onClick={deposit()}>Deposite</button>
                <button onClick={withdraw()}>Withdraw</button>
                <button onClick={checkBalance()}>Check Balance</button>
            </div>

            {/* Show Balance Details */}
            <div id="output">&#129300; Account Details Loading...</div>
        </div>
    )
}
export default Kotak;
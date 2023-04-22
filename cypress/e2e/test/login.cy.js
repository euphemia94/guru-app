import {Login2} from '../page-objects/Login2';


describe ('Guru App', ()=> {

   let login2 = new Login2();

   

   it('Login Module', () =>{
cy.visit('https://demo.guru99.com/v4/');
login2.loginForm('mngr4949175', 'UhYsyvE');

   })

 

  
})
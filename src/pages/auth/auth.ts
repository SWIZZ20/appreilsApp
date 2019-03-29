import { TabsPage } from './../tabs/tabs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NavParams, MenuController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit{

  mode:string;
  authForm:FormGroup;
  errorMessage:string;
  
  constructor(private auth:AuthServiceProvider, private navParam:NavParams,
    private menuCtrl:MenuController, private formBuilder:FormBuilder,
    private navCtrl:NavController) {
  }

  onToggleMenu()
  {
    this.menuCtrl.open();
  }

  ngOnInit(): void {
    this.initForm();
    this.mode= this.navParam.get('mode'); 
  }

  initForm()
  {
    this.authForm=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit()
  {
    const email=this.authForm.get('email').value;
    const password= this.authForm.get('password').value;

    if(this.mode==='new')
    {
      this.auth.signUpUser(email,password).then(()=>
      {
        this.navCtrl.setRoot(TabsPage);
      }).catch((erreur)=>{
        this.errorMessage=erreur;
      });
    }else if(this.mode==='connect')
    {
      this.auth.signInUser(email,password).then(()=>
      {
        this.navCtrl.setRoot(TabsPage);
      }).catch((error)=>{
        this.errorMessage=error;
      });
    }
  }
  
}

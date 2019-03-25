
import * as firebase from 'firebase'

export class AuthServiceProvider {

  constructor() {
    console.log('Hello AuthServiceProvider Provider');
  }

  signUpUser(email:string, password:string)
  {
    return new Promise((resolve,rejet)=>
    {
      firebase.auth().createUserWithEmailAndPassword(email,password).then(
        (user)=>{
          resolve(user);
        }).catch((erreur)=>{
          rejet(erreur);
        });
    });
  }

  signInUser(email:string, password:string)
  {
    return new Promise((resolve,rejet)=>
    {
      firebase.auth().signInWithEmailAndPassword(email,password).then(
        (user)=>{
          resolve(user);
        }).catch((erreur)=>{
          rejet(erreur);
        });
    });
  }

  signOut()
  {
    firebase.auth().signOut();
  }

}

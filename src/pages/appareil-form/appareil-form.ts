import { NavController } from 'ionic-angular';
import { Appareils } from './../../Models/Appareils';
import { AppareilServiceProvider } from './../../providers/appareil-service/appareil-service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'page-appareil-form',
  templateUrl: 'appareil-form.html',
})
export class AppareilFormPage implements OnInit {

  appareilForm:FormGroup;

  constructor(private formbuilder:FormBuilder,
    private appareilService:AppareilServiceProvider,
    public navCtrl:NavController) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm()
  {
    this.appareilForm=this.formbuilder.group({
      name:["",Validators.required],
      description:this.formbuilder.array([])
    });
  }

  getDescriptionArray()
  {
    return this.appareilForm.get("description") as FormArray;
  }

  onAddDescription()
  {
    let newControl=this.formbuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  onRemoveDescription(index:number)
  {
    this.getDescriptionArray().removeAt(index)
    console.log('ok');
  }

  onSubmitForm()
  {
    let newAppareil= new Appareils(this.appareilForm.get('name').value);
    for(let control of this.getDescriptionArray().controls)
    {
      newAppareil.description.push(control.value);
    }
    this.appareilService.addAppareil(newAppareil);
    this.navCtrl.pop();
  }

}

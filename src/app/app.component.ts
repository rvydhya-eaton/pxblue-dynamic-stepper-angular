import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})

export class AppComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;
  form: FormArray;
  RandomFormGroup: FormGroup;
  @ViewChild('stepper') stepper;
  stepOptions = [
    { label: 'Buy Groceries', value: '1' },
    { label: 'Cook Dinner', value: '2' },
    { label: 'Go To Sleep', value: '3' },
    { label: 'Go To Work', value: '4' },
    { label: 'Wake Up', value: '5' }
  ]
  steps = [{ title: null, value: null, completed: false }];
  allCompleted = false;
  procedureFinished:boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
     this.RandomFormGroup = this._formBuilder.group({
       Ctrl: ['', Validators.required]
    });
  }

  addItem() {
    this.steps.push({ title: null, value: null, completed: false }); 
    this.stepper.selectedIndex = this.steps.length - 1;
    this.allCompleted = false;
  }

  changeStepSelection(event, index) {
    setTimeout(() =>{
      this.stepper.selectedIndex = this.steps.length;
    },0);    
    this.steps[index].title = this.stepOptions[event.value - 1].label;
    this.steps[index].completed = true;
    this.allCompleted = true;
  }

  onRemoveAll() {
    this.steps = [];
    this.stepper.selectedIndex = this.steps.length;
    this.allCompleted = true;
  }

  removeStep(i){
    if(this.steps.length < i + 1){return;}
    this.steps.splice(i,1);
    this.stepper.selectedIndex = this.steps.length;
    this.checkCompleted();
  }

  checkCompleted(){
    this.allCompleted = this.steps.every(step => step.completed);
  }

  handleDone(){
    this.procedureFinished = true;
  }

  handleReset(){
    this.procedureFinished = false;
    this.steps = [];
    this.steps.push({ title: null, value: null, completed: false });
    this.allCompleted = false;
  }

}


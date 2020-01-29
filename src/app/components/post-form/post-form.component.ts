import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  title:string = 'MyThoughts';
  showModal: boolean;
  registerForm: FormGroup;
  didSubmit: boolean = false;
  
  @Output()
  submitted = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        thought: ['', [Validators.required, Validators.minLength(2)]],
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.didSubmit = true;
    console.log(this.registerForm);


    const post =this.registerForm.value 
    this.submitted.emit(post);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }



    if(this.didSubmit)
    {
      this.showModal = false;
    }
   
}
}

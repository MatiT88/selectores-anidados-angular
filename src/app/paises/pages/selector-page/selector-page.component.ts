import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {

  miFormulario: FormGroup = this.fb.group({
    
  })

  constructor ( private fb: FormBuilder) {}

}

import { Component, Input, OnInit } from '@angular/core';
import { FormTemplate, FieldSchema } from '../models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styles: [`.renderer { padding:12px }`]
})
export class FormRendererComponent implements OnInit {
  @Input() template!: FormTemplate;
  form!: FormGroup;

  ngOnInit() { 
    //this.buildForm();
    }

  ngOnChanges() { this.buildForm(); }

  buildForm() {
    const group: any = {};
    if (!this.template) return;
    for (const f of this.template.fields) {
      const validators = this.mapValidators(f.validators);
      group[f.id] = new FormControl(f.defaultValue ?? null, validators);
    }
    this.form = new FormGroup(group);
  }

  mapValidators(vs: any) {
    if (!vs) return [];
    const list: any[] = [];
    for (const v of vs) {
      switch (v.name) {
        case 'required': list.push(Validators.required); break;
        case 'min': list.push(Validators.min(v.value)); break;
        case 'max': list.push(Validators.max(v.value)); break;
        case 'minLength': list.push(Validators.minLength(v.value)); break;
        case 'maxLength': list.push(Validators.maxLength(v.value)); break;
        case 'pattern': list.push(Validators.pattern(v.value)); break;
      }
    }
    return list;
  }

  isVisible(f: FieldSchema) { return true; }

  onSubmit() {
    if (this.form.valid) console.log(this.form.value);
    else Object.values(this.form.controls).forEach(c=>c.markAsDirty());
  }
}
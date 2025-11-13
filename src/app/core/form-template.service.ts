import { Injectable } from '@angular/core';
import { FormTemplate } from '../models';


@Injectable({ providedIn: 'root' })
export class FormTemplateService {
  private KEY = 'dynamic_forms_templates_v1';


  list(): FormTemplate[] {
    const s = localStorage.getItem(this.KEY);
    return s ? JSON.parse(s) : [];
  }


  save(t: FormTemplate) {
    const list = this.list();
    const idx = list.findIndex(x => x.id === t.id);
    if (idx >= 0) list[idx] = t; else list.push(t);
    localStorage.setItem(this.KEY, JSON.stringify(list));
  }


  get(id: string) {
    return this.list().find(x => x.id === id);
  }


  delete(id: string) {
    const list = this.list().filter(x => x.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(list));
  }
}
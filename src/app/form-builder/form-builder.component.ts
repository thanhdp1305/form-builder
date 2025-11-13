import { Component, OnInit } from "@angular/core";
import { FormTemplate, FieldSchema } from "../models";
import { v4 as uuidv4 } from "uuid";
import { FormTemplateService } from "../core/form-template.service";

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.scss"],
})
export class FormBuilderComponent implements OnInit {
  template: FormTemplate = {
    id: uuidv4(),
    name: "Untitled",
    layout: { columns: 4, gutter: 12 },
    fields: [],
  };

  selectedField?: FieldSchema;

  constructor(private svc: FormTemplateService) {}

  ngOnInit() {
    // load first saved template if exists
    const saved = this.svc.list();
    if (saved.length) {
      this.template = saved[0];
    }
  }

  addField(type: FieldSchema["type"]) {
    const f: FieldSchema = {
      id: "f_" + Math.random().toString(36).substring(2, 9),
      type,
      label: "New Field",
      grid: { colSpan: 24 },
    };
    this.template.fields.push(f);
    this.selectField(f);
  }

  selectField(f: FieldSchema) {
    this.selectedField = f;
  }

  updateField(updated: FieldSchema) {
    const idx = this.template.fields.findIndex((x) => x.id === updated.id);
    if (idx >= 0) this.template.fields[idx] = updated;
  }

  save() {
    this.svc.save(this.template);
    alert("Saved");
  }
}

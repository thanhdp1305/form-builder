import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { FieldSchema } from "../models";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-field-config-panel",
  templateUrl: "./field-config-panel.component.html",
  styleUrls: ["./field-config-panel.component.scss"],
})
export class FieldConfigPanelComponent implements OnChanges {
  @Input() field!: FieldSchema;
  @Output() update = new EventEmitter<FieldSchema>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ label: [""], type: [""], colSpan: [24], placeholder: [""] });
  }

  ngOnChanges(ch: SimpleChanges) {
    if (ch["field"] && this.field) {
      this.form.patchValue({
        label: this.field.label,
        type: this.field.type,
        colSpan: this.field.grid?.colSpan || 24,
        placeholder: this.field.placeholder || "",
      });
    }
  }

  apply() {
    const v = this.form.value;
    const updated: FieldSchema = {
      ...this.field,
      label: v.label,
      type: v.type,
      placeholder: v.placeholder,
      grid: { ...(this.field.grid || {}), colSpan: v.colSpan },
    };
    this.update.emit(updated);
  }
}

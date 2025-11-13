import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FieldSchema, FormLayout } from "../models";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-grid-canvas",
  templateUrl: "./grid-canvas.component.html",
  styleUrls: ["./grid-canvas.component.scss"],
})
export class GridCanvasComponent {
  @Input() layout!: FormLayout;
  @Input() fields: FieldSchema[] = [];
  @Output() fieldSelected = new EventEmitter<FieldSchema>();

  drop(event: CdkDragDrop<FieldSchema[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }

  selectField(f: FieldSchema) {
    this.fieldSelected.emit(f);
  }
}

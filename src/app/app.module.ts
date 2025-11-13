import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHttpClient } from "@angular/common/http";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { GridCanvasComponent } from "./grid-canvas/grid-canvas.component";
import { FieldConfigPanelComponent } from "./field-config-panel/field-config-panel.component";
import { FormRendererComponent } from "./form-renderer/form-renderer.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ModuleShare } from "./ng-zorro-antd.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    GridCanvasComponent,
    FieldConfigPanelComponent,
    FormRendererComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleShare,
    DragDropModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}

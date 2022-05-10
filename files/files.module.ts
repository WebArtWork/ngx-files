import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { FilesComponent } from './files.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		FilesComponent
	],
	exports: [
		FilesComponent
	],
	providers: []

})

export class FilesModule { }

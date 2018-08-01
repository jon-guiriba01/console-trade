import { NgModule } from '@angular/core';
import { KeysPipe } from './keys/keys';
import { ReplacePipe } from './replace/replace';
import { DistancePipe } from './distance/distance';
@NgModule({
	declarations: [
		KeysPipe,
    ReplacePipe,
    DistancePipe
  ],
	imports: [],
	exports: [
		KeysPipe,
    ReplacePipe,
    DistancePipe
  ]
})
export class PipesModule {}

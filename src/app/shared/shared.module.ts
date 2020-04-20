import {NgModule} from '@angular/core';
import {StarComponent} from './components/star.component';
import {CharacterToCharacterPipe} from './pipes/character-to-character.pipe';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    StarComponent,
    CharacterToCharacterPipe
  ],
  exports: [
    // Here we have all custom reusable components
    StarComponent,
    CharacterToCharacterPipe
  ],
  imports: [
    CoreModule
  ]
})
export class SharedModule {}

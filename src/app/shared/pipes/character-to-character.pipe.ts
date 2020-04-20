import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'characterToCharacter'
})
export class CharacterToCharacterPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.replace(
      new RegExp(args[0], 'g'),
      args.length > 1 ? args[1] : ' '
    );
  }

}

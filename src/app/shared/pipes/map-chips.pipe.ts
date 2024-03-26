import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapChips',
})
export class MapChipsPipe<T extends { [s: string]: unknown; }> implements PipeTransform {

  transform(cards: T[]): T[] {
    return cards.map(card => ({
      ...card,
      chips: this.mapChips(card)
    }))
  }

  private mapChips(card: T): any[] {
    const chipObject: any[] = [];
    for (const [key, val] of Object.entries(card)) {
      if (Array.isArray(val)) {
        chipObject.push({
          name: key,
          val: val.length
        });
      }
    }
    return chipObject;
  }

}

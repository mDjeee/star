import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapChips',
})
export class MapChipsPipe implements PipeTransform {

  transform(cards: any[]): any[] {
    const cardsWithChip = [];
    for (const card of cards) {
      const chipArray: any[] = [];
      for (const [key, val] of Object.entries(card)) {
        if (Array.isArray(val)) {
          chipArray.push({
            name: key,
            val: val.length
          });
        }
      }
      card.chips = chipArray;
      cardsWithChip.push(card);
    }

    return cardsWithChip;
  }

}

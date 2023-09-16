import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Destination } from './destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationsEntityService extends EntityCollectionServiceBase<Destination> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Destination', serviceElementsFactory);
  }
}

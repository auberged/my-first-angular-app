import { EntityMetadataMap } from '@ngrx/data';
import { Destination } from './destination.model';

export function sortByName(a: Destination, b: Destination): number {
  const comp = a.name.localeCompare(b.name);
  return comp;
}
export const entityMetadata: EntityMetadataMap = {
  Destination: {
    selectId: (destination: Destination) => destination.id,
    sortComparer: sortByName,
  },
};

export const entityConfig = {
  entityMetadata,
};

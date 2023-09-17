import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../../environments/environment';

export const destinationServiceConfig: DefaultDataServiceConfig = {
    root: `${environment.api}/`,
    timeout: 3000,
    entityHttpResourceUrls: {
        Destination: {
            entityResourceUrl: `${environment.api}destinations.json/`,
            collectionResourceUrl: `${environment.api}destinations.json`
        },
    }
}
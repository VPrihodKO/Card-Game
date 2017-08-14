import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', description: 'Pacifist', attack: 0, life: 1 },
      { id: 11, name: 'Mr. Nice', description: 'some description', attack: 3, life: 2 },
      { id: 12, name: 'Narco', description: 'some description', attack: 2, life: 3 },
      { id: 13, name: 'Bombasto', description: 'some description', attack: 4, life: 4 },
      { id: 14, name: 'Celeritas', description: 'some description', attack: 4, life: 3 },
      { id: 15, name: 'Magneta', description: 'some description', attack: 4, life: 5 },
      { id: 16, name: 'RubberMan', description: 'some description', attack: 3, life: 2 },
      { id: 17, name: 'Dynama', description: 'some description', attack: 1, life: 1 },
      { id: 18, name: 'Dr IQ', description: 'some description', attack: 3, life: 2 },
      { id: 19, name: 'Magma', description: 'some description', attack: 5, life: 6 },
      { id: 20, name: 'Tornado', description: 'some description', attack: 4, life: 2 }
    ];
    return {heroes};
  }
}
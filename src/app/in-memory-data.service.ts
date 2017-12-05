import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements
InMemoryDbService {
  createDb() {
    const contactList = [
      {id: 1, name: 'John', surname: 'Guillou', mail:'johnguillou@gmail.com', phoneNumber: '+33698654732'},
    	{id: 2, name: 'Jessica', surname: 'Anschutz', mail:'jess@gmail.com', phoneNumber: '0675847304'},
    	{id: 3, name: 'Carole', surname: 'Le Roux', mail:'carol@gmail.com', phoneNumber: '+33790695446'},
    	{id: 4, name: 'Vassily', surname: 'Dubois', mail:'vassiloche@gmail.com', phoneNumber: '0678132346'}
    ];
    return {contactList};
  }
}

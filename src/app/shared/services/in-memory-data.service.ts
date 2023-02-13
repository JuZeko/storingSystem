export class InMemoryDataService {
  createDb() {
    const productTypes = [
      { id: 1, name: 'Food' },
      { id: 2, name: 'Drinks' },
      { id: 3, name: 'Laundry' },
      { id: 4, name: 'detergent' },
      { id: 5, name: 'Electronics' },
      { id: 6, name: 'Furniture' },
      { id: 7, name: 'Clothing' },
      { id: 8, name: 'Automobiles' },
    ];
    return { productTypes };
  }
}

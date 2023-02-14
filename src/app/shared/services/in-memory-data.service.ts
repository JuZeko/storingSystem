export class InMemoryDataService {
  createDb() {
    const productTypes = [
      { id: 1, name: 'Food' },
      { id: 2, name: 'Drinks' },
      { id: 3, name: 'Electronics' },
    ];
    const food = [
      { id: 1, name: 'asparagus' },
      { id: 2, name: 'apples' },
      { id: 3, name: 'avacado' },
      { id: 4, name: 'alfalfa' },
      { id: 5, name: 'almond' },
    ];
    const drinks = [
      { id: 1, name: 'Wine' },
      { id: 2, name: 'Coffee' },
      { id: 3, name: 'Lemonade' },
      { id: 4, name: 'Iced tea' },
      { id: 5, name: 'Hot chocolate' },
    ];
    const electronics = [
      { id: 1, name: 'Mobile Devices. ' },
      { id: 2, name: 'Wearables.' },
      { id: 3, name: 'Laptops' },
      { id: 4, name: 'Scanners' },
      { id: 5, name: 'Printers' },
    ];
    return { productTypes, food, drinks, electronics };
  }
}

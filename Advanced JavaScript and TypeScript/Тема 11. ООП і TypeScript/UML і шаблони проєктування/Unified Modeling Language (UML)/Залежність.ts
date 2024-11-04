type ItemType = {
  name: string;
};

class Catalog {
  showCatalog(items: ItemType[]) {
    items.forEach((item) => {
      console.log(item.name);
    });
  }
}

class Items {
  private items: ItemType[] = [];
  setItem(name: string) {
    this.items.push({ name });
  }

  getItems(): ItemType[] {
    return this.items;
  }
}

const items = new Items();
const catalog = new Catalog();

items.setItem('Catalog 1');
items.setItem('Catalog 2');
items.setItem('Catalog 3');

catalog.showCatalog(items.getItems());

export {};

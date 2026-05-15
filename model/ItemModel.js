import {item_db} from "../db/db.js";

class Item {
    constructor(id, name, qty, price) {
        this.id = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}


const addItemData = (id, name, qty, price) => {
    item_db.push(new Item(id, name, qty, price));
}

const updateItemData = (id, name, qty, price) => {
    let i = item_db.find(i => i.id == id);
    if (i) {
        i.name = name;
        i.qty = qty;
        i.price = price;
    }
}

const deleteItemData = (id) => {
    let index = item_db.findIndex(i => i.id == id);
    if (index !== -1) item_db.splice(index, 1);
}

const getItemData = () => item_db;
const getItemDataById = (id) => item_db.find(i => i.id == id);
const getItemDataByIndex = (i) => item_db[i];

export {
    addItemData,
    updateItemData,
    deleteItemData,
    getItemData,
    getItemDataById,
    getItemDataByIndex
};
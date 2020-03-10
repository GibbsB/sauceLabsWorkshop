class InventoryPage {
    get inventoryItemElems() {
        return $$('inventory_item');
    }

}

module.exports = new InventoryPage();
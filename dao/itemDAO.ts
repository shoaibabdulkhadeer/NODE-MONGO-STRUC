import ItemModel from '../models/item';

class ItemDAO {

    static create(itemData:any) {
       const newItem = new ItemModel(itemData);
       newItem.save(); 
      return 
      }


    static findAll() {  
       const allitems = ItemModel.find({})
        return allitems
      }


      static findById(id: string) {

      }


      static delete(id: string) {
        const deletedItem = ItemModel.findByIdAndRemove(id).exec()
        return deletedItem;

      }
}


export default ItemDAO;
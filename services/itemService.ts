import ItemDao from '../dao/itemDAO'

class ItemService {
    static create (itemData:any){
         return ItemDao.create(itemData)
    }

    static getAll() {   
        return ItemDao.findAll()
    }

    static getById(id:string){
    return ItemDao.findById(id)
    }

    static delete(id:string){
        return ItemDao.delete(id)
    }

}

export default ItemService
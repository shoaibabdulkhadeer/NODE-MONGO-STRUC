import express from 'express';
import ItemService from '../services/itemService';

const router = express.Router();

router.post('/postitems',async (req,res) => {
    const newItem = req.body;
    const createdItem = await ItemService.create(newItem); 
    res.json(createdItem);  
})

router.get('/getitems',async (req,res) => {
    const items = await ItemService.getAll()
    res.json(items);
})

router.get('/getitems/:id',async (req,res) => {
      const itemid = req.params.id;
      const  item = await ItemService.getById(itemid);

      res.json(item);
})

router.delete('/delete/:id',async (req,res) => {
     const itemid = req.params.id;
     await ItemService.delete(itemid);
     res.json("'Item deleted successfully'")
}) 


export default router
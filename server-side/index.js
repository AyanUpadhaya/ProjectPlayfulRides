const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT||3000
require('dotenv').config()
//middleware
app.use(cors())
app.use(express.json())

//mongo

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster4.jtucn2c.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
        //DATABSE COLLECTION
        const toysCollections = client.db('toysDB').collection('allToys')

        //POST
        app.post('/api/toys',async(req,res)=>{
            const doc = req.body;
            console.log(doc)
            const result = await toysCollections.insertOne(doc)
            res.status(200).send(result)
        })


        //GET - ALL/MY TOYS
        app.get('/api/toys',async(req,res)=>{
          const cursor = toysCollections.find()
          const result = await cursor.toArray()
          if(req.query?.email){
            const data = result.filter(r=>r.sellerEmail === req.query.email)
            res.send(data)
          }else{
            res.send(result.slice(0,20))
          }
        })

        //GET - SINGLE TOY
        app.get('/api/toys/:id',async(req,res)=>{
          const id = req.params.id;
          const query = {_id:new ObjectId(id)}
          const result = await toysCollections.findOne(query)
          res.send(result)
        })

        //DELETE
        app.delete('/api/toys/:id',async(req,res)=>{
          const id = req.params.id;
          const query = {_id:new ObjectId(id)}
          const result = await toysCollections.deleteOne(query)
          res.send(result)
        })
        //UPDATE
        app.put('/api/toys/:id',async(req,res)=>{
          const id = req.params.id;
          const body = req.body;
          const filter = {_id:new ObjectId(id)}
          const options = { upsert: true };
          const{
            name,
            sellerName,
            sellerEmail,
            category,
            price,
            ratings,
            quantity,
            detailDescription
          } = body;
          const updateDoc = {
            $set: {
              name:name,
              sellerName:sellerName,
              sellerEmail:sellerEmail,
              category:category,
              price:price,
              ratings:ratings,
              quantity:quantity,
              detailDescription:detailDescription
            },
          };

      
          const result = await toysCollections.updateOne(filter, updateDoc, options);
          res.send(result)
        })

        //SORTING TOY APIS
        const collationOptions = {
          locale:'en_US',
          numericOrdering:true,
        }
        app.get('/products/htl',async(req,res)=>{
          const query ={sellerEmail:req.query.email}
          const cursor =  await toysCollections.find(query).sort({ price:-1 }).collation(collationOptions).toArray()
          res.send(cursor)
        })
        app.get('/products/lth',async(req,res)=>{
          const query ={sellerEmail:req.query.email}
          const cursor =  await toysCollections.find(query).sort({ price:1 }).collation(collationOptions).toArray()
          res.send(cursor)
        })


    // Connect the client to the server	(optional starting in v4.7)
    // client.connect();
    // Send a ping to confirm a successful connection
    client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/',(req,res)=>{
    res.send('Playfulrides Server is Running')
})

app.listen(port,()=>{
    console.log('Server is running at port: ',port)
})

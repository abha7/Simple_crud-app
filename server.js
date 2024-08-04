
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/productModel')
const productRoute = require("./routes/product.route")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false })) // to send the data in form-data format



//routes
app.use("/products", productRoute)


app.get('/', (req, res) => {
    res.send('hello node api')  //sent to client
})

app.get('/blog', (req, res) => {
    res.send('hello blog')  //sent to client
})


// app.post('/product', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// })
// app.post('/products', async(req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product)
//         // console.log(product)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message:error.message})
//     }
    
// })
    
// app.get('/products', async (req, res) => {
//     try {
//         const product = await Product.find({});
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
        
//     }
// })

// app.get('/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
        
//     }
// })

// // update a product
// app.put('/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//            return res.status(404).json({message:`cannot find any product with ID ${id}`})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error){
//         res.status(500).json({message:error.message})
//     }
// })

// app.delete('/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({message:`cannot find any product with ID ${id}`})
//         }
//         res.status(200).json(product)
//     } catch(error) {
//         res.status(500).json({message:error.message})
//     }
// })

mongoose.connect('mongodb://abha_test_db_so:s7tB9GgZhLhNvC6@t1fm1smon032.amr.corp.intel.com:7160,t2fm1smon032.amr.corp.intel.com:7160,t3fm1smon032.amr.corp.intel.com:7160/abha_test_db?ssl=true&replicaSet=mongo7160&authMechanism=SCRAM-SHA-1')
    .then(() => {
        console.log("node api app is running on port 3000")
        app.listen(3000, () => {
            console.log('node ')
        })
}).catch((error) => {
        console.log(error)
})


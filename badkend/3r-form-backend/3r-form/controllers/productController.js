const Product = require('../models/product');

exports.postProduct = [(req, res, next) => {
  console.log('cookie', req.body, req)
  if(!req.session.school) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
},(req, res, next) => {

    const { title, donorName, donorClass, incharge, category, condition, description } = req.body;
        //console.log('Received POST /products request with body:', req.body, req.file);
    console.log('req body', req.body)
      if(!req.files || !req.files.thumbnail) {
       return res.status(422).send("No image provided");
    }
    const thumbnail = req.files.thumbnail[0].path;
    const images = req.files.images ? req.files.images.map(file => file.path) : [];
    const product = new Product({ school, donorName, donorClass, title, incharge, category, thumbnail, images, condition, description });
    product.save()
      .then(() => {
        res.status(201).json({ message: 'Product created successfully' });
      })
      .catch((error) => {
        console.error('Error saving thing:', error);
        res.status(500).json({ error: 'Failed to create thing' });
      });
}]


exports.getAllProducts = (req, res, next) => {
    Product.find()
      .then((things) => {
        console.log('Fetched things:', things);
        res.status(200).json(things);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to fetch things' });
      });
}


exports.getProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch product' });
    });
}


exports.getSchoolProducts = async(req, res, next) => {
  const schoolId = req.params.schoolId;

  if(!mongoose.Schema.Types.ObjectId.isValid(sellerId)) {
    return res.status(400).json({message: 'invalid school id'});
  }
  const products = await Product.find({school: schoolId}).sort({createdAt: -1});
  res.status(200).json(products)
}



exports.getProductSearch = (req, res, next) => {
    const { q } = req.query;

    Product.find({$text:{$search:q}}).then((product) => {
      res.status(200).json(product);
    }).catch((err) => {
      res.status(400).json(err);
    })
 
}
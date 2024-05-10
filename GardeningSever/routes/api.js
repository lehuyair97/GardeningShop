
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const productAPI = require("./APIContainer/Products");
const userAPI = require("./APIContainer/Users");
const categoryAPI = require("./APIContainer/Category"); 
const gardeningAPI = require("./APIContainer/Gardening"); 
const orderAPI = require("./APIContainer/Order")
const QandA = require("./APIContainer/QandA");
router.use(bodyParser.urlencoded({ extended: true }));

// Products routes
router.get("/product", productAPI.getAllProducts);
router.post("/product", productAPI.createProduct);

// Thiết lập lưu trữ cho tệp avatar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/avatars"); // Thư mục để lưu trữ tệp avatar
  },
  filename: function (req, file, cb) {
    // Tên file được lưu trữ là timestamp + tên gốc của file
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

router.get("/images/:filename", (req, res) => {
  // Lấy tên của ảnh từ tham số của URL
  const filename = req.params.filename;

  // Đường dẫn tới thư mục chứa ảnh
  const imagePath = path.join(__dirname, "../uploads/avatars", filename);

  // Kiểm tra xem file có tồn tại không
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Nếu file không tồn tại, trả về lỗi 404
      return res.status(404).json({ message: "Image not found" });
    }

    // Trả về file ảnh
    res.sendFile(imagePath);
  });
});

// Thiết lập tải lên với Multer
const upload = multer({ storage: storage });

// Users Controler
router.post("/users/upload", upload.single("avatar"), userAPI.createUserWithImage);
router.post("/users/uploads", upload.array("avatar"), userAPI.createUserWithImages);
router.post("/users", userAPI.createUser);
router.get("/users", userAPI.getAllUsers);
router.get("/users/:id", userAPI.getUserById);
router.put("/users/:id", userAPI.updateUser);
router.delete("/users/:id", userAPI.deleteUser);

// Category routes
router.get("/category", categoryAPI.getAllCategories);
router.get("/category/:id", categoryAPI.getCategoryById);
router.post("/category", categoryAPI.createCategory);
router.put("/category/:id", categoryAPI.updateCategoryById);
router.delete("/category/:id", categoryAPI.deleteCategoryById);

// Gardening routes
router.get("/gardening", gardeningAPI.getAllGardeningItems);
router.get("/gardening/:id", gardeningAPI.getGardeningItemById);
router.post("/gardening", gardeningAPI.createGardeningItem);
router.put("/gardening/:id", gardeningAPI.updateGardeningItemById);
router.delete("/gardening/:id", gardeningAPI.deleteGardeningItemById);

//Order routes
router.get('/orders', orderAPI.getAllOrders);
router.get('/orders/:id', orderAPI.getOrderByID);
router.get('/orders/users/:customerId', orderAPI.getOrdersByUserId);
router.post('/orders', orderAPI.createOrder);
router.put('/orders/:id', orderAPI.updateOrderById);
router.delete('/orders/:id', orderAPI.deleteOrderById);

//Question and Answer

router.get('/QandA',QandA.getAllQandA);
router.post('/QandA',QandA.createQandA);
module.exports = router;

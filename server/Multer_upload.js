import multer from "multer";
import path from "path";
//Multer package Initializing :

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// 1* 1000 * 1000

let maxSize = 3 * 1000 * 1000;
let multer_upload = multer({
  storage: storage,
  limits: maxSize,
});

export default multer_upload;

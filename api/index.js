const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const hostelRoute = require("./routes/hostels");
const houseRoute = require("./routes/houses");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const { application } = require("express");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true

  }
  ).then(console.log("Connected to MONGODB")).catch((err) => console.log(err));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
       cb(null, "images");
  },
  filename: (req, file, cb) => {

    // let extArray = file.mimetype.split("/");
    // let extension = extArray[extArray.length - 1];
    // cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    // cb(null, file.fieldname + '-' + Date.now());
    // callback(null, file.fieldname + '-' + Date.now() + file.originalname);
    cb(null, file.originalname);
    // cb(null, file.fieldname + '-' + Date.now());
    // cb(null,  file.fieldname+Date.now()+path.extname(file.originalname));
  },
});


const upload = multer({storage: storage });

          app.post(
            "/api/upload",
            upload.fields([
              { name: "file"},
              { name: "file1"},
              { name: "video"},
            ]),
            (req, res) => {
              res.status(200).json("File has been uploaded");
            },
          );

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/hostels", hostelRoute);
app.use("/api/houses", houseRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
  });

  const videoStorage = multer.diskStorage({
    destination: 'images', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 10000000   // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {     // upload only mp4 and mkv format
            return cb(new Error('Please upload a Video'))
        }
        cb(undefined, true)
    }
})

app.post("/api/upload", videoUpload.single('video'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
// const postRoute = require("./routes/posts");
// const categoryRoute = require("./routes/categories");
// const multer = require("multer");
// const path = require("path");

// dotenv.config();
// app.use(express.json());
// app.use("/images", express.static(path.join(__dirname, "/images")));

// mongoose.connect(process.env.MONGO_URL,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true

//   }
//   ).then(console.log("Connected to MONGODB")).catch((err) => console.log(err));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded");
// });

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/categories", categoryRoute);

// app.listen("5000", () => {
//   console.log("Backend is running.");
// });
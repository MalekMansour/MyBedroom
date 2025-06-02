const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.use(express.static(__dirname));

app.post('/upload', upload.array('files'), (req, res) => {
  res.send('Files uploaded successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

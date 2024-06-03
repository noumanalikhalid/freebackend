const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
 const MainData = require("../backend/Model/MainData");
 const  DiseaseName = require("../backend/Model/DiseaseName");
 const DuaName = require("../backend/Model/Duanames")
 const AllahName =require("../backend/Model/Allahnames")
 const DuaData = require ("../backend/Model/Duadata")

const app = express();
const PORT = 5000;



// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());
const dbURL = "mongodb://localhost:27017/fypproject";
// Connect to MongoDB
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB at ${dbURL}`);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// save desises name
app.post("/save-Disease", async (req, res) => {
    try {
      const { Name } = req.body;
      const newName = new DiseaseName({Name});
      await newName.save();
     
    //   res.status(201).send("Form data saved successfully");
      res.status(201).json(newName);
    } catch (err) {
      console.error("Error saving form data:", err);
      res.status(500).send("Error saving form data");
    }
  });
  // save Duas name
app.post("/save-Dua", async (req, res) => {
  try {
    const { name } = req.body;
    const newName = new DuaName({name});
    await newName.save();
   
  //   res.status(201).send("Form data saved successfully");
    res.status(201).json(newName);
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).send("Error saving form data");
  }
});


  // get desiease name
  app.get("/get-Names", async (req, res) => {
    try {
        const data = await DiseaseName.find();
        res.status(200).json(data);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Error fetching data");
    }
}); 
// get Dua name
app.get("/get-Duas", async (req, res) => {
  try {
      const data = await DuaName.find();
      res.status(200).json(data);
  } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
  }
}); 













// save data 
app.post("/save-data", async (req, res) => {
    try {
      const { Name,Ref,Ayat,Eng,Urdu } = req.body;
      const newData = new MainData({Name,Ref,Ayat,Eng,Urdu });
      await newData.save();
     
    //   res.status(201).send("Form data saved successfully");
      res.status(201).json(newData);
    } catch (err) {
      console.error("Error saving form data:", err);
      res.status(500).send("Error saving form data");
    }
  });
  
// save data  of duas
app.post("/save-dua-data", async (req, res) => {
  try {
    const { name,ayat,eng,urdu } = req.body;
    const newData = new DuaData({name,ayat,eng,urdu });
    await newData.save();
   
  //   res.status(201).send("Form data saved successfully");
    res.status(201).json(newData);
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).send("Error saving form data");
  }
});

  // get all data 
  app.get("/get-data", async (req, res) => {
    try {
        const data = await MainData.find();
        res.status(200).json(data);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Error fetching data");
    }
});
// get data on the base of Name
app.get('/get-dataName/:disease', async (req, res) => {
  const { disease } = req.params;
  
  try {
      if (!disease) {
          return res.status(400).send("Disease parameter is required");
      }

      const data = await MainData.findOne({ Name: disease });
      if (!data) {
          return res.status(404).send("Data not found");
      }

      res.status(200).json(data);
  } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
  }
});
// for search cure
app.get('/get-dataName/:searchQuery', async (req, res) => {
  const { searchQuery } = req.params;
  
  try {
      if (!searchQuery) {
          return res.status(400).send("Disease parameter is required");
      }

      const data = await MainData.findOne({ Name: searchQuery });
      if (!data) {
          return res.status(404).send("Data not found");
      }

      res.status(200).json(data);
  } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
  }
});
// get duadata on the base of Name
app.get('/get-Duadata/:item', async (req, res) => {
  const { item } = req.params;

  try {
    if (!item) {
      return res.status(400).send("Dua parameter is required");
    }

    const data = await DuaData.findOne({ name: item });

    if (!data) {
      return res.status(404).send("Data not found");
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Error fetching data");
  }
});



// Allah Names  endpoint 
app.post("/Allahnames", async (req, res) => {
  try {
    const { NameEng, NameArabic, Description } = req.body;
    const AllahNames = new AllahName({ NameEng, NameArabic, Description });
    await AllahNames.save();
    res.status(201).json(AllahNames);
  } catch (err) {
    console.error("Error saving Allah's name:", err);
    res.status(500).send("Error saving Allah's name");
  }
});
// get all names
app.get("/namesAllah", async (req, res) => {
  try {
    const AllahNames = await AllahName.find({});
    res.status(200).json(AllahNames);
  } catch (err) {
    console.error("Error fetching Allah's names:", err);
    res.status(500).send("Error fetching Allah's names");
  }
});







// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

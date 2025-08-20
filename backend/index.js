const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ✅ Allow requests only from your GitHub Pages URL (replace later with Netlify URL)
app.use(
  cors({
    origin: "https://shreyaj1.github.io", // <-- your GitHub Pages frontend
    credentials: false,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully 🚀");
});

app.post("/handleUserData", (req, res) => {
  try {
    let Education = fs
      .readFileSync("./downloadableProject/src/components/home/Education.js")
      .toString();
    let Experience = fs
      .readFileSync("./downloadableProject/src/components/home/Experience.js")
      .toString();
    let Landing = fs
      .readFileSync("./downloadableProject/src/components/home/Landing.js")
      .toString();
    let Me = fs
      .readFileSync("./downloadableProject/src/components/home/Me.js")
      .toString();
    let ProjectCard = fs
      .readFileSync("./downloadableProject/src/components/home/ProjectCard.js")
      .toString();
    let Projects = fs
      .readFileSync("./downloadableProject/src/components/home/Projects.js")
      .toString();
    let Skills = fs
      .readFileSync("./downloadableProject/src/components/home/Skills.js")
      .toString();
    let Footer = fs
      .readFileSync("./downloadableProject/src/components/surround/Footer.js")
      .toString();
    let Navbar = fs
      .readFileSync("./downloadableProject/src/components/surround/Navbar.js")
      .toString();
    let Styles = fs
      .readFileSync("./downloadableProject/src/styles/Styles.module.css")
      .toString();
    let Home = fs
      .readFileSync("./downloadableProject/src/pages/Home.js")
      .toString();
    let AppCss = fs
      .readFileSync("./downloadableProject/src/App.css")
      .toString();
    let AppJs = fs
      .readFileSync("./downloadableProject/src/App.js")
      .toString();
    let indexJs = fs
      .readFileSync("./downloadableProject/src/index.js")
      .toString();
    let serviceWorker = fs
      .readFileSync("./downloadableProject/src/serviceWorker.js")
      .toString();
    let gitignore = fs
      .readFileSync("./downloadableProject/.gitignore")
      .toString();

    let deploy = fs.readFileSync("./downloadableProject/deploy.js").toString();
    let masterscript = fs
      .readFileSync("./downloadableProject/masterscript.sh")
      .toString();
    let indexhtml = fs
      .readFileSync("./downloadableProject/public/index.html")
      .toString();
    let manifestjson = fs
      .readFileSync("./downloadableProject/public/manifest.json")
      .toString();
    let robotstxt = fs
      .readFileSync("./downloadableProject/public/robots.txt")
      .toString();

    let userData =
      "let userData =" +
      JSON.stringify(req.body.userData) +
      "\n module.exports= userData;";
    let githubId = req.body.userData["githubId"];

    let packagejsonObj = JSON.parse(
      fs.readFileSync("./downloadableProject/package.json").toString()
    );
    // ✅ dynamically set homepage based on provided githubId
    packagejsonObj["homepage"] = "https://" + githubId + ".github.io";
    let packagejson = JSON.stringify(packagejsonObj);

    let userSiteFiles = {
      userData,
      Education,
      Experience,
      Landing,
      Me,
      ProjectCard,
      Projects,
      Skills,
      Footer,
      Navbar,
      Styles,
      Home,
      gitignore,
      packagejson,
      deploy,
      indexhtml,
      manifestjson,
      robotstxt,
      AppCss,
      AppJs,
      indexJs,
      serviceWorker,
      masterscript,
    };
    res.send(userSiteFiles);
  } catch (error) {
    console.error("❌ Error handling user data:", error);
    res.status(500).send({ error: "Server error while processing data" });
  }
});

// ✅ Use Render's assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server listening on port ${PORT}`));

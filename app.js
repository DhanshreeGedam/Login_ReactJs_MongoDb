const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public" );
const template_path = path.join(__dirname, "../templates/views" );
// const partials_path = path.join(__dirname, "../templates/partials" );

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
// hbs.registerPartials(partials_path);

app.get("/" , (req,res) => {
    res.render("index")
});

app.get("/register", (req,res) =>{
    res.render("register");
})

app.post("/register", async (req,res) =>{
    // res.render("register");

    try{
        // console.log(req.body.Userid);
        // res.send(req.body.Userid)
        const password = req.body.Password;
        const cpassword = re.body.ConfirmPassword;

        if(password === cpassword){

            const registerUser = new Register({

                Userid: req.body.Userid,
                Password: req.body.Password,
                ConfirmPassword: req.body.ConfirmPassword,
                Email: req.body.Email
        
            })

            const registered = await registerUser.save();
            res.status(201).render("index");

        }else{
            res.send("password are not matching")
        }
    

    }catch(error) {
        res.status(400).send(error);
    }

})


app.listen(port, () => {
    console.log('server is running at port no 3000');
})

// app.listen(3000)
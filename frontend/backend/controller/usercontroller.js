const user = require("../model/user")
const usercontroller = {
    setuser: async (req, res) => {
        try {
            const { UserName, email, state, password, city, address } = req.body
            const existed = await user.findOne({ UserName: UserName })
            if (existed) {
                res.json({
                    message: "user already existed"
                })
                console.log("user already existed")
            }
            else {
              
                console.log(req.body)
                const userdata = await user.create({
                    UserName: UserName,
                    email: email,
                    state: state,
                    password: password,
                    city: city,
                    address: address
                })
                const USer = userdata.save()
                res.json({
                    data: USer,
                    message: "User added successfully"
                })
            }
        } catch (error) {
            // res.json({ "message": error })
            console.log(error);
        }

    },
    getuser: async (req, res) => {
        const data = await user.find()
        res.json({
            user_data: data,
            message: "userdata is fetched"
        })
    }
}

module.exports = usercontroller
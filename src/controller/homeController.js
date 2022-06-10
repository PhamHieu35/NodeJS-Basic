import pool from "../config/connectDB";

let getHomePage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", { dataUser: rows });
};
let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute(`select * from users where id=?`, [userId]);
};
module.exports = {
  getHomePage,
  getDetailPage,
};

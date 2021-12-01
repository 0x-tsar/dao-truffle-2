const DAO = artifacts.require("DAO");
const Token = artifacts.require("Token");

module.exports = async () => {
  try {
    const token = Token.deployed();
    const dao = DAO.deployed();

    //
  } catch (error) {
    console.log(error);
  }
};

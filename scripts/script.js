const DAO = artifacts.require("DAO");
const Token = artifacts.require("Token");

module.exports = async () => {
  try {
    const Token = Token.deployed();
    const dao = DAO.deployed();
  } catch (error) {
    console.log(error);
  }
};

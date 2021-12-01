const DAO = artifacts.require("DAO");
const Token = artifacts.require("Token");

module.exports = async () => {
  try {
    const token = Token.deployed();
    const dao = DAO.deployed();

    const tx = await dao.methods;
    console.log(tx);

    //
  } catch (error) {
    console.log(error);
  }
};

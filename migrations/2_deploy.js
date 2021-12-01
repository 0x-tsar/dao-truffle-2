const DAO = artifacts.require("DAO");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {
  await deployer.deploy(DAO);
  const dao = DAO.deployed();

  await deployer.deploy(Token, dao.addres);
  const token = Token.deployed();
};

const DAO = artifacts.require("DAO");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {
  await deployer.deploy(Token);
  const token = Token.deployed();

  await deployer.deploy(DAO, token.addres);
  const dao = DAO.deployed();
};

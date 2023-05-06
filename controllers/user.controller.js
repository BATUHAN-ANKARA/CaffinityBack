const utils = require("../utils/index");
const baseResponse = require("../dto/baseresponse.dto.js");
const { StatusCodes } = require("http-status-codes");
const userService = require("../services/index");

exports.signUp = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await userService.user.createUser(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.CREATED
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    // const isInvalid = utils.helpers.handleValidation(req);
    // if (isInvalid) {
    //   res
    //     .status(StatusCodes.BAD_REQUEST)
    //     .json({ ...baseResponse, ...isInvalid });
    //   return;
    // }
    const json = await userService.user.signIn(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.updateAvatar = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await userService.user.updateAvatar(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await userService.user.getUser(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.login = async (req, res) => {
  try {
    res.render("login", { link: "login" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Bir hata oluştu!");
  }
};

exports.createPassword = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await userService.user.createPassword(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

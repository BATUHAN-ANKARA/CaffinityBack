const utils = require("../utils/index");
const baseResponse = require("../dto/baseresponse.dto.js");
const { StatusCodes } = require("http-status-codes");
const itemsService = require("../services/index");

exports.createItem = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await itemsService.items.createItem(req);
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

exports.getItems = async (req, res) => {
  try {
    const json = await itemsService.items.getItems();
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

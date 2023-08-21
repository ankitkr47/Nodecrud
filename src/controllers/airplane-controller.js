const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

// post: /airplanes
// req-body {modelNumber: 'airbus320' , capacity: 200}

async function createAirplane(req, res) {
  try {
    const airpalne = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
    });
    return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: "Successfully create an airplane",
                data: airpalne,
                error: {}
            });
  } catch (error) {
    return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: "Something went wrong while creating airplane",
                data: {},
                error: error
            });
  }
}

module.exports = {
    createAirplane,
}
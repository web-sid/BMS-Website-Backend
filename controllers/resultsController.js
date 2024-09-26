import Result from "../models/resultsModel.js";

const getAllResults = async (req, res) => {
  const results = await Result.find({});

  res.status(200).json({
    status: "success",
    total: results.length,
    data: results,
  });
};

export { getAllResults };

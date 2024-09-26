import Testimony from "../models/testimonyModel.js";

const getAllTestimony = async (req, res) => {
  const testimony = await Testimony.find({});

  res.status(200).json({
    status: "success",
    total: testimony.length,
    data: testimony,
  });
};

export { getAllTestimony };

import Coaches from "../models/coachModel.js";

const getAllCoaches = async (req, res) => {
  try {
    const coaches = await Coaches.find({});

    res.status(201).json({
      status: "success",
      total: coaches.length,
      data: coaches,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getAllCoaches };

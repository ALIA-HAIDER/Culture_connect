const Location = require("../models/Location");

const filterLocations = async (req, res) => {
  try {
    const {
      preferredTags = [],
      preferredCommunities = [],
      preferredEvents = [],
      city,
      country,
      state,
    } = req.body;

    const orConditions = [];
    if (preferredTags.length) {
      orConditions.push({ culturalTags: { $in: preferredTags } });
    }
    if (preferredCommunities.length > 0) {
      orConditions.push({
        communityPreferences: { $in: preferredCommunities },
      });
    }

    if (preferredEvents.length > 0) {
      orConditions.push({ events: { $in: preferredEvents } });
    }

    if (city) {
      orConditions.push({ city: new RegExp(`^${city}$`, "i") }); 
    }

    if (state) {
      orConditions.push({ state: new RegExp(`^${state}$`, "i") });
    }
    if (country) {
      orConditions.push({ country: new RegExp(`^${country}$`, "i") });
    }

    if (orConditions.length === 0) {
      return res.status(400).json({ error: "No filter criteria provided" });
    }

    const locations = await Location.find({
      $or: orConditions,
    });
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createLocation = async (req, res) => {
  try {
    const newLocation = await Location.create(req.body);
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllLocations, createLocation, filterLocations };

import router from "../Routes/BasicDetail.router.js";
import ServiceDetails from "../models/ServiceDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.serviceImage || !req.body.serviceTitle || !req.body.serviceSummary) {
      return res.status(401).json({
        message: "Send all required fields : serviceImage , serviceImage, serviceSummary",
      });
    }
    let ServiceData = {
      user: req.user.id,
        serviceImage: req.body.serviceImage,
        serviceTitle: req.body.serviceTitle,
        serviceSummary: req.body.serviceSummary,
    };

    let postData = await ServiceDetails.create(ServiceData);

    return res.status(201).json({message:'Data uploaded Sucessfully'});
  } catch (err) {
    return res.status(401).json({message:'Data uploading Failed'});
  }
};


export const getData=async (req, res) => {
    try {
      let getServiceDetail = await ServiceDetails.find({ user: req.user.id });
  
      if(!getServiceDetail){
        return res.status(401).json({message:'Details not found'});
      }
      return res.status(201).json({message:'Data fetched sucessfully',getServiceDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching Failed'});
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getServiceDetail = await ServiceDetails.findById(req.user.id);
      if(!getServiceDetail){
        return res.status(401).json({message:'Details not found'});
      }
      return res.status(201).json({message:'Data fetched sucessfully',getServiceDetail});
    } catch (err) {
      return res.status(401).json({message:'Data fetching Failed'});
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateService = await ServiceDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateService) {
        return res.status(401).jason({message:"Data not found that specific id"});
      }
      return res.status(201).json({message:'Data updated sucessfully'});
    } catch (err) {
      return res.status(401).json({message:'Data updating Failed'});
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await ServiceDetails.findByIdAndDelete(id );
  
      if (!deleteData) {
        return res.status(401).json({message:"Data not found that specific Id"});
      }
  
      return res.status(201).json({message:'Data deleted sucessfully'});
    } catch (error) {
      return res.status(401).json({message:'Data deleting Failed'});
    }
  };


  export default router;
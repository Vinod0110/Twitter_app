import Notification from "../models/notificationModel.js";

export const getNotifications = async (req, res) => {
  console.log("getNotifications",getNotifications);
  try {
    const userId = req.user._id;
    console.log("User ID:", userId);
    const notifications = await Notification.find({to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });
  console.log("notifications",notifications);

    await Notification.updateMany({to:userId},{read:true});
    res.status(200).json( notifications);
  } catch (error) {
    console.log("Error in getNotifications controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    await Notification.deleteMany({to:userId});
    res.status(200).json({message:"Notification deleted successfully"})
  } catch (error) {
    console.log("Error in deleteNotification controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

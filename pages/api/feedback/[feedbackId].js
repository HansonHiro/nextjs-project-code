import { buildFeedbackPath, extractFeedback } from ".";

function handler(req, res) {
  // if(req.method === "DELETE"){
  //     //to delete execute this code
  // }
  const feedbackId = req.query.feedbackId; //get the feedback id (like in folder)
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;

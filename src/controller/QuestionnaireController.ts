import { Request, Response } from 'express';
import QuestionnaireService from '../service/QuestionnaireService';

class QuestionnaireController {
  static async submitFeedback(req: Request, res: Response): Promise<void> {
    try {
      const { userId, message } = req.body; 
      const questionnaireService = new QuestionnaireService();
      await questionnaireService.submitFeedback(userId, message);

      res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default QuestionnaireController;

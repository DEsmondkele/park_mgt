import express from 'express';
import userController from './controller/MessagingController';
import PushNotificationController from './controller/PushNotificationController';
import QRController from './controller/QRController';
import QuestionnaireController from './controller/QuestionnaireController';
import GeolocationController from './controller/GeolocationController';
import CallingController from './controller/CallingController';
import MessagingController from './controller/MessagingController';

const router = express.Router();

router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);

// Geolocation Routes
router.get('/parking', GeolocationController.getAvailableParkingSpaces);

// Calling Routes
router.post('/call', CallingController.initiateCall);

// Messaging Routes
router.post('/messages/send', MessagingController.sendMessage);
router.get('/messages/get', MessagingController.getMessages);

// Push Notification Route
router.post('/push/send', PushNotificationController.sendNotification);

// QR Routes
router.post('/qr/generate', QRController.generateQRCode);
router.post('/qr/scan', QRController.scanQRCode);

// Questionnaire Route
router.post('/feedback', QuestionnaireController.submitFeedback);

export default router;

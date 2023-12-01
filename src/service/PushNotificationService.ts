class PushNotificationService {
    sendNotification(deviceToken: string, message: string): Promise<void> {
           console.log(`Push notification sent to device: ${deviceToken}, Message: ${message}`);
      return Promise.resolve();
    }
  }
  
  export default PushNotificationService;
  
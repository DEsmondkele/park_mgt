class MessagingService {
    private messages: string[] = [];
  
    sendMessage(message: string): Promise<void> {
      this.messages.push(message);
      return Promise.resolve();
    }
  
    getMessages(): Promise<string[]> {
      return Promise.resolve(this.messages);
    }
  }
  
  export default MessagingService;
  
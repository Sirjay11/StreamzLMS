class ErrorHandler extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
  
      // Capture the stack trace to provide a better error message
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default ErrorHandler;
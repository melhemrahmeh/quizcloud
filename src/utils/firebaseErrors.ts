export const getAuthErrorMessage = (errorCode: string): string => {
    const messages: { [key: string]: string } = {
      "auth/email-already-in-use": "The email address is already in use. Please use a different email.",
      "auth/invalid-email": "The email address is not valid. Please enter a valid email.",
      "auth/weak-password": "The password is too weak. Please use at least 6 characters.",
      "auth/user-disabled": "This account has been disabled. Please contact support for assistance.",
      "auth/user-not-found": "No account found with this email. Please check your email or sign up.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/network-request-failed": "Network error. Please check your internet connection.",
      "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
      "auth/requires-recent-login": "Please log in again to perform this action.",
      "auth/operation-not-allowed": "This operation is not allowed. Please contact support.",
      "auth/credential-already-in-use": "This credential is already associated with a different user account.",
      "auth/invalid-credential": "The credential provided is invalid. Please try again.",
      "auth/missing-email": "Email address is required. Please enter your email.",
      "auth/missing-password": "Password is required. Please enter your password.",
      "auth/account-exists-with-different-credential":
        "An account already exists with the same email address but different credentials. Please try a different sign-in method.",
      "auth/invalid-verification-code": "The verification code is invalid. Please try again.",
      "auth/invalid-verification-id": "The verification ID is invalid. Please try again.",
      "auth/session-cookie-expired": "Your session has expired. Please sign in again.",
      "auth/quota-exceeded": "Quota exceeded. Please try again later.",
      "auth/app-not-authorized": "This app is not authorized to use Firebase Authentication.",
      "auth/invalid-api-key": "Invalid API key. Please contact support.",
      "auth/unauthorized-domain": "This domain is not authorized for Firebase Authentication requests.",
      default: "An unknown error occurred. Please try again later.",
    };
    return messages[errorCode] || messages.default;
  };
  
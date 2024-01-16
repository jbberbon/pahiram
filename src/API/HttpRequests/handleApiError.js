export const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a non-2xx status code
    console.log("Server Error: ", error.response.data);

    let errorMessage;
    if (typeof error.response.data === "object") {
      errorMessage =
        error.response.data.message ||
        "API endpoint returned an error response";
    } else if (typeof error.response.data === "string") {
      errorMessage = error.response.data;
    } else {
      errorMessage = "Unexpected error response format";
    }

    return {
      status: false,
      message: errorMessage,
    };
  } else if (error.request) {
    // The request was made but no response was received
    console.log("Network Error: ", error.request);
    return {
      status: false,
      message: "Network error. Please check your internet connection.",
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("General Error: ", error.message);
    return {
      status: false,
      message: "An unexpected error occurred.",
    };
  }
};

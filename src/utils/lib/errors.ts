export function extractErrorMessage(error: unknown, fallbackMessage?: string) {
  let errorMessage =
    fallbackMessage ?? "Something went wrong! Please try again.";

  try {
    if (error instanceof Error && error?.message) {
      errorMessage = error.message;
    }

    return errorMessage;
  } catch (error) {
    return errorMessage;
  }
}

import { ApiResponseType } from "../../types";
import { extractErrorMessage } from "./errors";

export function apiResponse({
  responseId,
  success,
  message,
  result,
}: ApiResponseType<unknown>) {
  return {
    responseId,
    success,
    message,
    result,
  };
}

export function errorHandler(responseId: string, error: unknown) {
  return apiResponse({
    responseId,
    success: false,
    message: extractErrorMessage(error),
    result: null,
  });
}

export function successHandler(
  responseId: string,
  result: ApiResponseType<unknown>["result"],
  message: string
) {
  return apiResponse({
    responseId,
    success: true,
    message,
    result,
  });
}

// export class ApiResponseHandler {
//   public responseId = randomUUID();

//   constructor(req: Response) {}

//   clientError(errorOrMessage?: string | ZodError) {
//     let errorMessage = "Wrong parameters provided!";

//     if (errorOrMessage instanceof ZodError) {
//       errorMessage = errorOrMessage.errors[0].message;
//     } else {
//       if (typeof errorOrMessage === "string" && errorOrMessage) {
//         errorMessage = errorOrMessage;
//       }

//       if (errorOrMessage === "Required") {
//         errorMessage = "Some parameters are missing!";
//       }
//     }

//     const error = new Error(errorMessage);

//     // this.logger.status(400);
//     // this.logger.error(errorMessage, { error, errorMessage });
//     return this.res.status(400).json({
//       status: "error",
//       responseId: this.responseId,
//       message: error.message,
//     });
//   }

//   // rateLimitError() {
//   //   const errorMessage = "Too many requests!";

//   //   const error = new Error(errorMessage);

//   //   this.logger.status(429);
//   //   this.logger.error(errorMessage, { error, errorMessage });

//   //   return NextResponse.json(errorHandler(this.responseId, error), {
//   //     status: 429,
//   //   });
//   // }

//   authError = (message?: string) => {
//     const errorMessage = message || "User not authenticated!";

//     const error = new Error(errorMessage);

//     // this.logger.status(401);
//     // this.logger.error(errorMessage, { error, errorMessage });

//     // return NextResponse.json(errorHandler(this.responseId, error), {
//     //   status: 401,
//     // });
//   };

//   serverError = (error: unknown) => {
//     const errorMessage = extractErrorMessage(error, "Internal server error!");

//     // this.logger.status(500);
//     // this.logger.error(errorMessage, { error, errorMessage });

//     // return NextResponse.json(
//     //   errorHandler(
//     //     this.responseId,
//     //     new Error(
//     //       "Internal server error! Please contact us if it happens again."
//     //     )
//     //   ),
//     //   {
//     //     status: 500,
//     //   }
//     // );
//   };

//   success<T>(data: T, message: string, status: 200 | 201 = 200) {
//     // this.logger.info(message);
//     // return NextResponse.json(successHandler(this.responseId, data, message), {
//     //   status,
//     // });
//   }
// }

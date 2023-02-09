import { AxiosError } from "axios";
import Error, { isError } from "../types/Error";

class Response<T> {
    public data?: T;
    public error?: Error;
    public successful: boolean;

    constructor(response: T | Error) {
        if (isError(response)) {
            this.error = response as Error;
            this.successful = false;
        } else {
            this.data = response as T;
            this.successful = true;
        }
    }
}

export default Response;
import Error from "../types/Error";

class Response<T> {
    public data?: T;
    public error?: Error;
    public successful: boolean;

    constructor(response: T | Error) {
        if (response instanceof Error) {
            this.error = response as Error;
            this.successful = false;
        } else {
            this.data = response as T;
            this.successful = true;
        }
    }
}

export default Response;
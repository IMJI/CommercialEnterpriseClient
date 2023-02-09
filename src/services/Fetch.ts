import axios, { AxiosError, AxiosResponse } from "axios";
import Response from "../utils/Response";
import Error from "../types/Error";

class Fetch<T> {
    private readonly baseUrl = 'https://localhost:8080';
    private route: string;

    constructor(route: string) {
        this.route = route;
    }

    public async get(query?: object): Promise<Response<T[]>>
    public async get(id: number): Promise<Response<T>>
    public async get(id?: any, query?: object): Promise<Response<T | T[]>> {
        if (id) {
            return this.getById(id);
        } else {
            return this.getByQuery(query);
        }
    }

    // TODO: add body type
    public async post(body: object): Promise<Response<T>> {
        try {
            const response = await axios.post(`${this.baseUrl}${this.route}`, body);
            return this.handleResponse(response);
        } catch (e) {
            const error = e as AxiosError;
            return this.handleError(error);
        }
    }

    private async getById(id: number): Promise<Response<T>> {
        try {
            const response = await axios.get(`${this.baseUrl}${this.route}/${id}`);
            return this.handleResponse(response);
        } catch (e) {
            const error = e as AxiosError;
            return this.handleError(error);
        }
    }

    // TODO: query type
    private async getByQuery(query?: object): Promise<Response<T>> {
        try {
            // TODO: add query string to url
            const response = await axios.get(`${this.baseUrl}${this.route}`);
            return this.handleResponse(response);
        } catch (e) {
            const error = e as AxiosError;
            return this.handleError(error);
        }
    }

    private async handleResponse(response: AxiosResponse): Promise<Response<T>> {
        const data = new Response<T>(response.data);
        return data;
    }

    private async handleError(error: AxiosError): Promise<Response<T>> {
        const errorResponseData = error.response?.data as Error;
        const data = new Response<T>(errorResponseData);
        return data;
    }
}

export default Fetch;
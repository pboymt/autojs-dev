/// <reference path="../auto.d.ts" />

declare namespace http {
    interface HttpRequestOptions {
        header: { [key: string]: string },
        method: 'GET' | 'POST' | 'PUT' | 'DELET' | 'PATCH';
        contentType: string;
        body: string | string[] | files.byte[]
    }
    interface Request {

    }
    interface Response {
        statusCode: number;
        statusMessage: string;
        headers: { [key: string]: string };
        body: ResponseBody;
        request: Request;
        url: string;
        method: 'GET' | 'POST' | 'PUT' | 'DELET' | 'PATCH';
    }
    interface ResponseBody {
        bytes(): files.byte[];
        string(): string;
        json(): object;
        contentType: string;
    }
    function get(url: string, options?: HttpRequestOptions, callback?: (resp: Response) => void): Response;
    function post(url: string, data: object, options?: HttpRequestOptions, callback?: (resp: Response) => void): Response;
    function postJson(url: string, data?: object, options?: HttpRequestOptions, callback?: (resp: Response) => void): Response;

    interface RequestMultipartBody {
        file: ReadableTextFile | [string, string] | [string, string, string];
    }
    function postMultipart(url: string, files: RequestMultipartBody, options?: HttpRequestOptions, callback?: (resp: Response) => void): void;
    function postMultipart(url: string, files: { [key: string]: string } & RequestMultipartBody, options?: HttpRequestOptions, callback?: (resp: Response) => void): void;

    function request(url: string, options?: HttpRequestOptions, callback?: (resp: Response) => void): void;

}

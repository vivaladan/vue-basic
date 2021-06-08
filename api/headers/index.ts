import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const headers = JSON.stringify(req.headers)
    context.res.json(headers);
};

export default httpTrigger;
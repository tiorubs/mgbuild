interface GraphQLRequestBody {
    query: string;
    operationName: string;
    variables?: any;
}
export declare function graphQLRequest(body: GraphQLRequestBody): Promise<any>;
export {};

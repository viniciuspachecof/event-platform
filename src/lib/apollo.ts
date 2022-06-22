import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osysw215op01xl8lv32tmx/master',
    cache: new InMemoryCache(),
});

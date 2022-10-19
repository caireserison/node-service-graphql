var express = require('express');
var router = express();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
      type Query {
              hello: String
      }
`);

const rootValue = {
  hello: () => 'Hello World!'
};

router.use('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

module.exports = router;

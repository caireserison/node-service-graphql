var express = require('express');
var router = express();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
      type Query {
        test: String,
        hello: String,
        world: String
      }
`);

const rootValue = {
  test: () => 'Test',
  hello: () => 'Hello World!',
  world: () => 'Last item'
};

router.use('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

module.exports = router;

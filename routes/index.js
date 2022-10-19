var express = require('express');
var router = express();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

/*
types:
  Query = Obter dados (equivalente ao GET)
  Mutation = Manipular dados (equivalente à POST/PUT/PATCH/DELETE)
*/
const schema = buildSchema(`
      type Query {
        hello: String,
        world: String,
        test: String
      }
`);

const rootValue = {
  hello: () => 'Hello World!',
  world: () => 'World only',
  test: () => 'Last Test'
};

router.use('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

module.exports = router;

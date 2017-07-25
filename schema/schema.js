import graphql from 'graphql';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

/*
 *  Defining the 'User' type
 */
const UserType = new GraphQLObjectType({
  /* compare name with tablename in SQL */
  name: 'User',
  /* compare fields with column names in a SQL table */
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

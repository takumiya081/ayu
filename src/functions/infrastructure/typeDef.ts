import {gql} from 'apollo-server-micro';

const typeDef = gql`
"""
An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.
"""
scalar URI

"""
An object with an ID.
"""
interface Node {
  """
  id
  """
  id: ID!
}

"""
geo location
"""
type Location {
  """
  緯度
  """
  lat: Int!
  """
  経度
  """
  lng: Int!
}

"""
川
一本の川でも漁協が別れている場合は、別の川とする
川は必ず漁協に属しているとは限らない ex: 常願寺川
"""
type River implements Node {
  """
  id of river
  """
  id: ID!
  """
  geo location of river
  """
  location: Location!
  """
  name of river
  """
  name: String!
  """
  漁協
  """
  union: Union
}

"""
漁協
"""
type Union implements Node {
  """
  id of union
  """
  id: ID!
  """
  name of union
  """
  name: String!
  """
  漁協に所属している川
  """
  rivers: [River!]!
}

"""
おとり店
"""
type Shop implements Node {
  """
  id of union
  """
  id: ID!
  """
  ホームページなど
  """
  link: URI
  """
  geo location of river
  """
  location: Location!
  """
  name of union
  """
  name: String!
  """
  漁協に所属している川
  """
  unions: [Union!]!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
}

"""
the connection type for River.
"""
type RiverConnection {
  """
  A list of edges.
  """
  edges: [RiverEdge!]!
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
}

"""
The connection type for River.
"""
type RiverEdge {
  """
  A cursor for use in pagination.
  """
  cursor: String!
  """
  The item at the end of the edge.
  """
  node: River!
}


"""
query type
"""
type Query {
  """
  find River
  """
  river(id: String!): River
  """
  search river by name
  """
  searchRiver(
    query: String!
    after: String
    first: Int
  ): RiverConnection!
  """
  find Shop
  """
  shop(id: String!): Shop
  """
  find Union
  """
  union(id: String!): Union
}
`;

export default typeDef;

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
  lat: Float!
  """
  経度
  """
  lng: Float!
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
  ホームページなど
  """
  link: URI
  """
  name of union
  """
  name: String!
  """
  解禁期間
  """
  term: String
}

"""
おとり店
"""
type Shop implements Node {
  """
  住所
  """
  address: String!
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
}

"""
locaition parameter input
"""
input LocationInput {
  lat: Float!
  lng: Float!
}

"""
query type
今の所数が莫大になる気がしないので、一旦relayではなく配列にする
"""
type Query {
  """
  find River
  """
  river(id: String!): River
  """
  search river by name
  """
  searchRiver(query: String!): [River!]!
  """
  find Shop
  """
  shop(id: String!): Shop
  """
  query shop
  """
  shops(location: LocationInput, riverId: String): [Shop!]!
}

`;

export default typeDef;

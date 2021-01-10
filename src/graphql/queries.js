import { gql } from 'apollo-boost';
//import { userFields, gridPostFields } from "./fragments";

export const CHECK_IF_USERNAME_TAKEN = gql`
  query checkIfUsernameTaken($username: String!) {
    users(where: { username: { _eq: $username } }) {
      username
    }
  }
`;

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p0udxq1jrz01xk9oac5u58/master',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxMDQyNTQsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNHAwdWR4cTFqcnowMXhrOW9hYzV1NTgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiM2U5OTJkMWQtZDcwNi00ZmZlLWFmM2MtYzAwMzZkNGJiMmQ3IiwianRpIjoiY2w0c3hwcGNrMnQ3dzAxejY1cWVkZW14ZyJ9.dcRieLtTzSgN-QXhDH1QmnOB0VI8myVrxK9-Swq9AdOSxX8FKW2k8obIlQ7gGwggcRG3G5fzp5ruhPjK9XN-AfTMS-l5FON1rZlk0MrSu7khi8MbWudNDMeYcPaM1R7HeJOG8dCakVeXwF7oxWBvJVr4eUitz3RFJoXe29-1EX3hjiUOk3DlryfNjqWpQrqoZTmoihrQ7bmnSf4SUUzg0LaXd6qB0cHf1EDR1uC06KtttOCu00WXsBxB47hDpeDZcbYc93Ni-MYyCz1_PB3wGkT62wzeztlESnrF3jZHLxMFTzEHXb1o74bnoX_ZLnwF0ZiNV9qv9KBMRDTHK6oNfPhGA9uL5ri56GQyVjUGDbxZo3BxEuCg54NPr2LBtbXEQCfLp0EdDUOVjPPrp-NXDcC1vfbaxx17DPFeNOO57k4dYtyCYT8IelUAS_dG6u8yZGRMBOxWcg5jU8zdhicqP6jlJvgr_wUItoE2bQUtZG7OBn11t3NRfFizkpbeC7UI02V4Nw7LcamcOLWMoTjlpXNi1oxnoXBRm16kCUh0UqMn1GBR7uLiawopMs5yQkfQjkkwE9y7V90jPHulOZUFVefCp-7Foe3jaE9UVVEqOLi6HKjDRog2d9WlOLV1uWHnor1_gtDHoUWRMYah-XUCDuUrFoho-JPt-_-jezgbi4s'
  },a]
  cache: new InMemoryCache()
})

/*  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
*/
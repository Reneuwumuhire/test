import Links from './link'
import { useQuery, gql } from '@apollo/client'

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);


    return (
        <div>
            {data && (
                <>
                    {data.feed.links.map((link) => (
                        <Links key={link.id} link={link} />

                    ))}
                </>
            )}
        </div>
    )
}

export default LinkList;

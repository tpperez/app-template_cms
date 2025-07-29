export const HOME_DATA_QUERY = `
{
  home {
    sectionone {
      title
      description
      items {
        id
        title
        description
        image {
          url
        }
      }
    }
    sectiontwo {
      title
      description
      image {
        url
      }
    }
    sectionthree {
      title
      description
      items {
        id
        title
        description
        image {
          url
        }
      }
    }
  }
}
`

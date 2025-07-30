export interface IHeaderProps {
  data: IHeaderData
}

export interface IHeaderData {
  siteName: string
  menuItems: IMenuLink[]
}

export interface IMenuLink {
  id: string
  label: string
  url: string
}

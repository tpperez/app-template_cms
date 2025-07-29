export interface IFooterProps {
  data: IFooterData
}

export interface IFooterData {
  copyrighttext: string
  footerlinks: IFooterLink[]
}

export interface IFooterLink {
  id: string
  label: string
  url: string
}

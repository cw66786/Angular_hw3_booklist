export interface Root {
    kind: string
    totalItems: number
    items: Book[]
  }
  
  export interface Book {
    imageLinks: any
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo: SearchInfo
  }
  
  export interface VolumeInfo {
    title: string
    publisher: string
    industryIdentifiers: IndustryIdentifier[]
    readingModes: ReadingModes
    printType: string
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    imageLinks: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
    authors?: string[]
    publishedDate?: string
    description?: string
    pageCount?: number
    categories?: string[]
    panelizationSummary?: PanelizationSummary
    subtitle?: string
    averageRating?: number
    ratingsCount?: number
  }
  
  export interface IndustryIdentifier {
    type: string
    identifier: string
  }
  
  export interface ReadingModes {
    text: boolean
    image: boolean
  }
  
  export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
  }
  
  export interface PanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  }
  
  export interface SaleInfo {
    country: string
    saleability: string
    isEbook: boolean
    listPrice?: ListPrice
    retailPrice?: RetailPrice
    buyLink?: string
    offers?: Offer[]
  }
  
  export interface ListPrice {
    amount: number
    currencyCode: string
  }
  
  export interface RetailPrice {
    amount: number
    currencyCode: string
  }
  
  export interface Offer {
    finskyOfferType: number
    listPrice: ListPrice2
    retailPrice: RetailPrice2
    giftable: boolean
  }
  
  export interface ListPrice2 {
    amountInMicros: number
    currencyCode: string
  }
  
  export interface RetailPrice2 {
    amountInMicros: number
    currencyCode: string
  }
  
  export interface AccessInfo {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: Epub
    pdf: Pdf
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  
  export interface Epub {
    isAvailable: boolean
    acsTokenLink?: string
  }
  
  export interface Pdf {
    isAvailable: boolean
    acsTokenLink?: string
  }
  
  export interface SearchInfo {
    textSnippet: string
  }
  
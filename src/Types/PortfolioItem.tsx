export interface PortfolioItem {
    name: string,
    description: string,
    link_url: string,
    image_url: string,
    repo_url: string | null
}

export const storefrontImageMap: { [code: string]: string } = {
    "amazon": "/logos/amazon.svg",
    "target": "/logos/target.svg",
    "psn":    "/logos/psn.png",
    "eshop":  "/logos/eshop.svg",
    "nintendo_store": "/logos/nintendo_store.svg"
}
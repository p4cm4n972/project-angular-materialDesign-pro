export class IProduit {
    categorieSecteur: string;
    categorieName: string;
    categorieImg: string;
    categorieUrl: string;
    categorie: any;
    categorieSeller: string;
    categorieProduit: [{
        productName: string;
        productImg: string;
        productUrl: string;
        productSeller: string[];
        modele:  [{
            modeleName: string;
            modeleLink: string;
        }]
    }];
}

export class IProduit {
    categorieName: string;
    categorieImg: string;
    categorieUrl: string;
    categorie:any;
    categorieProduit: [{
        productName: string;
        productImg: string;
        productUrl: string;
        productSeller: string;
        modele: [{
            modeleName: string;
            modeleLink: string;
        }]
    }];
}

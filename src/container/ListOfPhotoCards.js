import { withPhotos } from "../hoc/withPhotos"
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards"

// Patron: container -> se encarga de preparar los datos para el componente

// Patron: Componente de orden superior
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

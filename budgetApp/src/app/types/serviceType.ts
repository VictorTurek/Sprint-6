export type serviceType = {
  id: number,
  title: string,
  description: string,
  price: number,
  options?: AdditionalOption[]; 
  selected?: boolean;  // Nueva propiedad para rastrear si el servicio está seleccionado
}

export type AdditionalOption = {
  extra: string;
  price: number;
  extraDescription: string;
};
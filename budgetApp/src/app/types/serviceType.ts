export type serviceType = {
  id: number,
  title: string,
  description: string,
  price: number,
  checked: boolean;  // Propiedad para rastrear si el servicio está seleccionado
  options?: AdditionalOption[]; 
}

export type AdditionalOption = {
  extra: string;
  price: number;
  extraDescription: string;
};
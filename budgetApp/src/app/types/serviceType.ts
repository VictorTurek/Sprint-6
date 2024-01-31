export type serviceType = {
  id: number,
  title: string,
  description: string,
  price: number,
  checked: boolean;  // Propiedad para rastrear si el servicio está seleccionado
  options: AdditionalOption[]; 
}

export type AdditionalOption = {
  optionId: number;
  extra: string;
  price: number;
  quantity: number, 
  extraDescription: string;
};

export type serviceChosen = {
  name: number,
  telefon: string,
  email: string,
  serviceChosen: serviceType[]; 
}
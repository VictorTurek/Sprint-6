export type serviceType = {
  id: number,
  title: string,
  description: string,
  price: number,
  options: string[],
  selected?: boolean;  // Nueva propiedad para rastrear si el servicio está seleccionado
}
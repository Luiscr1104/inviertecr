
import EcwidStore from '@/app/store/EcwidStore';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InvierteCR - Tienda',
  description: 'Descubre y compra los mejores terrenos disponibles en La Fortuna a través de nuestra tienda. Encuentra tu terreno ideal con facilidad y seguridad.',
};

export default function StorePage() {
  return (
    <div>
      <EcwidStore storeId={78233554} categoryId={''} />
    </div>
  );
}
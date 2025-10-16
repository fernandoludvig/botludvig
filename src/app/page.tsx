import { RealEstateChat } from '@/components/real-estate-chat';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <Home className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Ludvig Imóveis</h1>
          </div>
          <p className="text-blue-200 text-lg">
            Especialistas em lançamentos de alto padrão em Florianópolis
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[600px]">
            <RealEstateChat />
          </div>
        </main>

        <footer className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Phone className="w-5 h-5" />
              <span>(48) 99999-9999</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Mail className="w-5 h-5" />
              <span>contato@ludvigimoveis.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span>Florianópolis, SC</span>
            </div>
          </div>
          <p className="text-blue-300 text-sm mt-4">
            © 2024 Ludvig Imóveis. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}

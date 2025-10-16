'use client';

import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Send, Home, MapPin, Bed, Square, DollarSign, Car, ExternalLink } from 'lucide-react';
import { Property, properties } from '@/lib/properties-database';
import { useEffect, useRef } from 'react';

export function RealEstateChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderPropertyCard = (property: Property) => (
    <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all my-4">
      {/* Imagem do Imóvel */}
          <img 
            src={property.imageUrl} 
            alt={property.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              // Fallback se imagem não carregar
              e.currentTarget.src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80";
            }}
          />
      
      {/* Conteúdo */}
      <div className="p-6">
        {/* Nome do Imóvel */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {property.name}
        </h3>
        
        {/* Status Badge */}
        <div className="mb-3">
          <Badge variant={property.status === 'ready' ? 'default' : property.status === 'launch' ? 'secondary' : 'outline'} className="text-xs">
            {property.status === 'ready' ? 'Pronto para morar' : property.status === 'launch' ? 'Lançamento' : 'Em Obra'}
          </Badge>
        </div>
        
        {/* Preço em Destaque */}
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="text-green-600" size={24} />
          <span className="text-2xl font-bold text-green-600">
            {formatPrice(property.price)}
          </span>
        </div>
        
        {/* Características em Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin size={18} className="text-blue-600" />
            <span className="text-sm">{property.neighborhood}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Bed size={18} className="text-blue-600" />
            <span className="text-sm">{property.bedrooms} quartos</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Square size={18} className="text-blue-600" />
            <span className="text-sm">{property.area}m²</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Car size={18} className="text-blue-600" />
            <span className="text-sm">{property.parking} vagas</span>
          </div>
        </div>
        
        {/* Features como badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
              {feature}
            </span>
          ))}
        </div>
        
        {/* Botão Ver Detalhes */}
        <a 
          href={property.propertyUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
            <ExternalLink size={20} />
            Ver Detalhes Completos
          </button>
        </a>
      </div>
    </div>
  );

  const renderMessage = (message: any) => {
    const isUser = message.role === 'user';
    
    return (
      <div className="space-y-4">
        {/* Mensagem normal */}
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
          <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
            isUser 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
              : 'bg-white shadow-md border'
          }`}>
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          </div>
        </div>
        
        {/* SE A MENSAGEM TEM TOOL INVOCATIONS, RENDERIZE AS RECOMENDAÇÕES */}
        {message.toolInvocations?.map((toolInvocation: any, toolIndex: number) => {
          if (toolInvocation.toolName === 'get_property_recommendations' && toolInvocation.state === 'result') {
            const result = toolInvocation.result;
            const recommendations = result.properties || [];
            
            return (
              <div key={toolIndex} className="space-y-4 my-4">
                {recommendations.map((property: Property) => renderPropertyCard(property))}
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Ludvig Imóveis</h1>
            <p className="text-blue-100 text-sm">Assistente Virtual</p>
          </div>
        </div>
        <p className="text-blue-100 text-sm mt-2">Encontre seu apartamento ideal</p>
      </div>

      <ScrollArea className="flex-1 p-6 bg-gray-50" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Olá! Sou seu assistente imobiliário</h3>
              <p className="text-gray-600 text-sm">Vou te ajudar a encontrar o apartamento perfeito. Vamos começar?</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div key={message.id}>
              {renderMessage(message)}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white shadow-md border">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm text-gray-600">Pensando...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-6 bg-white border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            className="flex-1"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            disabled={isLoading}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}

import ImageGenerator from '@/components/ImageGenerator';

const ImageGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Gerador de Imagem para Header
          </h1>
          <p className="text-gray-600">
            Crie uma imagem profissional para o header da sua landing page de direito previdenciário
          </p>
        </div>
        <ImageGenerator />
      </div>
    </div>
  );
};

export default ImageGeneratorPage;

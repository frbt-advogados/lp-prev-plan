
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);

  const generateHeaderImage = async () => {
    if (!apiKey.trim()) {
      toast.error('Por favor, insira sua chave da API Runware');
      return;
    }

    setIsGenerating(true);

    try {
      const ws = new WebSocket('wss://ws-api.runware.ai/v1');
      
      await new Promise((resolve, reject) => {
        ws.onopen = () => resolve(void 0);
        ws.onerror = reject;
      });

      // Autenticação
      const authMessage = [{
        taskType: "authentication",
        apiKey: apiKey,
      }];
      
      ws.send(JSON.stringify(authMessage));
      
      // Aguarda autenticação
      await new Promise((resolve) => {
        ws.onmessage = (event) => {
          const response = JSON.parse(event.data);
          if (response.data?.[0]?.taskType === "authentication") {
            resolve(void 0);
          }
        };
      });

      // Gera a imagem
      const taskUUID = crypto.randomUUID();
      const imageMessage = [{
        taskType: "imageInference",
        taskUUID,
        positivePrompt: "Professional legal office scene, person holding documents and contracts related to social security and retirement planning, hands holding official papers with INSS stamps, formal desk with computer showing spreadsheets, legal environment, professional atmosphere, sophisticated lighting, photorealistic, high quality, 8k resolution, business professional setting, trust and security concept, muted blue tones",
        negativePrompt: "faces, clear facial features, cartoons, anime, low quality, blurry, unprofessional, messy, cluttered",
        model: "runware:100@1",
        width: 1440,
        height: 500,
        numberResults: 1,
        outputFormat: "WEBP",
        CFGScale: 7,
        steps: 20,
        scheduler: "FlowMatchEulerDiscreteScheduler"
      }];

      ws.send(JSON.stringify(imageMessage));

      ws.onmessage = (event) => {
        const response = JSON.parse(event.data);
        
        if (response.error || response.errors) {
          const errorMessage = response.errorMessage || response.errors?.[0]?.message || "Erro ao gerar imagem";
          toast.error(errorMessage);
          setIsGenerating(false);
          return;
        }

        if (response.data) {
          response.data.forEach((item: any) => {
            if (item.taskType === "imageInference" && item.taskUUID === taskUUID) {
              setGeneratedImage(item);
              toast.success('Imagem gerada com sucesso!');
              setIsGenerating(false);
              ws.close();
            }
          });
        }
      };

    } catch (error) {
      console.error('Erro ao gerar imagem:', error);
      toast.error('Erro ao conectar com a API. Tente novamente.');
      setIsGenerating(false);
    }
  };

  const downloadImage = async () => {
    if (!generatedImage) return;

    try {
      const response = await fetch(generatedImage.imageURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'header-previdenciario.webp';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success('Imagem baixada com sucesso!');
    } catch (error) {
      toast.error('Erro ao baixar a imagem');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerador de Imagem para Header - Direito Previdenciário</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Chave da API Runware
            </label>
            <Input
              type="password"
              placeholder="Insira sua chave da API Runware"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">
              Obtenha sua chave em{' '}
              <a 
                href="https://runware.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                runware.ai
              </a>
            </p>
          </div>

          <Button 
            onClick={generateHeaderImage} 
            disabled={isGenerating || !apiKey.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Gerando Imagem...
              </>
            ) : (
              'Gerar Imagem do Header'
            )}
          </Button>

          {generatedImage && (
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={generatedImage.imageURL} 
                  alt="Imagem gerada para header previdenciário"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 via-slate-800/40 to-slate-800/80 rounded-lg">
                  <div className="flex items-center justify-center h-full text-center text-white p-8">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        QUAL SERÁ O VALOR DA SUA<br />
                        <span className="text-yellow-400">APOSENTADORIA?</span>
                      </h1>
                      <p className="text-lg mb-6 text-gray-200">
                        Um planejamento correto de sua vida previdenciária garante que você consiga os maiores benefícios possíveis para ter um futuro tranquilo.
                      </p>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3">
                        QUERO DESCOBRIR MINHA APOSENTADORIA
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={downloadImage} variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Baixar Imagem
              </Button>

              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Dimensões:</strong> 1440x500px</p>
                <p><strong>Formato:</strong> WEBP</p>
                <p><strong>Seed:</strong> {generatedImage.seed}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Instruções de Uso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <h4 className="font-semibold">Aplicação da Máscara Azul:</h4>
            <p>A imagem já inclui uma sobreposição com gradiente azul escuro (#1A273A) para garantir legibilidade do texto.</p>
          </div>
          <div>
            <h4 className="font-semibold">CSS para aplicar a imagem:</h4>
            <code className="block bg-gray-100 p-2 rounded text-xs">
              background-image: url('caminho-da-imagem.webp');<br />
              background-size: cover;<br />
              background-position: center;<br />
              background-repeat: no-repeat;
            </code>
          </div>
          <div>
            <h4 className="font-semibold">Características da Imagem:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Ambiente profissional de escritório jurídico</li>
              <li>Foco em documentos e processos previdenciários</li>
              <li>Sem rostos nítidos para manter neutralidade</li>
              <li>Tons azuis para identidade visual</li>
              <li>Espaço central otimizado para texto sobreposto</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageGenerator;

import { Github, FileVideo, Upload } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Slider } from './components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

export function App() {

  return (

    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ia</h1>

        <div className="flex items-center gap-3">

          <span className="text-sm text-muted-foreground">Desenvolvido com Rocketseat</span>
            

            <Separator orientation='vertical' className='h-6' />

            <Button variant="outline">
              <Github className='w-4 h-4 mr-2' />
              Github
            </Button>
        </div>

      </div>

      <main className='flex-1 p-6 flex gap-6'>    
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            
            <Textarea 
              className='resize-none p-4 leading-relaxed'
              placeholder='Inclua o prompt para a IA...' 
            />
 
            <Textarea 
              className='resize-none p-4 leading-relaxed'
              placeholder='Inclua o prompt para a IA...' 
            />
            
          </div>
          <p className='text-sm text-muted-foreground'>
            Lembre-se: Você pode utilizar a variavel <code className='text-violet-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.</p>
        </div>

        <aside className='w-80 space-y-6'>
          <form className='space-y-4'>
            <label 
              htmlFor="video"
              className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
            >
              <FileVideo className='w-4 h-4' />
                Selecione um Vídeo
            </label>
            <input type="file" id='video' accept='video/mp4' className='sr-only' />

            <Separator />

            <div className='space-y-1'>
              <label htmlFor="transcription_prompt">Prompt de Transcrição</label>
              <Textarea 
                id='transcription_prompt' 
                className='h-20 leading-relaxed resize-none'
                placeholder='Inclua palavras chaves mencionadas no vídeo separadas por vírgula (,).' 
              />
            </div>
            <Button className='w-full'>
              Carregar o Vídeo
              <Upload className='w-4 h-4 ml-2' />
            </Button>
          </form>

        <Separator />

        <form className='space-y-6'>

        <div className='space-y-2'>
            <label>Prompt</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>Título do Youtube</SelectItem>
                  <SelectItem value='description'>Descrição do Youtube</SelectItem>


                </SelectContent>
              </Select>
        

          </div>

          <div className='space-y-2'>
            <label>Modelo</label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-Turbo 16k</SelectItem>

                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic'>
                Você poderá customizar essa opção em breve
              </span>

          </div>
          
          <Separator />

          <div className='space-y-4'>
            <label>Temperatura</label>

                <Slider 
                  min={0}
                  max={1}
                  step={0.1}
                />  
              
              <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                Valores mais altos tendem deixar o resultado mais criativo e com possíveis erros
              </span>

          </div>

          <Separator />

          <Button type='submit' className='w-full'> 
            Executar
          </Button>

        </form>

        </aside>

      </main>  

    </div>



  )
}

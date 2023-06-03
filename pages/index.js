import Public from "/components/templates/Public"
import { ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'

const Home = () => {
  return (
    <Public>
      <div className="bg-white bg-opacity-90 bg-blend-overlay h-full bg-[url('/fundo.png')] bg-bottom bg-contain bg-no-repeat">
        <section className="max-w-7xl mx-auto p-6 lg:px-8">
          <div className="lg:flex gap-8">
            <div className="lg:w-2/3 flex-shirink-0">
              <h2 className="text-2xl font-bold mb-5">
                Discussões mais relevantes
              </h2>
              <div className="shadow-lg shadow-zinc-800/10 mt-5 rounded-md border bg-white">
                <div class="flex items-start space-x-5 p-7">
                  <div className="relative">
                    <img src="/avatars/avatar-3.jpg" alt="" class="w-12 h-12 rounded-full" />
                    <CheckBadgeIcon className="bg-white rounded-full absolute left-[67%] top-[67%] fill-sky-500 h-5 w-5" aria-hidden="true" />
                  </div>
                  <div class="flex-1">
                    <a href="#" class="text-lg font-semibold line-clamp-1 mb-1 hover:text-emerald-600">Comidas que ajudam no emagrecimento</a>
                    <p class="text-sm text-gray-400 mb-2"> Postado por: <a href="#" className="underline">Stella Johnson</a> 1 hora atrás </p>
                    <p class="leading-6 line-clamp-2 mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                  </div>
                  <div class="sm:flex items-center space-x-4 hidden">
                    <ChatBubbleLeftRightIcon className="h-8 w-8" aria-hidden="true" />
                    <span class="text-xl"> 13 </span>
                  </div>
                </div>
              </div>
              <div className="shadow-lg shadow-zinc-800/10 mt-5 rounded-md border bg-white">
                <div class="flex items-start space-x-5 p-7">
                  <div className="relative">
                    <img src="/avatars/avatar-2.jpg" alt="" class="w-12 h-12 rounded-full" />
                  </div>
                  <div class="flex-1">
                    <a href="#" class="text-lg font-semibold line-clamp-1 mb-1 hover:text-emerald-600">Saiba o que pode interferir na sua saúde</a>
                    <p class="text-sm text-gray-400 mb-2"> Postado por: <a href="#" className="underline">John McCurty</a> 3 meses atrás </p>
                    <p class="leading-6 line-clamp-2 mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                  </div>
                  <div class="sm:flex items-center space-x-4 hidden">
                    <ChatBubbleLeftRightIcon className="h-8 w-8" aria-hidden="true" />
                    <span class="text-xl"> 24 </span>
                  </div>
                </div>
              </div>
              <div className="shadow-lg shadow-zinc-800/10 mt-5 rounded-md border bg-white">
                <div class="flex items-start space-x-5 p-7">
                  <div className="relative">
                  <img src="/avatars/avatar-3.jpg" alt="" class="w-12 h-12 rounded-full" />
                    <CheckBadgeIcon className="bg-white rounded-full absolute left-[67%] top-[67%] fill-sky-500 h-5 w-5" aria-hidden="true" />
                  </div>
                  <div class="flex-1">
                    <a href="#" class="text-lg font-semibold line-clamp-1 mb-1 hover:text-emerald-600">Comidas mais saúdaveis e rápidas para se comer todos os dias</a>
                    <p class="text-sm text-gray-400 mb-2"> Postado por: <a href="#" className="underline">Stella Johnson</a> 1 mês atrás </p>
                    <p class="leading-6 line-clamp-2 mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                  </div>
                  <div class="sm:flex items-center space-x-4 hidden">
                    <ChatBubbleLeftRightIcon className="h-8 w-8" aria-hidden="true" />
                    <span class="text-xl"> 35 </span>
                  </div>
                </div>
              </div>
              <div className="shadow-lg shadow-zinc-800/10 mt-5 rounded-md border bg-white">
                <div class="flex items-start space-x-5 p-7">
                  <div className="relative">
                    <img src="/avatars/avatar-1.jpg" alt="" class="w-12 h-12 rounded-full" />
                    <CheckBadgeIcon className="bg-white rounded-full absolute left-[67%] top-[67%] fill-sky-500 h-5 w-5" aria-hidden="true" />
                  </div>
                  <div class="flex-1">
                    <a href="#" class="text-lg font-semibold line-clamp-1 mb-1 hover:text-emerald-600">Hábitos para se livrar da sua vida para ter uma boa saúde mental</a>
                    <p class="text-sm text-gray-400 mb-2"> Postado por: <a href="#" className="underline">Bob Lee</a> 1 semana atrás </p>
                    <p class="leading-6 line-clamp-2 mt-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                  </div>
                  <div class="sm:flex items-center space-x-4 hidden">
                    <ChatBubbleLeftRightIcon className="h-8 w-8" aria-hidden="true" />
                    <span class="text-xl"> 18 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pt-3">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Maiores Contribuidores
              </h3>
              <span className="text-slate-500">Pessoas com mais participações nos tópicos do fórum</span>

              <div class="flex items-center justify-between space-x-3 mt-6">
                <div className="flex items-center space-x-3">
                  <img src="/avatars/avatar-1.jpg" alt="" class="w-8 h-8 rounded-full" />
                  <a href="#" class="font-semibold"> Bob Lee</a>
                  <CheckBadgeIcon className="fill-sky-500 h-5 w-5" aria-hidden="true" />
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  <span> 137 </span>
                </div>
              </div>
              <div class="flex items-center justify-between space-x-3 mt-6">
                <div className="flex items-center space-x-3">
                  <img src="/avatars/avatar-3.jpg" alt="" class="w-8 h-8 rounded-full" />
                  <a href="#" class="font-semibold"> Stella Johnson </a>
                  <CheckBadgeIcon className="fill-sky-500 h-5 w-5" aria-hidden="true" />
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  <span> 114 </span>
                </div>
              </div>
              <div class="flex items-center justify-between space-x-3 mt-6">
                <div className="flex items-center space-x-3">
                  <img src="/avatars/avatar-2.jpg" alt="" class="w-8 h-8 rounded-full" />
                  <a href="#" class="font-semibold"> John McCurty</a>
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  <span> 98 </span>
                </div>
              </div>
              <div class="flex items-center justify-between space-x-3 mt-6">
                <div className="flex items-center space-x-3">
                  <img src="/avatars/avatar-7.jpg" alt="" class="w-8 h-8 rounded-full" />
                  <a href="#" class="font-semibold"> Krystal Turner </a>
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  <span> 84 </span>
                </div>
              </div>
              <div class="flex items-center justify-between space-x-3 mt-6">
                <div className="flex items-center space-x-3">
                  <img src="/avatars/avatar-4.jpg" alt="" class="w-8 h-8 rounded-full" />
                  <a href="#" class="font-semibold"> Alan Swagger </a>
                  <CheckBadgeIcon className="fill-sky-500 h-5 w-5" aria-hidden="true" />
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  <span> 77 </span>
                </div>
              </div>
              <div class="flex items-center justify-between space-x-3 mt-6">
                <div className="flex items-center space-x-3">
                  <img src="/avatars/avatar-6.jpg" alt="" class="w-8 h-8 rounded-full" />
                  <a href="#" class="font-semibold"> Carly Jhonson </a>
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6" aria-hidden="true" />
                  <span> 61 </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-10">
                Áreas
              </h3>
              <div className="my-4 flex flex-wrap gap-1">
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Ortopedia
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Odontologia
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Psicologia
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Fisioterapia
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Psiquiatria
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Pediatria
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Cardiologia
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Estética
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Enfermagem
                </a>
                <a href="#" className="border rounded-full bg-lightgreen border-lightgreen text-white px-2 py-1">
                  Biomedicina
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Nutrição
                </a>
                <a href="#" className="border rounded-full border-lightgreen/60 text-lightgreen px-2 py-1">
                  Farmácia
                </a>
              </div>
            </div>
          </div>
        </section>
      </div >
    </Public >
  )
}

export default Home;
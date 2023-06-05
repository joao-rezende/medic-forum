import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Fórum Médico</span>
            <span className='font-bold'>Fórum Médico</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abir menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center mx-10">
          <label className="relative block w-3/4">
            <span className="sr-only"></span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
              <svg className="h-5 w-5 fill-gray-500" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <input className='bg-lightgray py-3 px-6 pl-12 w-full text-black rounded-full' placeholder='Qual é a sua dúvida?' />
          </label>
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <Link href="/login" className="text-sm font-semibold leading-6 text-white py-3 px-6 rounded-full bg-lightgreen flex items-center gap-1">
            Entrar <ArrowLeftOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Fórum Médico</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <Link href="/login" className="text-sm font-semibold leading-6 text-white py-3 px-6 rounded-full bg-lightgreen flex items-center gap-1">
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Menu;
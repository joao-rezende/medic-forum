import Image from "next/image";
import { useRef, useState } from "react";

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const divSignIn = useRef();
    const divSignUp = useRef();

    function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 10);
    }

    function unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }

    function handleSignIn() {
        fade(divSignUp.current);
        unfade(divSignIn.current);
        setSignIn(true);
    }

    function handleSignUp() {
        fade(divSignIn.current);
        unfade(divSignUp.current);
        setSignIn(false);
    }

    return (
        <div className="h-screen w-full bg-gray-100px-4">
            <div className="flex justify-center items-center h-full py-4">
                <div className="border bg-[url('/fundo-login.jpg')] bg-no-repeat bg-center rounded-md shadow-lg w-[856px]">
                    <div className={"relative bg-white w-[428px] h-[678px] transition ease-in-out duration-500 " + (signIn && "translate-x-full")}>
                        <div ref={divSignIn} className="h-full absolute top-0 left-0 py-6 px-7 w-full">
                            <h1 className="text-3xl text-center font-bold mb-8">Bem Vindo!</h1>
                            <form>
                                <div className="flex flex-col">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="text" placeholder="E=mail ou Nome de Usuário" />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="password" placeholder="Senha" />
                                </div>

                                <button type="submit" className="w-full mt-8 rounded-full bg-lightgreen/80 hover:bg-lightgreen text-white text-lg py-3 px-5">Entrar</button>
                            </form>

                            <span className="my-8 block text-center text-sm w-full text-gray-400">ou entre com</span>

                            <div className="flex justify-center gap-4">
                                <button className="rounded-full w-[55px] h-[55px] flex items-center justify-center border shadow-md">
                                    <Image src={"/google-icon.svg"} width={20} height={20} alt="Ícone do Google" />
                                </button>
                                <button className="rounded-full w-[55px] h-[55px] flex items-center justify-center border shadow-md">
                                    <Image src={"/facebook-icon.png"} width={20} height={20} alt="Ícone do Facebook" />
                                </button>
                            </div>

                            <span className="absolute bottom-[1.5rem] text-center block mt-2 text-md" style={{ width: "calc(100% - 1.75rem)" }}>Ainda não possui uma conta? <a onClick={handleSignUp} className="cursor-pointer text-sky-600 underline font-bold">Cadastrar-se</a></span>
                        </div>

                        <div ref={divSignUp} className="absolute top-0 left-0 py-6 px-7 w-full" style={{ display: "none", opacity: 0 }}>
                            <h1 className="text-3xl text-center font-bold mb-6">Cadastrar-se</h1>
                            
                            <div className="flex justify-center gap-4">
                                <button className="rounded-full w-[55px] h-[55px] flex items-center justify-center border shadow-md">
                                    <Image src={"/google-icon.svg"} width={20} height={20} alt="Ícone do Google" />
                                </button>
                                <button className="rounded-full w-[55px] h-[55px] flex items-center justify-center border shadow-md">
                                    <Image src={"/facebook-icon.png"} width={20} height={20} alt="Ícone do Facebook" />
                                </button>
                            </div>

                            <form className="mt-7">
                                <div className="flex flex-col">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="text" placeholder="Nome" />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="text" placeholder="Sobrenome" />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="email" placeholder="E-mail" />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="text" placeholder="Nome de Usuário" />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="password" placeholder="Senha" />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <input className="border rounded-full py-3 px-5 text-lg outline-lightgreen/40 text-slate-700" type="password" placeholder="Confirmar Senha" />
                                </div>

                                <button type="submit" className="w-full mt-7 rounded-full bg-lightgreen/80 hover:bg-lightgreen text-white text-lg py-3 px-5">Cadastrar</button>
                                <span className="w-full text-center block mt-6 text-md">Já possui uma conta? <a onClick={handleSignIn} className="cursor-pointer text-sky-600 underline font-bold">Entrar</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
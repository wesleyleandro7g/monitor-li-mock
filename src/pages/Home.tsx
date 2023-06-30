import { useNavigate } from 'react-router-dom'

interface ButtonProps {
    label: string
    location: string
}

const Button = ({ label, location }: ButtonProps) => {
    const navigate = useNavigate()

    return (
        <button
            className='w-[350px] h-14 border border-slate-900 rounded-full hover:bg-slate-900 duration-300 text-slate-900 hover:text-white'
            onClick={() => navigate(location)}
        >
            {label}
        </button>
    )
}

export function Home() {
    return (
        <main className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
                <Button
                    label='Loja Integrada - Localhost'
                    location='/loja-integrada/local'
                />
                <Button
                    label='Loja Integrada - Staging'
                    location='/loja-integrada/staging'
                />
                <Button
                    label='Loja Integrada - Homologation'
                    location='/loja-integrada/homolog'
                />
            </div>
        </main>
    )
}
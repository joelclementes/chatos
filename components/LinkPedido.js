import Link from "next/link";
const LinkPedido = () => (
    <div className="text-center">
        <Link href="https://api.whatsapp.com/send/?phone=522282432291&text=Hola, deseo hacer un pedido&app_absent=0">
            <a target="_blank"><img src="image/ordenaaqui-01.png" className="logowhatsapp" /></a>
        </Link>
    </div>
)

export default LinkPedido
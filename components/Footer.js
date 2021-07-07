import LinkPedido from "./LinkPedido";
const Footer = () => (
<footer>
    <div className="container">
        <div className="row rounded bg-secondary text-light text-center align-content-center">
            <div className="col-md-6">
                <div>Chato's - Hamburguesas | Alitas | y más</div>
            </div>
            <div className="col-md-6">
                <LinkPedido/>
            </div>
        </div>
    </div>
</footer>
)

export default Footer;
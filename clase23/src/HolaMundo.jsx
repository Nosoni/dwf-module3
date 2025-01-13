import Despedida from "./Despedida";
import Saludo from "./Saludo";

//props
function HolaMundo(props) {
  const fueSaludado = true;

  //   if (fueSaludado) {
  //     return <Despedida></Despedida>;
  //   }
  //   return <Saludo></Saludo>;

  return fueSaludado ? <Despedida></Despedida> : <Saludo></Saludo>;
}

export default HolaMundo;

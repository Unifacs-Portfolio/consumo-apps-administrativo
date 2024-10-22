import React from 'react'; // Importa a biblioteca React para usar JSX(a sintaxe semelhante a HTML usada no React) e components. Embora não seja mais obrigatório, é feito por questões de compatibilidade e boas práticas.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa os componentes do React Router DOM. o Router(BrowserRouter) Routes e Route são usados para gerenciar navegação e rotas da aplicação.

// Esses imports estão trazendo os componentes das páginas Home, CulinariaGastronomia, Moda para serem usados no roteamento da aplicação.
import Home from './components/Home';
import CulinariaGastronomia from './components/CulinariaGastronomia';
import Moda from './components/Moda';
import Cosmeticos from './components/Cosmeticos';
import Engenharia from './components/Engenharia';
import TI from './components/TI';
import Veterinaria from './components/Veterinaria';
import CadastrarReceita from './components/CadastrarReceita';
import CadastrarDicaCulinaria from './components/CadastrarDicaCulinaria';
import InserirIngrediente from './components/InserirIngrediente';
import InserirMidia from './components/InserirMidia';
import CadastrarDicaModa from './components/CadastrarDicaModa';
import CadastrarDicaEngenharia from './components/CadastrarDicaEngenharia';
import CadastrarDicaCosmeticos from './components/CadastarDicaCosmeticos'
import InserirEspecificacoesModa from './components/InserirEspecificacoesModa';
import InserirEspecificacoesEngenharia from './components/InserirEspecificacoesEngenharia';
import InserirEspecificacoesCosmeticos from './components/InserirEspecificacoesCosmeticos';
// Outras importações de páginas

function App() {
  return (
    // O componente Router envolve o componente pai e faz com que todos os componentes dentro dele possam usar a navegação(rotas). Ele é essencial para habilitar a funcionalidade de navegação na aplicação
    // <div className="App"> Envolve o conteúdo da aplicação e a classe App pode ser usada para aplicar estilos.
    // <Routes> É o componente que envolve todas as rotas que serão gerenciadas pela aplicação, ele define como diferentes URLs serão correspondidas a diferentes componentes.
    // <Route path="/" element={<Home />} /> Define que o caminho /(raiz da aplicação) será associado ao componete Home. Quando o usuário visitar a página inicial, o componente Home será exibido
    // <Route path="/cadastrar-receita" element={<CadastrarReceita />} /> Quando o usuário visitar a roda /cadastar-receita, o componente CadastrarReceita será renderizado.
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culinaria-gastronomia" element={<CulinariaGastronomia />} />
          <Route path="/moda" element={<Moda />} />
          <Route path="/cosmeticos" element={<Cosmeticos />} />
          <Route path="/engenharia" element={<Engenharia />} />
          <Route path="/ti" element={<TI />} />
          <Route path="/veterinaria" element={<Veterinaria />} />
          <Route path="/cadastrar-receita" element={<CadastrarReceita />} />
          <Route path="/cadastrar-dica-culinaria" element={<CadastrarDicaCulinaria />} />
          <Route path="/inserir-ingrediente" element={<InserirIngrediente />} />
          <Route path="/inserir-midia" element={<InserirMidia />} />
          <Route path="/cadastrar-dica-moda" element={<CadastrarDicaModa />} />
          <Route path="/cadastrar-dica-engenharia" element={<CadastrarDicaEngenharia />} />
          <Route path="/cadastrar-dica-cosmeticos" element={<CadastrarDicaCosmeticos />} />
          <Route path="/inserir-especificacoes-moda" element={<InserirEspecificacoesModa />} />
          <Route path="/inserir-especificacoes-engenharia" element={<InserirEspecificacoesEngenharia />} />
          <Route path="/inserir-especificacoes-cosmeticos" element={<InserirEspecificacoesCosmeticos />} />
          {/* Adicione as outras rotas aqui */}
        </Routes>
      </div>
    </Router>
  );
}
// export default App Exporta o componente App como padrão para que ele possa ser importado e usado em outras partes do projeto.
export default App;

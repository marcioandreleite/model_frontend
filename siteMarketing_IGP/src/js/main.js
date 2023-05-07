import logo1 from '../img/logo1.png'
import atendimento1 from '../img/atendimento1.png'
import o1 from '../img/01.png'
import o2 from '../img/02.png'
import o3 from '../img/03.png'
import o4 from '../img/04.png'
import qrcode from '../img/qrcode.png'
import logo5 from '../img/logo5.png'
import ibhost from '../img/ibhost.png'
import linushost from '../img/linushost.png'
import muhonor from '../img/muhonor.png'
import musix from '../img/musix.png'
import gtavidanova from '../img/gtavidanova.png'

(function () {
  if (document.addEventListener) {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      return false;
    });
  } else {
    document.attachEvent("oncontextmenu", function (e) {
      e = e || window.event;
      e.returnValue = false;
      return false;
    });
  }
})()

document.querySelector('#root').innerHTML = `

<body>
<section class="igp-head">
  <article>
    <img src="${logo1}" alt="logo isgamepost" id="home">
    <h1>Organic Marketing Full</h1>
    <p>O Seu Sucesso Online Está Aqui</p>
    <p>Google, Instagram, Facebook, Discord, Telegram...</p>
    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5521976036608" rel="external" target="_blank"><button
        class="igp-action__btn">Seu Sucesso Agora</button></a>
  </article>
</section>
<main>
  <section class="igp-contact">
    <article>
      <p><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5521976036608" rel="external" target="_blank"><img
            src="${atendimento1}" alt="whatsap"></a></p>
    </article>
  </section>
  <section class="igp-talk">
    <header>
      <h2>Nossos Clientes Muito Satisfeitos</h2>
    </header>
    <picture>
      <img src="${o4}" alt="">
      <img src="${o2}" alt="">
    </picture>
    <picture>
      <img src="${o3}" alt="">
      <img src="${o1}" alt="">
    </picture>
  </section>
  <section id="planos" class="igp-service">
    <img src="${logo1}" width="230" alt="logo Isgamepost">
    <h2>Tudo para Sua Divulgação na Internet</h2>
    <div>
      <article class="igp-service__plan">
        <h3>IGP ORGANIC Marketing</h3>
        <p>Divulgações profissionais e direcionadas ao público alvo específico, nas redes sociais</p>
        <p>Nosso alcance é superior a <span class="igp-service__size">25000</span> pessoas</p>
      </article>
      <article class="igp-service__plan igp-service__qrcode img">
        <img src="${qrcode}" alt="code">
        <P>Use o QRcode ou Chave PIX Para o Pagamento dos serviços</P>
        <p>(Chave PIX) isgamepost@isgamepost.com</p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO MASTER - Gerenciamento de Redes Sociais - 3000 divulgações em 30 dias</h3>
        <p>Este plano inclui divulgações em todas as redes sociais</p>
        <p>SEO Básico - seu site em evidência no Google, Facebook e Twitter</p>
        <p>04 (quatro) Imagens para divulgação</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 163,90</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO PREMIUM - 3000 divulgações em 30 dias</h3>
        <p>Este plano inclui divulgações em todas as redes sociais</p>
        <p>01 (Uma) Imagem para divulgação</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 91,47</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO BASIC</span> - 600 divulgações em 15 dias (nos grupos do FACE)</h3>
        <p>01 (Uma) Imagem para divulgação</p>
        <p>Este plano contempla somente divulgações nos grupos do Facebook</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 64,90</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO START</span> - 300 divulgações em 15 dias (nos grupos do FACE)</h3>
        <p>Este plano contempla somente divulgações nos grupos do Facebook</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 13,00</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO ADS GOOGLE</span></h3>
        <p>Por Periodo (sessão)</p>
        <p>Valor <span class="igp-service__size">R$ 100,00</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>VIDEO</span></h3>
        <p>Cada 1(Uma)</p>
        <p>Valor <span class="igp-service__size">R$ 150,00</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>IMAGEM</span></h3>
        <p>Cada 1(Uma)</p>
        <p>Valor <span class="igp-service__size">R$ 25,00</span></p>
      </article>
    </div>
  </section>

  <section class="igp-who">
    <header id="sobre" class="igo-who__header">
      <img src="${logo5}" width="230" title="isgamepost.com" alt="isgamepost.com" />
    </header>
    <div>
      <article>
        <h3>A ISGAMEPOST</h3>
        <p>A IGP é uma agência com foco no Marketing de jogos online. Trabalhamos com transparência e proximidade,
          para que juntos possamos encontrar a melhor estratégia para criar oportunidades e aumentar os resultados.
        </p>
      </article>
      <article>
        <h3>DIFERENCIAL DA ISGAMEPOST</h3>
        <p>Com o foco em Marketing de jogos online, as nossas divulgações são orgânicas, o que gera melhores
          resultados, pois nossos divulgadores, são treinados, para também responder dúvidas dos jogadores, quando
          necessário, e assim nosso modelo de negócio garante comodidade, satisfação e economia ao cliente.
          Disponibilizamos diversos canais de atendimento, nos mantemos acessíveis a qualquer dúvida ou necessidade de
          forma rápida e econômica.</p>
      </article>
      <article>
        <h3>POR QUE DIVULGAR COM A ISGAMEPOST?</h3>
        <p>Contratando as divulgações da ISGAMEPOST, você pode dedicar seu tempo para cuidar do seu servidor, tendo a
          certeza de que a sua marca estará sendo colocada em evidência, através das divulgações diárias, feitas no
          público-alvo de acordo com as configurações do seu servidor.</p>
        <p>O atendimento da ISGAMEPOST é completamente pessoal e trabalhamos para entender a suas necessidades e
          propor as melhores soluções sem tirar você do seu foco principal que é o seu Servidor.</p>
        <p>A ISGAMEPOST é uma empresa que Divulga nas principais Redes Sociais, ou seja, Facebook, Instagram,
          Whatsapp, Telegram e Discord.</p>
        <p>Agora, que tal valorizar ao máximo o seu dinheiro? Ainda não estava convencido das vantagens de utilizar os
          serviços da ISGAMEPOST?
          Você definitivamente vai perceber a vantagem que é, valorizar cada centavo do seu investimento. Aqui, na
          ISGAMEPOST otimizamos da forma mais rentável para que com um investimento baixo você consiga grandes
          resultados.</p>
        <p>Por último e longe de ser o fator menos importante, o que há de mais valioso! O conhecimento profundo das
          ferramentas que irão alavancar o seu site;
        <p>A ampla experiência em divulgação, captação e atendimento ao cliente;</p>
        <p>A busca por melhores resultados.</p>
        <p>A ISGAMEPOST é uma empresa que trabalha 100% dentro da ferramenta que vende.</p>
        </p>
      </article>
    </div>
  </section>
  <section class="igp-client">
    <header class="igp-client__header">
      <i class="fas fa-file-signature"></i>
      <h2>Parceiros IsGamePost</h2>
    </header>
    <div>
      <a href="https://ibhost.com.br/" target="_blank" rel="external"><img src="${ibhost}" width="200"
          alt="IB Host" title="IB Host" /></a>
      <a href="https://linushost.com.br/financeiro/aff.php?aff=38" target="_blank" rel="external"><img
          src="${linushost}" width="200" alt="Linushost" title="LinusHost" /></a>
      <a href="https://mu-honor.com/" target="_blank" rel="external"><img src="${muhonor}" width="200"
          alt="Muhonor" title="MUhonor" /></a>
      <a href="https://muonline6.com/" target="_blank" rel="external"><img src="${musix}" width="200" alt="MuSix"
          title="MuSix" /></a>
      <a href=" https://discord.gg/vidanovarp" target="_blank" rel="external"><img src="${gtavidanova}"
          width="200" alt="GTAcidadeNova" title="GTAcidadeNova" /></a>
    </div>
  </section>
</main>
<section>
  <div>
    <a href="#home" class="igp-link__top">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</section>

<footer class="igp-footer">
  <h2>Todos os Direitos Reservados a isgamepost.com ®</h2>
</footer>

</body>

</html>
  `
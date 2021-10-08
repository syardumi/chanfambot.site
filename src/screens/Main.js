import { Container } from 'react-bootstrap';
import { Header } from '../components'

function Main() {

  return (
    <div className="Main">
      <Header />
      <Container>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          <div style={{flex: 1, }}>
            <img
              alt=""
              src="/ChanFamBot-logos.jpeg"
              width="300"
              height="300"
              className="d-inline-block align-top"
            />
          </div>
          <div style={{flex: 3, fontFamily: 'Montserrat', padding: '2%', backgroundColor: '#e2c5c3', fontSize: 36}}>ChanFamBot does everything Chan Fam needs. Need watermelons? It's got you. Need to know when the next hypetrain is? It's there. Let it take care of YOU.</div>
        </div>
      </Container>
    </div>
  )
}

export { Main };

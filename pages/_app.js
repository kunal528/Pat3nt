import Layout from '../components/layout'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeWeb3 } from '../lib/web3Adaptor';
import WebState from '../lib/webState';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    extension: null,
    signer: null,
    contract: null,
  })

  const setup = async () => {
    const state = await initializeWeb3({
      changeAccount: (val) => {
        setState(e => { return { ...e, signer: val } })
      }
    })
    console.log(state)
    setState(e => { return { ...e, extension: state.extension } })
  }

  useEffect(() => {
    setup()
  }, [])
  return (
    <WebState.Provider value={state}>

      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </WebState.Provider>);
}

export default MyApp

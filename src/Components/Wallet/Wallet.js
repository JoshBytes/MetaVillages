import React,{useEffect, useState} from 'react';
import './Wallet.css';

const Wallet= () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };
  const renderNotConnectedContainer = () => (
    <button
      className="ConnectPhantomButton"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);
  return (
    <div>
        
      <h1 className="MevillText">Mevill Wallet</h1>
      {!walletAddress && renderNotConnectedContainer()}        
      <ul className="wallet">
          <li>Solana Balance :  <br></br>(Update in progress)</li>
          <li>Mevill Balance :  <br></br>(Update in progress)</li>
      </ul>
      <div className="MevillBox">
        <h1 className="MevillText">Mevil Staking<br></br>(Coming Soon)</h1>
        <p className="MevillText">Mevil Staking is a process akin to a fixed deposit users of the system can stake their mevil tokens to earn interest on this token and help with giverning and proving value to the ecosystem</p>
      </div>
      <div className="MevillBox">
        <h1 className="MevillText">Mevil Dex<br></br>(Coming Soon)</h1>
        <p className="MevillText">Mevil Dex will be a place where users can exchange their Mevill Tokens for Fiat or other crypto Currencies</p>
      </div>
    </div>
  );
}

export default Wallet;
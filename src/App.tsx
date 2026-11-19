import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

export default function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    setQrValue(inputUrl);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">QRコード生成ツール</h2>
        
        <form onSubmit={handleGenerate} className="form">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://example.com"
            className="input"
          />
          <button type="submit" className="button">
            生成する
          </button>
        </form>

        {qrValue && (
          <div className="qr-result">
            <p className="url-label">
              対象URL: {qrValue}
            </p>
            <div className="qr-frame">
              <QRCodeSVG value={qrValue} size={180} level={"H"} />
            </div>
            <p className="hint">
              カメラやQRリーダーで読み取ってください
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

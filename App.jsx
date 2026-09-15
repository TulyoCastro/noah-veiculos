import { useMemo, useState } from 'react';

const demoVehicles = [
  {
    id: 'onix-rs',
    name: 'Onix RS Hatch Black 1.0 Turbo',
    year: '2023/2024',
    color: 'Preto',
    engine: '1.0 Turbo',
    km: '34.500 km',
    fuel: 'Flex',
    price: 89900,
    items: 'Ar Condicionado, Alarme, Trava Elétrica, Vidro Elétrico, Bancos em Couro, Freio ABS, Espelhos Elétricos, Conta-Giro, Película Protetora, Turbo, Retrovisor Elétrico, Computador de Bordo, Porta Malas Elétrico, Desembaçador Traseiro, Controle de Tração, Rodas de Liga Leve, Controle de Som no Volante, Direção Elétrica, Air Bag, Sensor de Estacionamento Traseiro, Volante Escamoteável, Câmera de Ré, Botão Start/Stop, Bluetooth, USB, Controle de Estabilidade, Câmbio Automático',
    photos: [
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.24 (1).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.24.jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.25 (1).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.25 (2).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.25.jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.26 (1).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.26.jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.27 (1).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.27 (2).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.27.jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.28 (1).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.28 (2).jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.28.jpeg',
      '/Onix/WhatsApp Image 2026-09-03 at 16.35.29.jpeg',
    ]
  }
];

const formatMoney = (value) => 
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export default function App() {
  const [vehicles] = useState(demoVehicles);
  const [activeIndex, setActiveIndex] = useState(0);
  const vehicle = vehicles[activeIndex];

  const gallery = useMemo(() => vehicle?.photos ?? [], [vehicle]);

  if (!vehicle) return null;

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">NOAH <span>VEÍCULOS</span></div>
        <a className="contact-button" href={`https://wa.me/?text=${encodeURIComponent(`Olá! Tenho interesse no ${vehicle.name}.`)}`} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </header>

      <main className="vehicle-layout">
        <section className="gallery-panel">
          <div className="main-image-wrap">
            <img src={gallery[0]} alt={vehicle.name} className="main-image" />
            <span className="image-badge">{gallery.length} fotos</span>
          </div>
          <div className="thumb-row">
            {gallery.map((photo, index) => (
              <button
                key={photo + index}
                type="button"
                className={`thumb ${index === 0 ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver foto ${index + 1}`}
                style={{ backgroundImage: `url(${photo})` }}
              />
            ))}
          </div>
        </section>

        <aside className="info-panel">
          <p className="eyebrow">DISPONÍVEL AGORA</p>
          <h1>{vehicle.name}</h1>
          <p className="meta">{vehicle.year} • {vehicle.color} • {vehicle.fuel}</p>
          <div className="price">{formatMoney(vehicle.price)}</div>

          <div className="spec-grid">
            <div><span>Motor</span><strong>{vehicle.engine}</strong></div>
            <div><span>Quilometragem</span><strong>{vehicle.km}</strong></div>
          </div>

          <div className="items-box">
            <h3>Itens</h3>
            <p>{vehicle.items}</p>
          </div>

          <a className="cta-button" href={`https://wa.me/?text=${encodeURIComponent(`Olá! Tenho interesse no ${vehicle.name} por ${formatMoney(vehicle.price)}.`)}`} target="_blank" rel="noreferrer">
            Tenho interesse
          </a>
        </aside>
      </main>
    </div>
  );
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Σχολή Οδηγών Αλεξόπουλος — Παλαιό Φάληρο';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1A1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(227, 30, 36, 0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(128, 128, 128, 0.05)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-1px',
            }}
          >
            Αλεξόπουλος
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#E31E24',
            }}
          >
            Σχολή Οδηγών
          </div>
          <div
            style={{
              width: 200,
              height: 2,
              background: 'rgba(227, 30, 36, 0.3)',
              marginTop: 24,
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 22,
              color: '#9CA3AF',
              fontWeight: 400,
            }}
          >
            Παλαιό Φάληρο · 50+ χρόνια εμπειρίας · 4.9★
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

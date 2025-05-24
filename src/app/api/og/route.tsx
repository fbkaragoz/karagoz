import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'karagoz.io';
    const description = searchParams.get('description') || 'AI Developer & Tech Innovator';
    const type = searchParams.get('type') || 'website';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1), transparent 50%)',
            position: 'relative',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(0,255,255,0.1) 50%, transparent 75%)',
              backgroundSize: '60px 60px',
              opacity: 0.2,
            }}
          />
          
          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#00ffff',
                  borderRadius: '8px',
                  marginRight: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px',
                }}
              >
                ⚡
              </div>
              <span
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  fontFamily: 'monospace',
                  textShadow: '0 0 20px rgba(0,255,255,0.5)',
                }}
              >
                karagoz.io
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: type === 'blog' ? '48px' : '64px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: 1.2,
                background: 'linear-gradient(90deg, #ffffff 0%, #00ffff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                maxWidth: '800px',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '24px',
                color: '#a0a0a0',
                marginBottom: '40px',
                lineHeight: 1.4,
                maxWidth: '700px',
              }}
            >
              {description}
            </p>

            {/* Type Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '16px',
                color: '#00ffff',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              {type === 'blog' ? '📝 Blog Post' : '🚀 Portfolio'}
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '50px',
              right: '50px',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(0, 255, 255, 0.2)',
              borderRadius: '8px',
              transform: 'rotate(45deg)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    console.log(`${errorMessage}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 
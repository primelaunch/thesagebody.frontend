<template>
  <div class="page">
    <!-- Navigation would typically be in a separate component -->
    
    <div class="hero">
      <div class="copy">
        <h1 class="uvp">
          Release Your Tension
        </h1>
        
        <div class="message">
          <p class="intro-text">Are you overstressed or overworked? A Proper Massage Might Help...</p>
          
          <div class="benefits-section">
            <h2>Experience Relief at <span class="brand-accent">The Sage Body</span></h2>
            
            <div class="benefits-grid">
              <div class="benefit-item">
                <div class="benefit-icon">👐</div>
                <div class="benefit-content">
                  <h3>Expert Therapists</h3>
                  <p>Experienced, licensed massage therapy for reliable treatment</p>
                </div>
              </div>
              
              <div class="benefit-item">
                <div class="benefit-icon">✨</div>
                <div class="benefit-content">
                  <h3>Personalized Sessions</h3>
                  <p>We tailor your massage based on your specific needs</p>
                </div>
              </div>
              
              <div class="benefit-item">
                <div class="benefit-icon">👍</div>
                <div class="benefit-content">
                  <h3>Specialized Care</h3>
                  <p>Targeted sessions for chronic pain, back pain and headaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="cta-section">
          <h3>Let Us Help You Feel Your Best</h3>
          <a href="#" target="_blank" class="cta-btn">
            <span>Book Your Session Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        
        <div class="location-info">
          <div class="location-icon">📍</div>
          <div class="location-details">
            <h3>Visit Our Studio</h3>
            <p>852B Route 32 Tillson, NY // The Bird Store</p>
            <a href="#" class="directions-link">Get Directions →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You could add interactive functionality here
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: 100svh;
  background: url('@/assets/bg.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
    padding-top: $navheight-desktop;
  // Add overlay for better text readability
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(25, 10, 0, 0) 0%, rgba(25, 10, 0, 0.3) 100%);
    z-index: 0;
  }
}

.hero {
  padding: 0;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 2rem;

  .copy {
    color: #ffd0b0;
    border-radius: 16px;
    width: 100%;
    max-width: 800px;
    background: rgba(#190a00, 0.9);
    backdrop-filter: blur(10px);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    .uvp {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 3.5rem;
      color: #fff;
      font-weight: 700;
      letter-spacing: -0.5px;
      line-height: 1.1;
      
      &::after {
        content: '';
        display: block;
        width: 100px;
        height: 6px;
        background: linear-gradient(90deg, #ff9b58, #e15a00);
        border-radius: 3px;
        margin: 1.5rem auto 0;
      }
    }

    .message {
      .intro-text {
        color: #ffd0b0;
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 2.5rem;
        line-height: 1.4;
      }

      .benefits-section {
        h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
          color: #fff;
          
          .brand-accent {
            color: transparent;
            background: linear-gradient(to right, #ffd0b0, #ff9b58);
            background-clip: text;
            font-weight: 700;
          }
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;

          @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
          }

          .benefit-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            transition: transform 0.3s ease, background 0.3s ease;

            &:hover {
              transform: translateY(-5px);
              background: rgba(255, 255, 255, 0.1);
            }

            .benefit-icon {
              font-size: 2.5rem;
              margin-bottom: 1rem;
            }

            .benefit-content {
              h3 {
                color: #fff;
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
              }

              p {
                color: #ffd0b0;
                line-height: 1.5;
              }
            }
          }
        }
      }
    }

    .cta-section {
      text-align: center;
      padding: 1.5rem 0;
      border-top: 1px solid rgba(255, 208, 176, 0.2);
      border-bottom: 1px solid rgba(255, 208, 176, 0.2);

      h3 {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        background: linear-gradient(135deg, #e15a00, #ff771d);
        color: white;
        font-weight: 700;
        font-size: 1.25rem;
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(225, 90, 0, 0.4);

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(225, 90, 0, 0.6);
          gap: 1rem;
        }

        svg {
          transition: transform 0.3s ease;
        }

        &:hover svg {
          transform: translateX(5px);
        }
      }
    }

    .location-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;

      .location-icon {
        font-size: 2rem;
        flex-shrink: 0;
      }

      .location-details {
        h3 {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        p {
          color: #ffd0b0;
          margin-bottom: 0.5rem;
        }

        .directions-link {
          color: #ff9b58;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;

          &:hover {
            color: #ffd0b0;
          }
        }
      }
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .hero {
    padding: 1rem;
    
    .copy {
      padding: 2rem 1.5rem;
      gap: 2rem;
      
      .uvp {
        font-size: 2.5rem;
      }
      
      .message .intro-text {
        font-size: 1.25rem;
      }
      
      .cta-section .cta-btn {
        font-size: 1.1rem;
        padding: 0.875rem 1.5rem;
      }
    }
  }
}
</style>
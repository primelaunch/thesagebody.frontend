<template>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- Main footer section with all information -->
      <div class="footer-main">
        <!-- Brand section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="@/assets/thesagebody-logo.png" alt="The Sage Body Massage Therapy Logo">
            <div class="brand-text">
              <h3>The Sage Body</h3>
              <p>Licensed Massage Therapy</p>
            </div>
          </div>
          <p class="brand-tagline">Release your tension and find your balance with our therapeutic treatments.</p>
          <div class="social-links">
            <a href="#" aria-label="Follow us on Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Follow us on Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" aria-label="Read our reviews on Yelp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.166 13.363c0-1.096-.295-2.107-.885-3.033-.589-.926-1.403-1.635-2.441-2.13-1.038-.494-2.165-.741-3.38-.741-1.258 0-2.327.296-3.208.885-.88.59-1.559 1.389-2.035 2.399-.477 1.01-.715 2.117-.715 3.323 0 .957.202 1.847.604 2.67.403.823.968 1.5 1.696 2.032.728.533 1.58.857 2.559.975v-4.736h-.038c-.33-.233-.622-.508-.876-.826-.254-.317-.457-.694-.608-1.13-.151-.437-.227-.9-.227-1.389 0-.478.076-.932.227-1.362.151-.43.365-.799.641-1.106.277-.307.6-.543.97-.71.37-.166.773-.249 1.21-.249.437 0 .84.083 1.21.249.37.167.693.403.97.71.276.307.49.676.641 1.106.15.43.226.884.226 1.362 0 .489-.076.952-.227 1.389-.151.436-.354.813-.608 1.13-.254.318-.546.593-.876.826h-.038v4.736c.979-.118 1.831-.442 2.559-.975.728-.532 1.293-1.209 1.696-2.032.402-.823.604-1.713.604-2.67zm-10.954.038c0-1.373.332-2.533.995-3.48.663-.947 1.572-1.592 2.728-1.938v9.101c-.911-.272-1.646-.806-2.204-1.602-.559-.796-.838-1.74-.838-2.832a5.12 5.12 0 01.319-1.249zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div class="footer-links">
          <h4>Services</h4>
          <router-link to="/massage-therapy">Massage Therapy</router-link>
          <router-link to="/reiki">Reiki Healing</router-link>
          <router-link to="/breathwork">Breathwork</router-link>
          <router-link to="/packages">Treatment Packages</router-link>
          <router-link to="/gift-cards">Gift Cards</router-link>
        </div>

        <!-- Contact information -->
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <p>852B Route 32</p>
              <p>Tillson, NY 12486</p>
              <p>The Bird Store</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📞</div>
            <div>
              <p>(845) 123-4567</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">✉️</div>
            <div>
              <p>info@thesagebody.com</p>
            </div>
          </div>
        </div>

        <!-- Hours information -->
        <div class="footer-hours">
          <h4>Hours</h4>
          <div class="hours-item">
            <span class="days">Mon - Fri</span>
            <span class="time">9:00 AM - 7:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="days">Saturday</span>
            <span class="time">10:00 AM - 5:00 PM</span>
          </div>
          <div class="hours-item">
            <span class="days">Sunday</span>
            <span class="time">11:00 AM - 4:00 PM</span>
          </div>
          <router-link to="/booking" class="booking-btn">Book Appointment</router-link>
        </div>
      </div>

      <!-- Footer bottom section -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; {{ new Date().getFullYear() }} The Sage Body. All rights reserved.</p>
          <div class="legal-links">
            <router-link to="/privacy">Privacy Policy</router-link>
            <router-link to="/terms">Terms of Service</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No reactive functionality needed for this footer
</script>

<style lang="scss" scoped>
.site-footer {
  background: linear-gradient(135deg, #190a00 0%, #2a1405 100%);
  color: #ffd0b0;
  padding: 3rem 0 0;
  border-top: 1px solid rgba(255, 208, 176, 0.1);
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.footer-brand {
  .brand-logo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    img {
      height: 50px;
      margin-right: 1rem;
      background-color: #ffd0b0;
      border-radius: 5px;
      padding: 2px;
    }
    
    .brand-text {
      h3 {
        color: #fff;
        margin: 0;
        font-size: 1.4rem;
      }
      
      p {
        color: #ffd0b0;
        margin: 0;
        font-size: 0.9rem;
      }
    }
  }
  
  .brand-tagline {
    color: #ffd0b0;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 208, 176, 0.1);
      color: #ffd0b0;
      transition: all 0.3s ease;
      
      &:hover {
        background: linear-gradient(135deg, #e15a00, #ff771d);
        color: #fff;
        transform: translateY(-3px);
      }
    }
  }
}

.footer-links, .footer-contact, .footer-hours {
  h4 {
    color: #fff;
    margin-bottom: 1.2rem;
    font-size: 1.2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: linear-gradient(90deg, #ff9b58, #e15a00);
      border-radius: 2px;
    }
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
  
  a {
    color: #ffd0b0;
    text-decoration: none;
    margin-bottom: 0.8rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: #fff;
      padding-left: 5px;
    }
  }
}

.footer-contact {
  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    .contact-icon {
      margin-right: 0.8rem;
      font-size: 1.2rem;
      margin-top: 2px;
    }
    
    p {
      margin: 0.2rem 0;
      line-height: 1.4;
    }
  }
}

.footer-hours {
  .hours-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba(255, 208, 176, 0.1);
    
    .days {
      color: #ffd0b0;
    }
    
    .time {
      color: #fff;
      font-weight: 500;
    }
  }
  
  .booking-btn {
    display: inline-block;
    background: linear-gradient(135deg, #e15a00, #ff771d);
    color: white;
    text-decoration: none;
    padding: 0.7rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    margin-top: 0.5rem;
    transition: all 0.3s ease;
    text-align: center;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(225, 90, 0, 0.4);
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255, 208, 176, 0.1);
  padding: 1.5rem 0;
  
  .footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    
    p {
      margin: 0;
      color: rgba(255, 208, 176, 0.7);
      font-size: 0.9rem;
    }
    
    .legal-links {
      display: flex;
      gap: 1.5rem;
      
      a {
        color: rgba(255, 208, 176, 0.7);
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
</style>
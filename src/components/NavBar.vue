<template>
  <nav :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="brand">
        <img src="@/assets/thesagebody-logo.png" alt="The Sage Body Massage Therapy Logo">
        <div class="text">
          <h1>Sage Body Place</h1>
          <h2>Licensed Massage Therapy</h2>
        </div>
      </div>
      
      <div class="nav-links" :class="{ 'active': mobileMenuOpen }">
        <router-link to="/" @click="closeMobileMenu">Home</router-link>
        <router-link to="/reiki" @click="closeMobileMenu">Reiki</router-link>
        <router-link to="/massage-therapy" @click="closeMobileMenu">Massage Therapy</router-link>
        <router-link to="/breathwork" @click="closeMobileMenu">Breathwork</router-link>
        <a href="#" class="nav-cta" @click="closeMobileMenu">Book Now</a>
      </div>
      
      <button class="mobile-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $navheight-desktop;
  z-index: 1000;
  transition: all 0.3s ease;
  background: rgba(#000, 0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  
  &.scrolled {
    background: rgba(#190a00, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    height: calc($navheight-desktop * 0.9);
  }
}

.nav-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffd0b0;
  
  img {
    height: calc($navheight-desktop * 0.7);
    margin-right: 1rem;
    background-color: #ffd0b0;
    border-radius: 5px;
    padding: 2px;
    transition: all 0.3s ease;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    gap: 0;
    
    h1 {
      font-size: calc($navheight-desktop * 0.3);
      font-weight: 700;
      line-height: 1;
      margin: 0;
      transition: all 0.3s ease;
    }
    
    h2 {
      font-size: calc($navheight-desktop * 0.2);
      font-weight: 400;
      margin: 0;
      transition: all 0.3s ease;
    }
  }
  
  // Adjust brand size when scrolled
  .scrolled & {
    img {
      height: calc($navheight-desktop * 0.6);
    }
    
    h1 {
      font-size: calc($navheight-desktop * 0.25);
    }
    
    h2 {
      font-size: calc($navheight-desktop * 0.16);
    }
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  
  a {
    color: #ffd0b0;
    text-decoration: none;
    font-size: calc($navheight-desktop * 0.22);
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #ff9b58, #e15a00);
      transition: width 0.3s ease;
    }
    
    &:hover::after,
    &.router-link-active::after {
      width: 100%;
    }
    
    &:hover {
      color: #fff;
      text-shadow: 0 0 8px rgba(255, 155, 88, 0.6);
    }
  }
  
  .nav-cta {
    background: linear-gradient(135deg, #e15a00, #ff771d);
    color: white !important;
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(225, 90, 0, 0.3);
    
    &::after {
      display: none;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(225, 90, 0, 0.4);
    }
  }
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  span {
    width: 25px;
    height: 3px;
    background: #ffd0b0;
    margin: 3px 0;
    transition: all 0.3s ease;
    border-radius: 2px;
  }
  
  // Animate to X when menu is open
  .mobile-menu-open & {
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
}

// Mobile responsiveness
@media (max-width: 900px) {
  .nav-container {
    padding: 0 1.5rem;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: $navheight-desktop;
    left: 0;
    width: 100%;
    height: 0;
    flex-direction: column;
    background: rgba(#190a00, 0.98);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    overflow: hidden;
    transition: height 0.4s ease;
    gap: 0;
    
    &.active {
      height: calc(100svh - $navheight-desktop);
      padding: 2rem 0;
    }
    
    a {
      width: 100%;
      text-align: center;
      padding: 1.2rem 0;
      font-size: 1.2rem;
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.4s ease;
      
      // Staggered animation for menu items
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: 0.1s * $i;
        }
      }
    }
    
    &.active a {
      opacity: 1;
      transform: translateY(0);
    }
    
    .nav-cta {
      margin-top: 1rem;
      width: auto;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  
  // Adjust for scrolled state on mobile
  .scrolled {
    .nav-links {
      top: calc($navheight-desktop * 0.9);
      
      &.active {
        height: calc(100svh - $navheight-desktop * 0.9);
      }
    }
  }
}

// Very small screens
@media (max-width: 480px) {
  .brand {
    .text {
      h1 {
        font-size: calc($navheight-desktop * 0.25);
      }
      
      h2 {
        font-size: calc($navheight-desktop * 0.16);
      }
    }
  }
}
</style>
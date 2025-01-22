# Platter UI

This project demonstrates a responsive design implementation of a product cards layout using the following technologies:

- **HTML**
- **JavaScript (VanillaJS)**
- **TailwindCSS**

## Overview

The task is to design a grid of product cards with the following features:

- The product cards should be responsive and display on mobile and desktop.
  
- On **mobile devices**, only the first 4 product cards should be visible by default. A **Show More** button triggers a smooth dropdown to reveal the remaining cards.
  
- The **hover effect** on product images should swap to a secondary image.
  
- The **scrollbar** thumb should increase to 6px in height when hovered or touched (this will require hiding the default browser scrollbar).
  
- **Free stock images** from [Unsplash](https://unsplash.com/) are used as placeholders for product images.

### Bonus Task

- Migrate the design into a **Shopify Section**, using **Liquid** and **Schema Input** for a development store. This can be mocked up without a live store.

---

## Features

- **Responsive Design**: Works seamlessly across mobile and desktop devices.
  
- **TailwindCSS**: Utilized for utility-first CSS styling and a clean, maintainable structure.
  
- **Smooth Dropdown**: The "Show More" button triggers a smooth dropdown on mobile.
  
- **Image Swap on Hover**: Hovering over a product image swaps it with a secondary image.
  
- **Custom Scrollbar**: A custom scrollbar with an increased thumb size for better user interaction.

---

## Development Process

### 1. **HTML Structure**

- [x] Header Design

- [x] Product Cards Displaying Div Design

- [x] Show More Button Design

### 2. **CSS Styling** ( TailwindCSS )

#### Header CSS Styling

- [x] Padding, Margin, Font style for the header at desktop
  
- [x] Padding, Margin, Font style for the header at mobile 

#### Product Card holder div Stying 

- [x] Layout, Padding, Margin style for the Product cards holder at desktop

- [ ] Layout, Padding, Margin style for the Product cards holder at mobile

#### Product Card Template Styling

- [ ] Layout, Padding, Margin style for the **Product Image** at desktop
  
- [ ] Layout, Padding, Margin style for the **Product Image** at mobile
  
- [ ] Layout, Padding, Margin, Font style for the **Product Title**, **Rating and Review**, **Product Price** at desktop
  
- [ ] Layout, Padding, Margin, Font style for the **Product Title**, **Rating and Review**, **Product Price** at mobile

#### Show More Button Styling

- [ ] **Desktop** Style
  
- [ ] **Mobile** Style

#### Scroll Bar Styling

- [ ] **Custom scrollbar** with specified color and height at **Desktop**
  
- [ ] **Custom scrollbar** hidden at **Mobile**

#### Image replacing

- [ ] Replace images from the [Unsplash](https://unsplash.com/) as placeholder iamge

### 3. **JavaScript Functionality** ( VanillaJS )

- [ ] Assign dynamic product cards to the holder div as the template card
  
- [ ] Implement Show More button behavior

### 4. **Testing & Debugging**